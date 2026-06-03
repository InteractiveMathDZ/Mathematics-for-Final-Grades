---
layout: lesson
title: "المبحث 1: الاحتمالات الشرطية واستقلال الحوادث"
subtitle: "حساب الاحتمال المقيد وتحديد الارتباط"
permalink: /conditional_probability/
mathJax: true
lessonID: "proSt"

# روابط الاتصال
previous_title: "خارطة طريق الاحتمالات الشرطية"
previous_url: "/conditional_probability_hub/"
next_title: "شجرة الاحتمالات وقواعد رصف المسارات"
next_url: "/probability_tree/"

elements:
  - h3: "1. مفهوم الاحتمال الشرطي"
    id: "conditional-probability"
  - parags:
      - rtl: "الاحتمال الشرطي $P_B(A)$ هو احتمال وقوع الحادثة $A$ بشرط تحقق الحادثة $B$ (مع $P(B) > 0$):"
      - center: "$P_B(A) = \\frac{P(A \\cap B)}{P(B)}$"
      - rtl: "هندسياً، يعني هذا تقليص الفضاء الشامل $\\Omega$ إلى الفضاء الجزئي $B$."

  - h3: "2. دستور الاحتمالات المركبة"
    id: "compound-probability"
  - parags:
      - rtl: "يُحسب احتمال تقاطع حادثتين بضرب احتمال إحداهما في الاحتمال الشرطي للأخرى:"
      - center: "$P(A \\cap B) = P(B) \\times P_B(A)$"

  - h3: "3. استقلالية الحوادث"
    id: "independence"
  - parags:
      - rtl: "تكون الحادثتان $A$ و $B$ مستقلتين إذا لم يؤثر وقوع إحداهما على احتمال الأخرى، أي $P_B(A) = P(A)$."
      - rtl: "يُترجم هذا الشرط ميكانيكياً إلى:"
      - center: "$P(A \\cap B) = P(A) \\times P(B)$"

  - NB:
      title: "ملاحظة هامة:"
      type: "danger"
      NBs:
        - rtl: "الحوادث المستقلة ليست حوادث متنافية؛ المتنافية هي التي لا تملك تقاطعاً ($P(A \\cap B) = 0$)، أما المستقلة فهي التي تملك تقاطعاً يساوي حاصل ضرب احتمالاتها."
---
