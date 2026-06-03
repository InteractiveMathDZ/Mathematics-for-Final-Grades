---
layout: lesson
title: "المبحث 2: مرافق العدد المركب ومقلوبه"
subtitle: "الانعكاس والمحاسبة الميكانيكية"
permalink: /complex_conjugate/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 1: تعريف المجموعة C والشكل الجبري"
previous_url: "/complex_definition/"
next_title: "المبحث 3: الطويلة والعمدة وقوانين المساحات"
next_url: "/complex_trig/"

elements:
  - h3: "1. مرافق العدد المركب"
    id: "conjugate-definition"
  - parags:
      - rtl: "إذا كان $z = a + bi$، فإن مرافقه $\\bar{z}$ هو:"
      - center: "$\\bar{z} = a - bi$"
      - rtl: "هندسياً، يمثل المرافق الانعكاس المرآتي للعدد $z$ بالنسبة لمحور الفواصل (المحور الحقيقي)."

  - h3: "2. الخصائص الجبرية للمرافق"
    id: "conjugate-properties"
  - parags:
      - rtl: "يتميز المرافق بتوزيعه على العمليات الحسابية:"
      - rtl: "• $\\overline{z+z'} = \\bar{z} + \\bar{z}'$"
      - rtl: "• $\\overline{z \\times z'} = \\bar{z} \\times \\bar{z}'$"
      - rtl: "• $\\overline{(z^n)} = (\\bar{z})^n$"

  - h3: "3. خاصية الجداء الأساسية"
    id: "product-property"
  - parags:
      - rtl: "جداء أي عدد مركب في مرافقه يعطي عدداً حقيقياً موجباً:"
      - center: "$z \\times \\bar{z} = a^2 + b^2$"
      - rtl: "تستخدم هذه الخاصية لتنطيق المقامات في الكسور المركبة."

  - h3: "4. حساب مقلوب العدد المركب"
    id: "complex-inverse"
  - parags:
      - rtl: "لحساب $\\frac{1}{z}$، نضرب البسط والمقام في مرافق المقام $\\bar{z}$:"
      - center: "$\\frac{1}{z} = \\frac{\\bar{z}}{z \\times \\bar{z}} = \\frac{a - bi}{a^2 + b^2} = \\frac{a}{a^2 + b^2} - \\frac{b}{a^2 + b^2}i$"

  - graph:
      id: "conjugate-reflection"
      class: "graph-container"
      xDomain: [-2, 6]
      yDomain: [-4, 4]
      elements:
        # المحاور
        - { type: "line", points: [[-1, 0], [5, 0]], color: "gray" }
        - { type: "line", points: [[0, -3], [0, 3]], color: "gray" }
        # النقطتان z و مرافقها
        - { type: "point", x: 3, y: 2, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "z", x: 3.2, y: 2.2, color: "blue" }
        - { type: "point", x: 3, y: -2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "z̄", x: 3.2, y: -2.2, color: "#168574" }
        - { type: "line", points: [[3, 2], [3, -2]], color: "orange", strokeDash: "4,4" }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "$z$ حقيقي صرف إذا كان $z = \\bar{z}$."
        - rtl: "$z$ تخيلي صرف إذا كان $z = -\\bar{z}$."
---
