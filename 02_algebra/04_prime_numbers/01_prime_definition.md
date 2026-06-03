---
layout: lesson
title: "المبحث 1: تعريف العدد الأولي وخواصه"
subtitle: "مفهوم الأعداد الأولية في مجموعة الأعداد الصحيحة"
permalink: /prime_definition/
mathJax: true
graph: true
lessonID: "primN"

# روابط الاتصال
previous_title: "خارطة طريق الأعداد الأولية"
previous_url: "/prime_numbers_hub/"
next_title: "المبحث 2: كيفية اختبار أولية عدد (غربال إراتوستين)"
next_url: "/primes_sieve/"

elements:
  - h3: "1. تعريف العدد الأولي"
    id: "prime-definition"
  - parags:
      - rtl: "العدد الأولي هو كل عدد طبيعي أكبر تماماً من $1$، يقبل قاسمين موجبين فقط هما: الواحد ($1$) والعدد نفسه ($p$)."
      - rtl: "مجموعة الأعداد الأولية الأولى هي: $P = \\{2, 3, 5, 7, 11, 13, 17, 19, ...\\}$."

  - h3: "2. ملاحظات تصحيحية"
    id: "important-notes"
  - parags:
      - rtl: "• العدد $1$ ليس أولياً: لأنه يملك قاسماً واحداً فقط."
      - rtl: "• العدد $2$ هو العدد الأولي الزوجي الوحيد: كل الأعداد الأولية الأخرى هي أعداد فردية."
      - rtl: "• العدد المؤلّف (المركب): هو كل عدد طبيعي أكبر من $1$ وليس أولياً، أي أنه يملك أكثر من قاسمين."

  - h3: "3. خصائص أساسية"
    id: "basic-properties"
  - parags:
      - rtl: "• إذا كان $p$ عدداً أولياً و $a$ عدداً صحيحاً لا يقبل القسمة على $p$، فإن $PGCD(p, a) = 1$."
      - rtl: "• <b>مبرهنة إقليدس:</b> إذا كان عدد أولي $p$ يقسم جداء عددين $ab$، فإن $p$ يقسم $a$ أو $p$ يقسم $b$."

  - graph:
      id: "prime-vs-composite"
      class: "graph-container"
      xDomain: [-3, 13]
      yDomain: [-2, 5]
      elements:
        # تمثيل الأعداد الأولية (عدم قابلية التجزئة)
        - { type: "line", points: [[0, 3], [4, 3], [4, 4.5], [0, 4.5], [0, 3]], color: "#168574" }
        - { type: "text", content: "الأعداد الأولية: {2, 3, 5, 7}", x: 0.2, y: 3.6, color: "#168574" }
        - { type: "point", x: 0.5, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 1.2, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 1.9, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 2.6, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 3.3, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "text", content: "العدد 5: قواسمه هي 1 و 5", x: 0.2, y: 1.5, color: "gray" }

        # تمثيل الأعداد المركبة (قابلية التجزئة)
        - { type: "line", points: [[7, 3], [11, 3], [11, 4.5], [7, 4.5], [7, 3]], color: "blue" }
        - { type: "text", content: "الأعداد المركبة: {4, 6, 8, 9}", x: 7.2, y: 3.6, color: "blue" }
        - { type: "point", x: 7.5, y: 2.2, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 8.5, y: 2.2, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 9.5, y: 2.2, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 7.5, y: 1.6, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 8.5, y: 1.6, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 9.5, y: 1.6, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "text", content: "العدد 6: مصفوفة (2 × 3)", x: 7.2, y: 0.9, color: "gray" }

  - NB:
      title: "تنبيه:"
      type: "info"
      NBs:
        - rtl: "لا توجد علاقة بين كون العدد فردياً وكونه أولياً؛ العدد 9 فردي لكنه مركب، والعدد 2 زوجي وهو أول عدد أولي."
---
