---
layout: lesson
title: "اللوغاريتم: التزايد المقارن"
permalink: /ln_growth_comparison/
mathJax: true
graph: true
lessonID: "ln-growth"

# روابط الاتصال
previous_title: "النهايات المرجعية للدالة ln"
previous_url: "/ln_limits/"

next_title: "اشتقاق الدالة ln"
next_url: "/ln_derivatives/"

elements:
  - h3: "1. مفهوم التزايد المقارن"
    id: "growth-concept"

  - parags:
      - rtl: "التزايد المقارن هو دراسة 'سرعة' تباعد الدوال. القاعدة الذهبية في هذا المبحث هي: <strong>عند اللا نهاية، الدالة القوية $x^n$ تهيمن على، وتغلب الدالة اللوغاريتمية $\\ln(x)$</strong>."

  - h3: "2. النهايات المرجعية للتزايد المقارن"
    id: "growth-limits"

  - parags:
      - rtl: "هذه القواعد تُستخدم مباشرة لإزالة حالات عدم التعيين من الشكل $(\\frac{\\infty}{\\infty})$ أو $(0 \\times \\infty)$:"

  - tableLines:
      dir: ltr
      lines:
        - - th: "الحالة"
          - th: "النهاية المرجعية"
          - th: "النتيجة"
        - - td: "عند $+\\infty$ (القسمة)"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0$"
          - td: "$x^n$ سحبت الكسر نحو الصفر"
        - - td: "عند $0^+$ (الجداء)"
          - td: "$\\lim\\limits_{x \\to 0^+} x^n \\ln(x) = 0$"
          - td: "$x^n$ غلبت الما لا نهاية وسحبتها للصفر"

  - NB:
      title: "قاعدة (قانون الغاب):"
      type: success
      NBs:
        - rtl: "تخيل أن $x^n$ وحش كاسر وأن $\\ln(x)$ مجرد عصفور صغير. أينما وجد 'الضرب' أو 'القسمة' بينهما عند الأطراف ($0$ أو $+\\infty$)، فإن النتيجة تتبع ما تفرضه $x^n$."

  - h3: "3. كيفية إزالة حالة عدم التعيين"
    id: "solving-indeterminacy"

  - parags:
      - rtl: "إذا صادفت حالة عدم تعيين، فإن الخطة هي دائماً إظهار أحد الأشكال المرجعية السابقة عن طريق التفكيك أو تغيير المتغير."

  - tableLines:
      dir: rtl
      lines:
        - - td: "المثال"
          - td: "$\\lim\\limits_{x \\to +\\infty} (x - \\ln(x))$"
        - - td: "التشخيص"
          - td: "$+\\infty - \\infty$ (حالة عدم تعيين)"
        - - td: "العلاج"
          - td: "نخرج $x$ كعامل مشترك: $\\lim x(1 - \\frac{\\ln(x)}{x})$"
        - - td: "النتيجة"
          - td: "بما أن $\\frac{\\ln x}{x} \\to 0$، فإن النهاية هي $+\\infty \\times 1 = +\\infty$"

  - NB:
      title: "تنبيه هام:"
      type: "danger"
      NBs:
        - rtl: "هذه القواعد صالحة فقط عند الأطراف ($0$ و $+\\infty$). لا تستخدم التزايد المقارن عند عدد ثابت مثل $x \\to 2$!"

  - notes:
      - rtl: "تذكر دائماً ترتيب القوى: $\\ln(x)$ أضعف من $\\sqrt{x}$، و $\\sqrt{x}$ أضعف من $x$، و $x$ أضعف من $x^2$."

---
