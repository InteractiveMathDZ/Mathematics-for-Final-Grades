---
layout: lesson
title: "المبحث 3: النمذجة الرياضية لأنواع السحب"
subtitle: "الربط الجبري بين آلية السحب والأداة"
permalink: /sampling_models/
mathJax: true
lessonID: "combCount"

# روابط الاتصال
previous_title: "التوفيقات وخواصها الجبرية"
previous_url: "/combinations/"
next_title: "خارطة طريق المتغيرات العشوائية"
next_url: "/random_variables_hub/"

elements:
  - h3: "1. النمذجة الأساسية"
    id: "sampling-models"
  - parags:
      - rtl: "لتحديد الأداة الرياضية المناسبة، نعتمد على معيارين: <b>الترتيب</b> و<b>التكرار</b>."

  - h3: "2. حالات السحب"
    id: "sampling-types"
  - parags:
      - rtl: "• <b>في آن واحد:</b> الترتيب غير مهم، التكرار ممنوع. الأداة: <b>توفيقة</b> $\\binom{n}{p}$."
      - rtl: "• <b>على التوالي وبإرجاع:</b> الترتيب مهم، التكرار مسموح. الأداة: <b>قائمة</b> $n^p$."
      - rtl: "• <b>على التوالي وبدون إرجاع:</b> الترتيب مهم، التكرار ممنوع. الأداة: <b>ترتيبة</b> $A_n^p$."

  - h3: "3. معاملات الترتيب"
    id: "permutation-factors"
  - parags:
      - rtl: "عند وجود أصناف داخل العينة، نستخدم معامل الترتيب لضبط الحالات:"
      - center: "$\\text{Factor} = \\frac{p!}{p_1! \\times p_2! \\times \\dots \\times p_k!}$"

  - graph:
      id: "sampling-matrix-viz"
      class: "graph-container"
      xDomain: [0, 4]
      yDomain: [0, 3]
      elements:
        - { type: "text", content: "سحب في آن واحد: الترتيب غير مهم (C)", x: 2, y: 2.5 }
        - { type: "text", content: "سحب على التوالي بإرجاع: الترتيب مهم مع التكرار (n^p)", x: 2, y: 1.5 }
        - { type: "text", content: "سحب على التوالي بدون إرجاع: الترتيب مهم بدون تكرار (A)", x: 2, y: 0.5 }

  - NB:
      title: "قاعدة ذهبية:"
      type: "success"
      NBs:
        - rtl: "قراءة نص التمرين هي مفتاح الحل؛ ابحث عن الكلمات المفتاحية: 'في آن واحد' (توفيقة)، 'على التوالي مع الإرجاع' (قائمة)، 'على التوالي دون إرجاع' (ترتيبة)."
---
