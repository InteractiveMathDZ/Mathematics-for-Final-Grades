---
layout: lesson
title: "دساتير التحويل الأساسية في حساب المثلثات"
permalink: /trigonometric_formulas/
mathJax: true
graph: true
lessonID: "plGeo"

previous_title: "خواص الزوايا الموجهة"
previous_url: /directed_angles_properties/
next_title: "الهندسة الفضائية والمقاطع المستوية"
next_url: /analytic_geometry_and_sections/

elements:
  - h3: "1. دساتير المجموع والفرق (آلية التفكيك)"
    id: "sum-difference-formulas"

  - parags:
      - rtl: "من أجل أي عددين حقيقيين $a$ و $b$، تخضع دوال الجيب والجيب تمام لقوانين التحويل التالية والتي تسمح بنشر المجموع والفرق كلياً:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "العملية المستهدفة"
          - th: "الدستور الجبري الصافي"
        - - th: "جيب تمام المجموع"
          - td: "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$"
        - - th: "جيب تمام الفرق"
          - td: "$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$"
        - - th: "جيب المجموع"
          - td: "$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$"
        - - th: "جيب الفرق"
          - td: "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$"

  - h3: "2. دساتير المضاعفة (صيغ ضعف الزاوية $2a$)"
    id: "double-angle-formulas"

  - parags:
      - rtl: "بوضع $b = a$ في دساتير المجموع السابقة، ننتج قوانين التضعيف التي تختزل الزوايا المضاعفة:"
      - center: "$$\\sin(2a) = 2 \\sin a \\cos a$$"
      - center: "$$\\cos(2a) = \\cos^2 a - \\sin^2 a$$"
      - rtl: "<strong>صيغ التمديد الناتجة:</strong> باستغلال العلاقة الأم:"
      - center: "$\\cos^2 a + \\sin^2 a = 1$"
      - rtl: "يمكن إعادة صياغة $\\cos(2a)$ بشكلين آخرين لتسهيل عزل المربعات الحسابية:"
      - center: "$\\cos(2a) = 2\\cos^2 a - 1$  $\\quad \\iff \\quad$ $\\cos(2a) = 1 - 2\\sin^2 a$"

  - h3: "3. دساتير التناظر والترديد على الدائرة المثلثية"
    id: "symmetry-trig-rules"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الزاوية الناتجة"
          - th: "إسقاط الجيب تمام ($\\cos$)"
          - th: "إسقاط الجيب ($\\sin$)"
        - - th: "الزاوية المعاكسة ($-a$)"
          - td: "$\\cos(-a) = \\cos a$ (دالة زوجية تصمد)"
          - td: "$\\sin(-a) = -\\sin a$ (دالة فردية تطرد السالب)"
        - - th: "الزاوية المكملة ($\\pi - a$)"
          - td: "$\\cos(\\pi - a) = -\\cos a$"
          - td: "$\\sin(\\pi - a) = \\sin a$"
        - - th: "الزاوية بزيادة نصف دورة ($\\pi + a$)"
          - td: "$\\cos(\\pi + a) = -\\cos a$"
          - td: "$\\sin(\\pi + a) = -\\sin a$"

  - h3: "4. مثال تطبيقي (حساب القيمة المضبوطة لزاوية غير مألوفة)"
    id: "trig-formulas-ex"

  - parags:
      - rtl: "احسب القيمة الإيرادية المضبوطة لـ $\\cos\\left(\\frac{\\pi}{12}\\right)$ باستغلال دساتير التحويل، علماً أن: $\\frac{\\pi}{12} = \\frac{\\pi}{3} - \\frac{\\pi}{4}$."

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة"
          - th: "التعويض وتطبيق الدستور"
          - th: "النتيجة الصافية الحاكمة"
        - - th: "1. اختيار الدستور المناسب"
          - td: "نطبق دستور جيب تمام الفرق: $\\cos(a-b)$<br>$\\cos\\left(\\frac{\\pi}{3} - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{3}\\cos\\frac{\\pi}{4} + \\sin\\frac{\\pi}{3}\\sin\\frac{\\pi}{4}$"
          - td: "تجهيز البنية الجبرية"
        - - th: "2. التعويض بالقيم الشهيرة"
          - td: "نعوض القيم المعروفة حتماً للتلميذ:<br>$\\cos\\frac{\\pi}{3}=\\frac{1}{2}$ ، $\\cos\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$ ، $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt{3}}{2}$ ، $\\sin\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$"
          - td: "استحضار نسب الدائرة"
        - - th: "3. الحساب والدمج النهائي"
          - td: "$=\\left(\\frac{1}{2} \\times \\frac{\\sqrt{2}}{2}\\right) + \\left(\\frac{\\sqrt{3}}{2} \\times \\frac{\\sqrt{2}}{2}\\right)$<br>$= \\frac{\\sqrt{2}}{4} + \\frac{\\sqrt{6}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$"
          - td: "$\\cos\\left(\\frac{\\pi}{12}\\right) = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$"

  - NB:
      type: success
      title: "قاعدة الصيانة المعرفية"
      NBs:
        - rtl: "دساتير التحويل هي مفاتيح تفكيك الحشو الزاوي؛ تذكر دائماً أن جيب التمام يعكس الإشارات ويجمع الدالات المتشابهة، بينما الجيب يحافظ على الإشارة ويخلط الدالات بالتناوب."

  - h3: "5. تطبيقات شحذ المهارة"
    id: "app-trigonometric-formulas"

  - exemple:
      title: "1.5. توظيف دساتير الضعف لإنشاء معادلات مثلثية من الدرجة الثانية وحلها وعزل جذورها جزيراً"
      exemID: "ex-trigf-001"
  - exemple:
      title: "2.5. تبسيط عبارات مثلثية مركبة تتضمن تحويل المجموع إلى جداء لتسهيل دراسة إشارات الدوال"
      exemID: "ex-trigf-002"
---
