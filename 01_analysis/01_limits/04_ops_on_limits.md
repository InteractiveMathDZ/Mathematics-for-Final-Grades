---
layout: lesson
title: "مبرهنات العمليات على النهايات"
subtitle: "السلوك التحليلي والهندسي للعمليات الجبرية عند أطراف مجالات التعريف"
permalink: /ops_limits/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "نهايات الدوال المرجعية"
previous_url: "/reference_limits/"
next_title: "نهاية دالة مركبة وتغيير المتغير"
next_url: /composite_limits/

elements:
  - h3: "1. مقدمة عامة"
    id: "general-introduction"

  - parags:
      - rtl: "تخضع حسابات نهايات الدوال الناتجة عن عمليات جبرية لقواعد محددة تبنى على التعويض المباشر للنهايات المنتهية، وتستنتج منطقياً في الحالات غير المنتهية ما لم ينشأ تعارض بين المقادير يسمى حالة عدم تعيين."

  - h3: "2. عملية الجمع"
    id: "operation-sum"

  - parags:
      - rtl: "<strong>أ- مثال:</strong>"
      - rtl: "لتكن الدالتان $f$ و $g$ المعرفتان على $]0; +\\infty[$ كما يلي:"
      - rtl: "$$f(x) = x \\quad , \\quad g(x) = \\frac{1}{x}$$"
      - rtl: "نهاية كل دالة بجوار $+\\infty$:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$$"
      - rtl: "$$\\lim_{x \\to +\\infty} g(x) = 0$$"
      - rtl: "بالتعويض المباشر لنهاية المجموع:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} (f+g)(x) = +\\infty + 0 = +\\infty$$"

  - graph:
      id: "combined-sum-graph"
      class: "graph-container"
      xDomain: [0, 6]
      yDomain: [0, 7]
      elements:
        - { type: "function", fn: "x", strokeColor: "#ff0055", strokeWidth: 3 }
        - { type: "text", content: "$f(x) = x$", x: 2.1, y: 1.9, color: "#ff0055", anchorX: 'left', anchorY: 'middle', rotate: -45 }
        - { type: "function", fn: "1/x", strokeColor: "#0055ff", strokeWidth: 3 }
        - { type: "text", content: "$g(x) = \\frac{1}{x}$", x: 3.5, y: 0.7, color: "#0055ff" }
        - { type: "function", fn: "x + 1/x", strokeColor: "#00ffcc", strokeWidth: 1 }
        - { type: "text", content: "$(f+g)(x)$", x: 2.5, y: 3.5, color: "#00ffcc", anchorX: 'left', anchorY: 'middle', rotate: -45 }
    
  - parags:
      - rtl: "<br><strong>ب- السلوك الهندسي:</strong> يظهر المعلم تقارب منحنى الدالة المجموع إلى المستقيم المقارب المائل $y=x$ عند اللانهاية كلما آلت الدالة المقلوب إلى الصفر."
      - rtl: "<strong>ج- حالة عدم التعيين في المجموع:</strong>"
      - rtl: "نأخذ الدالة الثانية بالشكل: $g(x) = -x$"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty \\quad , \\quad \\lim\\limits_{x \\to +\\infty} g(x) = -\\infty$$"
      - rtl: "حساب نهاية المجموع يعطي عبارة غير معينة جبرياً:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} (f+g)(x) = (+\\infty) + (-\\infty)$$"
      - rtl: "النتيجة: حالة عدم تعيين من الشكل $\\infty - \\infty$."

  - h3: "3. عملية الجداء (الضرب)"
    id: "operation-product"

  - parags:
      - rtl: "<strong>أ- مثال:</strong>"
      - rtl: "لتكن الدالتان $f$ و $g$ المعرفتان على $\\mathbb{R}$ كما يلي:"
      - rtl: "$$f(x) = 2 \\quad , \\quad g(x) = x^2$$"
      - rtl: "نهاية كل دالة بجوار $+\\infty$:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} f(x) = 2$$"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} g(x) = +\\infty$$"
      - rtl: "بالتعويض مع احترام قاعدة ضرب الإشارات الجبرية:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} (f \\times g)(x) = 2 \\times (+\\infty) = +\\infty$$"

  - graph:
      id: "combined-product-graph"
      class: "graph-container"
      xDomain: [-3, 3]
      yDomain: [0, 8]
      elements:
        - { type: "function", fn: "2", strokeColor: "#ff0055", strokeWidth: 1.5 }
        - { type: "text", content: "$f(x) = 2$", x: 1.5, y: 1.9, color: "#ff0055"}
        - { type: "function", fn: "x^2", strokeColor: "#0055ff", strokeWidth: 1.5 }
        - { type: "text", content: "$g(x) = x^2$", x: 2, y: 3.5, color: "#0055ff", anchorX: 'left', anchorY: 'middle', rotate: -74 }
        - { type: "function", fn: "2 * x^2", strokeColor: "#00ffcc", strokeWidth: 3 }
        - { type: "text", content: "$(f \\times g)(x)$", x: 1, y: 5, color: "#00ffcc", anchorX: 'left', anchorY: 'middle', rotate: -80 }

  - parags:
      - rtl: "<br><strong>ب- السلوك الهندسي:</strong> يوضح الرسم تأثير المعامل الثابت الموجب في مضاعفة تراتيب منحنى دالة المربع دون تغيير اتجاه تزايدها غير المنتهي."
      - rtl: "<strong>ج- حالة عدم التعيين في الجداء:</strong>"
      - rtl: "نأخذ الدالتين بجوار $+\\infty$ بالشكل: $f(x) = \\frac{1}{x^2}$ و $g(x) = x$"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} f(x) = 0 \\quad , \\quad \\lim\\limits_{x \\to +\\infty} g(x) = +\\infty$$"
      - rtl: "حساب نهاية الجداء يعطي عبارة غير معينة جبرياً:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} (f \\times g)(x) = 0 \\times (+\\infty)$$"
      - rtl: "النتيجة: حالة عدم تعيين من الشكل $0 \\times \\infty$."

  - h3: "4. عملية القسمة"
    id: "operation-quotient"

  - parags:
      - rtl: "<strong>أ- مثال:</strong>"
      - rtl: "لتكن الدالتان $f$ و $g$ المعرفتان على $]0; +\\infty[$ كما يلي:"
      - rtl: "$$f(x) = 3 \\quad , \\quad g(x) = x$$"
      - rtl: "نهاية كل دالة بجوار $+\\infty$:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} f(x) = 3$$"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} g(x) = +\\infty$$"
      - rtl: "بالتعويض المباشر لنهاية حاصل القسمة:"
      - rtl: "$$\\lim\\limits_{x \\to +\\infty} \\left(\\frac{f}{g}\\right)(x) = \\frac{3}{+\\infty} = 0$$"

  - graph:
      id: "combined-quotient-graph"
      class: "graph-container"
      xDomain: [0, 8]
      yDomain: [0, 5]
      elements:
        - { type: "function", fn: "3", strokeColor: "#ff0055", strokeWidth: 1.5 }
        - { type: "text", content: "$(f)(x) = 3$", x: 5, y: 3.1, color: "#ff0055" }
        - { type: "function", fn: "x", strokeColor: "#0055ff", strokeWidth: 1.5 }
        - { type: "text", content: "$(g)(x) = x$", x: 4.5, y: 4, color: "#0055ff", anchorX: 'left', anchorY: 'middle', rotate: -45 }
        - { type: "function", fn: "3/x", strokeColor: "#00ffcc", strokeWidth: 3 }
        - { type: "text", content: "$(\\frac{f}{g})(x)$", x: 4, y: 1, color: "#00ffcc", anchorX: 'left', anchorY: 'middle', rotate: 5 }

  - parags:
      - rtl: "<br><br><strong>ب- السلوك الهندسي:</strong> يبين الرسم تضاؤل قيمة الكسر واقتراب منحنى دالة الحاصل من محور الفواصل (مستقيم مقارب أفقي معادلته $y=0$) كلما تزايد المقام دون حدود."
      - rtl: "<strong>ج- حالتا عدم التعيين في القسمة:</strong>"
      - rtl: "• <strong>حالة الكسر غير المنتهي ($\\frac{\\infty}{\\infty}$):</strong> عند بجوار $+\\infty$"
  - formula: "$$\\lim\\limits_{x \\to +\\infty} x^2 = +\\infty \\quad , \\quad \\lim\\limits_{x \\to +\\infty} x = +\\infty \\implies \\lim\\limits_{x \\to +\\infty} \\frac{x^2}{x} = \\frac{\\infty}{\\infty}$$"
  - parags:
      - rtl: "• <strong>حالة الكسر الصفري ($\\frac{0}{0}$):</strong> عند اقتراب المتغير من القيمة $0$"
  - formula: "$$\\lim\\limits_{x \\to 0} 5x = 0 \\quad , \\quad \\lim\\limits_{x \\to 0} x = 0 \\implies \\lim\\limits_{x \\to 0} \\frac{5x}{x} = \\frac{0}{0}$$"

  - h3: "9. تطبيقات عملية ونماذج حسابية مفسرة"
    id: "detailed-examples"

  - exemple:
      title: "1.9. دراسة مآل مجموع دالة مقلوب ودالة خطية عند اللانهاية تحليلياً وهندسياً"
      exemID: "ex-ops-001"
  - exemple:
      title: "2.9. تعيين نهاية كسر شهير يتضمن سلوكاً صفرياً في البسط والمقام"
      exemID: "ex-ops-002"
---
