---
layout: lesson
title: "الأسية: التزايد المقارن"
permalink: /exp_growth_comparison/
mathJax: true
graph: true
lessonID: "exp-growth"

# روابط الاتصال
previous_title: "النهايات المرجعية للدالة exp"
previous_url: "/exp_limits/"

next_title: "اشتقاق الدالة exp والدوال من الشكل exp(u)"
next_url: "/exp_derivatives/"

elements:
  - h3: "1. مفهوم هيمنة الأسية"
    id: "growth-concept-exp"

  - parags:
      - rtl: "التزايد المقارن يخبرنا أن $e^x$ أسرع بكثير في الوصول إلى $+\\infty$ من $x$ أو $x^2$ أو $x^n$. لذلك، في أي 'صراع' (ضرب أو قسمة) عند اللا نهاية، النتيجة تُحسم لصالح الأسية."

  - h3: "2. النهايات المرجعية للتزايد المقارن"
    id: "growth-limits-exp"

  - parags:
      - rtl: "تُستخدم هذه القواعد مباشرة لإزالة حالات عدم التعيين $(\\frac{\\infty}{\\infty})$ و $(0 \\times \\infty)$:"

  - tableLines:
      dir: ltr
      lines:
        - - th: "الحالة"
          - th: "النهاية المرجعية"
          - th: "النتيجة"
        - - td: "عند $+\\infty$ (القسمة)"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty$"
          - td: "الأسية في البسط سحبت الكسر للما لا نهاية"
        - - td: "عند $-\\infty$ (الجداء)"
          - td: "$\\lim\\limits_{x \\to -\\infty} x^n e^x = 0$"
          - td: "الأسية (التي تؤول لـ 0) غلبت $x^n$"

  - NB:
      title: "قاعدة (المقامات القوية):"
      type: "success"
      NBs:
        - rtl: "تذكر دائماً أن $\\lim\\limits_{x \\to +\\infty} \\frac{x^n}{e^x} = 0$. الأسية في المقام قوية جداً لدرجة أنها تجعل أي قوة لـ $x$ تتلاشى أمامها."

  - h3: "3. إزالة حالة عدم التعيين بالتزايد المقارن"
    id: "solving-exp-indeterminacy"

  - tableLines:
      dir: rtl
      lines:
        - - td: "المثال"
          - td: "$\\lim\\limits_{x \\to +\\infty} (e^x - x^2)$"
        - - td: "التشخيص"
          - td: "$\\infty - \\infty$ (حالة عدم تعيين)"
        - - td: "العلاج"
          - td: "نخرج $e^x$ عامل مشترك: $\\lim e^x (1 - \\frac{x^2}{e^x})$"
        - - td: "النتيجة"
          - td: "بما أن $\\frac{x^2}{e^x} \\to 0$، فإن النهاية هي $+\\infty \\times 1 = +\\infty$"

  - NB:
      title: "ترتيب القوة (من الأضعف للأقوى):"
      type: "primary"
      NBs:
        - rtl: "$\\ln(x) \\ll x^n \\ll e^x$"
        - rtl: "هذا الترتيب هو مفتاح الحل السريع بالنظر في المسائل المتعددة الخيارات."

---
