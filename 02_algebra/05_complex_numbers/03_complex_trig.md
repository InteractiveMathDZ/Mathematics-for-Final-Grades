---
layout: lesson
title: "المبحث 3: الطويلة والعمدة"
subtitle: "القياسات القطبية والتحليل الشعاعي"
permalink: /complex_trig/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 2: مرافق العدد المركب ومقلوبه"
previous_url: "/complex_conjugate/"
next_title: "المبحث 4: الشكل المثلثي والشكل الأسّي"
next_url: "/complex_exponential/"

elements:
  - h3: "1. طويلة العدد المركب"
    id: "module-definition"
  - parags:
      - rtl: "طويلة العدد المركب $z = a + bi$ هي المسافة من المبدأ $O$ إلى النقطة $M(a, b)$، ونرمز لها بـ $r$ أو $|z|$:"
      - center: "$|z| = r = \\sqrt{a^2 + b^2}$"
      - rtl: "وهي قيمة حقيقية موجبة دائماً."

  - h3: "2. عمدة العدد المركب"
    id: "argument-definition"
  - parags:
      - rtl: "عمدة العدد $z$ هي الزاوية $\\theta$ التي يصنعها الشعاع $\\vec{OM}$ مع محور الفواصل الموجب:"
      - center: "$\\cos(\\theta) = \\frac{a}{|z|}, \\quad \\sin(\\theta) = \\frac{b}{|z|}$"
      - rtl: "نكتب: $\\theta \\equiv arg(z) \\pmod{2\\pi}$."

  - h3: "3. حالات هندسية خاصة"
    id: "special-cases"
  - parags:
      - rtl: "• حقيقي موجب تماماً: $arg(z) = 0$"
      - rtl: "• حقيقي سالب تماماً: $arg(z) = \\pi$"
      - rtl: "• تخيلي صرف موجب: $arg(z) = \\frac{\\pi}{2}$"
      - rtl: "• تخيلي صرف سالب: $arg(z) = -\\frac{\\pi}{2}$"

  - graph:
      id: "module-arg-viz"
      class: "graph-container"
      xDomain: [-1, 6]
      yDomain: [-1, 5]
      elements:
        # رسم تمثيلي للمستوي المركب
        - { type: "line", points: [[-0.5, 0], [5.5, 0]], color: "gray" }
        - { type: "line", points: [[0, -0.5], [0, 4.5]], color: "gray" }
        # الشعاع من المبدأ إلى النقطة z
        - { type: "line", points: [[0, 0], [4, 3]], color: "blue", arrowEnd: true }
        - { type: "point", x: 4, y: 3, size: 3 }
        - { type: "text", content: "M(z)", x: 4.2, y: 3.2, color: "blue" }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "لا تعتمد على الآلة الحاسبة وحدها في إيجاد العمدة؛ حدد الربع الذي تقع فيه النقطة $M$ (بناءً على إشارات $a$ و $b$) لتحديد الزاوية الصحيحة على الدائرة المثلثية."
---
