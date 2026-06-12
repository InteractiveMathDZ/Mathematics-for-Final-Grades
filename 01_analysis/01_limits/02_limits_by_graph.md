---
layout: lesson
title: "القراءة البيانية للنهايات"
subtitle: "استنتاج نهايات دالة عدادية من تمثيلها البياني"
permalink: /limits_by_graph/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "النهايات، مفهوم الاقتراب والصورة"
previous_url: "/limit_concept/"
next_title: "نهايات الدوال المرجعية"
next_url: "/reference_limits/"

elements:
  - h3: "1. مبدأ القراءة البيانية للنهايات"
    id: "graph-principle"

  - parags:
      - rtl: "تعتمد القراءة البيانية للنهايات على تتبع سلوك المنحنى الممثل للدالة $(\\mathcal{C}_f)$ في معلم متعامد ومتجانس، وذلك برصد مآل تراتيب النقط من المنحنى عندما تؤول فواصلها نحو قيمة حقيقية معينة أو نحو اللانهاية."

  - h3: "2. الخوارزمية التحليلية للقراءة البيانية"
    id: "step-by-step-graph"

  - parags:
      - rtl: "لتعيين القيمة التقريبية أو القطعية لـ $\\lim\\limits_{x \\to a} f(x)$ بيانياً، نتبع الخطوات المنهجية التالية:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة المنهجية"
          - th: "الإجراء التحليلي على المعلم"
          - th: "الهدف الرياضي"
        - - th: "1. تعيين الموضع"
          - td: "تحديد القيمة الحقيقية $a$ (أو مآل اللانهاية) على محو الفواصل."
          - td: "ضبط مركز الجوار المستهدف."
        - - th: "2. المحاكاة الحركية"
          - td: "تحريك المتغير $x$ على محور الفواصل ليؤول نحو $a$ بقيم أقل أو بقيم أكبر."
          - td: "تحقيق شرط الاقتراب الجواري."
        - - th: "3. تتبع المنحنى"
          - td: "رصد المسار الهندسي لنقاط المنحنى $(\\mathcal{C}_f)$ المقابلة لقيم المتغير $x$."
          - td: "تحديد سلوك صور $x$ بواسطة الدالة."
        - - th: "4. الإسقاط والترجمة"
          - td: "إسقاط المسار الهندسي عمودياً على محور التراتيب لقراءة القيمة الناتجة."
          - td: "استنتاج القيمة القطعية للنهاية."

  - h3: "3. التصنيف الهندسي لحالات القراءة البيانية"
    id: "graph-cases"

  - parags:
      - rtl: "أثناء دراسة مآل المنحنى الممثل للدالة، نميز هندسيا سبع حالات رئيسية، نفصلها فيما يلي:"
        
  - h4: "1-نهاية منتهية عندما يؤول $x$ إلى عدد حقيقي ثابت:"
  - parags:
      - rtl: "تقارب نقط المنحنى نحو نقطة معلومة أو فجوة: تؤول الصور نحو قيمة منتهية $L$."
      - center: "$$\\lim\\limits_{x \\to a} f(x) = L$$"
      - rtl: "مثال ذلك، النهاية التالية:"
      - center: "$\\lim\\limits_{ x \\to 1 } \\frac{x^3}{x}$"
      - rtl: "تأمل تمثيلها البياني في الشكل الموالي، تلاحظ ببساطة أن:"
      - center: "$\\lim\\limits_{x \\to 0} \\frac{x^3}{x} = 0$"
  - graph:
      id: "limit-concept-discontinuity-1"
      class: "graph-container"
      xDomain: [-5, 5]
      yDomain: [-5, 5]
      elements:
        - { type: "function", fn: "(x**3 / x)", strokeColor: "#00ffcc", strokeWidth: 3 } 
        - { type: "text", content: "C_f", x: 2.5, y: 4.3, color: "#00ffcc" }
        - { type: "point", x: 0, y: 0, color: "red", fillColor: "black", size: 2 }
      
  - h4: "2- نهاية غير منتهية بجوار مستقيم عمودي"
  - parags:
      - rtl: "نعالج تحت هذا العنوان، حالتي الصعود والنزول."
      - rtl: "صعود أو نزول المنحنى بشكل غير محدود نحو الأعلى أو الأسفل بجوار مستقيم عمودي."
      - center: "$$\\lim\\limits_{x \\to a} f(x) = \\pm\\infty$$"
      - rtl: "مثال ذلك النهاية التالية:"
      - center: "$\\lim\\limits_{x \\to 0} \\frac{x^2 + 1}{x}$"
      - rtl: "التمثيل البياني لهذه الدالة يظهر أن:"
      - center: "$\\lim\\limits_{x \\to 0^-} \\frac{x^2 + 1}{x} = -\\infty$"
      - rtl: "و:"
      - center: "$\\lim\\limits_{x \\to 0^+} \\frac{x^2 + 1}{x} = +\\infty$"
  - graph:
      id: "limit-concept-discontinuity-2"
      class: "graph-container"
      xDomain: [-5, 5]
      yDomain: [-5, 5]
      elements:
        - { type: "function", fn: "(x**2 + 1) / x", strokeColor: "#00ffcc", strokeWidth: 3 } 
        - { type: "text", content: "C_f", x: 2.5, y: 4.3, color: "#00ffcc" }
        - { type: "line", points: [[0, 0], [0, 1]], color: "red", dash: 2, width: 1.5 }
        - { type: "text", content: "x = 0", x: 0.1, y: -4, color: "red", anchorX: 'left', anchorY: 'middle', rotate: -90 }
        - { type: "line", points: [[0, 0], [1, 1]], color: "#ffffff", dash: 2, width: 1.5 }
        - { type: "text", content: "y = x", x: 2.1, y: 1.9, color: "#ffffff", anchorX: 'left', anchorY: 'middle', rotate: -45 }
    
  - h4: "3-الاستقرار الأفقي عند الأطراف"
  - parags:
      - rtl: "نتعرض هنا أيضا، إلى حالتين، عندما يؤول $x$إلى $\\pm\\infty$"
      - rtl: "يمتد المنحنى أفقيًا بجوار مستقيم موازٍ لمحور الفواصل كلما كبرت أو صغرت قيم $x$."
      - center: "$\\lim\\limits_{x \\to \\pm\\infty} f(x) = L$"
      - rtl: "مثاله:"
      - center: "$\\lim\\limits_{x \\to \\pm\\infty} \\frac{2x+3}{x+1}$"
      - rtl: "قراءة التمثيل البياني لهذه الدالة، يعطينا:"
      - center: "$\\lim\\limits_{x \\to \\pm\\infty} \\frac{2x+3}{x+1} = 2$"
  - graph:
      id: "limit-concept-discontinuity-3"
      class: "graph-container"
      xDomain: [-10, 10]
      yDomain: [-10, 10]
      elements:
        - { type: "function", fn: "(2*x + 3) / (x + 1)", strokeColor: "#00ffcc", strokeWidth: 3 } 
        - { type: "text", content: "C_f", x: 2.5, y: 4.3, color: "#00ffcc" }
        - { type: "line", points: [[0, 2], [1, 2]], color: "red", dash: 2, width: 1.5 }
        - { type: "text", content: "y = 2", x: 1, y: 2.1, color: "red" }
        - { type: "line", points: [[-1, 2], [-1, 0]], color: "#ffffff", dash: 2, width: 1.5 }
        - { type: "text", content: "x = -1", x: -0.97, y: -4, color: "#ffffff", anchorX: 'left', anchorY: 'middle', rotate: -90 }
        
  - h4: "5-الصعود عند الأطراف"
  - parags:
      - rtl: "إمتداد المنحنى بشكل غير محدود نحو الأعلى عند الأطراف اللانهائية."
      - center: "$$\\lim\\limits_{x \\to \\pm\\infty} f(x) = +\\infty$$"
      - هذا الامتداد إلى اللانهاية، يكون إما بإتجاه محور الفواصل أو بإتجاه محور التراتيب."
      - rtl: "نأخذ في الرسم الموالي مثالين، الدالة $f(x)$ ، والتي تتزايد إلى اللانهاية بإتجاه محور التراتيب ومعها الدالة $g(x)$  التي تتزايد إلى اللانهاية بإتجاه محور الفواصل."
      - center: "$f(x) = x^2$"
      - center: "$g(x) = \\frac{x}{sqrt{x+1}}$"
   
  - graph:
      id: "limit-concept-discontinuity-3"
      class: "graph-container"
      xDomain: [-10, 10]
      yDomain: [-10, 10]
      elements:
        - { type: "function", fn: "x**2", strokeColor: "#00ffcc", strokeWidth: 3 } 
        - { type: "text", content: "C_f", x: 2.5, y: 4.3, color: "#00ffcc" }
        - { type: "function", fn: "x / ((x + 1)**(1/2))", strokeColor: "blue", strokeWidth: 3 }
        - { type: "text", content: "C_g", x: 2.5, y: 4.3, color: "blue" }
        
  - h3: "6-نزول المنحنى عند الأطراف"
  - parags:
      - center: "إمتداد المنحنى بشكل غير محدود نحو الأسفل عند الأطراف اللانهائية."
  - formula: "$$\\lim\\limits_{x \\to \\pm\\infty} f(x) = -\\infty$$"

  - parags:
      - rtl: "ونجملها في الجدول التالي:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "السلوك الهندسي للمنحنى $(\\mathcal{C}_f)$"
          - th: "التفسير التحليلي للسلوك"
          - th: "الصياغة الرياضية للنهاية"
        - - th: "تقارب نقط المنحنى نحو نقطة معلومة أو فجوة."
          - td: "تؤول صور الدالة نحو قيمة حقيقية منتهية $L$."
          - td: "$\\lim\\limits_{x \\to a} f(x) = L$"
        - - th: "امتداد المنحنى بشكل غير محدود نحو الأعلى بجوار مستقيم عمودي."
          - td: "تؤول قيم الدالة نحو اللانهاية الموجبة."
          - td: "$\\lim\\limits_{x \\to a} f(x) = +\\infty$"
        - - th: "امتداد المنحنى بشكل غير محدود نحو الأسفل بجوار مستقيم عمودي."
          - td: "تؤول قيم الدالة نحو اللانهاية السالبة."
          - td: "$\\lim\\limits_{x \\to a} f(x) = -\\infty$"
        - - th: "استقرار المنحنى أفقيًا بجوار مستقيم موازٍ لمحور الفواصل عند الأطراف اللانهائية."
          - td: "تؤول قيم الدالة نحو قيمة حقيقية منتهية $L$ كلما كبرت أو صغرت قيم المتغير $x$ بلا حدود."
          - td: "$\\lim\\limits_{x \\to \\pm\\infty} f(x) = L$"
        - - th: "اندفاع المنحنى بشكل غير محدود نحو الأعلى عند الأطراف اللانهائية."
          - td: "تؤول قيم الدالة نحو اللانهاية الموجبة كلما تباعدت قيم المتغير $x$."
          - td: "$\\lim\\limits_{x \\to \\pm\\infty} f(x) = +\\infty$"
        - - th: "انحدار المنحنى بشكل غير محدود نحو الأسفل عند الأطراف اللانهائية."
          - td: "تؤول قيم الدالة نحو اللانهاية السالبة كلما تباعدت قيم المتغير $x$."
          - td: "$\\lim\\limits{x \\to \\pm\\infty} f(x) = -\\infty$"

  - NB:
      type: success
      title: "قاعدة:"
      NBs:
        - rtl: "تتحدد نهاية الدالة عند القيمة $a$ بالبنية الجوارية المباشرة للنقطة، ولا يشترط في حساب النهاية بيانيا أن تكون الدالة معرفة عند القيمة $a$ كشرط قطعي لتواجد النهاية."

  - h3: "4. تطبيقات عملية"
    id: "examples-graph"

  - exemple:
      title: "1.4. استنتاج نهاية دالة عند قيم ممنوعة وتحديد المستقيم المقارب العمودي بيانياً"
      exemID: "ex-graph-001"
  - exemple:
      title: "2.4. دراسة سلوك ومآل الدالة عند أطراف مجالات التعريف المفتوحة من المنحنى"
      exemID: "ex-graph-002"
---
