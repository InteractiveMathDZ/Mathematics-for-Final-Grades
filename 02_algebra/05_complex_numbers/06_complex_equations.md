---
layout: lesson
title: "المبحث 6: حل معادلات الدرجة الثانية في C"
subtitle: "تسوية الحسابات التربيعية"
permalink: /complex_equations/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 5: دستور موآفر وتطبيقاته الجبرية"
previous_url: "/moivre_theorem/"
next_title: "المبحث 7: التفسير الهندسي للطويلة والعمدة"
next_url: "/complex_geometry/"

elements:
  - h3: "1. حساب المميز"
    id: "discriminant"
  - parags:
      - rtl: "لحل المعادلة $az^2 + bz + c = 0$ (مع $a, b, c \\in \\mathbb{R}$)، نحسب المميز:"
      - center: "$\\Delta = b^2 - 4ac$"

  - h3: "2. الحالات الجبرية"
    id: "cases"
  - parags:
      - rtl: "• إذا كان $\\Delta > 0$: حلان حقيقيان $z_1, z_2 = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$."
      - rtl: "• إذا كان $\\Delta = 0$: حل حقيقي مضاعف $z_0 = -\\frac{b}{2a}$."
      - rtl: "• إذا كان $\\Delta < 0$: حلان مركبان مترافقان، نكتب $\\Delta = i^2 |\\Delta|$، والحلان هما:"
      - center: "$z_{1,2} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$"

  - h3: "3. مثال تطبيقي"
    id: "example"
  - parags:
      - rtl: "حل المعادلة $z^2 - 2z + 5 = 0$:"
      - rtl: "1. $\\Delta = (-2)^2 - 4(1)(5) = 4 - 20 = -16$."
      - rtl: "2. بما أن $\\Delta < 0$، إذن $\\sqrt{\\Delta} = \\sqrt{16i^2} = 4i$."
      - rtl: "3. الحلان: $z_1 = \\frac{2 - 4i}{2} = 1 - 2i$ و $z_2 = \\bar{z}_1 = 1 + 2i$."

  - graph:
      id: "equation-solutions-viz"
      class: "graph-container"
      xDomain: [-2, 5]
      yDomain: [-4, 4]
      elements:
        # تناظر الحلول
        - { type: "line", points: [[-1.5, 0], [4.5, 0]], color: "gray" }
        - { type: "line", points: [[0, -3.5], [0, 3.5]], color: "gray" }
        - { type: "point", x: 1, y: -2, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "point", x: 1, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "line", points: [[1, -2], [1, 2]], color: "orange", strokeDash: "4,4" }

  - NB:
      title: "قاعدة:"
      type: "success"
      NBs:
        - rtl: "إذا كانت المعاملات حقيقية، فالحلول المركبة للمعادلة تكون دائماً مترافقة."
---
