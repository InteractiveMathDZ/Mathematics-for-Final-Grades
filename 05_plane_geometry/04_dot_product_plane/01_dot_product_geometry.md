---
layout: lesson
title: "العبارة الهندسية والشعاعية للجداء السلمي"
permalink: /dot_product_geometry/
mathJax: true
graph: true
lessonID: "plGeo"

previous_title: "الجداء السلمي في المستوي"
previous_url: /dot_product_plane/
next_title: "العبارة التحليلية للجداء السلمي"
next_url: /dot_product_analytic/

elements:
  - h3: "1. العبارة المثلثية (بدلالة جيب تمام الزاوية المحصورة)"
    id: "dot-trig-definition"

  - parags:
      - rtl: "الجداء السلمي لشعاعين غير معدومين $\\vec{u}$ و $\\vec{v}$ هو عدد حقيقي نرمز له بـ $\\vec{u} \\cdot \\vec{v}$. ويحسب بدلالة طويلتيهما وقيس الزاوية المحصورة بينهما $\\theta = (\\vec{u}, \\vec{v})$ وفق العلاقة التالية:"
      - center: "$$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$$"

  - tableLines:
      dir: rtl
      lines:
        - - th: "إشارة العدد الناتج"
          - th: "وضعية الزاوية $\\theta$"
          - th: "التفسير الهندسي"
        - - th: "$\\vec{u} \\cdot \\vec{v} > 0$"
          - td: "زاوية حادة: $0^\\circ \\le \\theta < 90^\\circ$"
          - td: "الشعاعان في نفس الاتجاه."
        - - th: "$\\vec{u} \\cdot \\vec{v} < 0$"
          - td: "زاوية منفرجة: $90^\\circ < \\theta \\le 180^\\circ$"
          - td: "الشعاعان في اتجاهين متعاكسين."
        - - th: "$\\vec{u} \\cdot \\vec{v} = 0$"
          - td: "زاوية قائمة: $\\theta = 90^\\circ$ (أو أحد الشعاعين معدوم)"
          - td: "الشعاعان متعامدان (حاملاهما متعامدان)."

  - h3: "2. عبارة الإسقاط العمودي"
    id: "dot-projection"

  - parags:
      - rtl: "لتكن النقاط $A$، $B$ و $C$ حيث $\\vec{u} = \\vec{AB}$ و $\\vec{v} = \\vec{AC}$. لتكن $H$ المسقط العمودي للنقطة $C$ على المستقيم $(AB)$:"
      - center: "$$\\vec{AB} \\cdot \\vec{AC} = \\vec{AB} \\cdot \\vec{AH}$$"
      - rtl: "يؤول حساب الجداء السلمي في هذه الحالة إلى جداء الطولين $AB$ و $AH$ مع مراعاة الاتجاه:"
      - rtl: "- <strong>$AB \\times AH$ :</strong> إذا كان للشعاعين $\\vec{AB}$ و $\\vec{AH}$ نفس الاتجاه."
      - rtl: "- <strong>$- (AB \\times AH)$ :</strong> إذا كان للشعاعين $\\vec{AB}$ و $\\vec{AH}$ اتجاهان متعاكسان."

  - h3: "3. المربع السلمي لشعاع"
    id: "dot-square"

  - parags:
      - rtl: "الجداء السلمي لشعاع $\\vec{u}$ في نفسه يسمى المربع السلمي ونرمز له بـ $\\vec{u}^2$. بما أن قيس الزاوية بين الشعاع ونفسه هو $0^\\circ$ و $\\cos(0^\\circ) = 1$، ينتج:"
      - center: "$$\\vec{u}^2 = \\|\\vec{u}\\|^2$$"
      - rtl: "تسمح هذه الخاصية بتحويل الحساب الشعاعي المربع إلى أطوال هندسية مباشرة: $\\vec{AB}^2 = AB^2$."

  - h3: "4. مثال تطبيقي (حساب الجداء السلمي بالإسقاط والتفكيك)"
    id: "dot-geom-ex"

  - parags:
      - rtl: "ليكن $ABCD$ مستطيلاً أبعاده هي $AB = 6$ و $AD = 4$. لتكن $I$ منتصف القطعة $[AB]$. احسب الجداء السلمي $\\vec{AB} \\cdot \\vec{AC}$ ثم $\\vec{AB} \\cdot \\vec{DI}$."

  - tableLines:
      dir: rtl
      lines:
        - - th: "المطلوب"
          - th: "خطوات الحساب والتعويض"
          - th: "النتيجة الهندسية"
        - - th: "$\\vec{AB} \\cdot \\vec{AC}$"
          - td: "المسقط العمودي للنقطة $C$ على المستقيم $(AB)$ هو النقطة $B$ لأن $ABCD$ مستطيل.<br>إذن: $\\vec{AB} \\cdot \\vec{AC} = \\vec{AB} \\cdot \\vec{AB} = AB^2 = 6^2$."
          - td: "$\\vec{AB} \\cdot \\vec{AC} = 36$"
        - - th: "$\\vec{AB} \\cdot \\vec{DI}$"
          - td: "نستعمل علاقة شال لتفكيك الشعاع الثاني: $\\vec{DI} = \\vec{DA} + \\vec{AI}$<br>بالتوزيع نجد: $\\vec{AB} \\cdot (\\vec{DA} + \\vec{AI}) = \\vec{AB} \\cdot \\vec{DA} + \\vec{AB} \\cdot \\vec{AI}$<br>بما أن $(AB) \\perp (DA)$ فإن $\\vec{AB} \\cdot \\vec{DA} = 0$.<br>بما أن $\\vec{AI}$ في نفس اتجاه $\\vec{AB}$ وطوله نصفه ($AI=3$): $0 + 6 \\times 3$."
          - td: "$\\vec{AB} \\cdot \\vec{DI} = 18$"

  - NB:
      type: success
      title: "قاعدة:"
      NBs:
        - rtl: "الجداء السلمي هو مقياس عددي لدرجة توازي الأشعة وتعامدها؛ ينعدم الجداء السلمي تماماً عند التعامد، ويؤول إلى مربع الطول مباشرة عند التوازي في نفس الاتجاه."

  - h3: "5. تطبيقات وتمارين"
    id: "app-dot-geometry"

  - exemple:
      title: "1.5. توظيف عبارة الإسقاط العمودي لحساب أطوال وزوايا في شبه منحرف قائم"
      exemID: "ex-dotg-001"
  - exemple:
      title: "2.5. استعمال المربع السلمي لاستنتاج المتطابقات الشهيرة الشعاعية وحساب أطوال أقطار متوازي الأضلاع"
      exemID: "ex-dotg-002"
---
