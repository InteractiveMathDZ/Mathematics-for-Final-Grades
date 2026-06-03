---
layout: lesson
title: "الأعداد الأولية ومبرهنة فيرما ($Fermat$) الصغرى المقيدة"
subtitle: "التحليل البنيوي للخصائص الذاتية للمقادير الأولية ونظم الموافقات الأسية صلب الحقول المحدودة"
permalink: /prime_numbers_fermat/
mathJax: true
graph: true
lessonID: "diviZ"

# روابط الاتصال
previous_title: "مبرهنة غوص ($Gauss$) والتطبيقات التحليلية المصاحبة"
previous_url: "/gauss_theorem/"

next_title: "التحليل إلى عوامل أولية وحساب المؤشرات الحاصرة لعدد القواسم"
next_url: "/prime_factorization/"

elements:
  - h3: "1. التوصيف القانوني والخصائص الذاتية للعدد الأولي (Prime Number)"
    id: "prime-number-definition"
  - parags:
      - rtl: "يُقيد الاصطلاح الرياضي صلب الحقل الطبيعي العدد الأولي بأنه كل عدد طبيعي $p$ (حيث $p \\in \\mathbb{N}$) يقبل <b>قاسمين موجبین متمايزين فقط</b> هما: العنصر الأحدي $1$ والعدد ذاته $p$."
      - rtl: "<b>المحددات الهيكلية للعناصر الحدية:</b> يخرج العدد الطبيعي $1$ حتماً عن نطاق الأهلية الأولية لعدم استيفائه شرط ثنائية القواسم المتمايزة، في حين يستقر العدد $2$ نظاميّاً باعتباره القيمة الزوجية الوحيدة المستوفية لشرط الأولية صلب الفضاء الطبيعي."

  - h3: "2. المبرهنة الأسية لفيرما الصغرى (Fermat's Little Theorem)"
    id: "fermats-little-theorem"
  - parags:
      - rtl: "تنص المبرهنة البنيوية لفيرما الصغرى على أنه إذا ثبت كون المقدار $p$ عدداً أولياً صريحاً، وكان $a$ عدداً صحيحاً نسبيّاً لا يقبل القسمة على $p$ (أي يستوفي قيد الأولية التبادلية: $\\text{PGCD}(a, p) = 1$)، فإن دالة التطور الأسي تخضع للتطابق النمطي الحاصم الآتي:"
      - center: "$a^{p-1} \\equiv 1 \\pmod{p}$"

  - h4: "النموذج التحليلي المعاير:"
  - parags:
      - rtl: "لأجل استخراج باقي القسمة الإقليدية للمقدار الأسي $2^6$ على القاسم الأولي $7$، وبما أن $\\text{PGCD}(2, 7) = 1$، فإن تفعيل مبرهنة فيرما الصغرى يؤول صراحة إلى الصياغة المتكافئة الآتية:"
      - center: "$2^{7-1} = 2^6 = 64 \\equiv 1 \\pmod{7}$"

  - graph:
      id: "primes-sieve"
      class: "graph-container"
      xDomain: [-1, 6]
      yDomain: [-1, 6]
      elements:
        # تمثيل غربال إراتوستين للأعداد الطبيعية حتى 25 (Sieve of Eratosthenes)
        # الصف الأول (1 إلى 5)
        - { type: "text", content: "1", x: 0, y: 4, color: "gray" }
        - { type: "point", x: 1, y: 4, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2", x: 1.2, y: 4.2, color: "#168574" }
        - { type: "point", x: 2, y: 4, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "3", x: 2.2, y: 4.2, color: "#168574" }
        - { type: "text", content: "4 (✕)", x: 3, y: 4, color: "gray" }
        - { type: "point", x: 4, y: 4, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "5", x: 4.2, y: 4.2, color: "#168574" }

        # الصف الثاني (6 إلى 10)
        - { type: "text", content: "6 (✕)", x: 0, y: 3, color: "gray" }
        - { type: "point", x: 1, y: 3, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "7", x: 1.2, y: 3.2, color: "#168574" }
        - { type: "text", content: "8 (✕)", x: 2, y: 3, color: "gray" }
        - { type: "text", content: "9 (✕)", x: 3, y: 3, color: "gray" }
        - { type: "text", content: "10 (✕)", x: 4, y: 3, color: "gray" }

        # الصف الثالث (11 إلى 15)
        - { type: "point", x: 0, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "11", x: 0.2, y: 2.2, color: "#168574" }
        - { type: "text", content: "12 (✕)", x: 1, y: 2, color: "gray" }
        - { type: "point", x: 2, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "13", x: 2.2, y: 2.2, color: "#168574" }
        - { type: "text", content: "14 (✕)", x: 3, y: 2, color: "gray" }
        - { type: "text", content: "15 (✕)", x: 4, y: 2, color: "gray" }

        # الصف الرابع (16 إلى 20)
        - { type: "text", content: "16 (✕)", x: 0, y: 1, color: "gray" }
        - { type: "point", x: 1, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "17", x: 1.2, y: 1.2, color: "#168574" }
        - { type: "text", content: "18 (✕)", x: 2, y: 1, color: "gray" }
        - { type: "point", x: 3, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "19", x: 3.2, y: 1.2, color: "#168574" }
        - { type: "text", content: "20 (✕)", x: 4, y: 1, color: "gray" }

        # نص توضيحي للغربال
        - { type: "text", content: "المعايرة الخوارزمية لغربال إراتوستين: الأعداد المحددة تمثل عناصر أولية غير خاضعة للاستبعاد المركب", x: -0.8, y: -0.5, color: "#eee" }

  - NB:
      title: "المحددات البيداغوجية والارتباطات الإجرائية المصاحبة:"
      type: "info"
      NBs:
        - rtl: "<b>الاختزال النمطي للرتب الأسيّة العليا:</b> تُفعل مبرهنة فيرما الصغرى كأداة اختزالية مباشرة لخفض الرتب الأسيّة الضخمة صلب مسائل البكالوريا، شريطة استقرار فضاء الترديد عند رتبة عدد أولي صريح يحقق شرط الأولية التبادلية مع الأساس."
        - rtl: "<b>الصيغة الممتدة للمبرهنة:</b> صيانةً للتغطية الشاملة صلب الاستدلال، تجوز الصياغة المتكافئة للمبرهنة المرفوعة بالصيغة: $a^p \\equiv a \\pmod{p}$، وهي صيغة عامة صالحة لجميع قيم $a$ الصحيحة دون اشتراط الأولية المتبادلة مع الترديد $p$."
---
