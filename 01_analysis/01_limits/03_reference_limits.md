---
layout: lesson
title: "نهايات الدوال المرجعية"
subtitle: "عند أطراف مجالات التعريف"
permalink: /reference_limits/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "القراءة البيانية للنهايات"
previous_url: /limits_by_graph/
next_title: "نهاية دالة مركبة وتغيير المتغير"
next_url: /composite_limits/

elements:
  - h3: "1. مآل ونهايات الدوال المألوفة"
    id: "basic-limits"

  - parags:
      - rtl: "تُعد نهايات الدوال المرجعية (المألوفة) الركيزة الأساسية في حساب نهايات الدوال الأكثر تعقيداً. تُقبل هذه النهايات دون برهان في مرحلة التعليم الثانوي وتُعتمد كقواعد مرجعية مباشرة."
  - tableSlides:
      cards:
        - - formula: "$\\lim\\limits_{x \\to -\\infty} x^2 = +\\infty$"
          - formula: "$\\lim\\limits_{x \\to +\\infty} x^2 = +\\infty$"
        - - formula: "$\\lim\\limits_{x \\to \\pm\\infty} \\frac{1}{x} = 0$"
          - formula: "$\\lim\\limits_{x \\to 0^-} \\frac{1}{x} = -\\infty$"
          - formula: "$\\lim\\limits_{x \\to 0^+} \\frac{1}{x} = +\\infty$"
        - - formula: "$\\lim\\limits_{x \\to 0} \\sqrt{x} = 0$"
          - formula: "$\\lim\\limits_{x \\to +\\infty} \\sqrt{x} = +\\infty$"
        - - formula: "$\\lim\\limits_{x \\to \\pm\\infty} |x| = +\\infty$"
        - - formula: "$\\lim\\limits_{x \\to \\pm\\infty} \\sin{x}$ غير موجودة"
          - formula: "$\\lim\\limits_{x \\to \\pm\\infty} \\cos{x}$ غير موجودة"
    
  - h3: "2. دالة القوة: $x \\mapsto x^n$ (حيث $n \\in \\mathbb{N}^*$)"
    id: "power-limits"

  - tableLines:
      dir: rtl
      lines:
        - - th: "العبارة النموذجية"
          - th: "عند $-\\infty$"
          - th: "عند $+\\infty$"
        - - th: "$x \\mapsto x^n$ ($n$ عدد طبيعي زوجي)"
          - td: "$\\lim\\limits_{x \\to -\\infty} x^n = +\\infty$"
          - td: "$\\lim\\limits_{x \\to +\\infty} x^n = +\\infty$"
        - - th: "$x \\mapsto x^n$ ($n$ عدد طبيعي فردي)"
          - td: "$\\lim\\limits_{x \\to -\\infty} x^n = -\\infty$"
          - td: "$\\lim\\limits_{x \\to +\\infty} x^n = +\\infty$"
  - graph:
      id: "ref-power-graph"
      class: "graph-container"
      xDomain: [-5, 5]
      yDomain: [-2, 10]
      elements:
        - { type: "function", fn: "x^2", strokeColor: "#00ffcc", strokeWidth: 3 }
        - { type: "text", content: "n زوجي (x²)", x: 2, y: 5, color: "#00ffcc" }
        - { type: "function", fn: "x^3/5", strokeColor: "orange", strokeWidth: 2.5 }
        - { type: "text", content: "n فردي (x³)", x: -2.5, y: -1, color: "orange" }

  - NB:
      type: success
      title: "قاعدة:"
      NBs:
        - rtl: "إذا كان الأس $n$ زَوجيّاً ($n=2, 4, 6, \\dots$) فإن نهاية دالة القوة عند اللانهايتين تكون دائماً $+\\infty$. وإذا كان الأس $n$ فرديّاً ($n=1, 3, 5, \\dots$) فإن النهاية عند $-\\infty$ تؤول إلى $-\\infty$."

  - h3: "3. دالة المقلوب: $x \\mapsto \\frac{1}{x}$"
    id: "inverse-limits"

  - parags:
      - rtl: "تُعرف دالة المقلوب على المجالين $]-\\infty; 0[$ و $]0; +\\infty[$، وتلخص نهاياتها النموذجية عند أطراف مجالات تعريفها كالآتي:"



  - tableLines:
      dir: rtl
      lines:
        - - th: "العبارة"
          - th: "عند $-\\infty$"
          - th: "عند $+\\infty$"
          - th: "عند $0$ بقيم أقل ($x < 0$)"
          - th: "عند $0$ بقيم أكبر ($x > 0$)"
        - - th: "$\\lim\\limits_{x \\to x_0} \\frac{1}{x}$"
          - td: "$\\lim\\limits_{x \\to -\\infty} \\frac{1}{x} = 0$"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{1}{x} = 0$"
          - td: "$\\lim\\limits_{\\substack{x \\to 0 \\\\ x < 0}} \\frac{1}{x} = -\\infty$"
          - td: "$\\lim\\limits_{\\substack{x \\to 0 \\\\ x > 0}} \\frac{1}{x} = +\\infty$"

  - graph:
      id: "ref-inverse-graph"
      class: "graph-container"
      xDomain: [-6, 6]
      yDomain: [-6, 6]
      elements:
        - { type: "function", fn: "1/x", strokeColor: "#00ffcc", strokeWidth: 3 }
        - { type: "text", content: "C_f", x: 2, y: 1.5, color: "#00ffcc" }
        - { type: "line", points: [[0, -6], [0, 6]], color: "red", dash: 2, width: 1.5 }
    
  - h3: "4. دالة الجذر التربيعي: $x \\mapsto \\sqrt{x}$"
    id: "sqrt-limits"

  - parags:
      - rtl: "بما أن دالة الجذر التربيعي معرفة على المجال $[0; +\\infty[$، فإن دراسة نهايتها تقتصر على أطراف هذا المجال المفتوحة بجوار اللانهاية الموجبة وعند القيمة الصفرية:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "العبارة النموذجية"
          - th: "عند القيمة $0$"
          - th: "عند $+\\infty$"
        - - th: "$x \\mapsto \\sqrt{x}$"
          - td: "$\\lim\\limits_{x \\to 0} \\sqrt{x} = 0$ (وهي صورتها المباشرة $f(0)$)"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\sqrt{x} = +\\infty$"
    
  - graph:
      id: "ref-sqrt-graph"
      class: "graph-container"
      xDomain: [-1, 10]
      yDomain: [-1, 5]
      elements:
        - { type: "function", fn: "Math.sqrt(x)", strokeColor: "#00ffcc", strokeWidth: 3 }
        - { type: "text", content: "y = √x", x: 5, y: 2.5, color: "#00ffcc" }
    
  - h3: "5. دالة القيمة المطلقة: $x \\mapsto |x|$"
    id: "abs-limits"

  - parags:
      - rtl: "دالة القيمة المطلقة معرفة على $\\mathbb{R}$ وتؤول قيمها دوماً نحو اللانهاية الموجبة عند الأطراف اللانهائية:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "العبارة النموذجية"
          - th: "عند $-\\infty$"
          - th: "عند $+\\infty$"
        - - th: "$x \\mapsto |x|$"
          - td: "$\\lim\\limits_{x \\to -\\infty} |x| = +\\infty$"
          - td: "$\\lim\\limits_{x \\to +\\infty} |x| = +\\infty$"

  - h3: "6. دالتا الجيب وجيب التمام (السلوك الاهتزازي)"
    id: "trig-limits"

  - parags:
      - rtl: "بسبب الطبيعة الدورية لكل من الدالتين $x \\mapsto \\sin x$ و $x \\mapsto \\cos x$، فإن قيمهما تظل تتأرجح بشكل مستمر ودوري بين $-1$ و $1$ كلما كبر المتغير $x$ أو صغر بلا حدود."

  - NB:
      type: danger
      title: "تنبيه:"
      NBs:
        - rtl: "النهايتان $\\lim\\limits_{x \\to \\pm\\infty} \\sin x$ و $\\lim\\limits_{x \\to \\pm\\infty} \\cos x$ <b>غير موجودتين</b>. هذا السلوك الدوري يُعد ممهداً رئيسياً لحساب النهايات باستخدام مبرهنات الحصر والمقارنة."

  - h3: "7. تطبيقات ومباحث نموذجية"
    id: "ref-examples"

  - exemple:
      title: "1.7. دراسة سلوك ونهاية دالة القوة الرابعة $x \\mapsto x^4$ عند أطراف مجال التعريف تحليلياً"
      exemID: "ex-ref-001"
  - exemple:
      title: "2.7. مبرهنة مآل مقلوب المقادير اللامتناهية في الكبر نحو القيمة الصفرية"
      exemID: "ex-ref-002"
---
