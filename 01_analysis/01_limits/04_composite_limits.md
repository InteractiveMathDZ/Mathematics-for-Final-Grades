---
layout: lesson
title: "نهاية دالة مركبة وتغيير المتغير"
subtitle: "مبرهنة نهاية دالة مركبة وتطبيق تقنية تغيير المتغير"
permalink: /composite_limits/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "نهايات الدوال المرجعية"
previous_url: "/reference_limits/"
next_title: "مبرهنات العمليات على النهايات"
next_url: "/ops_limits/"

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

  - h3: "3. مثال تطبيقي نموذجي"
    id: "applied-example"

  - parags:
      - rtl: "المطلوب حساب النهاية التالية:"
      - center: "$\\lim\\limits_{\\substack{x \\to 0 \\\\ x > 0}} \\cos(\\sqrt{x})$"
      - rtl: "العبارة تمثل تركيب دالة الجذر التربيعي متبوعة بدالة الجيب تمام. لتسهيل الحساب نطبق تقنية تغيير المتغير وفق الخطوات التالية:"
      - rtl: "1. نضع المتغير الوسيط مساوياً للدالة الداخلية: $X = \\sqrt{x}$."
      - rtl: "2. عند تعيين مآل المتغير الجديد، نجد أنه عندما يؤول $x$ إلى $0$ بقيم أكبر ($x \\to 0$ و $x > 0$)، فإن $X$ يؤول بدوره إلى $0$ ($X \\to 0$)."
      - rtl: "3. بالتعويض، تتحول النهاية مباشرة إلى نهاية نموذجية دالة مرجعية:"
      - center: "$\\lim\\limits_{X \\to 0} \\cos(X) = \\cos(0) = 1$"
      - rtl: "إذن: $\\lim\\limits_{\\substack{x \\to 0 \\\\ x > 0}} \\cos(\\sqrt{x}) = 1$."

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
