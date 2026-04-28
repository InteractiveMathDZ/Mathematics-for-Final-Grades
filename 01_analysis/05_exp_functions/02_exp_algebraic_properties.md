---
layout: lesson
title: "الأسية: الخصائص الجبرية للدالة الأسية"
permalink: /exp_algebraic_properties/
mathJax: true
graph: false
lessonID: "exp-algebra"

# روابط الاتصال
previous_title: "تعريف الدالة exp ومجال تعريفها"
previous_url: "/exp_definition/"

next_title: "المعادلات والمتراجحات الأسية"
next_url: "/exp_equations/"

elements:
  - h3: "1. القواعد الأساسية (قواعد القوى)"
    id: "basic-rules"

  - parags:
      - rtl: "من أجل كل عددين حقيقيين $a$ و $b$، وكل عدد صحيح $n$، تحقق الدالة الأسية الخصائص التالية:"

  - tableLines:
      dir: ltr
      lines:
        - - th: "الخاصية"
          - th: "القاعدة الرياضية"
          - th: "التسمية"
        - - td: "جداء أسيتين"
          - td: "$e^a \\times e^b = e^{a+b}$"
          - td: "تحويل الضرب إلى جمع"
        - - td: "مقلوب أسية"
          - td: "$\\frac{1}{e^a} = e^{-a}$"
          - td: "الأس السالب"
        - - td: "قسمة أسيتين"
          - td: "$\\frac{e^a}{e^b} = e^{a-b}$"
          - td: "تحويل القسمة إلى طرح"
        - - td: "قوة أسية"
          - td: "$(e^a)^n = e^{n \\cdot a}$"
          - td: "ضرب الأسس"

  - h3: "2. أمثلة للتبسيط"
    id: "simplification-examples"

  - tableLines:
      dir: rtl
      lines:
        - - td: "$\\frac{e^3 \\times e^5}{e^2}$"
          - td: "$e^{3+5-2} = e^6$"
        - - td: "$(e^{-x})^2 \\times e^{2x}$"
          - td: "$e^{-2x} \\times e^{2x} = e^0 = 1$"
        - - td: "$\\sqrt{e^x}$"
          - td: "$(e^x)^{1/2} = e^{x/2}$"

  - NB:
      title: "قاعدة (التخلص من الكسر):"
      type: "success"
      NBs:
        - rtl: "في دراسة الدوال، غالباً ما يكون من الأفضل تحويل المقلوب:"
        - center: " $\\frac{1}{e^x}$"
        - rtl: " إلى:"
        - rtl: "$e^{-x}$"
        - rtl: "ليسهل عليك حساب المشتقة لاحقاً."

  - h3: "3. الربط مع الدالة $\\ln$"
    id: "exp-ln-algebra"

  - parags:
      - rtl: "هذه الخصائص هي التي تؤكد لنا أن الأسية واللوغاريتم وجهان لعملة واحدة:"
      - rtl: "إذا كان:"
      - center: "$e^x = y$"
      - rtl: " فإن:"
      - center: " $x = \\ln y$"
      - rtl: "(بشرط $y > 0$)"
      - center: "$e^{a \\ln b} = e^{\\ln b^a} = b^a$"

  - notes:
      - rtl: "تذكر دائماً: $e^x$ لا يمكن أن تكون سالبة، لذا فإن أي تبسيط يؤدي لنتيجة سالبة يعني وجود خطأ في الحساب."

---
