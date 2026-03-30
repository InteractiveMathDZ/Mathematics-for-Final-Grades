// دالة رسم منحنى الدالة f(1) = (sqrt(x+1)-1)/x
function initGraphLimits_001_ex() {
    const container = document.getElementById('graph-limits');
    if (!container) return; // تأكد أن الحاوية موجودة قبل الرسم

    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    
    // مسح الحاوية قبل الرسم لتجنب التكرار
    container.innerHTML = '';

    functionPlot({
        target: "#graph-limits",
        width: 500,
        height: 400,
        grid: true,
        xAxis: { domain: [-2, 2], label: 'x' },
        yAxis: { domain: [-0.5, 1.5], label: 'f(x)' },
        data: [{
            fn: "(sqrt(x + 1) - 1) / x",
            color: isDark ? "#66b2ff" : "#0d6efd",
            strokeWidth: 3
        }],
        annotations: [{ x: 0, y: 0.5, color: '#dc3545', text: '0.5' }]
    });
}

function validateExercise1(exerciseId, totalQuestions) {
    let score = 0;
    
    // حساب الإجابات الصحيحة بناءً على الراديو بوتون
    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="${exerciseId}_q${i}"]:checked`);
        if (selected && selected.value === "1") {
            score++;
        }
    }

    // حساب النسبة المئوية
    const percentage = Math.round((score / totalQuestions) * 100);

    // تحديث الواجهة (البروغرس بار والنص)
    const progressBar = document.getElementById(`${exerciseId}-progress-bar`);
    const scoreText = document.getElementById(`${exerciseId}-score-text`);
    
    if (progressBar) progressBar.style.width = percentage + "%";
    if (scoreText) scoreText.innerText = percentage + "%";

    // منطق الاستحقاق (فتح التمرين الموالي إذا كانت النتيجة >= 70)
    const nextZone = document.getElementById('next-level-zone');
    if (percentage >= 70) {
        if (nextZone) nextZone.classList.remove('d-none');
        // هنا يمكنك استدعاء دالة من scores.js لتحديث السجل العام
        if (typeof updateGlobalScore === "function") {
            updateGlobalScore(exerciseId, percentage);
        }
    } else {
        alert("النتيجة " + percentage + "% دون عتبة الاستحقاق (70%). راجع خطواتك وحاول مجدداً!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // تشغيل الرسم البياني
    initGraphLimits_001_ex();

    // مراقبة تغيير الوضع القاتم لإعادة رسم المنحنى بالألوان المناسبة
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-bs-theme') {
                initGraphExercise1();
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });
});

