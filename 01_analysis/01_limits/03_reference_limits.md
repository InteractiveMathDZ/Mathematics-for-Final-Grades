---
layout: lesson
title: "نهايات الدوال المرجعية"
subtitle: "النهايات النموذجية للدوال المألوفة عند أطراف مجالات التعريف"
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

  - NB:
      type: success
      title: "قاعدة الإشارة الجبرية:"
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

  - h3: "5. تطبيقات ومباحث نموذجية"
    id: "ref-examples"

  - exemple:
      title: "1.5. دراسة سلوك ونهاية دالة القوة الرابعة $x \\mapsto x^4$ عند أطراف مجال التعريف تحليلياً"
      exemID: "ex-ref-001"
  - exemple:
      title: "2.5. مبرهنة مآل مقلوب المقادير اللامتناهية في الكبر نحو القيمة الصفرية"
      exemID: "ex-ref-002"
---
