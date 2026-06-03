---
layout: lesson
title: "المبحث 2: الخواص الأساسية (الجمع والضرب)"
subtitle: "الجمع، الطرح، والضرب في مجموعة الأعداد الصحيحة"
permalink: /cong_properties/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 1: تعريف الموافقة بترديد n"
previous_url: "/cong_definition/"
next_title: "المبحث 3: تلاؤم الموافقات مع القوى"
next_url: "/cong_powers/"

elements:
  - h3: "1. تلاؤم الموافقة مع الجمع والطرح"
    id: "congruence-addition-subtraction"
  - parags:
      - rtl: "ليكن $n$ عدداً طبيعياً حيث $n > 1$. إذا كان $a \\equiv b \\pmod{n}$ و $c \\equiv d \\pmod{n}$، فإن:"
      - center: "$a + c \\equiv b + d \\pmod{n}$"
      - center: "$a - c \\equiv b - d \\pmod{n}$"
      - rtl: "<b>مثال:</b> إذا كان $x \\equiv 1 \\pmod{5}$ فإن $x + 4 \\equiv 1 + 4 \\pmod{5}$ أي $x + 4 \\equiv 0 \\pmod{5}$."

  - h3: "2. تلاؤم الموافقة مع الضرب"
    id: "congruence-multiplication"
  - parags:
      - rtl: "إذا كان $a \\equiv b \\pmod{n}$ و $c \\equiv d \\pmod{n}$، فإن:"
      - center: "$a \\times c \\equiv b \\times d \\pmod{n}$"
      - rtl: "ومن أجل كل عدد صحيح $k$:"
      - center: "$k \\times a \\equiv k \\times b \\pmod{n}$"
      - rtl: "<b>ملاحظة:</b> خاصية التلاؤم محققة في الجمع والطرح والضرب، لكنها غير محققة عموماً في القسمة."

  - h3: "3. خاصية التعويض"
    id: "substitution-property"
  - parags:
      - rtl: "تسمح خواص التلاؤم بتعويض أي عدد صحيح بباقي قسمته الإقليدية على $n$ في العبارات التي تشمل عمليات الجمع، الطرح، والضرب."
      - rtl: "<b>مثال:</b> لحساب باقي قسمة الجداء $17 \\times 22$ على $5$:"
      - rtl: "لدينا $17 \\equiv 2 \\pmod{5}$ و $22 \\equiv 2 \\pmod{5}$، ومنه:"
      - center: "$17 \\times 22 \\equiv 2 \\times 2 \\pmod{5}$"
      - center: "$17 \\times 22 \\equiv 4 \\pmod{5}$"

  - graph:
      id: "congruence-ops"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # تمثيل بياني لخاصية التعويض في حساب موافقة الجداء
        # المسار الأول للعدد 17
        - { type: "line", points: [[0, 4], [2, 4]], color: "gray" }
        - { type: "text", content: "17", x: 0.5, y: 4.3, color: "gray" }
        - { type: "line", points: [[2, 4], [4, 3]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "≡ 2 [5]", x: 2.2, y: 3.8, color: "blue" }

        # المسار الثاني للعدد 22
        - { type: "line", points: [[0, 1], [2, 1]], color: "gray" }
        - { type: "text", content: "22", x: 0.5, y: 1.3, color: "gray" }
        - { type: "line", points: [[2, 1], [4, 2]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "≡ 2 [5]", x: 2.2, y: 1.2, color: "blue" }

        # حساب جداء البواقي
        - { type: "point", x: 4, y: 2.5, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "×", x: 3.9, y: 2.7, color: "orange" }
        - { type: "line", points: [[4, 2.5], [7, 2.5]], color: "#168574", arrowStart: false, arrowEnd: true }
        
        # النتيجة
        - { type: "text", content: "2 × 2 = 4", x: 4.5, y: 2.8, color: "#168574" }
        - { type: "text", content: "تعويض الأعداد ببواقي قسمتها يسهل حساب العبارات والجداءات", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "ملاحظة:"
      type: "success"
      NBs:
        - rtl: "لتسهيل الحساب في الموافقات، يُستحسن تعويض الأعداد الكبيرة ببواقي قسمتها الإقليدية قبل إجراء عمليات الجمع أو الضرب."
---
