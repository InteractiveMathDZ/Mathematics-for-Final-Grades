---
layout: lesson
title: "القوى النونية والحالات المركبة"
subtitle: "تعميم القانون: السيادة المطلقة مهما كبر الأس"
permalink: /advanced_power_growth/
mathJax: true
lessonID: "growth-06"

# روابط الاتصال
previous_title: "المبحث 5: تقنية تغيير المتغير والمقارنة"
previous_url: "/variable_change_growth/"

next_title: "المسألة الشاملة: تاج التزايد المقارن"
next_url: "/growth_master_problem/"

elements:
  - h3: "1. تعميم القواعد (القوى $n$)"
    id: "general-power-rules"

  - parags:
      - rtl: "لا يهم إذا كانت $x$ مرفوعة لأس 2 أو 100 أو حتى $n$؛ الدالة الأسية تظل هي الغالبة عند اللانهاية، والدالة اللوغاريتمية تظل هي المغلوبة."
  
  - tableLines:
      dir: ltr
      lines:
        - - th: "الدالة"
          - th: "النهاية عند $+\\infty$ (الحالة العامة)"
          - th: "النهاية عند $0$ أو $-\\infty$"
        - - th: "الأسية"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty$"
          - td: "$\\lim\\limits_{x \to -\\infty} x^n e^x = 0$"
        - - th: "اللوغاريتم"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0$"
          - td: "$\\lim\\limits_{x \\to 0^+} x^n \\ln x = 0$"

  - h3: "2. الحالات المركبة (الدوال داخل الدوال)"
    id: "composite-cases"

  - parags:
      - rtl: "في الحالات المركبة مثل $e^{f(x)}$ أو $\\ln(f(x))$، نطبق التزايد المقارن على 'التركيب' ككل. القاعدة الذهبية هي مراقبة سلوك الحشو (الداخل) أولاً."
      - rtl: "<strong>مثال</strong> في النهاية $\\lim\\limits_{x \\to +\\infty} \\frac{e^{x^2}}{x}$، بما أن الأس $x^2$ ينمو أسرع من $x$ بكثير، فإن الانفجار نحو $+\\infty$ يكون أشد فتكاً."

  - h3: "3. المقارنة بين الأسية واللوغاريتم مباشرة"
    id: "exp-vs-ln"
  
  - parags:
      - rtl: "ماذا لو اصطدمت الملكة بالسلحفاة مباشرة؟"
      - center: "$ \\lim\\limits_{x \\to +\\infty} \\frac{e^x}{\\ln x} = +\\infty $"
      - rtl: "هنا يظهر الفارق المرعب في السرعات؛ الأسية تلتهم اللوغاريتم وكأنه غير موجود."

  - NB:
      title: "مسك الختام:"
      type: "primary"
      NBs:
        - rtl: "عند وجود عدة قوى، عيّن 'الدالة المهيمنة' (Dominant Term) في البسط والمقام، واهمل البقية."
        - rtl: "التزايد المقارن هو سلاحك لتبسيط العبارات الضخمة بمجرد النظر."

---
