---
layout: lesson
title: "المبحث 4: استخراج القواسم والمضاعفات بالتفكيك"
subtitle: "استثمار التفكيك في الحسابات الترديدية"
permalink: /divisors_multiples/
mathJax: true
graph: true
lessonID: "primN"

# روابط الاتصال
previous_title: "المبحث 3: المبرهنة الأساسية في الحساب (التفكيك)"
previous_url: "/fundamental_theorem/"
next_title: "المبحث 5: الأعداد الأولية فيما بينها"
next_url: "/relatively_prime/"

elements:
  - h3: "1. حساب الـ PGCD والـ PPCM"
    id: "gcd-lcm-calculation"
  - parags:
      - rtl: "بتحليل عددين $A$ و $B$ إلى جداء عوامل أولية، نحصل على النتائج التالية:"
      - rtl: "• <b>القاسم المشترك الأكبر ($PGCD$):</b> جداء العوامل الأولية المشتركة فقط، بأصغر أس."
      - rtl: "• <b>المضاعف المشترك الأصغر ($PPCM$):</b> جداء العوامل الأولية المشتركة وغير المشتركة، بأكبر أس."
      - rtl: "<b>مثال:</b> إذا كان $A = 2^3 \\times 3^2$ و $B = 2^2 \\times 3^1 \\times 5^1$:"
      - center: "$PGCD(A, B) = 2^2 \\times 3^1 = 12$"
      - center: "$PPCM(A, B) = 2^3 \\times 3^2 \\times 5^1 = 360$"

  - h3: "2. حساب عدد القواسم"
    id: "number-of-divisors"
  - parags:
      - rtl: "إذا كان التفكيك النموذجي للعدد $n$ هو: $n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\dots \\times p_k^{\\alpha_k}$"
      - rtl: "فإن عدد قواسمه الموجبة $N$ يعطى بالعلاقة:"
      - center: "$N = (\\alpha_1 + 1)(\\alpha_2 + 1) \\dots (\\alpha_k + 1)$"
      - rtl: "<b>مثال للعدد $60 = 2^2 \\times 3^1 \\times 5^1$:** عدد قواسمه هو $(2+1)(1+1)(1+1) = 12$ قسماً."

  - h3: "3. العلاقة الجدائية"
    id: "fundamental-relation"
  - parags:
      - rtl: "لكل عددين طبيعيين $A$ و $B$، توجد العلاقة الثابتة التالية:"
      - center: "$PGCD(A, B) \\times PPCM(A, B) = A \\times B$"

  - graph:
      id: "gcd-lcm-set"
      class: "graph-container"
      xDomain: [-4, 10]
      yDomain: [-2, 5]
      elements:
        # رسم مبسط للعلاقة بين عوامل A و B
        - { type: "line", points: [[0, 2], [3, 4.5], [6, 2], [3, -0.5], [0, 2]], color: "blue" }
        - { type: "text", content: "عوامل A", x: 0.2, y: 3.5, color: "blue" }
        - { type: "line", points: [[3, 2], [6, 4.5], [9, 2], [6, -0.5], [3, 2]], color: "orange" }
        - { type: "text", content: "عوامل B", x: 7.2, y: 3.5, color: "orange" }
        
        # التقاطع يمثل PGCD
        - { type: "text", content: "PGCD = 12", x: 3.5, y: 1.1, color: "#168574" }
        - { type: "text", content: "التقاطع (العوامل المشتركة)", x: 3.2, y: 2.8, color: "#168574" }

        - { type: "text", content: "تداخل العوامل واستخراج القواسم والمضاعفات", x: -1, y: -1.2, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "info"
      NBs:
        - rtl: "يعد استخدام التفكيك وسيلة فعالة لتجنب الأخطاء الحسابية عند العمل على أعداد كبيرة، خاصة في المسائل التي تتطلب تحديد كافة القواسم أو التعامل مع المضاعفات المشتركة."
---
