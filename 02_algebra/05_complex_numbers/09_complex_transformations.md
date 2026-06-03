---
layout: lesson
title: "المبحث 9: العبارة المركبة للتحويلات النقطية"
subtitle: "الانسحاب، الدوران، والتحاكي"
permalink: /complex_transformations/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 8: مجموعات النقط في المستوي"
previous_url: "/point_sets/"
next_title: "المبحث 10: المسائل التوليفية والربط المطلق"
next_url: "/complex_final_problems/"

elements:
  - h3: "1. الانسحاب (Translation)"
    id: "translation"
  - parags:
      - rtl: "الانسحاب الذي يحول النقطة $M(z)$ إلى $M'(z')$ بشعاع لاحقته $b$ يعبر عنه بالعبارة:"
      - center: "$z' = z + b$"

  - h3: "2. الدوران (Rotation)"
    id: "rotation"
  - parags:
      - rtl: "الدوران الذي مركزه $\\omega$ (لاحقته $\\omega$) وزاويته $\\theta$ يحول $M(z)$ إلى $M'(z')$ وفق العبارة:"
      - center: "$z' - \\omega = e^{i\\theta}(z - \\omega)$"
      - rtl: "أي: $z' = e^{i\\theta}z + \\omega(1 - e^{i\\theta})$."

  - h3: "3. التحاكي (Homothety)"
    id: "homothety"
  - parags:
      - rtl: "التحاكي الذي مركزه $\\omega$ (لاحقته $\\omega$) ونسبته $k$ ($k \\in \\mathbb{R}^*$) يحول $M(z)$ إلى $M'(z')$ وفق العبارة:"
      - center: "$z' - \\omega = k(z - \\omega)$"
      - rtl: "أي: $z' = kz + \\omega(1 - k)$."

  - h3: "4. الحالة العامة (التشابه المباشر)"
    id: "direct-similarity"
  - parags:
      - rtl: "تأخذ التحويلات السابقة الشكل العام $z' = az + b$ (حيث $a, b \\in \\mathbb{C}$):"
      - rtl: "• إذا كان $a = 1$: انسحاب بشعاع لاحقته $b$."
      - rtl: "• إذا كان $a = e^{i\\theta}$ (مع $a \\neq 1$): دوران مركزه $\\omega = \frac{b}{1-a}$ وزاويته $arg(a)$."
      - rtl: "• إذا كان $a = k$ (مع $a \\in \\mathbb{R}, a \\neq 1$): تحاكي مركزه $\\omega = \frac{b}{1-a}$ ونسبته $k$."

  - graph:
      id: "transformations-viz"
      class: "graph-container"
      xDomain: [-2, 6]
      yDomain: [-1, 5]
      elements:
        # المحاور
        - { type: "line", points: [[-1, 0], [5.5, 0]], color: "gray" }
        - { type: "line", points: [[0, -0.5], [0, 4.5]], color: "gray" }
        # تمثيل النقطة الأصلية والمحولة
        - { type: "point", x: 1, y: 1, size: 3 }
        - { type: "text", content: "M", x: 1.2, y: 1.2 }
        - { type: "point", x: 3, y: 3, size: 3 }
        - { type: "text", content: "M'", x: 3.2, y: 3.2 }
        - { type: "line", points: [[1, 1], [3, 3]], color: "orange", arrowEnd: true }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "للتحويل $z' = az + b$، نجد المركز بحل المعادلة ذات النقطة الصامدة $\\omega = a\\omega + b$."
---
