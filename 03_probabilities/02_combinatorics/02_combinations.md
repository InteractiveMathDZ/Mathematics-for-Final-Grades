---
layout: lesson
title: "المبحث 2: التوفيقات وخواصها الجبرية"
subtitle: "التراكيب غير المرتبة وعلاقة باسكال"
permalink: /combinations/
mathJax: true
lessonID: "combCount"

# روابط الاتصال
previous_title: "المبادئ الأساسية للعد"
previous_url: "/counting_principles/"
next_title: "النمذجة الرياضية لأنواع السحب"
next_url: "/sampling_models/"

elements:
  - h3: "1. مفهوم التوفيقة"
    id: "definition"
  - parags:
      - rtl: "التوفيقة هي اختيار جزء من مجموعة دون مراعاة الترتيب. عدد توفيقات $p$ عنصر من بين $n$ هو:"
      - center: "$\\binom{n}{p} = C_n^p = \\frac{n!}{p!(n-p)!}$"

  - h3: "2. الخواص الجبرية"
    id: "properties"
  - parags:
      - rtl: "• <b>التناظر:</b> $\\binom{n}{p} = \\binom{n}{n-p}$"
      - rtl: "• <b>العناصر الحدية:</b> $\\binom{n}{0} = 1$ ، $\\binom{n}{n} = 1$ ، $\\binom{n}{1} = n$"

  - h3: "3. علاقة باسكال ودستور ثنائي الحد"
    id: "pascal-binomial"
  - parags:
      - rtl: "• <b>علاقة باسكال:</b> $\\binom{n}{p} + \\binom{n}{p+1} = \\binom{n+1}{p+1}$"
      - rtl: "• <b>دستور ثنائي الحد:</b> $(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$"

  - graph:
      id: "pascal-triangle-viz"
      class: "graph-container"
      xDomain: [0, 4]
      yDomain: [0, 4]
      elements:
        - { type: "text", content: "1", x: 2, y: 3.5 }
        - { type: "text", content: "1  1", x: 2, y: 3 }
        - { type: "text", content: "1  2  1", x: 2, y: 2.5 }
        - { type: "text", content: "1  3  3  1", x: 2, y: 2 }
        - { type: "text", content: "1  4  6  4  1", x: 2, y: 1.5 }

  - NB:
      title: "متى نستخدم التوفيقة؟"
      type: "success"
      NBs:
        - rtl: "نستخدم التوفيقة عندما يكون الترتيب غير مهم (سحب كرات في آن واحد، اختيار لجنة غير موزعة المهام)."
---
