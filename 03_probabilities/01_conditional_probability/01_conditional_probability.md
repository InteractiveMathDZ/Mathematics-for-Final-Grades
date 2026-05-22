---
layout: lesson
title: "الاحتمالات الشرطية واستقلال حوادث"
subtitle: "حساب الاحتمال المقيد بالمعلومات المسبقة وتحديد بنية الارتباط الجبري"
permalink: /conditional_probability/
mathJax: true
lessonID: "proSt"

previous_title: "خارطة طريق الاحتمالات الشرطية"
previous_url: "/conditional_probability_hub/"
next_title: "شجرة الاحتمالات وقواعد رصف المسارات"
next_url: "/probability_tree/"

elements:
  - h3: "1. مفهوم الاحتمال الشرطي"
  - parags:
      - rtl: "الاحتمال الشرطي هو إعادة تقييم ووزن احتمال وقوع حادثة $A$ مع العلم المسبق والقطعي بأن حادثة أخرى $B$ قد وقعت بالفعل (حيث $P(B) \\neq 0$). رياضيا، هذا يعني اختزال وبتر الفضاء العيني الشامل $\\Omega$ ليصبح فضاء الحوادث الجديد الأضيق هو $B$."
      - rtl: "• <b>الصياغة الجبرية:</b> نرمز لاحتمال الحادثة $A$ علماً أن $B$ محققة بالرمز $P_B(A)$، ويُحسب وفق النسبة الصافية التالية:"
      - center: "$P_B(A) = \\frac{P(A \\cap B)}{P(B)}$"

  - h3: "2. دستور الاحتمالات المركبة"
  - parags:
      - rtl: "من الصياغة السابقة، نستخرج عبارة حساب احتمال التقاطع (وقوع الحادثتين معاً في آن واحد). احتمال التقاطع يساوي احتمال الحادثة الشرطية مضروباً في احتمال الحادثة المسبقة التي قيدت الفضاء:"
      - center: "$P(A \\cap B) = P(B) \\times P_B(A)$"

  # الرسم التوضيحي الهيكلي لتقليص الفضاء متوافق ومقاوم لتباين الخلفيات
  - raw_html: |
      <div class='graph' style='text-align: center; margin: 25px 0;'><svg width='500' height='260' viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg' style='background: transparent; max-width: 100%;'><style>text { font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 16px; fill: #888888; } .label-bold { font-weight: bold; } .blue-t { fill: #0056b3; } .green-t { fill: #168574; } .red-t { fill: #svg-red; font-weight: bold; fill: #ef4444; }</style><rect x='10' y='10' width='480' height='240' rx='6' fill='none' stroke='#888888' stroke-width='1.5' /><text x='325' y='32' fill='#888888' class='label-bold'>&Omega; (الفضاء العيني الشامل القديم)</text><circle cx='215' cy='130' r='65' fill='none' stroke='#0056b3' stroke-width='2' /><text x='180' y='130' class='label-bold blue-t'>الحادثة A</text><circle cx='260' cy='130' r='65' fill='none' stroke='#168574' stroke-width='2' /><text x='440' y='115' class='label-bold green-t'>الحادثة B (الفضاء الجديد)</text><text x='235' y='130' text-anchor='middle' class='label-bold red-t' style='font-size: 16px;'>A &cap; B</text><text x='250' y='220' text-anchor='middle' fill='#666666' style='font-size: 16px;'>مخطط اختزال الفضاء:</text><text x='250' y='240' text-anchor='middle' fill='#666666' style='font-size: 16px;'>حساب P<tspan baseline-shift="sub" font-size="10" fill="#888888">B</tspan>(A) هو قياس مساحة التقاطع الأحمر بالنسبة للكل الأخضر B فقط</text></svg></div>

  - h3: "3. استقلالية حوادث"
  - parags:
      - rtl: "نقول عن حادثتين $A$ و $B$ أنهما مستقلتان إذا وفقط إذا كان وقوع إحداهما لا يؤثر مطلقاً ولا يغير من احتمال وقوع الأخرى؛ أي أن الاحتمال الشرطي يطهر من القيد ويعود إلى أصله الصافي: $P_B(A) = P(A)$."
      - rtl: "• <b>شرط الاستقلالية:</b> تكون $A$ و $B$ مستقلتين إذا تحقق الشرط التالي:"
      - center: "$P(A \\cap B) = P(A) \\times P(B)$"

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "لا يجب الخلط بين <b>الحوادث المستقلة (Independant Events)</b> و<b>الحوادث المتنافية (Exclusive Events)</b>! الحوادث المتنافية هي حوادث مستحيلة التقاطع رياضيا لعدم وجود عناصر مشتركة بينها إطلاقاً، أي ($A \\cap B = \\emptyset$) وبالتالي احتمال تقاطعها معدوم حتماً ($P(A \\cap B) = 0$). أما الحوادث المستقلة فتقاطعها موجود ويساوي حاصل ضرب احتمالاتها الصافية."
---
