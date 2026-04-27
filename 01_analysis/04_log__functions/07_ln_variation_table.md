---
layout: lesson
title: "اللوغاريتم: اتجاه التغير وجدول التغيرات"
permalink: /ln_variation_table/
mathJax: true
graph: true
lessonID: "ln-variations"

# روابط الاتصال
previous_title: "اشتقاق الدالة ln والدوال من الشكل ln(u)"
previous_url: "/ln_derivatives/"

next_title: "المنحنى الممثل للدالة ln والخصائص الهندسية"
next_url: "/ln_graph/"

elements:
  - h3: "1. اتجاه تغير الدالة الأم (ln x)"
    id: "ln-monotony"

  - parags:
      - rtl: "الدالة:"
      - center: "$x \\mapsto \\ln x$"
      - rtl: "معرفة وقابلة للاشتقاق على $]0; +\\infty[$ ومشتقتها هي:"
      - center: "$f'(x) = \\frac{1}{x}$."
      - rtl: "بما أن $x > 0$ دائماً في مجال التعريف، فإن المشتقة $f'(x)$ موجبة تماماً دوماً."

  - NB:
      title: "الاستنتاج الأساسي:"
      type: "success"
      NBs:
        - rtl: "الدالة $\\ln$ متزايدة تماماً على المجال $]0; +\\infty[$."

  - h3: "2. جدول تغيرات الدالة ln"
    id: "ln-table"

  - parags:
      - rtl: "يلخص جدول التغيرات سلوك الدالة من حيث النهايات، الإشارة، والاشتقاق:"

  - tableLines:
      dir: ltr
      lines:
        - - th: "$x$"
          - td: "$0$"
          - td: "$1$"
          - td: "$e$"
          - td: "$+\\infty$"
        - - th: "$f'(x)$"
          - td: "$\\|$"
          - td: "$+$"
          - td: "$+$"
          - td: "$+$"
        - - th: "$f(x)$"
          - td: "$\\|$ $-\\infty$"
          - td: "$\\nearrow$ $0$"
          - td: "$\\nearrow$ $1$"
          - td: "$\\nearrow$ $+\\infty$"

  - h3: "3. إشارة الدالة $\\ln x$"
    id: "ln-sign"

  - parags:
      - rtl: "يجب التفريق بين اتجاه التغير (متزايدة دائماً) وبين إشارة قيم الدالة نفسها:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المجال"
          - th: "إشارة $\\ln x$"
          - th: "التفسير"
        - - td: "$x \\in ]0; 1[$"
          - td: "سالبة ($\\ln x < 0$)"
          - td: "المنحنى تحت محور الفواصل"
        - - td: "$x = 1$"
          - td: "منعدمة ($\\ln x = 0$)"
          - td: "نقطة التقاطع مع محور الفواصل"
        - - td: "$x \\in ]1; +\\infty[$"
          - td: "موجبة ($\\ln x > 0$)"
          - td: "المنحنى فوق محور الفواصل"

  - h3: "4. حالة الدوال المركبة $\\ln(u)$"
    id: "composite-variation"

  - parags:
      - rtl: "لدراسة اتجاه تغير دالة من الشكل:"
      - center: "$f(x) = \\ln(u(x))$،"
      - rtl: " نتبع إشارة المشتقة:"
      - center: "$f'(x) = \\frac{u'(x)}{u(x)}$."
      - rtl: "بما أن $u(x) > 0$ دائماً (شرط الوجود)، فإن إشارة $f'$ هي نفس إشارة $u'$ تماماً."

  - NB:
      title: "قاعدة:"
      type: "primary"
      NBs:
        - rtl: "للدالتين $u$ و $\\ln(u)$ نفس اتجاه التغير دائماً."

---
