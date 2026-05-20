---
layout: lesson
title: "المبحث 1: تعريف المجموعة $\\mathbb{C}$والشكل الجبري"
subtitle: "الولوج إلى البعد التخيلي حيث $i^2 = -1$"
permalink: /complex_definition/
mathJax: true
graph: true
lessonID: "compN"

previous_title: "خارطة طريق الأعداد المركبة"
previous_url: "/complex_numbers_hub/"
next_title: "المبحث 2: مرافق العدد المركب ومقلوبه"
next_url: "/complex_conjugate/"

elements:
  - h3: "1. الوحدة التخيلية الأساسية (The Imaginary Unit)"
  - parags:
      - rtl: "تتأسس مجموعة الأعداد المركبة $\\mathbb{C}$ على ابتكار ودمج عنصر عددي تخيلي نرمز له بـ $i$، يملك الخاصية الميكانيكية الفريدة التي تخرق قواعد الأعداد الحقيقية الصماء:"
      - center: "$i^2 = -1$"
      - rtl: "هذا الابتكار يسمح بجعل الجذور التربيعية للأعداد السالبة ممكنة ومقاسة جبرياً (مثلاً: $\\sqrt{-4} = \\sqrt{4 \\times i^2} = 2i$)."

  - h3: "2. الشكل الجبري الموزون لعدد مركب"
  - parags:
      - rtl: "يكتب ويُمثل كل عدد مركب $z$ ينتمي إلى المجموعة $\\mathbb{C}$ بطريقة وحيدة منبسطة على الشكل الجبري التالي:"
      - center: "$z = a + bi$"
      - rtl: "حيث أن $a$ و $b$ عددان حقيقيان حتماً ($a, b \\in \\mathbb{R}$)، ولهما مسميات بنيوية ثابتة:"
      - rtl: "• العدد $a$ يمثل <b>الجزء الحقيقي (Real Part)</b> ونرمز له اختصاراً بـ: $Re(z)$."
      - rtl: "• العدد $b$ يمثل <b>الجزء التخيلي (Imaginary Part)</b> ونرمز له اختصاراً بـ: $Im(z)$."

  - h3: "3. قواعد الحساب والمطابقة الأساسية"
  - parags:
      - rtl: "• <b>الجمع والطرح الميكانيكي:</b> لتجميع أعداد مركبة، نجمع الأجزاء الحقيقية معاً والأجزاء التخيلية معاً كأنها حدود مستقلة."
      - rtl: "• <b>الضرب والتوزيع الجبري:</b> نطبق نشر وتوزيع المقادير العادي، مع ضرورة الاختزال المباشر لكل تعبير يظهر فيه $i^2$ وتعويضه بالقيمة الحتمية $-1$ مغيرين إشارة المعامل."
      - rtl: "• <b>شرط التطابق والتساوي:</b> يتساوى عددان مركبان إذا وفقط إذا تساوى جزآهما الحقيقيان تماماً، وتساوى جزآهما التخيليان تماماً (وهي الأداة الحاكمة لحل جمل المعادلات المركبة)."

  - raw_html: |
      "<div class='graph' style='text-align: center; margin: 25px 0;'><svg width='550' height='200' viewBox='0 0 550 200' xmlns='http://www.w3.org/2000/svg' style='background: transparent; max-width: 100%;'><style>text { font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 13px; fill: #000000; } .group-title { font-weight: bold; font-size: 14px; } .c-color { fill: #0056b3; } .r-color { fill: #168574; } .i-color { fill: #b45309; } .math-style { font-style: italic; }</style><rect x='10' y='10' width='530' height='180' rx='8' fill='none' stroke='#0056b3' stroke-width='2' /><text x='400' y='35' class='group-title c-color'>المجموعة الأم $\\mathbb{C}$ (الأعداد المركبة)</text><text x='400' y='55' class='math-style c-color'>حيث: z = a + bi</text><rect x='30' y='75' width='240' height='100' rx='6' fill='none' stroke='#168574' stroke-width='1.5' /><text x='145' y='100' class='group-title r-color'>الأعداد الحقيقية $\\mathbb{R}</text><text x='145' y='125' class='math-style r-color'>الشرط: Im(z) = 0</text><text x='145' y='150' class='math-style r-color'>أمثلة: 5 ، -2 ، &radic;3</text><rect x='290' y='75' width='230' height='100' rx='6' fill='none' stroke='#b45309' stroke-width='1.5' stroke-dasharray='4,4' /><text x='490' y='100' class='group-title i-color'>تخيلية صرفة (Pure Imaginary)</text><text x='490' y='125' class='math-style i-color'>الشرط: Re(z) = 0</text><text x='490' y='150' class='mathstyle i-color'>أمثلة: 3i ، -i ، i&radic;2</text></svg></div>"


  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "يقع الكثير من الطلاب في خطأ فادح عند تحديد الجزء التخيلي؛ تذكر دائماً أن <b>الجزء التخيلي هو المعامل العددي الحقيقي $b$ فقط</b>، وليس المقدار $bi$ كاملاً. الرمز $i$ في البنية الحسابية هو مجرد 'مؤشر أو دليل موقع' يخبرك بمكان تمثيل الجزء التخيلي في الفراغ."
---
