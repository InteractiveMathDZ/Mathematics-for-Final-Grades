---
layout: lesson
title: "المبحث 2: التعديل الخطي بطريقة المربعات الدنيا"
subtitle: "صياغة معادلة مستقيم التراجع"
permalink: /linear_regression/
mathJax: true
lessonID: "stati"

# روابط الاتصال
previous_title: "السحابة النقطية والنقطة المتوسطة"
previous_url: "/point_cloud/"
next_title: "التعديل غير الخطي والتنبؤ الاستشرافي"
next_url: "/non_linear_forecasting/"

elements:
  - h3: "1. معادلة مستقيم التراجع"
    id: "regression-line"
  - parags:
      - rtl: "هو المستقيم الذي يمثل الاتجاه العام للسحابة النقطية ويُكتب من الشكل: $y = ax + b$."

  - h3: "2. حساب المعاملات (المربعات الدنيا)"
    id: "least-squares"
  - parags:
      - rtl: "يتم تحديد الميل $a$ والارتفاع $b$ لتقليل أخطاء التقدير:"
      - center: "$a = \\frac{\\text{Cov}(X,Y)}{V(X)} = \\frac{\\sum x_i y_i - n\\bar{X}\\bar{Y}}{\\sum x_i^2 - n\\bar{X}^2}$"
      - rtl: "بما أن المستقيم يمر حتماً من $G(\\bar{X}, \\bar{Y})$، نحسب $b$ بـ:"
      - center: "$b = \\bar{Y} - a\\bar{X}$"

  - h3: "3. المخطط الحسابي للمربعات الدنيا"
    id: "computational-steps"
  - parags:
      - rtl: "لضمان الدقة، أنشئ جدولاً يضم:"
      - rtl: "1. قيم $x_i$ و $y_i$ ومجاميعها."
      - rtl: "2. قيم $x_i^2$ لـ $V(X)$."
      - rtl: "3. قيم $x_i y_i$ لـ $\\text{Cov}(X,Y)$."

  - graph:
      id: "regression-line-viz"
      class: "graph-container"
      xDomain: [0, 20]
      yDomain: [0, 20]
      elements:
        - { type: "point", x: 10, y: 11, color: "gray" }
        - { type: "point", x: 12, y: 13, color: "gray" }
        - { type: "point", x: 15, y: 16, color: "gray" }
        - { type: "point", x: 8, y: 10, color: "gray" }
        - { type: "point", x: 15, y: 15, color: "gray" }
        - { type: "line", points: [[5, 7.28], [18, 17.89]], color: "blue", strokeWidth: 2 }
        - { type: "text", content: "y = 0.816x + 3.208", x: 10, y: 18, color: "blue" }

  - NB:
      title: "قاعدة للتحقق:"
      type: "success"
      NBs:
        - rtl: "بعد إيجاد المعادلة، عوض $\\bar{X}$ مكان $X$؛ إذا لم تحصل على $\\bar{Y}$، فالمعادلة بها خطأ حسابي."
---
