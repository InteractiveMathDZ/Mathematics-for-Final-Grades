---
layout: lesson
title: "المبحث 5: دستور موآفر وتطبيقاته"
subtitle: "ترويض الأسس العملاقة"
permalink: /moivre_theorem/
mathJax: true
graph: true
lessonID: "compN"

# روابط الاتصال
previous_title: "المبحث 4: الشكل المثلثي والشكل الأسّي"
previous_url: "/complex_exponential/"
next_title: "المبحث 6: حل معادلات الدرجة الثانية في C"
next_url: "/complex_equations/"

elements:
  - h3: "1. نص دستور موآفر"
    id: "moivre-theorem"
  - parags:
      - rtl: "من أجل كل عدد حقيقي $\\theta$ وعدد صحيح نسبي $n$، ينص الدستور على:"
      - center: "$(\\cos \\theta + i \\sin \\theta)^n = \\cos(n\\theta) + i \\sin(n\\theta)$"
      - rtl: "بالشكل الأسّي (أويلر)، تتجلى القاعدة كخاصية مباشرة للقوى:"
      - center: "$(e^{i\\theta})^n = e^{in\\theta}$"

  - h3: "2. الخوارزمية الإجرائية لحساب $z^n$"
    id: "procedural-steps"
  - parags:
      - rtl: "لرفع عدد مركب $z = a + bi$ إلى القوة $n$، نتبع المسار الآتي:"
      - rtl: "1. <b>التحول:</b> نكتب $z$ على الشكل الأسّي $r e^{i\\theta}$."
      - rtl: "2. <b>التطبيق:</b> نحسب القوة وفق القاعدة $z^n = r^n e^{in\\theta}$."
      - rtl: "3. <b>الارتداد:</b> نعود للشكل الجبري $A + Bi$ إذا اقتضت الضرورة."

  - h3: "3. الأهمية التطبيقية"
    id: "applications"
  - parags:
      - rtl: "• <b>تبسيط القوى الضخمة:</b> اختزال الأسس الفلكية بضرب العمدة في الأس مباشرة."
      - rtl: "• <b>الدساتير المثلثية:</b> استنتاج قيم $\\cos(n\\theta)$ و $\\sin(n\\theta)$ بدلالة $\\cos(\\theta)$ و $\\sin(\\theta)$."
      - rtl: "• <b>الجذور النونية:</b> ميكانزم أساسي لإيجاد وتوزيع الجذور في المستوي المركب."

  - graph:
      id: "moivre-power-spiral"
      class: "graph-container"
      xDomain: [-5, 6]
      yDomain: [-5, 5]
      elements:
        # رسم تدفق الدوران وتضاعف الزوايا
        - { type: "line", points: [[-4.5, 0], [5, 0]], color: "gray" }
        - { type: "line", points: [[0, -4.5], [0, 4.5]], color: "gray" }
        
        # الأشعة z^1, z^2, z^3
        - { type: "line", points: [[0, 0], [2, 1.2]], color: "blue", arrowEnd: true }
        - { type: "line", points: [[0, 0], [1.5, 2.6]], color: "orange", arrowEnd: true }
        - { type: "line", points: [[0, 0], [-1.2, 3.5]], color: "#168574", arrowEnd: true }
        
        - { type: "text", content: "z¹", x: 2.2, y: 1.4, color: "blue" }
        - { type: "text", content: "z²", x: 1.7, y: 2.8, color: "orange" }
        - { type: "text", content: "z³", x: -1.7, y: 3.6, color: "#168574" }

  - NB:
      title: "تنبيه تقني:"
      type: "info"
      NBs:
        - rtl: "تأكد دائماً قبل تطبيق الدستور من صياغة العدد على الشكل $r(\\cos \\theta + i \\sin \\theta)$. إذا كانت هناك إشارات سالبة أو تبديل بين الجيب وجيب التمام، يجب تصحيحها أولاً باستخدام علاقات الزوايا المترافقة."
---
