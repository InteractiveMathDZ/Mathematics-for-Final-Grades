---
layout: lesson
title: "المبحث 6: مبرهنة غوص (Gauss)"
subtitle: "قاعدة الاستنتاج في الجداءات"
permalink: /gauss_primes/
mathJax: true
graph: true
lessonID: "primN"

# روابط الاتصال
previous_title: "المبحث 5: الأعداد الأولية فيما بينها"
previous_url: "/relatively_prime/"
next_title: "المبحث 7: مبرهنة فيرما الصغرى (صيغة أولية)"
next_url: "/fermat_primes/"

elements:
  - h3: "1. نص المبرهنة"
    id: "gauss-theorem"
  - parags:
      - rtl: "لتكن $a، b$ و $c$ أعداداً صحيحة غير معدومة."
      - rtl: "إذا كان $a$ يقسم الجداء $bc$ وكان $a$ أولياً مع $b$ (أي $PGCD(a, b) = 1$)، فإن $a$ يقسم $c$."
      - center: "$\\begin{cases} a \\mid bc \\\\ PGCD(a, b) = 1 \\end{cases} \\implies a \\mid c$"

  - h3: "2. تطبيقات المبرهنة"
    id: "applications"
  - parags:
      - rtl: "تستخدم المبرهنة في حل المعادلات الديوفانتية التي تتخذ الشكل $ax = by$."
      - rtl: "<b>مثال:</b> حل المعادلة $5x = 3y$ في $\\mathbb{Z}$:"
      - rtl: "بما أن $5$ يقسم $3y$ و $PGCD(5, 3) = 1$، فإن $5$ يقسم $y$ (حسب غوص)."
      - rtl: "إذن $y = 5k$ (حيث $k \\in \\mathbb{Z}$)، وبالتعويض نجد $5x = 3(5k) \\implies x = 3k$."

  - h3: "3. نتائج المبرهنة"
    id: "corollaries"
  - parags:
      - rtl: "• إذا كان $a$ و $b$ يقسمان عدداً $n$ و $PGCD(a, b) = 1$، فإن جداءهما $ab$ يقسم $n$."
      - rtl: "• إذا كان عدد أولي $p$ يقسم جداء $ab$، فإنه يقسم $a$ أو يقسم $b$."

  - graph:
      id: "gauss-logic-flow"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # رسم منطقي للمبرهنة
        - { type: "line", points: [[0, 3], [3, 3]], color: "gray" }
        - { type: "text", content: "a يقسم bc", x: 0.1, y: 3.3, color: "gray" }
        
        - { type: "line", points: [[3, 1.5], [6, 1.5], [6, 4.5], [3, 4.5], [3, 1.5]], color: "orange" }
        - { type: "text", content: "بوابة غوص (PGCD(a,b)=1)", x: 3.2, y: 3.2, color: "blue" }
        
        - { type: "line", points: [[6, 3], [8.5, 3]], color: "#168574", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "a يقسم c", x: 7.3, y: 3.2, color: "#168574" }

        - { type: "text", content: "تطبيق مبرهنة غوص للاستنتاج المنطقي", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "لا تطبق المبرهنة إذا لم يكن العددان $a$ و $b$ أوليين فيما بينهما. مثال: $6$ يقسم $4 \\times 3$ لكن $6$ لا يقسم $4$ ولا يقسم $3$؛ لأن $PGCD(6, 4) = 2 \\neq 1$."
---
