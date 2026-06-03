---
layout: lesson
title: "المبحث 6: حساب بواقي قسمة الأعداد الكبيرة"
subtitle: "منهجية تبسيط العبارات العددية"
permalink: /big_numbers_calc/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 5: البحث عن الباقي الصغير (القيم السالبة)"
previous_url: "/negative_reminders/"
next_title: "المبحث 7: مبرهنة فيرما الصغرى في الموافقات"
next_url: "/fermat_congruence/"

elements:
  - h3: "1. اختزال الأساس"
    id: "base-reduction"
  - parags:
      - rtl: "لحساب باقي قسمة $a^n$ على $m$، نقوم أولاً باختزال الأساس $a$ بإيجاد باقي قسمته على $m$."
      - rtl: "<b>مثال:</b> لحساب باقي قسمة $1447^{2026}$ على $7$:"
      - rtl: "لدينا $1447 = 7 \\times 206 + 5$، إذن $1447 \\equiv 5 \\pmod{7}$."
      - rtl: "وباستعمال الباقي السالب: $1447 \\equiv 5 - 7 \\equiv -2 \\pmod{7}$."

  - h3: "2. استغلال القوى التوافقية"
    id: "power-utilization"
  - parags:
      - rtl: "نبحث عن قوة للأساس تعطي باقياً يساوي $1$ أو $-1$ لتبسيط الحساب."
      - rtl: "<b>مثال:</b> لحساب باقي قسمة $2^{30}$ على $7$:"
      - center: "$2^3 = 8 \\equiv 1 \\pmod{7}$"
      - center: "$2^{30} = (2^3)^{10} \\equiv 1^{10} \\equiv 1 \\pmod{7}$"

  - h3: "3. العبارات المركبة"
    id: "complex-expressions"
  - parags:
      - rtl: "في حالة العبارات من الشكل $A = a^n + b^m + c$، يُحسب باقي كل حد على حدة ثم تُجمع البواقي وتُختزل."

  - graph:
      id: "big-number-strategy"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # المخطط الانسيابي لخطوات الحساب
        - { type: "line", points: [[0, 3.5], [3, 3.5], [3, 4.5], [0, 4.5], [0, 3.5]], color: "gray" }
        - { type: "text", content: "1. اختزال الأساس", x: 0.3, y: 3.9, color: "blue" }
        - { type: "line", points: [[1.5, 3.5], [1.5, 2.5]], color: "orange", arrowStart: false, arrowEnd: true }

        - { type: "line", points: [[0, 1.5], [3, 1.5], [3, 2.5], [0, 2.5], [0, 1.5]], color: "gray" }
        - { type: "text", content: "2. اختيار الباقي الأمثل", x: 0.3, y: 1.9, color: "blue" }
        - { type: "line", points: [[3, 2], [5, 2]], color: "orange", arrowStart: false, arrowEnd: true }

        - { type: "line", points: [[5, 1.5], [8, 1.5], [8, 2.5], [5, 2.5], [5, 1.5]], color: "gray" }
        - { type: "text", content: "3. البحث عن قوة توافق 1 أو -1", x: 5.3, y: 1.9, color: "orange" }
        - { type: "line", points: [[6.5, 2.5], [6.5, 3.5]], color: "orange", arrowStart: false, arrowEnd: true }

        - { type: "line", points: [[5, 3.5], [8, 3.5], [8, 4.5], [5, 4.5], [5, 3.5]], color: "#168574" }
        - { type: "text", content: "4. تفكيك الأس وحساب النتيجة", x: 5.4, y: 3.9, color: "#168574" }

        - { type: "text", content: "منهجية اختزال المقادير العددية الكبيرة", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "إذا كان الباقي النهائي سالباً، نُضيف إليه الترديد للحصول على الباقي الموجب الأصغر."
        - rtl: "مثال: $A \\equiv -3 \\pmod{5} \\implies A \\equiv (-3+5) \\equiv 2 \\pmod{5}$."
---
