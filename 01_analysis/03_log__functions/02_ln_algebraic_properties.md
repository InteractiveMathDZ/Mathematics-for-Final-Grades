---
layout: lesson
title: "اللوغاريتم: الخصائص الجبرية (قواعد الحساب)"
permalink: /ln_algebraic_properties/
mathJax: true
graph: true
lessonID: "ln-algebraic"

# روابط الاتصال
previous_title: "تعريف الدالة ln ومجال تعريفها"
previous_url: "/ln_definition/"

next_title: "المعادلات والمتراجحات اللوغاريتمية"
next_url: "/ln_equations/"

elements:
  - h3: "1. الخاصية الأساسية (تحويل الضرب إلى جمع)"
    id: "fundamental-property"

  - parags:
      - rtl: "من أجل كل عددين حقيقيين $a$ و $b$ موجبين تماماً، لدينا:"
      - center: "$\\ln(a \times b) = \\ln(a) + \\ln(b)$"
      - rtl: "هذه الخاصية هي حجر الزاوية في كل ما سيتبع."

  - h3: "2. قواعد الحساب المشتقة"
    id: "derived-rules"

  - parags:
      - rtl: "باستخدام الخاصية الأساسية، يمكننا استنتاج القواعد التالية (بشرط أن تكون $a$ و $b$ أعداداً موجبة تماماً):"

  - tableLines:
      dir: rtl
      lines:
        - - th: "العملية"
          - th: "القاعدة اللوغاريتمية"
        - - td: "لوغاريتم المقلوب"
          - td: "$\\ln(\\frac{1}{a}) = -\\ln(a)$"
        - - td: "لوغاريتم القسمة"
          - td: "$\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$"
        - - td: "لوغاريتم القوة ($n \\in \\mathbb{Q}$)"
          - td: "$\\ln(a^n) = n \\ln(a)$"
        - - td: "لوغاريتم الجذر التربيعي"
          - td: "$\\ln(\\sqrt{a}) = \\frac{1}{2} \\ln(a)$"

  - h3: "3. مثال تطبيقي للتبسيط"
    id: "simplification-example"

  - parags:
      - rtl: "بسط المقدار التالي:"
      - center: "$A = \\ln(2) + \\ln(8) - \\ln(4)$"

  - tableLines:
      dir: rtl
      lines:
        - - td: "1. تجميع الضرب"
          - td: "$\\ln(2) + \\ln(8) = \\ln(2 \\times 8) = \\ln(16)$"
        - - td: "2. تطبيق القسمة"
          - td: "$\\ln(16) - \\ln(4) = \\ln(\\frac{16}{4})$"
        - - td: "3. النتيجة النهائية"
          - td: "$\\ln(4)$ أو $2\\ln(2)$"

  - NB:
      title: "تنبيه الأرتيزان:"
      type: "danger"
      NBs:
        - rtl: "احذر من الأخطاء القاتلة: $\\ln(a+b)$ <strong>لا تساوي</strong> $\\ln(a) + \\ln(b)$."
        - rtl: "كذلك $(\\ln a)^2$ تختلف تماماً عن $\\ln(a^2)$؛ الأولى هي الدالة مربعة، والثانية نطبق عليها قاعدة القوة $2\\ln a$."

  - notes:
      - rtl: "استخدم هذه الخصائص دائماً 'لتفكيك' العبارات المعقدة قبل اشتقاقها؛ فهذا سيوفر عليك الكثير من الحسابات الجبرية المرهقة."

---
