---
layout: lesson
title: "شجرة الاحتمالات وقواعد رسم المسارات"
subtitle: "النمذجة البصرية للاختبارات المتتالية وضبط ميكانيكية حساب فروع الشجرة"
permalink: /probability_tree/
mathJax: true
lessonID: "proSt"

previous_title: "المبحث 1: الاحتمالات الشرطية واستقلال حوادث"
previous_url: "/conditional_probability/"
next_title: "المبحث 3: دستور الاحتمالات الكلية وتطبيقاته العكسية"
next_url: "/total_probability/"

elements:
  - h3: "1. شجرة الاحتمالات (Probability Tree)"
  - parags:
      - rtl: "شجرة الاحتمالات هي أداة هندسية بصرية تُستخدم لتنظيم ونمذجة الاختبارات العشوائية المركبة أو المتتالية. تتكون الشجرة من ثلاثة عناصر أساسية:"
      - rtl: "• <b>العُقد (Nodes):</b> تمثل نقاط التفرع والقرار حيث تنطلق منها الاحتمالات."
      - rtl: "• <b>الفروع (Branches):</b> تمثل المسارات الممكنة لكل حادثة، ويُكتب على كل فرع الاحتمال الخاص به."
      - rtl: "• <b>المسارات الكلية (Paths):</b> عبارة عن تتابع من الفروع من نقطة الانطلاق إلى النهاية، وتمثل وقوع الحوادث المتتالية (التقاطع)."

  - h3: "2. رسم الشجرة"
  - parags:
      - rtl: "لكي نرسم شجرة إحتمالات صحيحة رياضيا الصحيح، يجب أن تخضع لقاعدتين لا يمكن خرقُهما:"
      - rtl: "• <b>قاعدة العقدة (Sum Rule):</b> مجموع الاحتمالات المحمولة على الفروع الخارجة من نفس العقدة يساوي دائماً $1$. (لأن الحوادث المتفرعة تشكل جزأً تاماً من الفضاء المتاح عند تلك النقطة)."
      - rtl: "• <b>قاعدة المسار (Product Rule):</b> احتمال أي مسار كامل (من البداية إلى النهاية) يساوي حاصل ضرب (جداء) الاحتمالات المحمولة على الفروع المكونة لهذا المسار. هندسياً، الفروع اللاحقة للشجرة تحمل دائماً <b>احتمالات شرطية</b>."

  # رسم SVG نقي لشجرة احتمالات بسيطة متناسق وموزون في سطر واحد
  - raw_html: |
      <div class='graph' style='text-align: center; margin: 25px 0;'><svg width='500' height='180' viewBox='0 0 500 180' xmlns='http://www.w3.org/2000/svg' style='background: transparent; max-width: 100%;'><style>text { font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 13px; fill: #888888; } .prob-val { fill: #0056b3; font-style: italic; font-weight: bold; } .cond-val { fill: #168574; font-style: italic; font-weight: bold; } .node-t { font-weight: bold; }</style><circle cx='40' cy='90' r='4' fill='#888888' /><text x='25' y='85' fill='#888888'>المبدأ</text><line x1='40' y1='90' x2='180' y2='40' stroke='#0056b3' stroke-width='1.5' /><text x='100' y='55' class='prob-val'>P(A)</text><text x='195' y='44' class='node-t'>A</text><line x1='210' y1='40' x2='340' y2='20' stroke='#168574' stroke-width='1.5' /><text x='270' y='25' class='cond-val'>P_A(B)</text><text x='355' y='24' class='node-t'>B</text><line x1='210' y1='40' x2='340' y2='60' stroke='#168574' stroke-width='1.5' /><text x='270' y='60' class='cond-val'>P_A(B&#772;)</text><text x='355' y='64' class='node-t'>B&#772;</text><line x1='40' y1='90' x2='180' y2='140' stroke='#0056b3' stroke-width='1.5' /><text x='100' y='130' class='prob-val'>P(A&#772;)</text><text x='195' y='144' class='node-t'>A&#772;</text><line x1='210' y1='140' x2='340' y2='120' stroke='#168574' stroke-width='1.5' /><text x='270' y='125' class='cond-val'>P_A&#772;(B)</text><text x='355' y='124' class='node-t'>B</text><line x1='210' y1='140' x2='340' y2='160' stroke='#168574' stroke-width='1.5' /><text x='270' y='160' class='cond-val'>P_A&#772;(B&#772;)</text><text x='355' y='164' class='node-t'>B&#772;</text></svg></div>

  - h3: "3. التفسير الحركي للفروع اللاحقة"
  - parags:
      - rtl: "الخطأ الأكبر هو اعتقاد أن الفروع الداخلية تحمل احتمالات تقاطع؛ الحقيقة الرياضية أن الفروع في المرحلة الأولى تحمل احتمالات بسيطة مثل $P(A)$، بينما الفروع في المرحلة الثانية وما بعدها تحمل دائماً <b>احتمالات شرطية مقيدة (Conditional Probabilities)</b> مثل $P_A(B)$."
      - rtl: "وعند ضرب فرع المرحلة الأولى في فرع المرحلة الثانية، نطبق مباشرة دستور الاحتمالات المركبة للحصول على ناتج المسار الشامل الممثل للتقاطع:"
      - center: "$\\text{Path}(A \\rightarrow B) = P(A) \\times P_A(B) = P(A \\cap B)$"

  - NB:
      title: " كيف تتأكد من صحة الشجرة:"
      type: "info"
      NBs:
        - rtl: "عند بناء أي شجرة احتمالات في ورقة الامتحان، تحقق فوراً باستخدام 'ميزان العقدة': اجمع كل الفروع الخارجة من نفس النقطة؛ إذا لم تجد المجموع يساوي $1$ تماماً، فاعلم أن هناك خللاً في حساب الخلطة الاحتمالية وعليك إعادة موازنتها فوراً قبل مواصلة السير."
---
