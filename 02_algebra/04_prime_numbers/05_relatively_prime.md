---
layout: lesson
title: "المبحث 5: الأعداد الأولية فيما بينها"
subtitle: "مفهوم الاستقلال والقاسم المشترك"
permalink: /relatively_prime/
mathJax: true
graph: true
lessonID: "primN"

# روابط الاتصال
previous_title: "المبحث 4: استخراج القواسم والمضاعفات بالتفكيك"
previous_url: "/divisors_multiples/"
next_title: "المبحث 6: مبرهنة غوص (Gauss) للأعداد الأولية"
next_url: "/gauss_primes/"

elements:
  - h3: "1. التعريف الرياضي"
    id: "definition"
  - parags:
      - rtl: "نقول عن عددين طبيعيين $a$ و $b$ أنهما أوليان فيما بينهما (Coprime) إذا كان قاسمهما المشترك الأكبر يساوي $1$:"
      - center: "$PGCD(a, b) = 1$"
      - rtl: "<b>ملاحظة:</b> لا يشترط في هذه الخاصية أن يكون $a$ أو $b$ عدداً أولياً بذاته؛ فالعددان $8$ و $9$ أوليان فيما بينهما رغم كونهما مركبين."

  - h3: "2. مبرهنة بيزو (Bézout's Identity)"
    id: "bezout-theorem"
  - parags:
      - rtl: "يكون العددان الصحيحان $a$ و $b$ أوليين فيما بينهما إذا وفقط إذا وُجد عددان صحيحان $u$ و $v$ بحيث:"
      - center: "$au + bv = 1$"
      - rtl: "تعتبر هذه المبرهنة أداة جوهرية في حل المعادلات الديوفانتية وإثبات العلاقات بين الأعداد."

  - h3: "3. نتائج أساسية"
    id: "properties"
  - parags:
      - rtl: "• الكسر $\\frac{a}{b}$ يكون غير قابل للاختزال إذا وفقط إذا كان $a$ و $b$ أوليين فيما بينهما."
      - rtl: "• أي عددين طبيعيين متتاليين $n$ و $n+1$ هما أوليان فيما بينهما دائماً."
      - rtl: "• أي عددين أوليين مختلفين هما حتماً أوليان فيما بينهما."

  - graph:
      id: "coprime-viz"
      class: "graph-container"
      xDomain: [-3, 11]
      yDomain: [-2, 5]
      elements:
        # رسم توضيحي لتقاطع القواسم
        - { type: "line", points: [[0, 2], [3, 4.5], [6, 2], [3, -0.5], [0, 2]], color: "blue" }
        - { type: "text", content: "قواسم 8", x: 0.2, y: 3.5, color: "blue" }
        - { type: "line", points: [[4, 2], [6, 4.5], [9, 2], [6, -0.5], [4, 2]], color: "orange" }
        - { type: "text", content: "قواسم 9", x: 7.2, y: 3.5, color: "orange" }
        
        # نقطة التقاطع الوحيدة
        - { type: "point", x: 4.5, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "1", x: 4.4, y: 2.4, color: "#168574" }
        - { type: "text", content: "التقاطع الوحيد", x: 3.8, y: 1.1, color: "#168574" }

        - { type: "text", content: "استقلالية قواسم العددين تثبت أنها أولية فيما بينها", x: 0, y: -1.2, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "تذكر دائماً أن صفة 'الأولية فيما بينهما' هي علاقة بين عددين وليست خاصية ذاتية لعدد واحد."
---
