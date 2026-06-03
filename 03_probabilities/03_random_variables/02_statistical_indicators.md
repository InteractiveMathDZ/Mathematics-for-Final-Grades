---
layout: lesson
title: "المبحث 2: الأمل الرياضي، التباين والانحراف المعياري"
subtitle: "مؤشرات النزعة المركزية والتشتت"
permalink: /statistical_indicators/
mathJax: true
lessonID: "randVar"

# روابط الاتصال
previous_title: "المتغيرات العشوائية وقانون الاحتمال"
previous_url: "/random_variables/"
next_title: "قانون برنولي والتوزيع الثنائي"
next_url: "/binomial_distribution/"

elements:
  - h3: "1. الأمل الرياضي (المعدل)"
    id: "expected-value"
  - parags:
      - rtl: "هو المتوسط الحسابي المرجح بقيم الاحتمالات:"
      - center: "$E(X) = \\sum_{i=1}^{n} x_i p_i$"
      - rtl: "• <b>لعبة عادلة:</b> $E(X) = 0$."
      - rtl: "• <b>لعبة مربحة:</b> $E(X) > 0$."

  - h3: "2. التباين والانحراف المعياري"
    id: "variance-std-deviation"
  - parags:
      - rtl: "التباين يقيس مدى تشتت القيم، ويُحسب بصيغة كونيغ-هويغنز:"
      - center: "$V(X) = E(X^2) - [E(X)]^2$"
      - center: "$V(X) = \\left( \\sum_{i=1}^{n} x_i^2 p_i \\right) - [E(X)]^2$"
      - rtl: "الانحراف المعياري هو الجذر التربيعي للتباين:"
      - center: "$\\sigma(X) = \\sqrt{V(X)}$"

  - h3: "3. خواص التحويل الخطي"
    id: "linear-properties"
  - parags:
      - rtl: "لأي عددين حقيقيين $a$ و $b$:"
      - rtl: "• $E(aX + b) = aE(X) + b$"
      - rtl: "• $V(aX + b) = a^2 V(X)$"
      - rtl: "• $\\sigma(aX + b) = |a| \\sigma(X)$"

  - NB:
      title: "فائدة:"
      type: "info"
      NBs:
        - rtl: "لا تنسَ حساب سطر إضافي لـ $x_i^2$ عند تطبيق صيغة كونيغ للتباين؛ تفادياً للخطأ الشائع بنسيان تربيع القيم الأصلية."
---
