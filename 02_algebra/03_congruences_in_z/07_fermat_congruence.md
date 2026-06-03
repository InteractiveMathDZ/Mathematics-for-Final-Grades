---
layout: lesson
title: "المبحث 7: مبرهنة فيرما الصغرى"
subtitle: "حساب الموافقات بترديد أولي"
permalink: /fermat_congruence/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 6: حساب بواقي قسمة الأعداد الكبيرة"
previous_url: "/big_numbers_calc/"
next_title: "المبحث 8: حل المعادلات من الدرجة الأولى في الموافقات"
next_url: "/cong_equations/"

elements:
  - h3: "1. نص المبرهنة"
    id: "fermat-theorem"
  - parags:
      - rtl: "ليكن $p$ عدداً أولياً، و $a$ عدداً صحيحاً لا يقبل القسمة على $p$ (أي $PGCD(a, p) = 1$)."
      - rtl: "مبرهنة فيرما الصغرى تنص على أن:"
      - center: "$a^{p-1} \\equiv 1 \\pmod{p}$"

  - h3: "2. صيغة إضافية"
    id: "fermat-corollary"
  - parags:
      - rtl: "من أجل كل عدد صحيح $a$، فإن:"
      - center: "$a^p \\equiv a \\pmod{p}$"

  - h3: "3. مثال تطبيقي"
    id: "example"
  - parags:
      - rtl: "لتعيين باقي قسمة $3^{2026}$ على $7$:"
      - rtl: "بما أن $7$ عدد أولي و $PGCD(3, 7) = 1$، فإنه حسب مبرهنة فيرما:"
      - center: "$3^{7-1} = 3^6 \\equiv 1 \\pmod{7}$"
      - rtl: "بقسمة الأس $2026$ على $6$ نجد: $2026 = 6 \\times 337 + 4$."
      - rtl: "إذن:"
      - center: "$3^{2026} = (3^6)^{337} \\times 3^4 \\equiv 1^{337} \\times 81 \\pmod{7}$"
      - rtl: "بما أن $81 = 7 \\times 11 + 4$، فإن $81 \\equiv 4 \\pmod{7}$."
      - center: "$3^{2026} \\equiv 4 \\pmod{7}$"

  - graph:
      id: "fermat-logic"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # شروط المبرهنة
        - { type: "line", points: [[0, 3.5], [3, 3.5], [3, 4.5], [0, 4.5], [0, 3.5]], color: "gray" }
        - { type: "text", content: "الشرط: p أولي", x: 0.4, y: 3.9, color: "blue" }
        - { type: "line", points: [[0, 1.5], [3, 1.5], [3, 2.5], [0, 2.5], [0, 1.5]], color: "gray" }
        - { type: "text", content: "الشرط: PGCD(a,p)=1", x: 0.2, y: 1.9, color: "blue" }

        # بوابة الاستنتاج
        - { type: "line", points: [[3, 4], [4.5, 3.2]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[3, 2], [4.5, 2.8]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[4.5, 2.3], [9, 2.3], [9, 3.7], [4.5, 3.7], [4.5, 2.3]], color: "#168574" }
        - { type: "text", content: "a^(p-1) ≡ 1 [p]", x: 5.2, y: 2.9, color: "#168574" }

        - { type: "text", content: "مخطط شروط واستنتاج مبرهنة فيرما الصغرى", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "مبرهنة فيرما الصغرى صالحة فقط إذا كان الترديد $p$ عدداً أولياً. إذا كان الترديد غير أولي، لا تستعمل هذه المبرهنة."
---
