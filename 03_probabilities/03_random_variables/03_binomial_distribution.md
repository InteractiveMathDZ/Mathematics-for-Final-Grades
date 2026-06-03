---
layout: lesson
title: "المبحث 3: قانون برنولي والتوزيع الثنائي"
subtitle: "نمذجة الاختبارات الثنائية المكررة"
permalink: /binomial_distribution/
mathJax: true
lessonID: "randVar"

# روابط الاتصال
previous_title: "الأمل الرياضي، التباين والانحراف المعياري"
previous_url: "/statistical_indicators/"
next_title: "خارطة طريق المتغيرات العشوائية"
next_url: "/random_variables_hub/"

elements:
  - h3: "1. اختبار برنولي"
    id: "bernoulli-trial"
  - parags:
      - rtl: "تجربة بمخرجين: نجاح $S$ (باحتمال $p$) وفشل $\\bar{S}$ (باحتمال $q = 1-p$)."
      - rtl: "المتغير $X$ يأخذ القيم $\{0, 1\}$."

  - h3: "2. التوزيع الثنائي (القانون الثنائي)"
    id: "binomial-distribution"
  - parags:
      - rtl: "هو تكرار لـ $n$ اختبار برنولي مستقل. إذا كان $Y$ هو عدد النجاحات، فإن $Y$ يتبع التوزيع الثنائي $\\mathcal{B}(n, p)$."
      - rtl: "احتمال الحصول على $k$ نجاحاً:"
      - center: "$P(Y = k) = \\binom{n}{k} p^k (1-p)^{n-k}$"

  - h3: "3. المؤشرات الرياضية"
    id: "statistical-indicators"
  - parags:
      - rtl: "بدلاً من الحساب الطويل، نستخدم المعالم مباشرة:"
      - rtl: "• <b>الأمل الرياضي:</b> $E(Y) = np$"
      - rtl: "• <b>التباين:</b> $V(Y) = npq$"
      - rtl: "• <b>الانحراف المعياري:</b> $\\sigma(Y) = \\sqrt{npq}$"

  # رسم يوضح شجرة التفرع
  - graph:
      id: "bernoulli-tree-viz"
      class: "graph-container"
      xDomain: [0, 4]
      yDomain: [0, 2]
      elements:
        - { type: "line", points: [[0, 1], [1, 1.5]], color: "gray" }
        - { type: "line", points: [[0, 1], [1, 0.5]], color: "gray" }
        - { type: "text", content: "S (p)", x: 1.2, y: 1.5 }
        - { type: "text", content: "F (q)", x: 1.2, y: 0.5 }

  - NB:
      title: "شروط الاستخدام:"
      type: "info"
      NBs:
        - rtl: "للتأكد من أن التمرين يتطلب 'قانوناً ثنائياً'، ابحث عن: تكرار مستقل، مخرجان فقط، عدد تجارب ثابت $n$."
---
