---
layout: lesson
title: "تقنية تغيير المتغير والمقارنة"
subtitle: "فن المناورة: تحويل المستعصي إلى مألوف"
permalink: /variable_change_growth/
mathJax: true
lessonID: "growth-05"

# روابط الاتصال
previous_title: "المبحث 4: التزايد المقارن في الأسية"
previous_url: "/exp_comparison/"

next_title: "المبحث 6: القوى النونية والحالات المركبة"
next_url: "/advanced_power_growth/"

elements:
  - h3: "1. لماذا نغير المتغير؟"
    id: "why-change"

  - parags:
      - rtl: "أحياناً تكون النهاية 'متنكرة'. مثلاً عند حساب $\\lim\\limits_{x \\to 0^+} x e^{1/x}$، لا نرى التزايد المقارن بوضوح لأن $x$ تؤول للصفر والأس يؤول للانهاية."
      - rtl: "هنا نستخدم 'تغيير المتغير' لنسحب النهاية إلى منطقتنا المألوفة (عند $+\\infty$ أو $-\\infty$)."

  - h3: "2. الخطوات العملية (دليل الآداء)"
    id: "step-by-step"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الخطوة"
          - th: "الإجراء"
          - th: "الهدف"
        - - td: "1. التحديد"
          - td: "نضع $t = \\text{العبارة المزعجة}$"
          - td: "تبسيط الأس أو ما بداخل اللوغاريتم."
        - - td: "2. التحويل"
          - td: "نحسب أين تؤول $t$ عندما تؤول $x$ لغايتها."
          - td: "تغيير وجهة النهاية."
        - - td: "3. التعويض"
          - td: "نستبدل كل $x$ بما يعادلها من $t$."
          - td: "الحصول على شكل مرجعي."

  - h3: "3. مثال تطبيقي محوري"
    id: "example-case"
  - parags:
      - rtl: "لنحسب $\\lim\\limits_{x \\to 0^+} x e^{1/x}$:"
      - rtl: "نضع $t = 1/x$. عندما $x \\to 0^+$ فإن $t \\to +\\infty$."
      - rtl: "تصبح النهاية: $\\lim\\limits_{t \\to +\\infty} \\frac{1}{t} e^t = \\lim\\limits_{t \\to +\\infty} \\frac{e^t}{t}$."
      - rtl: "النتيجة: <strong>$+\\infty$</strong> (حسب التزايد المقارن المرجعي)."

  - h3: "4. المقارنة بالحصر (الأداة الساندة)"
    id: "comparison-squeeze"
  - parags:
      - rtl: "في بعض الحالات التي تتضمن $\\sin x$ أو $\\cos x$ مع الدوال الأسية، نستخدم الحصر لإجبار النهاية على اتباع التزايد المقارن."
      - center: "$ -1 \\le \\sin x \\le 1 \\implies \\frac{-e^x}{x} \\le \\frac{e^x \\sin x}{x} \\le \\frac{e^x}{x} $"

  - NB:
      title: "نصيحة:"
      type: "success"
      NBs:
        - rtl: "تغيير المتغير ليس مجرد تعويض رياضي، بل هو تغيير لزاوية الرؤية."
        - rtl: "إذا رأيت مقلوب $x$ في الأس، فكر فوراً في $t = 1/x$."

---
