---
layout: lesson
title: "المبحث 3: قانون برنولي والتوزيع الثنائي"
subtitle: "نمذجة الاختبارات العشوائية الثنائية المكررة وحساب احتمالات النجاح المتتالي"
permalink: /binomial_distribution/
mathJax: true
lessonID: "randVar"

previous_title: "المبحث 2: الأمل الرياضي، التباين والانحراف المعياري"
previous_url: "/statistical_indicators/"
next_title: "خارطة طريق المحور القادم"
next_url: "/next_hub/"

elements:
  - h3: "1. اختبار برنولي (Bernoulli Trial)"
  - parags:
      - rtl: "اختبار برنولي هو تجربة عشوائية بسيطة لا تحتمل إلا نتيجتين متنافيتين تماماً:"
      - rtl: "• <b>النجاح (Success):</b> ونرمز له بالرمز $S$، واحتمال وقوعه هو العدد الحقيقي $p$ (حيث $0 < p < 1$)."
      - rtl: "• <b>الفشل (Failure):</b> ونرمز له بالرمز $\\bar{S}$، واحتمال وقوعه هو العدد الحقيقي $q$ حيث: $q = 1 - p$."

  - h3: "2. قانون توزيع برنولي"
  - parags:
      - rtl: "نعرف المتغير العشوائي البرنولي $X$ الذي يرفق النتيجة $S$ بالعدد $1$ والنتيجة $\\bar{S}$ بالعدد $0$. مجموعة القيم الممكنة هي $X(\\Omega) = \\{0, 1\\}$، وقانون احتماله يُعطى ميكانيكياً كما يلي:"
      - rtl: "• $P(X = 1) = p$"
      - rtl: "• $P(X = 0) = 1 - p = q$"
      - rtl: "• <b>المؤشرات الجبرية لقانون برنولي:</b>"
      - rtl: "الأمل الرياضي: $E(X) = p$"
      - rtl: "التباين: $V(X) = p(1-p) = pq$"

  - h3: "3. مخطط برنولي والتوزيع الثنائي (Binomial Distribution)"
  - parags:
      - rtl: "عندما نقوم بتكرار نفس اختبار برنولي $n$ مرة متتالية وبشكل <b>مستقل تماماً</b> (أي أن نتيجة أي محاولة لا تؤثر بأي حال على المحاولات الأخرى، مثل السحب على التوالي وبإرجاع)، نسمي هذه العملية <b>مخطط برنولي</b>."
      - rtl: "ليكن المتغير العشوائي $Y$ الذي يمثل <b>عدد مرات تحقيق النجاح $S$</b> خلال المحاولات $n$. مجموعة القيم الممكنة لهذا المتغير هي: $Y(\\Omega) = \\{0, 1, 2, \\dots, n\\}$."
      - rtl: "نقول إن المتغير العشوائي $Y$ يتبع <b>القانون الثنائي</b> ذو المعلمتين $n$ (عدد المحاولات) و $p$ (احتمال النجاح في المحاولة الواحدة)، ونكتب اختصاراً: $Y \\sim \\mathcal{B}(n, p)$."

  - h3: "4. دستور حساب الاحتمال الثنائي"
  - parags:
      - rtl: "احتمال الحصول على $k$ نجاحاً بالضبط من بين $n$ محاولة (حيث $0 \\le k \\le n$) يُحسب عبر القانون الجبري الصافي التالي:"
      - center: "$P(Y = k) = \\binom{n}{k} p^k q^{n-k} = \\binom{n}{k} p^k (1-p)^{n-k}$"
      - rtl: "حيث يمثل الرمز $\\binom{n}{k}$ عدد التوفيقات الممكنة لترتيب هذه النجاحات ويُسمى هنا <b>المعامل الثنائي</b>."

  # رسم SVG يوضح تفرع شجرة مخطط برنولي لمحاولات مستقلة متتالية باللونين الأبيض والأسود
  - raw_html:
      text: "<div class='graph' style='text-align: center; margin: 25px 0;'><svg width='460' height='160' viewBox='0 0 460 160' xmlns='http://www.w3.org/2000/svg' style='background: transparent; max-width: 100%;'><style>text { font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 13px; fill: #000000; text-anchor: middle; } .node-t { font-weight: bold; } .prob-t { font-size: 11px; fill: #555555; }</style><text x='30' y='85' class='node-t'>البداية</text><line x1='55' y1='80' x2='150' y2='40' stroke='#888888' stroke-width='1.2' /><line x1='55' y1='85' x2='150' y2='125' stroke='#888888' stroke-width='1.2' /><text x='100' y='50' class='prob-t'>p</text><text x='100' y='115' class='prob-t'>q</text><text x='170' y='45' class='node-t'>نجاح S</text><text x='170' y='130' class='node-t'>فشل F</text><line x1='195' y1='40' x2='290' y2='20' stroke='#888888' stroke-width='1' /><line x1='195' y1='45' x2='290' y2='70' stroke='#888888' stroke-width='1' /><text x='240' y='25' class='prob-t'>p</text><text x='240' y='63' class='prob-t'>q</text><text x='310' y='25' class='node-t'>S</text><text x='310' y='75' class='node-t'>F</text><line x1='195' y1='125' x2='290' y2='105' stroke='#888888' stroke-width='1' /><line x1='195' y1='130' x2='290' y2='150' stroke='#888888' stroke-width='1' /><text x='240' y='110' class='prob-t'>p</text><text x='240' y='148' class='prob-t'>q</text><text x='310' y='110' class='node-t'>S</text><text x='310' y='155' class='node-t'>F</text><text x='400' y='25' style='font-size: 11px; fill: #0056b3;'>مسار (S,S)</text><text x='400' y='75' style='font-size: 11px; fill: #555555;'>مسار (S,F)</text><text x='400' y='110' style='font-size: 11px; fill: #555555;'>مسار (F,S)</text><text x='400' y='155' style='font-size: 11px; fill: #ef4444;'>مسار (F,F)</text></svg></div>"



  - h3: "5. المؤشرات الرياضية للقانون الثنائي"
  - parags:
      - rtl: "نظراً لأن المتغير الثنائي $Y$ هو مجموع $n$ من المتغيرات البرنولية المستقلة، فإن مؤشراته الجبرية تُحسب مباشرة وميكانيكياً بدلالة المعالم دون الحاجة لتشكيل الجدول الكامل:"
      - rtl: "• <b>الأمل الرياضي:</b> $E(Y) = n \\times p$"
      - rtl: "• <b>التباين:</b> $V(Y) = n \\times p \\times q = n p (1-p)$"
      - rtl: "• <b>الانحراف المعياري:</b> $\\sigma(Y) = \\sqrt{n p q}$"

  - NB:
      title: "مؤشرات تحديد التوزيع الثنائي:"
      type: "danger"
      NBs:
        - rtl: "للإجابة بثقة في امتحانات البكالوريا أن المتغير يتبع القانون الثنائي، يجب أن تبرهن في ورقتك على توفر ثلاثة شروط لغوية ملموسة في نص التمرين:<br>1. وجود تجربة ذات مخرجين فقط (نجاح/فشل).<br>2. تكرار هذه التجربة لعدد محدد $n$ من المرات.<br>3. استقلالية المحاولات (التكرار يتم بنفس الشروط تماماً دون تغيير في الاحتمالات البدئية للنجاح)."
---
