---
layout: lesson
title: "نهاية دالة مركبة وتغيير المتغير"
subtitle: "مبرهنة نهاية دالة مركبة وتطبيق تقنية تغيير المتغير"
permalink: /composite_limits/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "مبرهنات العمليات على النهايات"
previous_url: "/ops_limits/"
next_title: "نهاية دالة كثير حدود ودالة ناطقة"
next_url: "/polynomial_limits/"



elements:
  - h3: "1. مبرهنة نهاية دالة مركبة"
    id: "composite-theorem"

  - parags:
      - rtl: "تسمح مبرهنة نهاية دالة مركبة بتعيين نهاية دالة تنتج عن تركيب دالتين متتاليتين، حيث تُحسب النهاية على مرحلتين متتابعتين بحيث تؤول مخرجات الدالة الأولى لتصبح مدخلات للدالة الثانية."
      - rtl: "<strong>نص المبرهنة:</strong> لتكن $f$ و $g$ دالتين عدديتين، و $a$، $b$، $c$ أعداداً حقيقية أو قيم لانهاية ($\\pm\\infty$)."
      - rtl: "إذا كانت نهاية الدالة $g$ عند $a$ هي $b$، وكانت نهاية الدالة $f$ عند $b$ هي $c$، فإن نهاية الدالة المركبة $f \\circ g$ عند $a$ هي $c$."
      - rtl: "نعبر عن المبرهنة تحليلياً كالآتي:"
      - center: "$\\begin{cases}\\lim\\limits_{x \\to a} g(x) = b \\\\ \\lim\\limits_{X \\to b} f(X) = c \\end{cases} \\implies \\lim\\limits_{x \\to a} (f \\circ g)(x) = c$"

  - h3: "2. تقنية تغيير المتغير"
    id: "variable-change"

  - parags:
      - rtl: "تُعد تقنية تغيير المتغير إجراءً تحليلياً يُستعمل لتبسيط العبارات الجبرية الصماء أو المركبة وتسهيل حساب نهايتها، وذلك باستبدال العبارة الداخلية بمتغير وسيط واحد (نرمز له بالرمز $X$) لتحويل الدالة إلى شكل مرجعي مألوف."
      - rtl: "<strong>الخطوات المنهجية لتطبيق التقنية:</strong>"
      - rtl: "1. <b>وضع المتغير الوسيط:</b> نرمز للعبارة الداخلية بمتغير جديد بوضع: $X = g(x)$."
      - rtl: "2. <b>تعيين المآل الجديد:</b> نحسب نهاية الدالة الداخلية $g$ عندما يؤول المتغير الأصلي $x$ نحو القيمة المستهدفة $a$ لتحديد مآل المتغير الجديد $X$ (إذا كان $\\lim\\limits_{x \\to a} g(x) = b$ فإن $X \\to b$)."
      - rtl: "3. <b>الحساب النهائي:</b> نعيد صياغة عبارة النهاية بدلالة المتغير $X$ والمآل الجديد $b$ ثم نحسب القيمة النهائية: $\\lim\\limits_{X \\to b} f(X)$."

  - h3: "3. أمثلة تطبيقية نموذجية"
    id: "applied-examples"

  - parags:
      - rtl: "<b>المثال الأول (حساب مباشر):</b> حساب النهاية التالية عند الصفر بقيم أكبر:"
      - center: "$\\lim\\limits_{\\substack{x \\to 0 \\\\ x > 0}} \\cos(\\sqrt{x})$"
      - rtl: "تطبيق تقنية تغيير المتغير:"
      - rtl: "1. نضع المتغير الوسيط: $X = \\sqrt{x}$."
      - rtl: "2. تعيين المآل: عندما يؤول $ x \\to 0^+$، فإن المتغير الجديد يؤول أيضاً إلى الصفر من اليمين ($X \\to 0^+$)."
      - rtl: "3. التعويض والحساب: تتحول إلى نهاية مرجعية مباشرة: $\\lim\\limits_{X \\to 0^+} \\cos(X) = \\cos(0) = 1$."

  - parags:
      - rtl: "--------------------------------------------------"
      - rtl: "<b>المثال الثاني (إزالة حالة عدم التعيين):</b> احسب نهاية الدالة التالية بجوار اللانهاية الموجبة:"
      - center: "$\\lim\\limits_{x \\to +\\infty} x \\sin\\left(\\frac{1}{x}\\right)$"
      - rtl: "عند التعويض المباشر، نجد أن $x \\to +\\infty$ و $\\frac{1}{x} \\to 0$، وبما أن $\\sin(0)=0$، فنحن أمام حالة عدم تعيين من الشكل $[\\infty \\times 0]$. لتفكيك هذه العقدة، نغير المتغير برؤية هندسية:"
      - rtl: "1. <b>وضع المتغير المساعد:</b> نختار مقلوب المتغير الأصلي كهدف للتنظيف: $X = \\frac{1}{x}$ (وهذا يعني حتماً برمجياً أن $x = \\frac{1}{X}$)."
      - rtl: "2. <b>ترحيل المآل بدقة:</b> عندما يؤول المتغير القديم نحو اللانهاية ($x \\to +\\infty$)، فإن مقلوبه يؤول حتماً نحو الصفر الموجب ($X \\to 0^+$)."
      - rtl: "3. <b>التعويض النهائي:</b> باستبدال كل عناصر العبارة، تظهر لنا النهاية الشهيرة للدالة الجيبية:"
      - center: "$\\lim\\limits_{X \\to 0^+} \\frac{1}{X} \\cdot \\sin(X) = \\lim\\limits_{X \\to 0^+} \\frac{\\sin(X)}{X} = 1$"
      - rtl: "إذن بفضل تقنية تغيير المتغير استأصلنا حالة عدم التعيين بنجاح: $\\lim\\limits_{x \\to +\\infty} x \\sin\\left(\\frac{1}{x}\\right) = 1$."

  - graph:
      id: "composite-sin-x-graph"
      class: "graph-container"
      xDomain: [0, 20]
      yDomain: [-0.5, 1.5]
      elements:
        - { type: "function", fn: "x * Math.sin(1/x)", strokeColor: "#38bdf8", strokeWidth: 3 }
        - { type: "line", points: [[0, 1], [20, 1]], color: "red", dash: 4, width: 1.5 }
        - { type: "text", content: "y = x.sin(1/x)", x: 10, y: 1.2, color: "#38bdf8" }
        - { type: "text", content: "المستقيم المقارب y = 1", x: 12, y: 0.8, color: "red" }

  - raw_html: |
        <div class="graph" style="text-align: center; margin: 30px 0;">
          <svg width="600" height="160" viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" style="background: transparent; max-width: 100%;">
            <style>
              text { font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 14px; fill: #eee; }
              .box-title { font-weight: bold; font-size: 14px; fill: #fff; }
              .step-num { font-size: 11px; fill: #aaa; }
              .math-text { font-style: italic; font-weight: bold; }
            </style>

            <defs>
              <marker id="arrow-transition" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0 1, 7 4, 0 7" fill="#007bff"/>
              </marker>
            </defs>

            <rect x="10" y="30" width="150" height="80" rx="8" fill="#1e293b" stroke="#007bff" stroke-width="1.5" />
            <text x="85" y="52" text-anchor="middle" class="step-num">المرحلة 1</text>
            <text x="85" y="72" text-anchor="middle" class="box-title">المتغير الأصلي</text>
            <text x="85" y="95" text-anchor="middle" fill="#007bff" class="math-text">x &rarr; a</text>

            <path d="M165 70 L 210 70" stroke="#007bff" stroke-width="2" fill="none" marker-end="url(#arrow-transition)"/>
            <text x="190" y="60" text-anchor="middle" fill="#007bff" class="math-text">g(x)</text>

            <rect x="220" y="30" width="160" height="80" rx="8" fill="#1e293b" stroke="#ffa500" stroke-width="1.5" />
            <text x="300" y="52" text-anchor="middle" class="step-num">المرحلة 2</text>
            <text x="300" y="72" text-anchor="middle" class="box-title" fill="#ffa500">تغيير المتغير</text>
            <text x="300" y="95" text-anchor="middle" fill="#ffa500" class="math-text">X = g(x) &rarr; b</text>

            <path d="M385 70 L 430 70" stroke="#007bff" stroke-width="2" fill="none" marker-end="url(#arrow-transition)"/>
            <text x="410" y="60" text-anchor="middle" fill="#168574" class="math-text">f(X)</text>

            <rect x="440" y="30" width="150" height="80" rx="8" fill="#1e293b" stroke="#168574" stroke-width="1.5" />
            <text x="515" y="52" text-anchor="middle" class="step-num">النتيجة</text>
            <text x="515" y="72" text-anchor="middle" class="box-title">الاستقرار النهائي</text>
            <text x="515" y="95" text-anchor="middle" fill="#168574" class="math-text">الناتج = c</text>

            <text x="300" y="145" text-anchor="middle" fill="#94a3b8" style="font-size: 13px;">مخطط تتابع مراحل حساب نهاية دالة مركبة بالانتقال من المتغير الأصلي إلى المتغير الوسيط</text>
          </svg>
        </div>

  - NB:
      title: "تنبيه منهجي حول ترحيل مآل المتغير المساعد:"
      type: "warning"
      NBs:
        - rtl: "من الأخطاء التحليلية الشائعة عند تطبيق تقنية تغيير المتغير، هو استبدال العبارة الجبرية بالمتغير الجديد $X$ مع إبقاء رمز المآل القديم للمتغير الأصلي ($x \\to a$). تذكر دائماً أنه يجب حتماً ترحيل المآل بحساب نهاية الدالة الداخلية أولاً، لتعيين القيمة الدقيقة التي يقترب منها المتغير الوسيط الجديد ($X \\to b$) قبل إجراء الحساب الجبري النهائي."
---
