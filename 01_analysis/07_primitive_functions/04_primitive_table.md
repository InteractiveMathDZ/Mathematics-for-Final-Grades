---
layout: lesson
title: "جدول الدوال الأصلية المرجعية"
subtitle: "مخزن الأدوات: القواعد الجاهزة."
permalink: /primitive_table/
mathJax: true
lessonID: "prim-04"

# روابط الاتصال
previous_title: "المبحث 3: الدالة الأصلية التي تأخذ قيمة معلومة"
previous_url: "/primitive_condition/"

next_title: "المبحث 5: العمليات الجبرية والدوال الأصلية"
next_url: "/primitive_operations/"

elements:
  - h3: "1. أهمية الجدول المرجعي"
    id: "table-importance"

  - parags:
      - rtl: "هذا الجدول هو 'دستور' العودة للأصل. كل دالة نشتقها تعطينا قاعدة عكسية. الهدف هنا هو حفظ هذه القوالب لتطبيقها مباشرة دون الحاجة للتخمين في كل مرة."

  - h3: "2. الجدول الأساسي للدوال الأصلية"
    id: "main-table"

  - tableLines:
      dir: ltr
      lines:
        - - th: "الدالة $f(x)$"
          - th: "الدالة الأصلية $F(x)$"
          - th: "مجال التعريف / ملاحظات"
        - - td: "$a$ (عدد ثابت)"
          - td: "$ax + c$"
          - td: "$\\mathbb{R}$"
        - - td: "$x^n$ ($n \\in \\mathbb{N}$)"
          - td: "$\\frac{1}{n+1} x^{n+1} + c$"
          - td: "$\\mathbb{R}$"
        - - td: "$\\frac{1}{x^n}$ ($n \\ge 2$)"
          - td: "$\\frac{-1}{(n-1)x^{n-1}} + c$"
          - td: "$]-\\infty; 0[$ أو $]0; +\\infty[$"
        - - td: "$\\frac{1}{\\sqrt{x}}$"
          - td: "$2\\sqrt{x} + c$"
          - td: "$]0; +\\infty[$"
        - - td: "$\\cos(x)$"
          - td: "$\\sin(x) + c$"
          - td: "$\\mathbb{R}$"
        - - td: "$\\sin(x)$"
          - td: "$-\\cos(x) + c$"
          - td: "$\\mathbb{R}$"

  - h3: "3. حالات خاصة (الأسية واللوغاريتم)"
    id: "special-cases"

  - tableLines:
      dir: ltr
      lines:
        - - td: "$e^x$"
          - td: "$e^x + c$"
          - td: "الدالة الوحيدة التي هي أصل لنفسها"
        - - td: "$\\frac{1}{x}$"
          - td: "$\\ln|x| + c$"
          - td: "القاعدة الذهبية للكسور"

  - h3: "4. تقنية 'زيادة الأس'"
    id: "power-rule-tip"
  - parags:
      - rtl: "لاحظ الخيط الناظم في دوال القوة: دائماً نضيف 1 للأس القديم، ثم نقسم على الأس الجديد. هذه هي 'خوارزمية' التلميذ في التعامل مع $x^n$."

  - NB:
      title: "تحذير:"
      type: "danger"
      NBs:
        - rtl: "انتبه لإشارة السالب في أصل $\\sin(x)$ وفي مقلوب القوى؛ فهي الفخ الذي يسقط فيه أغلب التلاميذ."
        - rtl: "دائماً اختبر نتيجتك: اشتق $F(x)$ التي وجدتها، إذا لم تعد إلى $f(x)$ الأصلية، فهناك خلل في، ابحث عنه...."

---
