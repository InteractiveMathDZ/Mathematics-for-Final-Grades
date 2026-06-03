---
layout: lesson
title: "المبحث 5: البواقي السالبة والتبسيط"
subtitle: "استعمال القيم السالبة في حساب الموافقات"
permalink: /negative_reminders/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 4: دراسة دورية بواقي القوى"
previous_url: "/cong_cycles/"
next_title: "المبحث 6: حساب باقي قسمة الأعداد الكبيرة"
next_url: "/big_numbers_calc/"

elements:
  - h3: "1. تعريف الباقي السالب"
    id: "negative-remainder-definition"
  - parags:
      - rtl: "لأي عددين صحيحين $a$ و $b$ بترديد $n$، إذا كان $a \\equiv r \\pmod{n}$، فإنه يمكن كتابة:"
      - center: "$a \\equiv r - n \\pmod{n}$"
      - rtl: "هذه الخاصية تسمح باستبدال الباقي الموجب $r$ بقيمة سالبة $r - n$ إذا كان ذلك يسهل الحساب."
      - rtl: "<b>مثال:</b> $4 \\equiv 4 - 5 \\equiv -1 \\pmod{5}$."

  - h3: "2. فائدة البواقي السالبة"
    id: "simplification-utility"
  - parags:
      - rtl: "تساهم القيم السالبة (خاصة $-1$) في تبسيط حساب القوى ذات الأسس الكبيرة."
      - rtl: "<b>تطبيق:</b> حساب باقي قسمة $4^{2026}$ على $5$:"
      - rtl: "بما أن $4 \\equiv -1 \\pmod{5}$، فإن:"
      - center: "$4^{2026} \\equiv (-1)^{2026} \\pmod{5}$"
      - center: "$4^{2026} \\equiv 1 \\pmod{5}$ (لأن الأس 2026 زوجي)."

  - h3: "3. حالات الاستعمال"
    id: "usage-cases"
  - parags:
      - rtl: "يُفضل تحويل الباقي $r$ إلى قيمة سالبة إذا كان قريباً من الترديد $n$، مثل:"
      - rtl: "• $10 \\equiv -1 \\pmod{11}$"
      - rtl: "• $16 \\equiv -1 \\pmod{17}$"

  - graph:
      id: "negative-mod-viz"
      class: "graph-container"
      xDomain: [-3, 7]
      yDomain: [-2, 3]
      elements:
        # تمثيل بياني لتكافؤ القيم بترديد 5
        - { type: "line", points: [[-3, 0], [7, 0]], color: "gray" }
        - { type: "point", x: 0, y: 0, strokeColor: "gray", fillColor: "gray", size: 2 }
        - { type: "text", content: "0", x: 0, y: -0.6, color: "gray" }
        
        # التقدم الموجب
        - { type: "line", points: [[0, 0.5], [4, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+4", x: 1.5, y: 0.8, color: "blue" }
        - { type: "point", x: 4, y: 0, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "4", x: 4, y: -0.6, color: "blue" }
        
        # الرجوع السالب
        - { type: "line", points: [[0, 1.4], [-1, 1.4]], color: "#168574", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "-1", x: -1.2, y: 1.7, color: "#168574" }
        - { type: "point", x: -1, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "-1", x: -1, y: -0.6, color: "#168574" }
        
        - { type: "text", content: "التكافؤ 4 ≡ -1 بترديد 5", x: -2.5, y: -1.5, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "رغم سهولة التعامل مع البواقي السالبة أثناء الحساب، يجب دائماً كتابة الباقي النهائي في النتيجة على شكل عدد طبيعي محصور بين $0$ و $n-1$."
---
