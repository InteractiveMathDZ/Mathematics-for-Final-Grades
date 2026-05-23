---
layout: lesson
title: "النمذجة الرياضية لأنواع السحب"
subtitle: "الربط الجبري بين آلية سحب العناصر والأداة الحسابية المناسبة"
permalink: /sampling_models/
mathJax: true
lessonID: "combCount"

previous_title: "التوفيقات وخواصها الجبرية"
previous_url: "/combinations/"
next_title: "خارطة طريق المتغيرات العشوائية"
next_url: "/random_variables_hub/"

elements:
  - h3: "1. النمذجة الرياضية لعمليات السحب"
  - parags:
      - rtl: "تعتمد حسابات الاحتمالات والتحليل التوفيقي في المسائل النموذجية (مثل سحب كرات من كيس أو صندوق) على تحديد آلية السحب بدقة. تحديد نوع السحب يحدد الفضاء العيني والنموذج الحسابي الواجب اتباعه (قائمة، ترتيبة، أو توفيقة)."

  - h3: "2. أنواع السحب الثلاثة والقوانين المرتبطة بها"
  - parags:
      - rtl: "عند سحب $p$ عنصراً من بين مجموعة كلية تحتوي $n$ عنصراً متمايزاً، نواجه الحالات الثلاث التالية:"
      - rtl: "• <b>أولاً: السحب في آن واحد (Simultaneous Sampling):</b> يتم سحب العناصر معاً في دفعة واحدة. في هذا النموذج، <b>الترتيب غير مهم</b> و<b>التكرار ممنوع تماماً</b>. الأداة الرياضية المطابقة لعد النتائج هي <b>التوفيقة</b>:"
      - center: "$N = \\binom{n}{p} = C_n^p$"
      - rtl: "• <b>ثانياً: السحب على التوالي وبإرجاع (Sampling with Replacement):</b> يتم سحب العناصر واحداً تلو الآخر، مع إعادة العنصر المسحوب إلى المجموعة قبل سحب العنصر الموالي. في هذا النموذج، <b>الترتيب مهم جداً</b> و<b>التكرار مسموح به</b>. الأداة الرياضية المطابقة هي <b>القائمة</b>:"
      - center: "$N = n^p$"
      - rtl: "• <b>ثالثاً: السحب على التوالي وبدون إرجاع (Sampling without Replacement):</b> يتم سحب العناصر واحداً تلو الآخر، دون إعادة العنصر المسحوب إلى المجموعة. في هذا النموذج، <b>الترتيب مهم جداً</b> ولكن <b>التكرار ممنوع تماماً</b>. الأداة الرياضية المطابقة هي <b>الترتيبة</b>:"
      - center: "$N = A_n^p$"

  - h3: "3. جدول خلاصة النمذجة لعمليات السحب"
  - parags:
      - rtl: "يلخص الجدول التالي العلاقة الهيكلية المباشرة بين خصائص السحب والأداة الرياضية المستعملة:"

  # جدول تنظيمي محايد متوافق مع معايير الأرشفة والعرض
  - raw_html: |
      <div style='overflow-x:auto; margin: 20px 0;'><table style='width:100%; border-collapse: collapse; text-align: center; font-size: 14px;' border='1' stroke='#888888'><thead style='background-color: rgba(136, 136, 136, 0.1);'><tr><th style='padding: 10px;'>نوع السحب</th><th style='padding: 10px;'>الترتيب</th><th style='padding: 10px;'>التكرار</th><th style='padding: 10px;'>الأداة الرياضية</th><th style='padding: 10px;'>الصيغة الحسابية</th></tr></thead><tbody><tr><td style='padding: 10px; font-weight: bold;'>في آن واحد</td><td style='padding: 10px;'>غير مهم</td><td style='padding: 10px;'>ممنوع</td><td style='padding: 10px; font-weight: bold;'>توفيقة</td><td style='padding: 10px;'>$\binom{n}{p}$</td></tr><tr><td style='padding: 10px; font-weight: bold;'>على التوالي وبإرجاع</td><td style='padding: 10px;'>مهم</td><td style='padding: 10px;'>مسموح</td><td style='padding: 10px; font-weight: bold;'>قائمة</td><td style='padding: 10px;'>$n^p$</td></tr><tr><td style='padding: 10px; font-weight: bold;'>على التوالي وبدون إرجاع</td><td style='padding: 10px;'>مهم</td><td style='padding: 10px;'>ممنوع</td><td style='padding: 10px; font-weight: bold;'>ترتيبة</td><td style='padding: 10px;'>$A_n^p$</td></tr></tbody></table></div>

  - h3: "4. معامل الترتيب (Permutation Factor)"
  - parags:
      - rtl: "في نوعي السحب على التوالي (بإرجاع أو بدون إرجاع)، إذا كانت العناصر المسحوبة تنتمي إلى أصناف مختلفة (مثل ألوان مختلفة أو أرقام مختلفة)، يجب أخذ حالات الترتيب الممكنة بعين الاعتبار ومضاعفة النتيجة بـ <b>معامل الترتيب</b>."
      - rtl: "• لحساب معامل الترتيب عند سحب $p$ عنصراً تتوزع إلى أصناف تكرارها:"
      - center: "$p_1, p_2, \\dots, p_k$"
      - rtl: "حيث:"
      - center: "$p_1 + p_2 + \\dots + p_k = p$"
      - rtl: "نطبق الصيغة التالية:"
      - center: "$\\text{Factor} = \\frac{p!}{p_1! \\times p_2! \\times \\dots \\times p_k!}$"

  - NB:
      title: "قاعدة التمييز:"
      type: "info"
      NBs:
        - rtl: "الخطوة الأولى والأساسية لحل أي مسألة في هذا المحور هي قراءة نص التمرين بعناية فائقة لتحديد العبارة اللغوية الدالة على نوع السحب، لأن الخطأ في تحديد نوع السحب يؤدي مباشرة إلى استعمال أداة حسابية خاطئة وبالتالي فضاء عينات غير صحيح."
---
