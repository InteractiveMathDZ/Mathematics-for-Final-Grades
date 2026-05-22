---
layout: lesson
title: "دستور الاحتمالات الكلية وتطبيقاته العكسية"
subtitle: "تجميع مسارات الشجرة المتفرعة وحساب الاحتمالات الارتدادية العكسية"
permalink: /total_probability/
mathJax: true
lessonID: "proSt"

previous_title: "شجرة الاحتمالات وقواعد رسم المسارات"
previous_url: "/probability_tree/"
next_title: "خارطة طريق التحليل التوفيقي وأدوات العد الحسابي"
next_url: "/combinatorics_hub/"

elements:
  - h3: "1. مفهوم التجزئة التامة لفضاء العينات (Partition of a Sample Space)"
  - parags:
      - rtl: "قبل بناء الدستور الكلي، يجب ضبط الأرضية النظرية: نقول عن مجموعة من الحوادث $B_1, B_2, \\dots, B_n$ أنها تشكل <b>تجزئة تامة</b> للفضاء العيني $\\Omega$ إذا حققت الشرطين التاليين:"
      - rtl: "• <b>التنافي المثنى:</b> أي حادثتين مختلفتين هما متنافيتان تماماً ($B_i \\cap B_j = \\emptyset$ عند $i \\neq j$)."
      - rtl: "• <b>الشمولية المطلقة:</b> اتحاد كل هذه الحوادث يعيد تشكيل الفضاء الكامل $\\Omega$ بلا أي فراغ:"
      - center: "($B_1 \\cup B_2 \\cup \\dots \\cup B_n = \\Omega$)."

  - h3: "2. دستور الاحتمالات الكلية (Law of Total Probability)"
  - parags:
      - rtl: "إذا كانت لدينا حادثة عشوائية $A$ مستعرضة تتقاطع مع حوادث التجزئة التامة، فإن احتمال وقوعها الإجمالي يُحسب رياضيا بتجميع احتمالات تقاطعاتها الصافية مع كل جزء من التجزئة."
      - rtl: "بلغة شجرة الاحتمالات، الاحتمال الكلي للحادثة $A$ هو <b>مجموع احتمالات جميع المسارات المنتهية بالحادثة $A$</b>:"
  - formula: "$P(A) = \\sum_{i=1}^{n} P(A \\cap B_i) = P(B_1) \\times P_{B_1}(A) + P(B_2) \\times P_{B_2}(A) + \\dots + P(B_n) \\times P_{B_n}(A)$"

  # رسم SVG نقي يوضح تقاطع الحادثة المستعرضة A مع التجزئة التامة متوافق مع الوضعين
  - raw_html: |
      <div class='graph' style='text-align: center; margin: 25px 0;'><svg width='500' height='160' viewBox='0 0 500 160' xmlns='http://www.w3.org/2000/svg' style='background: transparent; max-width: 100%;'><style>text { font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 13px; fill: #000000; } .label-bold { font-weight: bold; } .a-circle { stroke: #ef4444; stroke-width: 2.5; fill: none; } .blue-t { fill: #0056b3; } .gray-t { fill: #555555; }</style><rect x='10' y='10' width='480' height='140' rx='6' fill='none' stroke='#888888' stroke-width='1.5' /><line x1='160' y1='10' x2='160' y2='150' stroke='#888888' stroke-width='1' stroke-dasharray='4,4' /><line x1='320' y1='10' x2='320' y2='150' stroke='#888888' stroke-width='1' stroke-dasharray='4,4' /><text x='80' y='32' class='label-bold gray-t'>التجزئة B₁</text><text x='240' y='32' class='label-bold gray-t'>التجزئة B₂</text><text x='400' y='32' class='label-bold gray-t'>التجزئة B₃</text><path d='M 100,80 A 70,50 0 1,0 380,80 A 70,50 0 1,0 100,80' class='a-circle' /><text x='240' y='85' text-anchor='middle' fill='#ef4444' class='label-bold' style='font-size: 15px;'>الحادثة الكلية A</text><text x='115' y='115' fill='#0056b3' style='font-size: 11px;'>A &cap; B₁</text><text x='240' y='125' text-anchor='middle' fill='#0056b3' style='font-size: 11px;'>A &cap; B₂</text><text x='365' y='115' fill='#0056b3' style='font-size: 11px;'>A &cap; B₃</text></svg></div>

  - h3: "3. التطبيقات العكسية: دستور بايز (Bayes' Theorem)"
  - parags:
      - rtl: "دستور بايز هو آلة حسابية ارتدادية تسير بعكس اتجاه الزمن في شجرة الاحتمالات. يُستخدم عندما تقع النتيجة النهائية $A$ بالفعل، ونريد حساب احتمال أن تكون قد نبعت من مسبب أو فرع محدد $B_k$ (الاحتمال البعدي - Posterior Probability)."
      - rtl: "• <b>الصياغة الرياضية الميكانيكية:</b> يُحسب احتمال المسبب $B_k$ علماً أن النتيجة $A$ محققة عبر كسر صافٍ: نضع احتمال المسار الخاص بالمسبب في البسط، ومجموع كل مسارات الاحتمال الكلي في المقام:"
      - center: "$P_A(B_k) = \\frac{P(B_k \\cap A)}{P(A)} = \\frac{P(B_k) \\times P_{B_k}(A)}{P(B_1) \\times P_{B_1}(A) + \\dots + P(B_n) \\times P_{B_n}(A)}$"

  - NB:
      title: "فائدة:"
      type: "info"
      NBs:
        - rtl: "في المسائل النموذجية لامتحانات البكالوريا، تكتشف سؤال بايز فوراً عندما تجد صيغة لغوية ارتدادية مثل: 'علماً أن القطعة المسحوبة معيبة، ما احتمال أن تكون من صنع الآلة الأولى؟'. هنا تدرك مباشرة أنك تسير بعكس فروع الشجرة، والبسط هو حاصل ضرب فروع المسار المستهدف والمقام هو الناتج الكلي الذي حسبته في السؤال السابق."
---
