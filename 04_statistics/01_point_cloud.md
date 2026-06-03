---
layout: lesson
title: "المبحث 1: السحابة النقطية والنقطة المتوسطة"
subtitle: "التمثيل الهندسي ومركز ثقل السلسلة"
permalink: /point_cloud/
mathJax: true
lessonID: "stati"

# روابط الاتصال
previous_title: "خارطة طريق الإحصاء ثنائي المتغير"
previous_url: "/statistics_hub/"
next_title: "التعديل الخطي بطريقة المربعات الدنيا"
next_url: "/linear_regression/"

elements:
  - h3: "1. السلسلة الإحصائية ثنائية المتغير"
    id: "bivariate-series"
  - parags:
      - rtl: "هي مجموعة من الثنائيات $(x_i, y_i)$ تعبر عن صفتين مرتبطتين لنفس الفرد."
      - rtl: "• <b>السحابة النقطية:</b> هي تمثيل هذه الثنائيات في معلم $(O, \vec{i}, \vec{j})$ كنقاط $M_i(x_i, y_i)$."

  - h3: "2. النقطة المتوسطة G"
    id: "mean-point"
  - parags:
      - rtl: "هي مركز ثقل السحابة، وإحداثياتها هي الأوساط الحسابية للمتغيرين:"
      - center: "$\\bar{X} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$  ,  $\\bar{Y} = \\frac{1}{n} \\sum_{i=1}^{n} y_i$"
      - rtl: "النقطة المتوسطة هي $G(\\bar{X}, \\bar{Y})$."

  - graph:
      id: "scatter-plot-viz"
      class: "graph-container"
      xDomain: [0, 20]
      yDomain: [0, 20]
      elements:
        - { type: "point", x: 10, y: 11, color: "gray" }
        - { type: "point", x: 12, y: 13, color: "gray" }
        - { type: "point", x: 15, y: 16, color: "gray" }
        - { type: "point", x: 8, y: 10, color: "gray" }
        - { type: "point", x: 15, y: 15, color: "gray" }
        - { type: "point", x: 12, y: 13, size: 5, color: "red" }
        - { type: "text", content: "G(12, 13)", x: 12.5, y: 12.5, color: "red" }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "النقطة $G$ تمر بها جميع مستقيمات التعديل الخطي لاحقاً، لذا دقة حسابها (دون تقريب الكسور) ضرورية لسلامة كامل المسألة."
---
