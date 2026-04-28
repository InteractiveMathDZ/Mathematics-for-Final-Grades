---
layout: lesson
title: "الأسية: اتجاه التغير وجدول تغيرات الدالة exp"
permalink: /exp_variation_table/
mathJax: true
graph: true
lessonID: "exp-variations"

# روابط الاتصال
previous_title: "اشتقاق الدالة exp"
previous_url: "/exp_derivatives/"

next_title: "المنحنى الممثل للدالة exp"
next_url: "/exp_graph/"

elements:
  - h3: "1. اتجاه تغير الدالة الأم ($e^x$)"
    id: "basic-exp-trend"

  - parags:
      - rtl: "الدالة الأسية هي دالة <strong>متزايدة تماماً</strong> على $\\mathbb{R}$."
      - rtl: "<strong>التبرير:</strong> بما أن $(e^x)' = e^x$ ونحن نعلم أن $e^x > 0$ دائماً، فإن المشتقة موجبة تماماً، ومنه الدالة متزايدة دائماً."

  - h3: "2. اتجاه تغير الدالة المركبة $e^{u(x)}$"
    id: "composite-exp-trend"

  - parags:
      - rtl: "هنا يكمن سر المهنة؛ إشارة مشتقة $e^{u(x)}$ هي <strong>نفس إشارة $u'(x)</strong>."
      - center: "$(e^{u(x)})' = u'(x) \\cdot e^{u(x)}$"
      - rtl: "بما أن $e^{u(x)}$ موجب دوماً، فإنه لا يؤثر على الإشارة، وتصبح دراسة التغيرات محصورة في دراسة إشارة مشتقة الأس $u'(x)$."

  - h3: "3. جدول تغيرات الدالة المرجعية"
    id: "exp-table-ref"

  - tableLines:
      dir: ltr
      lines:
        - - th: "$x$"
          - th: "$-\\infty$"
          - th: "$0$"
          - th: "$+\\infty$"
        - - td: "$f'(x)$"
          - td: "+"
          - td: "+"
          - td: "+"
        - - td: "$f(x)$"
          - td: "$0$ (مقارب)"
          - td: "$\\nearrow 1 \\nearrow$"
          - td: "$+\\infty$"

  - NB:
      title: "قاعدة (تتبع الأس):"
      type: "success"
      NBs:
        - rtl: "إذا كان الأس متزايداً، فالأسية متزايدة. وإذا كان الأس متناقصاً (مثل $e^{-x}$)، فالأسية متناقصة."

  - h3: "4. مثال لدالة مركبة $f(x) = e^{-x^2}$"
    id: "variation-example"

  - parags:
      - rtl: "1. المشتقة: $f'(x) = -2x \\cdot e^{-x^2}$."
      - rtl: "2. الإشارة: تعتمد على $-2x$ فقط (لأن الأسية موجبة)."
      - rtl: "3. النتيجة: الدالة متزايدة على $]-\\infty, 0]$ ومتناقصة على $[0, +\\infty[$، وتقبل قيمة حدية عظمى هي $f(0)=1$."

  - notes:
      - rtl: "تذكر دائماً أن النهايات عند الأطراف يجب أن تنسجم مع اتجاه الأسهم في الجدول؛ فإذا كانت الدالة متزايدة، يجب أن تكون النهاية اليمنى أكبر من اليسرى."

---
