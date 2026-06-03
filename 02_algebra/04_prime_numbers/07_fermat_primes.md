---
layout: lesson
title: "المبحث 7: مبرهنة فيرما الصغرى"
subtitle: "اختزال الأسس في الحساب الترديدي"
permalink: /fermat_primes/
mathJax: true
graph: true
lessonID: "primN"

# روابط الاتصال
previous_title: "المبحث 6: مبرهنة غوص (Gauss) للأعداد الأولية"
previous_url: "/gauss_primes/"
next_title: "المبحث 8: لغز اللانهاية (برهان إقليدس)"
next_url: "/infinite_primes/"

elements:
  - h3: "1. نص المبرهنة"
    id: "fermat-theorem"
  - parags:
      - rtl: "إذا كان $p$ عدداً أولياً، و $a$ عدداً صحيحاً لا يقبل القسمة على $p$ (أي $PGCD(a, p) = 1$)، فإن:"
      - center: "$a^{p-1} \\equiv 1 \\pmod{p}$"
      - rtl: "ومن أجل كل عدد صحيح $a$ (حتى وإن كان يقبل القسمة على $p$)، نجد دائماً:"
      - center: "$a^p \\equiv a \\pmod{p}$"

  - h3: "2. تطبيقات المبرهنة"
    id: "applications"
  - parags:
      - rtl: "• <b>تبسيط القوى:</b> لاختزال الأسس الكبيرة، نقسم الأس على الدورة $(p-1)$ ونكتفي بالباقي، مما يسهل عمليات الحساب الترديدي."
      - rtl: "• <b>اختبارات الأولية:</b> تُستخدم المبرهنة كمعيار للتحقق من أولية الأعداد الضخمة في علوم الحاسوب."
      - rtl: "• <b>التشفير:</b> تشكل المبرهنة أساس خوارزميات التشفير الحديثة (مثل خوارزمية RSA) في حماية البيانات."

  - graph:
      id: "fermat-shortcut"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # مقارنة مسار الحساب العادي مقابل اختزال فيرما
        - { type: "line", points: [[0, 4], [2, 4.5], [4, 3.8], [6, 4.2], [8, 4]], color: "red" }
        - { type: "text", content: "حساب (a^k) التقليدي", x: 0.5, y: 4.6, color: "red" }
        
        - { type: "line", points: [[0, 1.5], [8, 1.5]], color: "#168574", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "اختزال فيرما المباشر", x: 2, y: 1.1, color: "#168574" }
        
        - { type: "text", content: "استخدام مبرهنة فيرما يختصر التعقيد الحسابي", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "success"
      NBs:
        - rtl: "شرط تطبيق المبرهنة هو أن يكون الترديد $p$ عدداً أولياً. في حال كان الترديد عدداً مركباً، يتم الاعتماد على 'مبرهنة أويلر' التي تعمم هذه الخاصية."
---
