---
layout: lesson
title: "التكامل بالتجزئة"
subtitle: "فن التفكيك: حل معضلة الجداء المستعصي"
permalink: /integration_by_parts/
mathJax: true
lessonID: "int-06"

# روابط الاتصال
previous_title: "المبحث 5: مقارنة التكاملات والترتيب"
previous_url: "/integral_comparison/"

next_title: "المبحث 7: حساب التكامل بتغيير المتغير"
next_url: "/integral_substitution/"

elements:
  - h3: "1. من أين جاء القانون؟"
    id: "derivation"

  - parags:
      - rtl: "التكامل بالتجزئة هو في الأصل 'اشتقاق جداء دالتين' لكن بشكل عكسي. انطلاقاً من $(uv)' = u'v + uv'$، نحصل على القانون الذهبي:"
      - center: "$ \\int_{a}^{b} u(x) v'(x) dx = [u(x)v(x)]_{a}^{b} - \\int_{a}^{b} u'(x) v(x) dx $"

  - h3: "2. استراتيجية اختيار الدوال (قاعدة ALPET)"
    id: "selection-strategy"

  - parags:
      - rtl: "السر في نجاح التجزئة هو اختيار من هي الدالة $u$ التي سنشتقها، ومن هي $v'$ التي سنكاملها. نستخدم غالباً ترتيب الأولوية التالي لاختيار $u$:"
      - rtl: "1. <b>A</b>rc (الدوال العكسية - ليست في البرنامج غالباً)."
      - rtl: "2. <b>L</b>og (اللوغاريتم $\\ln$): هي أولى بأن تكون $u$."
      - rtl: "3. <b>P</b>olynomial (كثير الحدود): إذا لم يوجد لوغاريتم."
      - rtl: "4. <b>E</b>xponential (الأسية $e^x$): تفضل دائماً أن تكون $v'$."
      - rtl: "5. <b>T</b>rigonometric (المثلثية $\\sin, \\cos$)."

  - h3: "3. مثال تطبيقي (البرهنة بالعمل)"
    id: "practical-example"
  - parags:
      - rtl: "<b>المسألة:</b> احسب $I = \\int_{1}^{e} x \\ln x dx$."
      - rtl: "<b>الاختيار:</b> نضع $u(x) = \\ln x$ (لأن لها الأولوية) و $v'(x) = x$."
      - rtl: "<b>التحضير:</b> نجد $u'(x) = \\frac{1}{x}$ و $v(x) = \\frac{1}{2}x^2$."
      - rtl: "<b>التطبيق:</b>"
      - center: "$ I = [\\frac{1}{2}x^2 \\ln x]_{1}^{e} - \\int_{1}^{e} \\frac{1}{2}x^2 \\cdot \\frac{1}{x} dx $"
      - center: "$ I = (\\frac{1}{2}e^2) - \\int_{1}^{e} \\frac{1}{2}x dx = \\frac{1}{2}e^2 - [\\frac{1}{4}x^2]_{1}^{e} $"
      - center: "$ I = \\frac{1}{2}e^2 - (\\frac{1}{4}e^2 - \\frac{1}{4}) = \\frac{1}{4}e^2 + \\frac{1}{4} $"



  - NB:
      title: "تحذير!"
      type: "danger"
      NBs:
        - rtl: "إذا قمت بالتجزئة ووجدت أن التكامل الناتج أصعب من الأول، فاعلم أنك عكسنا اختيار $u$ و $v'$."
        - rtl: "تذكر دائماً كتابة الأجزاء الأربعة ($u, u', v, v'$) في جانب الورقة بوضوح قبل البدء في التعويض في القانون."

---
