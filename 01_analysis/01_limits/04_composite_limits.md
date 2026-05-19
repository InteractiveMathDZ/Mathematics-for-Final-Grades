---
layout: lesson
title: "نهاية الدالة المركبة وتغيير المتغير"
subtitle: "تفكيك الدوال المتداخلة عبر ميكانيكية حساب النهايات بالمرحلتين"
permalink: /composite_limits/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "نهايات الدوال المرجعية الأساسية"
previous_url: "/reference_limits/"
next_title: "العمليات الحسابية على النهايات"
next_url: "/ops_limits/"

elements:
  - h3: "1. مفهوم نهاية دالة مركبة"
  - parags:
      - rtl: "عندما تتداخل دالتان لتشكيل دالة مركبة"
      - center: "$(f \\circ g)(x) = f[g(x)]$"
      - rtl: "فإن حساب النهاية لا يتم دفعة واحدة، بل يتبع مساراً تتابعياً من خطوتين؛ حيث تعمل مخرجات الدالة الأولى كمدخلات للدالة الثانية."
      - rtl: "• <b>نص المبرهنة النظامية:</b> لتكن $f$ و $g$ دالتين عدديتين. إذا كانت نهاية الدالة $g$ عند القيمة $a$ هي $b$، وكانت نهاية الدالة $f$ عند القيمة $b$ هي $c$، فإن نهاية الدالة المركبة عند $a$ هي $c$. ونكتبها صراحة:"
      - center: "$\\begin{cases}\\lim\\limits_{x \\to a} g(x) = b \\\\ \\lim\\limits_{x \\to b} f(x) = c \\end{cases} \\implies \\lim\\limits_{x \\to a} f[g(x)] = c$"
      - rtl: "حيث يمكن أن تكون القيم $a$، $b$، و $c$ أعداداً حقيقية أو قيم لانهاية ($\\pm\\infty$)."

  - h3: "2. تقنية تغيير المتغير"
  - parags:
      - rtl: "تعتبر هذه التقنية الأداة الحركية الأقوى لتسهيل حساب نهايات العبارات المعقدة أو الصماء؛ حيث نقوم باستبدال الدالة الداخلية بمتغير جديد واحد (نرمز له عادة بالرمز $X$) لتبسيط العبارة وتحويلها إلى شكل مرجعي مألوف."
      - rtl: "• <b>الخوارزمية الإجرائية للتطبيق:</b>"
      - rtl: "1. <b>الوضع والتعويض:</b> نضع المتغير المساعد الجديد مساوياً للدالة الداخلية: $X = g(x)$."
      - rtl: "2. <b>ترحيل الموضع:</b> نبحث إلى ماذا يؤول المتغير الجديد $X$ عندما يؤول المتغير الأصلي $x$ إلى القيمة المستهدفة $a$ (نحسب $\\lim\\limits_{x \\to a} g(x) = b$، إذن $X \\to b$)."
      - rtl: "3. <b>صياغة المآل الجديد:</b> نعيد كتابة النهاية بالكامل بدلالة $X$ الجديد ونحسب الناتج الصافي: $\\lim\\limits_{X \\to b} f(X)$."

  - h3: "مثال تطبيقي:"
  - parags:
      - rtl:" حساب النهاية:"
      - center: "$\\lim\\limits_{x \\to 0} \\cos(\\sqrt{x})$"
  - parags:
      - rtl: "1. نلاحظ أن الدالة هي مركبة من دالة الجذر التربيعي ودالة جيب التمام."
      - rtl: "2. نطبق تغيير المتغير بوضع الدالة الداخلية: $X = \\sqrt{x}$."
      - rtl: "3. عندما يؤول $x$ إلى $0$ بقيم كبرى ($x \\to 0^+$)، فإن المتغير الجديد يؤول أيضاً إلى $0$ ($X \\to 0$)."
      - rtl: "4. تتحول النهاية ميكانيكياً إلى شكل مرجعي مباشر: $\\lim\\limits_{X \\to 0} \\cos(X) = \\cos(0) = 1$."
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

            <text x="300" y="145" text-anchor="middle" fill="#94a3b8" style="font-size: 13px;">مخطط التدفق التتابعي: ترحيل المآل الجبري من المحطة (x) إلى المحطة الوسيطة (X) لبلوغ الناتج الصافي</text>
          </svg>
        </div>


  - NB:
      title: "تنبيه حاسم عند حساب النهايات المركبة:"
      type: "warning"
      NBs:
        - rtl: "من الأخطاء المتكررة الشائعة عند تطبيق تقنية تغيير المتغير، هو قيام الطالب باستبدال عبارة الدالة بـ $X$ مع نسيان ترحيل وتغيير القيمة التي يؤول إليها المتغير؛ تذكر دائماً أنه لا يجوز أبداً ترك رمز المآل القديم $x \\to a$ مع العبارة الجديدة، بل يجب حساب نهاية الدالة الداخلية أولاً بدقة لتحديد القيمة المستهدفة الجديدة للمتغير الوسيط $X \\to b$ قبل الشروع في الحساب النهائي للمجموع."
---
