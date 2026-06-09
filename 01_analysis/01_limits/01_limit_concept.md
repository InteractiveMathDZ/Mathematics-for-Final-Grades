---
layout: lesson
title: "مفهوم نهاية دالة عددية"
subtitle: "الاقتراب، النهاية والصورة"
permalink: /limit_concept/
mathJax: true
graph: true
lessonID: "limit"

next_title: "القراءة البيانية للنهايات من التمثيل البياني"
next_url: "/limits_by_graph/"

elements:
  - h3: "1. مفهوم نهاية دالة عددية"
    id: "why-limits"

  - parags:
      - rtl: "تسمح دراسة النهايات ببحث سلوك وتغيرات الدالة العدديّة $f$ بجوار نقطة أو عند اللانهاية، وتحديد القيم الإرشادية التي تقترب منها صور الدالة عندما يقترب المتغير المستقل من قيمة معينة."
      - rtl: "<strong>تعريف أولي:</strong> نرمز بـ $\\lim\\limits_{x \\to a} f(x) = L$ لقولنا إن صور الدالة $f(x)$ تقترب من القيمة الحقيقية $L$ كلما اقترب المتغير $x$ من القيمة $a$ بالقدر الكافي، دون اشتراط تعريف الدالة عند $a$ بالضرورة."

  - h3: "2. دراسة تحليلية للاقتراب بجوار نقطة"
    id: "case-study"
 
  - parags:
      - rtl: "نعتبر الدالة $f$ المعرفة على $\\mathbb{R} \\setminus \\{1\\}$ بالعبارة:"
      - center: "$f(x) = \\frac{x^2 - 1}{x - 1}$"
      - rtl: "الدالة $f$ غير معرفة عند القيمة $1$ لكونها تعدم المقام. لدراسة سلوك صور القيم القريبة من $1$، نلخص نتائج الاقتراب في الجدولين التاليين:"

  - tableLines:
      dir: ltr
      lines:
        - - th: "<span dir='rtl'>قيم المتغير $x$ قيم أقل من 1 $x < 1$</span>"
          - td: "0.9"
          - td: "0.99"
          - td: "0.999"
          - td: "$\\to 1$"
        - - th: "<span dir='rtl'>الصور بواسطة $f(x)$</span>"
          - td: "1.9"
          - td: "1.99"
          - td: "1.999"
          - td: "$\\to 2$"
  
  - tableLines:
      dir: ltr
      lines:
        - - th: "<span dir='rtl'>قيم المتغير $x$ قيم أكبر من 1 $x > 1$</span>"
          - td: "1.1"
          - td: "1.01"
          - td: "1.001"
          - td: "$\\to 1$"
        - - th: "<span dir='rtl'>الصور بواسطة $f(x)$</span>"
          - td: "2.1"
          - td: "2.01"
          - td: "2.001"
          - td: "$\\to 2$"
  - graph:
      id: "limit-concept-discontinuity"
      class: "graph-container"
      xDomain: [-1.5, 3.5]
      yDomain: [-0.5, 4.5]
      elements:
        - { type: "function", fn: "(x**2 - 1) / (x - 1)", strokeColor: "#00ffcc", strokeWidth: 3 } 
        - { type: "text", content: "C_f", x: 2.2, y: 3.7, color: "#00ffcc" }
        - { type: "point", x: 1, y: 2, strokeColor: "#ff007f", fillColor: "black", size: 2 }
        - { type: "line", points: [[1, 0], [1, 2]], color: "#666666", dash: 2, width: 1 }
        - { type: "line", points: [[0, 2], [1, 2]], color: "#666666", dash: 2, width: 1 } 
        - { type: "text", content: "x = 1", x: 1.05, y: 3, color: "#ffffff", anchorX: 'left', anchorY: 'middle', rotate: 90 }
        - { type: "text", content: "y = 2", x: 2.5, y: 2.1, color: "#ffffff"}

  - NB:
      type: success
      title: "استنتاج تحليلي:"
      NBs:
        - rtl: "يتبين تحليلياً أنه كلما اقترب المتغير $x$ من القيمة $1$ من اليمين أو اليسار، تقترب قيم $f(x)$ بالتناظر من القيمة $2$. نقول إن نهاية الدالة $f$ عند $1$ هي $2$."

  - h3: "3. التمييز بين مفهومي الصورة والنهاية"
    id: "f-vs-limit"

  - parags:
      - rtl: "يجب التمييز بدقة بين القيمة المباشرة للدالة عند النقطة وبين سلوكها الديناميكي بجوارها:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المفهوم التحليلي"
          - th: "الصورة $f(a)$"
          - th: "النهاية $\\lim\\limits_{x \\to a} f(x)$"
        - - th: "الدلالة الرياضية"
          - td: "تحديد القيمة العددية القطعية للدالة عند النقطة $a$ مباشرة."
          - td: "دراسة سلوك قيم الدالة ومآلها عندما يقترب المتغير $x$ من $a$."
        - - th: "الوضعية في المثال"
          - td: "غير موجودة (الدالة غير معرفة عند القيمة $1$)."
          - td: "موجودة وتساوي تماماً العدد الحقيقي $2$."
          
  - h3: "4. التعبير والترميز الرياضي"
    id: "notation"
    
  - parags:
      - rtl: "نصيغ العبارة تحليلياً على النحو التالي:"
      - center: "$\\lim\\limits_{x \\to 1} f(x) = 2$"
      - rtl: "وتقرأ: <strong>نهاية الدالة $f$ عندما يؤول المتغير $x$ إلى $1$ هي $2$</strong>."

  - h3: "5. تطبيقات"
    id: "applications"

  - exemple:
      title: "1.5. دراسة سلوك ونهاية نسبة تزايد دالة بجوار القيمة صفر بيانيّاً وتحليليّاً"
      exemID: "limit-exem-intro-001"
---
