---
layout: lesson
title: "المبحث 8: حل المعادلات الخطية في الموافقات"
subtitle: "البحث عن المجهول x في مجموعة الأعداد الصحيحة"
permalink: /cong_equations/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 7: مبرهنة فيرما الصغرى في الموافقات"
previous_url: "/fermat_congruence/"
next_title: "المبحث 9: إثبات قابلية القسمة على عدد ثابت"
next_url: "/divisibility_proof/"

elements:
  - h3: "1. الشكل العام"
    id: "linear-equation-form"
  - parags:
      - rtl: "تكتب المعادلة الخطية بمجهول واحد $x$ بترديد $n$ على الشكل:"
      - center: "$ax \\equiv b \\pmod{n}$"
      - rtl: "حيث $a$ و $b$ أعداد صحيحة و $n$ عدد طبيعي أكبر من 1."

  - h3: "2. شرط وجود الحلول"
    id: "existence-condition"
  - parags:
      - rtl: "تقبل المعادلة $ax \\equiv b \\pmod{n}$ حلولاً إذا وفقط إذا كان القاسم المشترك الأكبر $d = PGCD(a, n)$ يقسم العدد $b$."
      - rtl: "في حالة $PGCD(a, n) = 1$، تقبل المعادلة حلاً وحيداً في كل فصل تكافؤ بترديد $n$."

  - h3: "3. خطوات الحل"
    id: "solution-steps"
  - parags:
      - rtl: "لحل المعادلة، نتبع الخطوات التالية:"
      - rtl: "• <b>التبسيط:</b> اختزال المعاملات $a$ و $b$ بترديد $n$."
      - rtl: "• <b>إيجاد حل خاص:</b> بالتعويض المباشر أو استعمال مبرهنة بيزو."
      - rtl: "• <b>الاستنتاج:</b> إذا كان $PGCD(a, n) = 1$، يمكن القسمة على $a$ بضرب الطرفين في نظير $a$ بترديد $n$."
      - rtl: "<b>مثال:</b> حل المعادلة $3x \\equiv 1 \\pmod{5}$:"
      - rtl: "نلاحظ أن $3x \\equiv 6 \\pmod{5}$ (لأن $6 = 1+5$)."
      - center: "$3x \\equiv 3 \\times 2 \\pmod{5}$"
      - rtl: "بما أن $PGCD(3, 5) = 1$، فإن $x \\equiv 2 \\pmod{5}$."
      - rtl: "إذن الحلول هي من الشكل: $x = 5k + 2$ حيث $k \\in \\mathbb{Z}$."

  - graph:
      id: "linear-congruence"
      class: "graph-container"
      xDomain: [-2, 16]
      yDomain: [-2, 3]
      elements:
        # تمثيل بياني لدورية الحلول
        - { type: "line", points: [[-2, 0], [16, 0]], color: "gray" }
        - { type: "point", x: 2, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "x₀ = 2", x: 1.8, y: -0.6, color: "#168574" }
        
        - { type: "line", points: [[2, 0.5], [7, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+5", x: 4, y: 0.8, color: "blue" }
        - { type: "point", x: 7, y: 0, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "7", x: 7, y: -0.6, color: "orange" }
        
        - { type: "line", points: [[7, 0.5], [12, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 12, y: 0, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "12", x: 12, y: -0.6, color: "orange" }
        
        - { type: "text", content: "الحلول تتكرر بانتظام وفق خطوة الترديد (5k)", x: -1, y: 1.8, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "لا يجوز القسمة في الموافقات إلا إذا كان العدد المَقسوم عليه أولياً مع الترديد $n$ (أي $PGCD(a, n) = 1$)."
---
