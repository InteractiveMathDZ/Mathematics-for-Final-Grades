---
layout: lesson
title: "المبحث 8: مجموعات النقط في المستوي"
subtitle: "التحليل الهندسي للمعادلات المركبة"
permalink: /point_sets/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 7: التفسير الهندسي للطويلة والعمدة"
previous_url: "/complex_geometry/"
next_title: "المبحث 9: العبارة المركبة للتحويلات"
next_url: "/complex_transformations/"

elements:
  - h3: "1. مجموعات النقط القائمة على الطويلة"
    id: "modulus-sets"
  - parags:
      - rtl: "• $|z - z_A| = R$: مجموعة النقط $M$ هي <b>دائرة</b> مركزها $A$ ونصف قطرها $R$."
      - rtl: "• $|z - z_A| = |z - z_B|$: مجموعة النقط $M$ هي <b>المحور المنصف</b> للقطعة $[AB]$."

  - h3: "2. مجموعات النقط القائمة على العمدة"
    id: "argument-sets"
  - parags:
      - rtl: "• $arg(z - z_A) = \\alpha + 2k\\pi$: مجموعة النقط $M$ هي <b>نصف مستقيم</b> مبدؤه $A$ (باستثناء $A$)."
      - rtl: "• $arg(z - z_A) = \\alpha + k\\pi$: مجموعة النقط $M$ هي <b>مستقيم</b> يمر من $A$ (باستثناء $A$)."

  - h3: "3. حالات النسبة المركبة"
    id: "ratio-sets"
  - parags:
      - rtl: "لنعتبر $Z = \\frac{z - z_A}{z - z_B}$:"
      - rtl: "• $Z \\in \\mathbb{R}$: النقط $A, B, M$ في <b>استقامية</b> (مستقيم $(AB)$ باستثناء $B$)."
      - rtl: "• $Z \\in i\\mathbb{R}$: النقط $A, B, M$ تشكل <b>زاوية قائمة</b> (دائرة قطرها $[AB]$ باستثناء $A, B$)."

  - graph:
      id: "point-sets-visualization"
      class: "graph-container"
      xDomain: [-2, 8]
      yDomain: [-1, 6]
      elements:
        # دوائر ومستقيمات
        - { type: "line", points: [[-1, 0], [7, 0]], color: "gray" }
        - { type: "line", points: [[0, -0.5], [0, 5]], color: "gray" }
        # تمثيل الدائرة
        - { type: "point", x: 2, y: 2, size: 3 }
        - { type: "text", content: "A", x: 1.8, y: 2.3 }
        # تمثيل المحور
        - { type: "line", points: [[1, 5], [5, 1]], color: "#168574" }

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "لا تنسَ أبداً استثناء النقط التي تجعل المقام معدوماً أو العمدة غير معرفة (مثل النقط $A$ و $B$ في حالات النسب)؛ فهذا جزء أساسي من الحل."
---
