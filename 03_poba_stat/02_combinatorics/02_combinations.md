---
layout: lesson
title: "المبحث 2: التوفيقات وخواصها الجبرية"
subtitle: "دراسة التراكيب غير المرتبة وصيغ بسط الخواص التناظرية وعلاقة باسكال"
permalink: /combinations/
mathJax: true
lessonID: "combCount"

previous_title: "المبحث 1: المبادئ الأساسية للعد"
previous_url: "/counting_principles/"
next_title: "المبحث 3: النمذجة الرياضية لأنواع السحب"
next_url: "/sampling_models/"

elements:
  - h3: "1. مفهوم التوفيقة (Combination)"
  - parags:
      - rtl: "التوفيقة هي اختيار جزء من مجموعة دون مراعاة ترتيب العناصر. ليكن $n$ و $p$ عددين طبيعيين حيث $0 \\le p \\le n$. نسمي توفيقة لـ $p$ عنصراً من بين $n$ عنصراً كل مجموعة جزئية تضم $p$ عنصراً متمايزاً من المجموعة الكلية."
      - rtl: "• <b>القانون الجبري لحساب عدد التوفيقات:</b> نرمز لعدد التوفيقات بالرمز $\\binom{n}{p}$ أو $C_n^p$، ويُعطى بالصيغة التالية:"
      - center: "$\\binom{n}{p} = C_n^p = \\frac{A_n^p}{p!} = \\frac{n!}{p!(n-p)!}$"

  - h3: "2. الخواص الجبرية الأساسية للتوفيقات"
  - parags:
      - rtl: "تتميز التوفيقات بمجموعة من الخواص الجبرية الناتجة مباشرة من صيغتها الحسابية المستقلة، وهي تسهم في تبسيط الحسابات النظرية:"
      - rtl: "• <b>خاصية العناصر الحدية:</b> $\\binom{n}{0} = 1$ ، $\\binom{n}{n} = 1$ ، $\\binom{n}{1} = n$"
      - rtl: "• <b>خاصية التناظر (Symmetry):</b> لكل عددين $n$ و $p$ حيث $0 \\le p \\le n$:"
      - center: "$\\binom{n}{p} = \\binom{n}{n-p}$"

  - h3: "3. علاقة باسكال (Pascal's Identity)"
  - parags:
      - rtl: "علاقة باسكال هي مبرهنة جبرية تسمح بحساب عدد التوفيقات بشكل تراجعي وتأسيس ما يُعرف بمثلث باسكال. لكل عددين طبيعيين $n$ و $p$ حيث $0 \\le p \\le n-1$، لدينا:"
      - center: "$\\binom{n}{p} + \\binom{n}{p+1} = \\binom{n+1}{p+1}$"
      - rtl: "أو بالصياغة البديلة: $\\binom{n-1}{p-1} + \\binom{n-1}{p} = \\binom{n}{p}$"

  # هيكل مثلث باسكال الحسابي لعرض الآلية التراجعية بالتوافق مع التباين
  - raw_html:
      text: "<div class='graph' style='text-align: center; margin: 20px 0;'><svg width='400' height='160' viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg' style='background: transparent; max-width: 100%;'><style>text { font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 14px; fill: #000000; text-anchor: middle; } .row-t { fill: #888888; font-size: 11px; } .highlight-p { fill: #ef4444; font-weight: bold; } .highlight-res { fill: #0056b3; font-weight: bold; }</style><text x='40' y='25' class='row-t'>n = 0</text><text x='200' y='25'>1</text><text x='40' y='50' class='row-t'>n = 1</text><text x='175' y='50'>1</text><text x='225' y='50'>1</text><text x='40' y='75' class='row-t'>n = 2</text><text x='150' y='75'>1</text><text x='200' y='75'>2</text><text x='250' y='75'>1</text><text x='40' y='100' class='row-t'>n = 3</text><text x='125' y='100'>1</text><text x='175' y='100' class='highlight-p'>3</text><text x='225' y='100' class='highlight-p'>3</text><text x='275' y='100'>1</text><text x='40' y='125' class='row-t'>n = 4</text><text x='100' y='125'>1</text><text x='150' y='125'>4</text><text x='200' y='125' class='highlight-res'>6</text><text x='250' y='125'>4</text><text x='300' y='125'>1</text><path d='M 165,105 L 190,115 M 235,105 L 210,115' stroke='#ef4444' stroke-width='1' fill='none' /></svg></div>"



  - h3: "4. دستور ثنائي الحد (Binomial Theorem)"
  - parags:
      - rtl: "يُستخدم هذا الدستور لنشر العبارات الجبرية من الشكل $(a+b)^n$ حيث $n$ عدد طبيعي و $a, b$ عددان حقيقيان، وتظهر التوفيقات فيه كمعاملات حركية للمجموع الممتد:"
      - center: "$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$"

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "الشرط الجوهري لاستخدام التوفيقة $\\binom{n}{p}$ في نموذج العد هو عدم أهمية ترتيب العناصر المكونة للمجموعة الجزئية (مثل: سحب كرات في آن واحد، تشكيل لجان فرعية بدون تحديد مهام أو مناصب لأعضائها)."
---
