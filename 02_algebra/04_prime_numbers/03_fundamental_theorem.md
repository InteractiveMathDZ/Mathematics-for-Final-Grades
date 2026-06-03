---
layout: lesson
title: "المبحث 3: المبرهنة الأساسية في الحساب"
subtitle: "التفكيك إلى جداء عوامل أولية"
permalink: /fundamental_theorem/
mathJax: true
graph: true
lessonID: "primN"

# روابط الاتصال
previous_title: "المبحث 2: كيفية اختبار أولية عدد (غربال إراتوستين)"
previous_url: "/primes_sieve/"
next_title: "المبحث 4: استخراج القواسم والمضاعفات بالتفكيك"
next_url: "/divisors_multiples/"

elements:
  - h3: "1. نص المبرهنة"
    id: "theorem-statement"
  - parags:
      - rtl: "كل عدد طبيعي $n$ أكبر تماماً من $1$ يمكن كتابته على شكل جداء عوامل أولية، وهذا التفكيك وحيد باستثناء ترتيب العوامل:"
      - center: "$n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\dots \\times p_k^{\\alpha_k}$"
      - rtl: "حيث $p_i$ أعداد أولية متميزة و $\\alpha_i$ أعداد طبيعية غير معدومة."

  - h3: "2. خوارزمية التحليل"
    id: "algorithm"
  - parags:
      - rtl: "لتحليل عدد $n$، نقوم بقسمته المتتالية على أصغر الأعداد الأولية ($2، 3، 5، 7، ...$) التي تقسمه دون باقٍ، حتى نصل إلى حاصل قسمة يساوي $1$."
      - rtl: "<b>مثال: تفكيك العدد $60$</b>"
      - rtl: "$60 \\div 2 = 30$"
      - rtl: "$30 \\div 2 = 15$"
      - rtl: "$15 \\div 3 = 5$"
      - rtl: "$5 \\div 5 = 1$"
      - center: "$60 = 2^2 \\times 3 \\times 5$"

  - h3: "3. الأهمية الرياضية"
    id: "mathematical-importance"
  - parags:
      - rtl: "يعد التفكيك إلى عوامل أولية أداة أساسية في حساب:"
      - rtl: "• القاسم المشترك الأكبر ($PGCD$)."
      - rtl: "• المضاعف المشترك الأصغر ($PPCM$)."
      - rtl: "• تبسيط الجذور التربيعية واختزال الكسور العددية الكبيرة."

  - graph:
      id: "factor-tree-viz"
      class: "graph-container"
      xDomain: [-3, 9]
      yDomain: [-1, 5]
      elements:
        # مخطط شجري لتفكيك العدد 60
        - { type: "point", x: 3, y: 4, strokeColor: "gray", fillColor: "gray", size: 3 }
        - { type: "text", content: "60", x: 2.8, y: 4.3, color: "gray" }
        - { type: "line", points: [[3, 4], [1, 2.5]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[3, 4], [5, 2.5]], color: "gray", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 1, y: 2.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2", x: 0.8, y: 2.6, color: "#168574" }
        - { type: "point", x: 5, y: 2.5, strokeColor: "gray", fillColor: "gray", size: 2 }
        - { type: "text", content: "30", x: 5.3, y: 2.4, color: "gray" }
        - { type: "line", points: [[5, 2.5], [3, 1]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[5, 2.5], [7, 1]], color: "gray", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 3, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2", x: 2.8, y: 1.1, color: "#168574" }
        - { type: "point", x: 7, y: 1, strokeColor: "gray", fillColor: "gray", size: 2 }
        - { type: "text", content: "15", x: 7.3, y: 0.9, color: "gray" }
        - { type: "line", points: [[7, 1], [6, -0.5]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[7, 1], [8, -0.5]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 6, y: -0.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "3", x: 5.8, y: -0.4, color: "#168574" }
        - { type: "point", x: 8, y: -0.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "5", x: 7.8, y: -0.4, color: "#168574" }

        - { type: "text", content: "البصمة الأولية للعدد 60: 2² × 3 × 5", x: 0, y: -1.2, color: "#eee" }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "تفرّد التفكيك يعني أن أي عدد طبيعي له بصمة أولية خاصة به، ولا يمكن لعددين مختلفين أن يمتلكا نفس جداء العوامل الأولية."
---
