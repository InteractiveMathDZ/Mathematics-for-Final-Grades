---
layout: lesson
title: "المبحث 3: تلاؤم الموافقات مع القوى"
subtitle: "التعامل مع الأسس الطبيعية في مجموعة الأعداد الصحيحة"
permalink: /cong_powers/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 2: الخواص الأساسية (الجمع والضرب)"
previous_url: "/cong_properties/"
next_title: "المبحث 4: دراسة دوريات بواقي القوى"
next_url: "/cong_cycles/"

elements:
  - h3: "1. الخاصية"
    id: "congruence-power-property"
  - parags:
      - rtl: "ليكن $n$ عدداً طبيعياً حيث $n > 1$. إذا كان $a \\equiv b \\pmod{n}$، فإن من أجل كل عدد طبيعي $k$:"
      - center: "$a^k \\equiv b^k \\pmod{n}$"
      - rtl: "تسمح هذه الخاصية بتعويض أساس القوة بباقي قسمته الإقليدية على $n$ قبل إجراء عملية الرفع إلى الأس."

  - h3: "2. حالتان خاصتان (العددان 1 و -1)"
    id: "special-cases-one"
  - parags:
      - rtl: "يسهل حساب موافقة القوى عند اختيار قيم الأساس المساوي لـ $1$ أو $-1$ بالاستفادة من الخواص الآتية:"
      - rtl: "• من أجل كل عدد طبيعي $k$، فإن: $1^k \\equiv 1 \\pmod{n}$"
      - rtl: "• إذا كان $k$ عدداً زوجياً، فإن: $(-1)^k \\equiv 1 \\pmod{n}$"
      - rtl: "• إذا كان $k$ عدداً فردياً، فإن: $(-1)^k \\equiv -1 \\pmod{n}$"

  - h3: "3. أمثلة تطبيقية"
    id: "application-examples"
  - parags:
      - rtl: "<b>مثال 1:</b> لحساب باقي قسمة $4^{10}$ على $3$:"
      - rtl: "لدينا $4 \\equiv 1 \\pmod{3}$، وبتطبيق خاصية التلاؤم مع القوى نجد:"
      - center: "$4^{10} \\equiv 1^{10} \\pmod{3} \\implies 4^{10} \\equiv 1 \\pmod{3}$"
      - rtl: "<b>مثال 2:</b> لحساب باقي قسمة $2^{10}$ على $3$:"
      - rtl: "لدينا $2 \\equiv -1 \\pmod{3}$، وبتطبيق خاصية التلاؤم مع القوى نجد:"
      - center: "$2^{10} \\equiv (-1)^{10} \\pmod{3} \\implies 2^{10} \\equiv 1 \\pmod{3}$ (لأن الأس 10 عدد زوجي)."

  - graph:
      id: "power-reduction"
      class: "graph-container"
      xDomain: [-2, 11]
      yDomain: [-1, 4]
      elements:
        # تمثيل بياني لمراحل اختزال القوى بتعويض الأساس
        # المرحلة 1: الأساس الأصلي
        - { type: "line", points: [[0, 2], [2, 2]], color: "gray" }
        - { type: "text", content: "الأساس a", x: 0.2, y: 2.3, color: "gray" }
        
        # مرحلة تعويض الأساس بباقي قسمته b
        - { type: "line", points: [[2, 2], [4, 2]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "تعويض الأساس بالباقي", x: 2.1, y: 2.5, color: "blue" }
        
        # المرحلة 2: الأساس المستبدل b
        - { type: "point", x: 4, y: 2, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "الباقي b", x: 3.7, y: 1.4, color: "orange" }
        
        # مرحلة رفع الأس k للباقي b
        - { type: "line", points: [[4, 2], [7, 2]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "الرفع إلى الأس k", x: 4.8, y: 2.5, color: "orange" }
        
        # المرحلة 3: النتيجة النهائية
        - { type: "point", x: 7, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "النتيجة bᵏ", x: 7.2, y: 2.2, color: "#168574" }
        
        # نص توضيحي
        - { type: "text", content: "تعويض الأساس قبل رفع الأس يمنع تضخم المقادير العددية ويختصر خطوات الحساب", x: -0.5, y: -0.5, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "خاصية التلاؤم مع القوى تطبق حتSimpson مأ على <b>الأساس</b> (العدد السفلي) وليس على <b>الأس</b> (العدد العلوي). تعويض الأس بباقي القسمة خطأ رياضي؛ وسيتم دراسة طرق التعامل مع الأسس المتغيرة في مبحث 'دورية البواقي'."
---
