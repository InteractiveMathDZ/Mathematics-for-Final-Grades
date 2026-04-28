---
layout: lesson
title: "التزايد المقارن في الأسية"
subtitle: "سطوة الملكة: من يملك الكلمة الأخيرة؟"
permalink: /exp_comparison/
mathJax: true
lessonID: "growth-04"

# روابط الاتصال
previous_title: "المبحث 3: التزايد المقارن في اللوغاريتم"
previous_url: "/ln_comparison/"

next_title: "المبحث 5: تقنية تغيير المتغير والمقارنة"
next_url: "/variable_change_growth/"

elements:
  - h3: "1. السيادة المطلقة عند $+\\infty$"
    id: "exp-at-plus-infinity"

  - parags:
      - rtl: "عند $+\\infty$، تعتبر الدالة الأسية $e^x$ أسرع الدوال المرجعية نمواً. هي تغلب أي كثير حدود $x^n$ مهما كانت درجته (حتى لو كانت $x^{1000}$)."
  
  - tableLines:
      dir: ltr
      lines:
        - - th: "النهاية الشهيرة"
          - th: "النتيجة"
          - th: "القراءة التقنية"
        - - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{e^x}{x}$"
          - td: "$+\\infty$"
          - td: "الأسية تهرب نحو الأعلى بسرعة جنونية."
        - - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{e^x}{x^n}$"
          - td: "$+\\infty$"
          - td: "الملكة تغلب أي قوة لـ $x$."

  - h3: "2. لغز الصفر عند $-\\infty$"
    id: "exp-at-minus-infinity"

  - parags:
      - rtl: "عند $-\\infty$، تنقلب الآية ظاهرياً لكن القوة تبقى للأسية. $e^x$ تؤول للصفر بسرعة تجعلها تمتص قوة $x^n$ التي تحاول الذهاب للملانهاية."
  
  - tableLines:
      dir: ltr
      lines:
        - - td: "$\\lim\\limits_{x \\to -\\infty} x e^x$"
          - td: "$0$"
          - td: "الأسية تجرّ $x$ معها إلى القاع، الصفر."
        - - td: "$\\lim\\limits_{x \\to -\\infty} x^n e^x$"
          - td: "$0$"
          - td: "الصفر هو المنتصر الدائم في هذا الاصطدام."

  - h3: "3. كيف نستخدمها في 'الورشة/الورقة'؟"
    id: "exp-workshop"
  
  - parags:
      - rtl: "عند مواجهة حالة عدم تعيين ($\\frac{\\infty}{\\infty}$) تتضمن $e^x$، استعمل <strong>العامل المشترك</strong>. أخرج الأقوى (وهو $e^x$) لتظهر لك النهايات المرجعية ($\\frac{1}{x}$ أو $\\frac{x}{e^x}$) التي تؤول للصفر."

  - NB:
      title: "سر الالإتقان:"
      type: "warning"
      NBs:
        - rtl: "تذكر دائماً أن $e^x$ عند $+\\infty$ 'تأكل' كل ما بجانبها."
        - rtl: "إذا وجدتها في كسر، انظر أين تسكن؛ إن كانت في البسط فالنتيجة $\\infty$، وإن كانت في المقام فالنتيجة $0$."

---
