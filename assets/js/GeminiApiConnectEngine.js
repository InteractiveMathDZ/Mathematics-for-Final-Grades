const sendBtn = document.getElementById('ai-chat-send-btn');
const inputField = document.getElementById('ai-chat-input');
const messagesContainer = document.getElementById('ai-chat-messages');

// مفتاح الـ API (يمكن للعميل وضعه بسهولة، أو يتم توجيهه بطريقة آمنة)
const GEMINI_API_KEY = "ضع_مفتاح_العميل_هنا";

sendBtn.addEventListener('click', async () => {
    const question = inputField.value.trim();
    if (!question) return;

    // 1. عرض سؤال المستخدم في الشات
    appendMessage(question, 'user');
    inputField.value = '';
    
    // 2. إظهار رسالة "جاري التفكير..."
    const loadingId = appendMessage('جاري صياغة الإجابة...', 'ai', true);

    try {
        // إرسال الطلب لنفس النموذج المستقر الذي جربناه
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `أنت مساعد تعليمي ذكي لموقع تعليمي رياضيات. أجب عن سؤال المستخدم بوضوح واختصار وبطريقة لائقة:\n\n${question}` }] }]
            })
        });

        const data = await response.json();
        const aiAnswer = data.candidates?.[0]?.content?.parts?.[0]?.text || "عذراً، لم أستطع الإجابة في الوقت الحالي.";

        // 3. استبدال رسالة التحميل بالإجابة الحقيقية
        updateMessage(loadingId, aiAnswer);

    } catch (error) {
        updateMessage(loadingId, 'حدث خطأ في الاتصال بالشبكة.');
    }
});

function appendMessage(text, sender, isLoading = false) {
    const msgDiv = document.createElement('div');
    const id = 'msg-' + Date.now();
    msgDiv.id = id;
    msgDiv.style.padding = '10px';
    msgDiv.style.borderRadius = '8px';
    msgDiv.style.maxWidth = '85%';
    msgDiv.style.fontSize = '14px';
    msgDiv.style.wordBreak = 'break-word';

    if (sender === 'user') {
        msgDiv.style.background = '#2563eb';
        msgDiv.style.color = 'white';
        msgDiv.style.alignSelf = 'flex-end';
    } else {
        msgDiv.style.background = '#e2e8f0';
        msgDiv.style.color = '#1e293b';
        msgDiv.style.alignSelf = 'flex-start';
        if (isLoading) msgDiv.style.fontStyle = 'italic';
    }

    msgDiv.textContent = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return id;
}

function updateMessage(id, newText) {
    const msgDiv = document.getElementById(id);
    if (msgDiv) {
        msgDiv.textContent = newText;
        msgDiv.style.fontStyle = 'normal';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

async function askCentralAI(userQuestion, customPrompt) {
  try {
    const response = await fetch('https://ai-proxy-server-reul.vercel.app/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: userQuestion,
        systemPrompt: customPrompt // هنا تحدد دور البوت، مثلاً: "أنت مساعد تعليمي لموقع الرياضيات..."
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      return data.reply; // النص الراجع من الذكاء الاصطناعي
    } else {
      console.error('خطأ من السيرفر:', data.error);
      return 'عذراً، حدث خطأ أثناء الاتصال بالخادم.';
    }

  } catch (error) {
    console.error('خطأ في الشبكة:', error);
    return 'عذراً، تعذر الاتصال بالخدمة.';
  }
}

