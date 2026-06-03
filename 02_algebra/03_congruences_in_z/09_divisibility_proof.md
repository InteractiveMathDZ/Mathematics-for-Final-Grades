---
layout: lesson
title: "المبحث 9: إثبات قابلية القسمة على عدد ثابت"
subtitle: "معالجة العبارات الجبرية"
permalink: /divisibility_proof/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 8: حل المعادلات من الدرجة الأولى في الموافقات"
previous_url: "/cong_equations/"
next_title: "المبحث 10: تطبيقات الموافقات في التشفير والأنظمة"
next_url: "/cong_applications/"

elements:
  - h3: "1. المبدأ"
    id: "divisibility-principle"
  - parags:
      - rtl: "لإثبات أن عبارة $A(n)$ تقبل القسمة على عدد طبيعي $m$، يكفي إثبات أن باقي قسمتها الإقليدية على $m$ معدوم، أي:"
      - center: "$A(n) \\equiv 0 \\pmod{m}$"

  - h3: "2. منهجية الحل"
    id: "solution-methodology"
  - parags:
      - rtl: "تعتمد المنهجية على ثلاث خطوات أساسية:"
      - rtl: "• <b>الاختزال:</b> تعويض كل أساس بباقي قسمته على الترديد $m$."
      - rtl: "• <b>التفكيك:</b> استعمال خواص الموافقات لتبسيط القوى أو الحدود الجبرية."
      - rtl: "• <b>التجميع:</b> جمع النتائج الجزئية لإثبات تطابق المجموع مع الصفر بترديد $m$."

  - h4: "مثال تطبيقي:"
    id: "application-example"
  - parags:
      - rtl: "إثبات أن $4^n - 1$ يقبل القسمة على $3$ من أجل كل عدد طبيعي $n$:"
      - rtl: "لدينا $4 \\equiv 1 \\pmod{3}$، ومنه فإن $4^n \\equiv 1^n \\equiv 1 \\pmod{3}$."
      - rtl: "بإضافة $-1$ للطرفين، نحصل على:"
      - center: "$4^n - 1 \\equiv 1 - 1 \\equiv 0 \\pmod{3}$"
      - rtl: "بما أن الباقي هو $0$، فالعبارة تقبل القسمة على $3$."

  - h3: "3. المقارنة مع التراجع"
    id: "vs-induction"
  - parags:
      - rtl: "رغم إمكانية البرهان بالتراجع، تظل الموافقات الأداة الأكثر مباشرة لاختزال العبارات والوصول إلى النتيجة دون الحاجة لفرضيات التراجع."

  - graph:
      id: "divisibility-check"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # مخطط منطقي للتحقق من القسمة
        - { type: "line", points: [[0, 2.5], [3, 2.5]], color: "gray" }
        - { type: "text", content: "العبارة A(n)", x: 0.2, y: 2.8, color: "gray" }
        
        - { type: "line", points: [[3, 1.5], [6, 1.5], [6, 3.5], [3, 3.5], [3, 1.5]], color: "orange" }
        - { type: "text", content: "الاختزال بترديد m", x: 3.3, y: 2.4, color: "orange" }
        
        - { type: "line", points: [[6, 2.5], [8, 2.5]], color: "#168574", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 8, y: 2.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "الباقي = 0", x: 8.3, y: 2.7, color: "#168574" }
        - { type: "text", content: "القابلية محققة", x: 8.3, y: 2.1, color: "#168574" }

        - { type: "text", content: "إذا آلت العبارة إلى الصفر الترديدي، فالقسمة تامة", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "في العبارات التي تحتوي مجموع قوى، ابحث عن عوامل مشتركة أو حاول إرجاع الحدود إلى أساسات متوافقة لتسهيل الاختزال."
---
