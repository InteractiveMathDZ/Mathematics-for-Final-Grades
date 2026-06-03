---
layout: lesson
title: "المبحث 4: الشكل المثلثي والشكل الأسّي"
subtitle: "التحويل الإجرائي للنظم القطبية"
permalink: /complex_exponential/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 3: الطويلة والعمدة وقوانين المساحات"
previous_url: "/complex_trig/"
next_title: "المبحث 5: دستور موآفر وتطبيقاته الجبرية"
next_url: "/moivre_theorem/"

elements:
  - h3: "1. الشكل المثلثي"
    id: "trigonometric-form"
  - parags:
      - rtl: "باستخدام الطويلة $r$ والعمدة $\\theta$، يُكتب العدد المركب $z$ بالشكل المثلثي:"
      - center: "$z = r(\\cos \\theta + i \\sin \\theta)$"
      - rtl: "هذا التمثيل يربط القيمة المطلقة للعدد بموقعه الزاوي على الدائرة المثلثية."

  - h3: "2. الشكل الأسّي (صيغة أويلر)"
    id: "exponential-form"
  - parags:
      - rtl: "وفقاً لصيغة أويلر، يمكن اختصار العبارة $(\\cos \\theta + i \\sin \\theta)$ إلى $e^{i\\theta}$، ليصبح الشكل الأسّي:"
      - center: "$z = r e^{i\\theta}$"
      - rtl: "هذا الشكل هو الأكثر فاعلية في التعامل مع الجداءات والقسمة والقوى."

  - h3: "3. ميكانيكية العمليات"
    id: "operations-mechanics"
  - parags:
      - rtl: "تتبسط العمليات الحسابية في الشكل الأسّي إلى خواص القوى المألوفة:"
      - rtl: "• <b>الجداء:</b> $r e^{i\\theta} \\times r' e^{i\\theta'} = (rr') e^{i(\\theta+\\theta')}$ (نضرب الطويلتين ونجمع العمدتين)."
      - rtl: "• <b>القسمة:</b> $\\frac{r e^{i\\theta}}{r' e^{i\\theta'}} = \\frac{r}{r'} e^{i(\\theta-\\theta')}$ (نقسم الطويلتين ونطرح العمدتين)."
      - rtl: "• <b>المرافق:</b> $\\bar{z} = r e^{-i\\theta}$ (تنعكس إشارة العمدة)."

  - graph:
      id: "complex-forms-conversion"
      class: "graph-container"
      xDomain: [-2, 11]
      yDomain: [-1, 6]
      elements:
        # مخطط تدفق التحويل
        - { type: "line", points: [[0, 4.5], [3, 4.5], [3, 3.5], [0, 3.5], [0, 4.5]], color: "blue" }
        - { type: "text", content: "z = a + bi", x: 0.5, y: 4, color: "blue" }
        
        - { type: "line", points: [[4.5, 5], [8.5, 5], [8.5, 3], [4.5, 3], [4.5, 5]], color: "orange" }
        - { type: "text", content: "r(cos θ + i sin θ)", x: 4.7, y: 4, color: "orange" }
        
        - { type: "line", points: [[6.5, 3], [6.5, 1.5]], color: "#168574", arrowEnd: true }
        - { type: "text", content: "z = r e^{iθ}", x: 6.7, y: 1.5, color: "#168574" }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "الشكل الأسّي ليس مجرد صيغة رمزية، بل هو المحرك الأساسي لحل مسائل الدورانات والتحويلات النقطية بكفاءة عالية."
---
