---
layout: lesson
title: "المبحث 3: التعديل غير الخطي والتنبؤ"
subtitle: "تطويع السلاسل الأسية والتحويل اللوغاريتمي"
permalink: /non_linear_forecasting/
mathJax: true
lessonID: "stati"

# روابط الاتصال
previous_title: "التعديل الخطي بطريقة المربعات الدنيا"
previous_url: "/linear_regression/"
next_title: "خارطة طريق الهندسة"
next_url: "/pure_euclidean_pl_geo/"

elements:
  - h3: "1. التحويل اللوغاريتمي"
    id: "logarithmic-transformation"
  - parags:
      - rtl: "عندما لا تتبع السحابة مساراً مستقيماً، نلجأ لتحويل المتغيرات. إذا كان النموذج من الشكل $y = B \\cdot e^{Ax}$:"
      - center: "$\\ln(y) = Ax + \\ln(B)$"
      - rtl: "نضع $Z = \\ln(y)$ و $b = \\ln(B)$ لنحصل على معادلة خطية: $Z = aX + b$ (حيث $a = A$)."

  - h3: "2. خطوات التنبؤ الاستشرافي"
    id: "forecasting-steps"
  - parags:
      - rtl: "1. <b>التحويل:</b> حساب قيم السلسلة الجديدة $z_i = \\ln(y_i)$."
      - rtl: "2. <b>التعديل:</b> إيجاد مستقيم التراجع لـ $Z$ بدلالة $X$ (المربعات الدنيا)."
      - rtl: "3. <b>العودة:</b> استنتاج قيم $y$ باستخدام الدالة الأسية $y = e^Z = e^{aX+b} = e^b \\cdot e^{aX}$."

  - h3: "3. هيكلية التنبؤ"
    id: "forecasting-structure"
  - parags:
      - rtl: "بمجرد إيجاد الدالة $y = f(x)$، يمكننا حساب أي قيمة مستقبلية للظاهرة بتعويض السنة المطلوبة مباشرة."

  - graph:
      id: "nonlinear-regression-viz"
      class: "graph-container"
      xDomain: [0, 5]
      yDomain: [0, 100]
      elements:
        - { type: "path", points: [[1, 2.5], [2, 7.3], [3, 20], [4, 54]], color: "gray", strokeWidth: 2 }
        - { type: "path", points: [[0.5, 1.5], [5, 155]], color: "red", strokeDash: "5,5" }
        - { type: "text", content: "y = 0.91 * e^(1.028x)", x: 2, y: 80, color: "red" }

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "الخطأ الأكثر شيوعاً هو نسيان 'العودة' من قيم $Z$ إلى $Y$ باستخدام الدالة الأسية. التنبؤ دائماً يتعلق بالقيم الأصلية $Y$ وليس بالقيم المحولة $Z$."
---
