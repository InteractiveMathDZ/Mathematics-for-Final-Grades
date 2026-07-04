title: "تخمين نهاية دالة وحسابها تحليلياً"
permalink: /maths-analy-limit-pra-ex001/
next_url: /maths-analy-limit-pra-ex002/
exID: "maths-analy-limit-pra-ex001"
mathJax: true
graph: true
sections:
  - pID: "p1"
    title: "1. التخمين البياني لنهاية دالة"
    dir: ltr
    contents:
      - paragraphs:
          - rtl: "نعتبر الدالة $f$ المعرفة على $]-1; 0[ \\cup ]0; +\\infty[$ بالعبارة:"
          - center: "$f(x) = \\frac{\\sqrt{x+1}-1}{x}$"
          - rtl: "خمن بيانيا قيمة نهاية الدالة $f$ عندما يؤول المتغير $x$ إلى $0$. اختر الإجابة الصحيحة من بين المقترحات:"
    
      - graph:
          id: "graph-limits-001"
          class: "graph-container"
          xDomain: [-1.2, 2]       
          yDomain: [-0.2, 1.5]       
          elements:    
            - { type: "function", fn: "(Math.sqrt(x + 1) - 1) / x", strokeColor: "#0d6efd" }
            - { type: "text", content: "C_f", x: -0.75, y: 0.8, color: "#0d6efd"}
            - { type: "point", x: 0, y: 0.5, strokeColor: "red", fillColor: "transparent", size: 2 }
            - { type: "function", fn: "0.5", strokeColor: "#168574", dash: 2, strokeWidth: 1}
            - { type: "text", content: "y=0.5", x: -1, y: 0.55, color: "#168574" }

      - note: "استخدم عجلة الفأرة لتكبير الرسم وملاحظة قيم $f(x)$ عندما يؤول $x$ إلى $0$."
    
      - choices:
          - label: "$\\lim\\limits_{x \\to 0} f(x) = 0.5$"
            correct: true
            
          - label: "$\\lim\\limits_{x \\to 0} f(x) = 1$"
            correct: false
            
          - label: "$\\lim\\limits_{x \\to 0} f(x) = +\\infty$"
            correct: false
        
      - success_msg:
          - rtl: "إجابة صحيحة. التخمين البياني دقيق."
        
      - error_msg:
          - rtl: "إجابة خاطئة. لاحظ على محور التراتيب القيمة التي تقترب منها الدالة عندما يؤول $x$ إلى $0$."

  - pID: "p2"
    title: "2. حساب النهاية باستعمال العدد المشتق"
    dir: ltr
    contents:
      - paragraphs:
          - rtl: "يمكن إعادة كتابة عبارة النهاية عند حالة عدم التعيين من الشكل $\\frac{0}{0}$ على النحو التالي:"
          - center: "$\\lim\\limits_{x \\to 0} \\frac{\\sqrt{x+1}-1}{x} = \\lim\\limits_{x \\to 0} \\frac{\\sqrt{x+1}-\\sqrt{0+1}}{x-0}$"
          - rtl: "تطابق هذه الكتابة تعريف العدد المشتق لدالة $g$ عند القيمة $x_0$ المعرف بالقانون:"
          - center: "$g'(x_0) = \\lim\\limits_{x \\to x_0} \\frac{g(x)-g(x_0)}{x-x_0}$"
          - rtl: "بوضع الدالة $g(x) = \\sqrt{x+1}$ و $x_0 = 0$، يكون $g(0) = 1$."
          - rtl: "احسب العدد المشتق $g'(0)$ لتحديد قيمة النهاية حاسباً، ثم اختر الإجابة الصحيحة:"
        
      - note: "<p class='text-center'><strong>تذكير بقاعدة الاشتقاق:</strong><br>
        إذا كانت $u$ دالة موجبة تماماً وقابلة للاشتقاق فإن: $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$</p>"
        
      - choices:
          - label: "$g'(0) = \\frac{1}{2}$"
            correct: true
            
          - label: "$g'(0) = 0$"
            correct: false
        
      - success_msg:
          - rtl: "إجابة صحيحة. النهاية المحسوبة تتوافق مع التخمين البياني."
      - error_msg:
          - rtl: "إجابة خاطئة. احسب مشتقة الدالة الجذرية $g'(x) = \\frac{1}{2\\sqrt{x+1}}$ ثم عوض بقيمة $x=0$."

