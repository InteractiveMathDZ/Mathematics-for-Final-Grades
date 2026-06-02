---
layout: lesson
title: "التعديل الخطي بطريقة المربعات الدنيا"
subtitle: "النمذجة الجبرية للاتجاه العام وصياغة معادلة مستقيم التراجع"
permalink: /linear_regression/
mathJax: true
lessonID: "stati"

previous_title: "السحابة النقطية والنقطة المتوسطة"
previous_url: "/point_cloud/"
next_title: "التعديل غير الخطي والتنبؤ الاستشرافي"
next_url: "/non_linear_forecasting/"

elements:
  - h3: "1. مفهوم التعديل الخطي (Linear Ajustment)"
  - parags:
      - rtl: "عندما نلاحظ أن سحابة النقط $M_i(x_i, y_i)$ تأخذ شكلاً استطالياً يوحي بوجود مسار مستقيم، فإننا نسعى لتعويض هذه السحابة بمستقيم نظري يقترب من جميع النقط بأقل خطأ ممكن."
      - rtl: "هذه العملية تسمى <b>التعديل الخطي</b>، والمستقيم الناتج يُسمى <b>مستقيم التراجع (Regression Line)</b> لـ $Y$ بدلالة $X$ ومعادلته الجبرية من الشكل: $y = ax + b$."

  - h3: "2. مبدأ المربعات الدنيا (Least Squares Criterion)"
  - parags:
      - rtl: "لتحديد المستقيم الأمثل بدقة مطلقة، نعتمد على طريقة المربعات الدنيا. المبدأ الرياضي يقوم على <b> تصغير (Minimization)</b> مجموع مربعات المسافات الشاقولية بين النقط الحقيقية للسحابة والنقط المقابلة لها على المستقيم النظري."
      - rtl: "هذا يعود برمجياً وجبرياً إلى حساب المعاملين $a$ (الميل أو معامل التوجيه) و $b$ (الارتفاع عند المبدأ) باستخدام التباين والتباين المشترك."

  - h3: "3. الدساتير الجبرية لحساب الثوابت"
  - parags:
      - rtl: "• <b>حساب معامل التوجيه $a$:</b>"
      - rtl: "يُحسب كحاصل قسمة التباين المشترك (Covariance) للمتغيرين على تباين المتغير المستقل $X$:"

  - math_block: |
      $$a = \frac{\text{Cov}(X,Y)}{V(X)} = \frac{\frac{1}{n}\sum_{i=1}^{n} (x_i - \bar{X})(y_i - \bar{Y})}{\frac{1}{n}\sum_{i=1}^{n} (x_i - \bar{X})^2}$$

  - parags:
      - rtl: "الصيغة الحسابية المختصرة والمفضلة في البكالوريا لتفادي الكسور المعقدة هي:"

  - math_block: |
      $$a = \frac{\sum_{i=1}^{n} x_i y_i - n \bar{X} \bar{Y}}{\sum_{i=1}^{n} x_i^2 - n \bar{X}^2}$$

  - parags:
      - rtl: "• <b>حساب الثابت $b$:</b>"
      - rtl: "بما أن مستقيم التعديل يمر حتماً وبالضرورة من النقطة المتوسطة $G(\\bar{X}, \\bar{Y})$، فإن إحداثياتها تحقق معادلته قسراً، ومنه نستنتج الثابت $b$ مباشرة:"

  - math_block: |
      $$b = \\bar{Y} - a\\bar{X}$$

  - h3: "4. مثال تطبيقي عددي (Numerical Application)"
  - parags:
      - rtl: "بالاعتماد على معطيات المبحث الأول (ساعات المراجعة $X$ ومعدل البكالوريا $Y$) لعينة التلاميذ الـ 5، حيث وجدنا سابقاً أن: $n = 5$، و $\\bar{X} = 12$، و $\\bar{Y} = 13$."
      - rtl: "لنقم بحساب المكونات الحسابية الإضافية عبر هذا الجدول المنظم:"

  # جدول حسابي داخلي مصمم بمرونة تامة للـ overflow في الشاشات الضيقة
  - raw_html: |
      <div style='overflow-x:auto; margin: 20px 0; box-sizing: border-box;'>
        <table style='width:100%; border-collapse: collapse; text-align: center; font-size: 14px; background: #252525; color: #ffffff;' border='1' stroke='#333333'>
          <thead style='background-color: rgba(136, 136, 136, 0.1);'>
            <tr>
              <th style='padding: 10px; color: #75b5ff;'>$x_i$</th>
              <th style='padding: 10px; color: #75b5ff;'>$y_i$</th>
              <th style='padding: 10px; color: #85ea2d;'>$x_i^2$</th>
              <th style='padding: 10px; color: #85ea2d;'>$x_i y_i$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style='padding: 8px;'>10</td><td style='padding: 8px;'>11</td><td style='padding: 8px;'>100</td><td style='padding: 8px;'>110</td></tr>
            <tr><td style='padding: 8px;'>12</td><td style='padding: 8px;'>13</td><td style='padding: 8px;'>144</td><td style='padding: 8px;'>156</td></tr>
            <tr><td style='padding: 8px;'>15</td><td style='padding: 8px;'>16</td><td style='padding: 8px;'>225</td><td style='padding: 8px;'>240</td></tr>
            <tr><td style='padding: 8px;'>08</td><td style='padding: 8px;'>10</td><td style='padding: 8px;'>64</td><td style='padding: 8px;'>80</td></tr>
            <tr><td style='padding: 8px;'>15</td><td style='padding: 8px;'>15</td><td style='padding: 8px;'>225</td><td style='padding: 8px;'>225</td></tr>
            <tr style='font-weight: bold; background: rgba(255,255,255,0.05);'>
              <td style='padding: 10px;'>$\sum = 60$</td>
              <td style='padding: 10px;'>$\sum = 65$</td>
              <td style='padding: 10px; color: #85ea2d;'>$\sum = 758$</td>
              <td style='padding: 10px; color: #85ea2d;'>$\sum = 811$</td>
            </tr>
          </tbody>
        </table>
      </div>

  - h3: "5. صياغة المعادلة النهائية للنموذج"
  - parags:
      - rtl: "• <b>تطبيق حساب المعامل $a$:</b>"
      - center: "$a = \\frac{811 - 5 \\times 12 \\times 13}{758 - 5 \\times 12^2} = \\frac{811 - 780}{758 - 720} = \\frac{31}{38} \\approx 0.816$"
      - rtl: "• <b>تطبيق حساب المعامل $b$:</b>"
      - center: "$b = 13 - (0.816 \\times 12) = 13 - 9.792 = 3.208$"
      - rtl: "إذن، معادلة مستقيم التراجع لـ $Y$ بدلالة $X$ بطريقة المربعات الدنيا هي النموذج الخطي الصافي:"
      - center: "$y = 0.816x + 3.208$"

  - NB:
      title: "قاعدة ذهبية للتحقق الهندسي:"
      type: "info"
      NBs:
        - rtl: "بعد حساب معادلتي $a$ و $b$ وصياغة المستقيم، قم دائماً بتعويض قيمة $\\bar{X}$ مكان $X$ في المعادلة؛ يجب أن تخرج النتيجة هي قيمة $\\bar{Y}$ تماماً (أو قريبة جداً بسبب التقريب). إذا لم يحدث التطابق، فهذا إنذار بوجود خطأ حسابي في الإشارات أو المجاميع."
---
