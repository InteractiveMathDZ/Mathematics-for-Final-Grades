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
  - h3: "1. دساتير المجموع والفرق"
    id: "sum-difference-formulas"

  - parags:
      - rtl: "من أجل أي عددين حقيقيين $a$ و $b$، تحقق دوال الجيب وجيب التمام العلاقات التالية لنشر مجموع أو فرق زاويتين:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الخاصية"
          - th: "العبارة الجبرية"
        - - th: "جيب تمام المجموع"
          - td: "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$"
        - - th: "جيب تمام الفرق"
          - td: "$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$"
        - - th: "جيب المجموع"
          - td: "$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$"
        - - th: "جيب الفرق"
          - td: "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$"

  - h3: "2. دساتير ضعف الزاوية"
    id: "double-angle-formulas"

  - parags:
      - rtl: "بالتعويض عن $b = a$ في دساتير المجموع السابقة، نتحصل على دساتير مضاعفة الزاوية التالية:"
      - center: "$$\\sin(2a) = 2 \\sin a \\cos a$$"
      - center: "$$\\cos(2a) = \\cos^2 a - \\sin^2 a$$"
      - rtl: "وباستعمال العلاقة الأساسية لحساب المثلثات: $\\cos^2 a + \\sin^2 a = 1$، يمكن كتابة $\\cos(2a)$ على الشكلين التاليين:"
      - center: "$\\cos(2a) = 2\\cos^2 a - 1$  $\\quad \\text{أو} \\quad$ $\\cos(2a) = 1 - 2\\sin^2 a$"

  - h3: "3. دساتير التناظر على الدائرة المثلثية"
    id: "symmetry-trig-rules"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الزاوية"
          - th: "جيب تمام الزاوية ($\\cos$)"
          - th: "جيب الزاوية ($\\sin$)"
        - - th: "الزاوية المعاكسة ($-a$)"
          - td: "$\\cos(-a) = \\cos a$ (دالة زوجية)"
          - td: "$\\sin(-a) = -\\sin a$ (دالة فردية)"
        - - th: "الزاوية المكملة ($\\pi - a$)"
          - td: "$\\cos(\\pi - a) = -\\cos a$"
          - td: "$\\sin(\\pi - a) = \\sin a$"
        - - th: "الزاوية بزيادة نصف دورة ($\\pi + a$)"
          - td: "$\\cos(\\pi + a) = -\\cos a$"
          - td: "$\\sin(\\pi + a) = -\\sin a$"

  - h3: "4. مثال تطبيقي (حساب جيب تمام زاوية باستعمال دساتير التحويل)"
    id: "trig-formulas-ex"

  - parags:
      - rtl: "احسب القيمة الدقيقة لـ $\\cos\\left(\\frac{\\pi}{12}\\right)$، علماً أن: $\\frac{\\pi}{12} = \\frac{\\pi}{3} - \\frac{\\pi}{4}$."

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة الحسابية"
          - th: "خطوات التعويض وتطبيق العلاقة"
          - th: "النتيجة"
        - - th: "1. اختيار الدستور المناسب"
          - td: "نطبق دستور جيب تمام الفرق: $\\cos(a-b)$<br>$\\cos\\left(\\frac{\\pi}{3} - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{3}\\cos\\frac{\\pi}{4} + \\sin\\frac{\\pi}{3}\\sin\\frac{\\pi}{4}$"
          - td: "كتابة العبارة بدلالة زوايا شهيرة"
        - - th: "2. التعويض بالقيم الشهيرة"
          - td: "نعوض القيم المعلومة:<br>$\\cos\\frac{\\pi}{3}=\\frac{1}{2}$ ، $\\cos\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$ ، $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt{3}}{2}$ ، $\\sin\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$"
          - td: "تعويض النسب المثلثية"
        - - th: "3. الحساب والتبسيط"
          - td: "$=\\left(\\frac{1}{2} \\times \\frac{\\sqrt{2}}{2}\\right) + \\left(\\frac{\\sqrt{3}}{2} \\times \\frac{\\sqrt{2}}{2}\\right)$<br>$= \\frac{\\sqrt{2}}{4} + \\frac{\\sqrt{6}}{4}$"
          - td: "$\\cos\\left(\\frac{\\pi}{12}\\right) = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$"

  - NB:
      type: success
      title: "قاعدة:"
      NBs:
        - rtl: "تُستخدم دساتير التحويل لتبسيط العبارات المثلثية وحساب جيب وجيب تمام الزوايا غير الشهيرة عن طريق تفكيكها إلى مجموع أو فرق زوايا مألوفة."

  - h3: "5. تطبيقات وتمارين"
    id: "app-trigonometric-formulas"

  - exemple:
      title: "1.5. توظيف دساتير ضعف الزاوية لحل معادلات مثلثية من الدرجة الثانية وتعيين حلولها"
      exemID: "ex-trigf-001"
  - exemple:
      title: "2.5. تبسيط عبارات مثلثية مركبة عن طريق تحويل المجموع إلى جداء لدراسة إشارة الدالة"
      exemID: "ex-trigf-002"
---
