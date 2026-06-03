---
layout: lesson
title: "المبحث 3: دستور الاحتمالات الكلية وتطبيقاته"
subtitle: "تجميع المسارات وحساب الاحتمالات الارتدادية"
permalink: /total_probability/
mathJax: true
lessonID: "proSt"

# روابط الاتصال
previous_title: "شجرة الاحتمالات وقواعد رسم المسارات"
previous_url: "/probability_tree/"
next_title: "خارطة طريق التحليل التوفيقي"
next_url: "/combinatorics_hub/"

elements:
  - h3: "1. التجزئة التامة للفضاء العيني"
    id: "partition"
  - parags:
      - rtl: "تشكل مجموعة الحوادث $(B_i)$ تجزئة تامة لـ $\\Omega$ إذا كانت متنافية مثنى مثنى، واتحادها يساوي $\\Omega$."

  - h3: "2. دستور الاحتمالات الكلية"
    id: "total-probability"
  - parags:
      - rtl: "لحساب احتمال حادثة $A$ تتقاطع مع تجزئة $(B_i)$، نجمع احتمالات المسارات المنتهية بـ $A$:"
      - center: "$P(A) = \\sum_{i=1}^{n} P(B_i) \\times P_{B_i}(A)$"
      - rtl: "هذا الدستور هو التعبير الرياضي عن تجميع فروع الشجرة التي تنتهي بنفس النتيجة."

  - h3: "3. دستور بايز (الاحتمال الارتدادي)"
    id: "bayes-theorem"
  - parags:
      - rtl: "يُستخدم لحساب احتمال مسبب $B_k$ بعد وقوع النتيجة $A$:"
      - center: "$P_A(B_k) = \\frac{P(B_k \\cap A)}{P(A)} = \\frac{P(B_k) \\times P_{B_k}(A)}{P(A)}$"
      - rtl: "المقام هو دائماً القيمة التي حسبناها في 'دستور الاحتمالات الكلية'."

  # الرسم التوضيحي للتقاطع مع التجزئة
  - graph:
      id: "total-prob-viz"
      class: "graph-container"
      xDomain: [0, 3]
      yDomain: [0, 2]
      elements:
        - { type: "line", points: [[1, 0], [1, 2]], color: "gray", strokeDash: "4,4" }
        - { type: "line", points: [[2, 0], [2, 2]], color: "gray", strokeDash: "4,4" }
        - { type: "text", content: "B₁", x: 0.5, y: 1 }
        - { type: "text", content: "B₂", x: 1.5, y: 1 }
        - { type: "text", content: "B₃", x: 2.5, y: 1 }
        - { type: "line", points: [[0, 1], [3, 1]], color: "#ef4444", strokeWidth: 3 }
        - { type: "text", content: "A", x: 0.2, y: 1.2, color: "#ef4444" }

  - NB:
      title: "تنبيه:"
      type: "info"
      NBs:
        - rtl: "سؤال بايز يُعرف بـ 'الارتداد': إذا أعطيت النتيجة $A$ وسُئلت عن المسبب $B_k$، فاعلم أنك بصدد تطبيق دستور بايز باستخدام القيمة الكلية التي حسبتها مسبقاً."
---
