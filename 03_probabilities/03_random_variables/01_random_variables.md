---
layout: lesson
title: "المبحث 1: المتغيرات العشوائية وقانون الاحتمال"
subtitle: "تحويل الحوادث إلى قيم عددية"
permalink: /random_variables/
mathJax: true
lessonID: "randVar"

# روابط الاتصال
previous_title: "خارطة طريق المتغيرات العشوائية"
previous_url: "/random_variables_hub/"
next_title: "الأمل الرياضي، التباين والانحراف المعياري"
next_url: "/statistical_indicators/"

elements:
  - h3: "1. مفهوم المتغير العشوائي"
    id: "definition"
  - parags:
      - rtl: "المتغير العشوائي $X$ هو دالة تربط كل مخرج من الفضاء العيني $\\Omega$ بعدد حقيقي. مجموعة قيم $X$ هي $X(\\Omega) = \\{x_1, x_2, \\dots, x_n\\}$."

  - h3: "2. قانون الاحتمال"
    id: "probability-distribution"
  - parags:
      - rtl: "قانون احتمال $X$ هو تعيين قيمة احتمال $p_i = P(X = x_i)$ لكل قيمة $x_i$ من $X(\\Omega)$."
      - rtl: "يشترط لصحة القانون:"
      - rtl: "• $0 \\le p_i \\le 1$"
      - rtl: "• $\\sum_{i=1}^{n} p_i = 1$"

  - h3: "3. جدول قانون الاحتمال"
    id: "probability-table"
  - parags:
      - rtl: "يُعرض القانون في جدول يُلخص قيم $X$ واحتمالاتها:"
      
  # تمثيل جدولي مبسط
  - raw_html: |
      <div style='margin: 20px 0;'>
        <table border='1' style='width:100%; text-align:center;'>
          <tr><th>$x_i$</th><td>$x_1$</td><td>$x_2$</td><td>...</td><td>$x_n$</td></tr>
          <tr><th>$P(X=x_i)$</th><td>$p_1$</td><td>$p_2$</td><td>...</td><td>$p_n$</td></tr>
        </table>
      </div>

  - NB:
      title: "قاعدة:"
      type: "info"
      NBs:
        - rtl: "دائماً تحقق من أن مجموع الاحتمالات في الجدول يساوي $1$ تماماً؛ أي خلل في هذا المجموع هو دليل على خطأ في الحساب."
---
