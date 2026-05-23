---
layout: lesson
title: "المتغيرات العشوائية وقانون الاحتمال"
subtitle: "التحويل الجبري للحوادث اللغوية الكيفية إلى دوال عددية كمية"
permalink: /random_variables/
mathJax: true
lessonID: "randVar"

previous_title: "خارطة طريق المتغيرات العشوائية والقوانين الاحتمالية"
previous_url: "/random_variables_hub/"
next_title: "الأمل الرياضي، التباين والانحراف المعياري"
next_url: "/statistical_indicators/"

elements:
  - h3: "1. مفهوم المتغير العشوائي (Random Variable)"
  - parags:
      - rtl: "ليكن $\\Omega$ الفضاء العيني المرتبط بتجربة عشوائية. نسمي <b>متغيراً عشوائياً</b> $X$ كل دالة عددية ترفق بكل مخرج أو عنصر $\\omega$ من الفضاء $\\Omega$ عدداً حقيقياً $x$."
      - center: "$X: \\Omega \\to \\mathbb{R}$"
      - rtl: "نرمز لمجموعة القيم الممكنة التي يأخذها المتغير العشوائي $X$ بالرمز $X(\\Omega)$، وهي مجموعة منتهية من الأعداد الحقيقية نكتبها مرتبة تصاعدياً كالتالي: $X(\\Omega) = \\{x_1, x_2, \\dots, x_n\\}$."

  - h3: "2. تعريف الحادثة $(X = x_i)$"
  - parags:
      - rtl: "عندما يأخذ المتغير العشوائي قيمة معينة $x_i$، فإن العبارة $(X = x_i)$ تمثل حادثة عشوائية تضم جميع المخارج الابتدائية من الفضاء $\\Omega$ التي صورتها بالدالة $X$ تساوي $x_i$ تماماً."
      - rtl: "• <b>مثال توضيحي:</b> في تجربة رمي قطعة نقدية مرتين متتاليتين، إذا كان $X$ يمثل عدد مرات ظهور الوجه (Face)، فإن الحادثة $(X = 1)$ تضم المخارج التي ظهر فيها الوجه مرة واحدة فقط."

  - h3: "3. قانون الاحتمال للمتغير العشوائي (Probability Distribution)"
  - parags:
      - rtl: "تعريف <b>قانون الاحتمال</b> (أو التوزيع الاحتمالي) للمتغير العشوائي $X$ يعني حساب احتمال وقوع كل حادثة $(X = x_i)$ من مجموعة القيم الممكنة."
      - rtl: "نرمز لهذا الاحتمال بالرمز $p_i$ حيث: $p_i = P(X = x_i)$."
      - rtl: "• <b>الشرط النظامي:</b> لكي يكون قانون الاحتمال صحيحاً ومستوياً هندسياً، يجب أن يتحقق شرطان جبريان:"
      - rtl: "1. كل احتمال مصاحب هو عدد محصور بين الصفر والواحد: $0 \\le p_i \\le 1$ لكل $i$."
      - rtl: "2. المجموع الشامل للاحتمالات المصاحبة لكل القيم الممكنة يساوي واحداً تماماً بلا زيادة أو نقصان:"
      - center: "$\\sum_{i=1}^{n} p_i = p_1 + p_2 + \\dots + p_n = 1$"

  - h3: "4. التلخيص في جدول قانون الاحتمال"
  - parags:
      - rtl: "يتم تلخيص قانون الاحتمال ميكانيكياً في جدول نظامي يربط كل قيمة بالاحتمال الصافي المطابق لها:"

  # جدول تنظيمي محايد لقانون الاحتمال متوافق مع معايير العرض
  - raw_html: |
      <div style='overflow-x:auto; margin: 20px 0;'><table style='width:100%; border-collapse: collapse; text-align: center; font-size: 14px;' border='1' stroke='#888888'><thead style='background-color: rgba(136, 136, 136, 0.1);'><tr><th style='padding: 10px;'>$x_i$</th><th style='padding: 10px;'>$x_1$</th><th style='padding: 10px;'>$x_2$</th><th style='padding: 10px;'>$\dots$</th><th style='padding: 10px;'>$x_n$</th><th style='padding: 10px;'>المجموع $\sum$</th></tr></thead><tbody><tr><td style='padding: 10px; font-weight: bold;'>$P(X = x_i)$</td><td style='padding: 10px;'>$p_1$</td><td style='padding: 10px;'>$p_2$</td><td style='padding: 10px;'>$\dots$</td><td style='padding: 10px;'>$p_n$</td><td style='padding: 10px; font-weight: bold;'>$1$</td></tr></tbody></table></div>

  - NB:
      title: "قاعدة فحص:"
      type: "info"
      NBs:
        - rtl: "عند حل المسائل في امتحانات البكالوريا، تذكر دائماً فحص مجموع السطر الثاني في الجدول. إذا وجدت المجموع يختلف عن العدد $1$، فهذا مؤشر قطعي على وجود خطأ في جرد مجموعة القيم $X(\\Omega)$ أو في حساب الاحتمالات الجزئية."
---
