---
layout: lesson
title: "المبحث 1: المبادئ الأساسية للعد"
subtitle: "مبدأ الجداء، القوائم، والترتيبات"
permalink: /counting_principles/
mathJax: true
lessonID: "combCount"

# روابط الاتصال
previous_title: "خارطة طريق التحليل التوفيقي"
previous_url: "/combinatorics_hub/"
next_title: "التوفيقات وخواصها الجبرية"
next_url: "/combinations/"

elements:
  - h3: "1. مبدأ الجداء"
    id: "multiplication-principle"
  - parags:
      - rtl: "إذا كان اختبار يتكون من $k$ مرحلة، حيث المرحلة $i$ لها $n_i$ نتيجة، فإن إجمالي النتائج هو:"
      - center: "$N = n_1 \\times n_2 \\times \\dots \\times n_k$"

  - h3: "2. العاملي ($n!$)"
    id: "factorial"
  - parags:
      - rtl: "يُستخدم لترتيب $n$ عنصراً متمايزاً:"
      - center: "$n! = n \\times (n-1) \\times \\dots \\times 1$  (حيث $0! = 1$)"

  - h3: "3. القوائم والترتيبات"
    id: "lists-and-arrangements"
  - parags:
      - rtl: "لاختيار $p$ عنصراً من مجموعة ذات $n$ عنصر:"
      - rtl: "• <b>القائمة (ترتيب مع التكرار):</b> $N = n^p$"
      - rtl: "• <b>الترتيبة (ترتيب بدون تكرار):</b> $A_n^p = \\frac{n!}{(n-p)!}$"

  - graph:
      id: "counting-methods-viz"
      class: "graph-container"
      xDomain: [0, 5]
      yDomain: [0, 3]
      elements:
        - { type: "text", content: "الترتيب مهم؟", x: 0.5, y: 2.5 }
        - { type: "line", points: [[1.5, 2.5], [2.5, 2.5]], color: "blue", arrowEnd: true }
        - { type: "text", content: "تكرار مسموح؟", x: 3, y: 2.5 }
        - { type: "text", content: "نعم -> قائمة (n^p)", x: 3.5, y: 1.5 }
        - { type: "text", content: "لا -> ترتيبة (Aⁿₚ)", x: 3.5, y: 0.5 }

  - NB:
      title: "قاعدة التمييز:"
      type: "info"
      NBs:
        - rtl: "الترتيب مهم؟ نعم (قائمة أو ترتيبة)، لا (توفيقة). التكرار مسموح؟ نعم (قائمة)، لا (ترتيبة)."
---
