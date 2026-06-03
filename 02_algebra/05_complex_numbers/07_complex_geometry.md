---
layout: lesson
title: "المبحث 7: التفسير الهندسي للطويلة والعمدة"
subtitle: "تحويل الأعداد إلى أشعة وزوايا"
permalink: /complex_geometry/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 6: حل معادلات الدرجة الثانية في C"
previous_url: "/complex_equations/"
next_title: "المبحث 8: تعيين وحصر مجموعات النقط في المستوي"
next_url: "/point_sets/"

elements:
  - h3: "1. الطويلة كمسافة"
    id: "distance-interpretation"
  - parags:
      - rtl: "تمثل طويلة فرق عددين مركبين المسافة بين صورتيهما في المستوي:"
      - center: "$AB = |z_B - z_A|$"
      - rtl: "حيث $z_B - z_A$ هو لاحقة الشعاع $\\overrightarrow{AB}$."

  - h3: "2. العمدة كزاوية موجهة"
    id: "angle-interpretation"
  - parags:
      - rtl: "تمثل عمدة نسبة عددين مركبين قيس الزاوية الموجهة بين شعاعين:"
      - center: "$arg\\left(\\frac{z_D - z_C}{z_B - z_A}\\right) \\equiv (\\overrightarrow{AB}, \\overrightarrow{CD}) \\pmod{2\\pi}$"

  - h3: "3. الاستنتاجات الهندسية"
    id: "geometric-conclusions"
  - parags:
      - rtl: "لنعتبر النسبة $L = \\frac{z_C - z_A}{z_B - z_A}$:"
      - rtl: "• <b>استقامية:</b> $L \\in \\mathbb{R}$ (الزاوية $0$ أو $\\pi$)."
      - rtl: "• <b>تعامد:</b> $L \\in i\\mathbb{R}$ (الزاوية $\\pm \\frac{\\pi}{2}$)."
      - rtl: "• <b>مثلث متقايس الأضلاع:</b> $|L| = 1$ و $arg(L) = \\pm \\frac{\\pi}{3}$."

  - graph:
      id: "geometric-interpretation-viz"
      class: "graph-container"
      xDomain: [-1, 7]
      yDomain: [-1, 5]
      elements:
        # محاور
        - { type: "line", points: [[-0.5, 0], [6.5, 0]], color: "gray" }
        - { type: "line", points: [[0, -0.5], [0, 4.5]], color: "gray" }
        # النقط والأشعة
        - { type: "point", x: 1, y: 1, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "point", x: 4, y: 1.5, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "point", x: 3, y: 4, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "line", points: [[1, 1], [4, 1.5]], color: "blue", arrowEnd: true }
        - { type: "line", points: [[1, 1], [3, 4]], color: "#168574", arrowEnd: true }

  - NB:
      title: "تنبيه:"
      type: "info"
      NBs:
        - rtl: "الزاوية الموجهة $(\\overrightarrow{AB}, \\overrightarrow{CD})$ تبدأ من شعاع المقام إلى شعاع البسط. انعكاس الترتيب يعكس إشارة العمدة ويغير الاستنتاج الهندسي."
---
