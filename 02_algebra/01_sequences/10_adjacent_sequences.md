---
layout: lesson
title: "مبرهنة المتتاليات المتجاورة وشروط استقرار الجوار"
subtitle: "التقارب التناظري المقيد للنظم المنفصلة وتحديد النهايات المشتركة صلب الفضاء الطوبولوجي"
permalink: /adjacent_sequences/
mathJax: true
graph: true
lessonID: "seque"

# روابط الاتصال
previous_title: "المقايسة الدستورية لحساب مجاميع الحدود المتتابعة"
previous_url: "/sequences_sum/"

next_title: "الاستقصاء التحليلي الشامل للمتتاليات العددية (مراجعة ختامية المقايسة)"
next_url: "/sequences_review/"

elements:
  - h3: "1. التأسيس الاصطلاحي والشرط الثلاثي للتجاور الطوبولوجي"
    id: "adjacent-definition"
  - parags:
      - rtl: "يُصطلح على أن المتتاليتين العدديتين $(u_n)_{n \\in \\mathbb{N}}$ و $(v_n)_{n \\in \\mathbb{N}}$ <b>متجاورتان</b> (Adjacent Sequences) إذا واستوفتا صراحة الشروط التحليلية المتلازمة الآتية:"
      - rtl: "- <b>شرط الرتابة المقابلة الأول:</b> استقرار المتتالية الأولى $(u_n)$ على رتابة <b>متزايدة تماماً</b> صلب نطاق التوليد."
      - rtl: "- <b>شرط الرتابة المقابلة الثاني:</b> استقرار المتتالية الثانية $(v_n)$ على رتابة <b>متناقصة تماماً</b> صلب نطاق التوليد."
      - center: "- <b>قيد تناهي الفروق نحو الصفر:</b> $\\lim\\limits_{n \\to +\\infty} (u_n - v_n) = 0$"

  - h3: "2. المبرهنة الأساسية للاستقرار والتقارب المشترك"
    id: "adjacent-theorem"
  - parags:
      - rtl: "تقضي النظرية البنيوية صلب حقل الأعداد الحقيقية بأن كل متتاليتين متجاورتين هما حتماً متتاليتان <b>متقاربتان</b> نحو الغاية العددية الحقيقية المحدودة والثابتة نفسها $L$."
      - rtl: "ويترتب على هذا الاتساق الدالي خضوع حدود المنظومتين التناظريتين لقيد الحصر الصارم الآتي لأجل كل عدد طبيعي $n$:"
      - center: "$u_n \\leq L \\leq v_n \\quad (\\lim\\limits_{n \\to +\\infty} u_n = \\lim\\limits_{n \\to +\\infty} v_n = L)$"
      - rtl: "باعتبار أن المتتالية $(u_n)$ هي النمط الرتيب المتزايد، في حين تُمثل $(v_n)$ النمط الرتيب المتناقص حاصراً للغايات من الأعلى."

  - graph:
      id: "adjacent-viz"
      class: "graph-container"
      xDomain: [-1, 15]
      yDomain: [-1, 6]
      elements:
        - { type: "function", fn: "3", dash: 2, color: "green"}
        - { type: "text", content: "النهاية المشتركة المستقرة L = 3", x: 1, y: 3.2, color: "green"}
        - { type: "point", x: 0, y: 1, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_0", x: -0.2, y: 1.2, color: "blue"}
        - { type: "point", x: 2, y: 2, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_1", x: 1.8, y: 2.2, color: "blue"}
        - { type: "point", x: 5, y: 2.7, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_2", x: 4.8, y: 2.9, color: "blue"}
        - { type: "point", x: 10, y: 2.9, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_3", x: 9.8, y: 3.1, color: "blue"}
        - { type: "point", x: 0, y: 5, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_0", x: -0.2, y: 5.2, color: "red"}
        - { type: "point", x: 2, y: 4, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_1", x: 1.8, y: 4.2, color: "red"}
        - { type: "point", x: 5, y: 3.3, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_2", x: 4.8, y: 3.5, color: "red"}
        - { type: "point", x: 10, y: 3.1, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_3", x: 9.8, y: 3.3, color: "red"}
        - { type: "text", content: "المعايرة الطوبولوجية للحصر التناظري المتبادل بين النظم المتزايدة والمتناقصة", x: 0.5, y: 0.2}

  - NB:
      title: "مجالات التوظيف والأداء المنهجي:"
      type: "info"
      NBs:
        - rtl: "<b>المعايرة التقريبية للمقادير الصماء:</b> تُعد مبرهنة المتتاليات المتجاورة الركيزة الخوارزمية المعتمدة صلب الامتحانات الرسمية والتحليل العددي لحصر الثوابت الرياضية غير الناطقة (مثل الثابت النيبيري $e$ أو الجذور التربيعية الصماء)؛ حيث يُمثل الفرق $(v_n - u_n)$ مقدار السعة الخطية لدقة التقريب عند الرتبة $n$."
        - rtl: "<b>حظر استباق الاستنتاج دون قيد الغاية:</b> يُلزم الطالب ديدكتيكيّاً بالانتباه إلى أن مجرد كون متتالية متزايدة وأخرى متناقصة مع استقرار المتراجحة $u_n \\le v_n$ لا يكفي مطلقاً لإثبات التجاور البنيوي ما لم يتم التحقق حسابيّاً من تناهي فرق السلسلتين نحو الصفر عند $+\\infty$."
---
