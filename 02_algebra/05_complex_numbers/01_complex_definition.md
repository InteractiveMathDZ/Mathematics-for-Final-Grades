---
layout: lesson
title: "المبحث 1: تعريف المجموعة $\\mathbb{C}$ والشكل الجبري"
subtitle: "مقدمة في الأعداد المركبة والوحدة التخيلية"
permalink: /complex_definition/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "خارطة طريق الأعداد المركبة"
previous_url: "/complex_numbers_hub/"
next_title: "المبحث 2: مرافق العدد المركب ومقلوبه"
next_url: "/complex_conjugate/"

elements:
  - h3: "1. الوحدة التخيلية $i$"
    id: "imaginary-unit"
  - parags:
      - rtl: "توسع مجموعة الأعداد المركبة $\\mathbb{C}$ نطاق الأعداد الحقيقية بإضافة عنصر جديد $i$ يحقق العلاقة:"
      - center: "$i^2 = -1$"
      - rtl: "هذا التعريف يتيح حساب الجذور التربيعية للأعداد السالبة، مثل: $\\sqrt{-a} = i\\sqrt{a}$ (حيث $a > 0$)."

  - h3: "2. الشكل الجبري للعدد المركب"
    id: "algebraic-form"
  - parags:
      - rtl: "يُكتب كل عدد مركب $z$ على الشكل الجبري:"
      - center: "$z = a + bi$"
      - rtl: "حيث $a$ و $b$ عددان حقيقيان:"
      - rtl: "• $a$ هو <b>الجزء الحقيقي</b> ($Re(z)$)."
      - rtl: "• $b$ هو <b>الجزء التخيلي</b> ($Im(z)$)."

  - h3: "3. قواعد التعامل الجبري"
    id: "algebraic-operations"
  - parags:
      - rtl: "• <b>الجمع والطرح:</b> نجمع (أو نطرح) الأجزاء الحقيقية معاً والأجزاء التخيلية معاً."
      - rtl: "• <b>الضرب:</b> نطبق التوزيع العادي، مع تعويض $i^2$ بالقيمة $-1$."
      - rtl: "• <b>المساواة:</b> يتساوى عددان مركبان $a+bi$ و $a'+b'i$ إذا وفقط إذا كان $a=a'$ و $b=b'$."

  - raw_html: |
      "<div style='text-align: center; margin: 25px 0;'>...مخطط تصنيفي للمجموعة C يوضح الأجزاء الحقيقية والتخيلية...</div>"

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "تذكر دائماً أن الجزء التخيلي للعدد $z=a+bi$ هو العدد الحقيقي $b$ فقط، وليس $bi$."
---
