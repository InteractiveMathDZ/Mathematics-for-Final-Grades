---
layout: lesson
title: "المبحث 1: تعريف الموافقة بترديد n"
subtitle: "مفهوم الموافقة في مجموعة الأعداد الصحيحة"
permalink: /cong_definition/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "خارطة طريق حساب الموافقات"
previous_url: "/congruences_hub/"
next_title: "المبحث 2: الخواص الأساسية (الجمع والضرب)"
next_url: "/cong_properties/"

elements:
  - h3: "1. التعريف"
    id: "congruence-definition"
  - parags:
      - rtl: "ليكن $n$ عدداً طبيعياً حيث $n > 1$. نقول إن العددين الصحيحين $a$ و $b$ <b>متوافقان بترديد $n$</b> إذا وفقط إذا كان لهما نفس باقي القسمة الإقليدية على $n$."
      - rtl: "ونكتب:"
      - center: "$a \\equiv b \\pmod{n}$"

  - h3: "2. خواص متكافئة"
    id: "equivalent-properties"
  - parags:
      - rtl: "العبارة $a \\equiv b \\pmod{n}$ تكافئ القول إن:"
      - rtl: "• $n$ يقسم الفرق $(a - b)$."
      - rtl: "• يوجد عدد صحيح $k$ بحيث: $a = b + kn$."

  - h3: "3. حالات خاصة"
    id: "special-cases"
  - parags:
      - rtl: "• كل عدد صحيح $a$ يوافق باقي قسمته الإقليدية $r$ بترديد $n$:"
      - center: "$a \\equiv r \\pmod{n} \\quad \\text{حيث} \\quad 0 \\le r < n$"
      - rtl: "• يكون $a \\equiv 0 \\pmod{n}$ إذا وفقط إذا كان $a$ مضاعفاً للعدد $n$."

  - graph:
      id: "congruence-mod"
      class: "graph-container"
      xDomain: [-2, 15]
      yDomain: [-2, 3]
      elements:
        # تمثيل بياني للموافقات بترديد 5 على المحور العددي
        - { type: "line", points: [[-2, 0], [15, 0]], color: "gray" }
        
        # القيمة المرجعية 2
        - { type: "point", x: 2, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2", x: 2, y: -0.6, color: "#168574" }
        
        # الانتقال بمقدار الترديد 5 إلى القيمة 7
        - { type: "line", points: [[2, 0.5], [7, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+5", x: 4.2, y: 0.8, color: "blue" }
        - { type: "point", x: 7, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "7", x: 7, y: -0.6, color: "#168574" }
        
        # الانتقال بمقدار الترديد 5 إلى القيمة 12
        - { type: "line", points: [[7, 0.5], [12, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+5", x: 9.2, y: 0.8, color: "blue" }
        - { type: "point", x: 12, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "12", x: 12, y: -0.6, color: "#168574" }
        
        # نص توضيحي
        - { type: "text", content: "العبارة 12 ≡ 7 ≡ 2 بترديد 5 تعني أن الفروق بين هذه الأعداد هي مضاعفات للعدد 5", x: -1, y: 1.8, color: "#eee" }

  - NB:
      title: "ملاحظات:"
      type: "info"
      NBs:
        - rtl: "علاقة الموافقة هي علاقة تكافؤ في $\\mathbb{Z}$، وتتميز بالخواص التالية:"
        - rtl: "• <b>الانعكاسية:</b> من أجل كل عدد صحيح $a$، فإن $a \\equiv a \\pmod{n}$."
        - rtl: "• <b>التناظرية:</b> إذا كان $a \\equiv b \\pmod{n}$ فإن $b \\equiv a \\pmod{n}$."
        - rtl: "• <b>التعدي:</b> إذا كان $a \\equiv b \\pmod{n}$ و $b \\equiv c \\pmod{n}$ فإن $a \\equiv c \\pmod{n}$."
---
