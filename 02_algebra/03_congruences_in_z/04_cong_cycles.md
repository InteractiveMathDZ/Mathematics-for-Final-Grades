---
layout: lesson
title: "المبحث 4: دراسة دورية بواقي القوى"
subtitle: "مبدأ التكرار الدوري لبواقي القسمة"
permalink: /cong_cycles/
mathJax: true
graph: true
lessonID: "congZ"

# روابط الاتصال
previous_title: "المبحث 3: تلاؤم الموافقات مع القوى"
previous_url: "/cong_powers/"
next_title: "المبحث 5: البحث عن الباقي الصغير (القيم السالبة)"
next_url: "/negative_reminders/"

elements:
  - h3: "1. مفهوم الدورية"
    id: "periodicity-concept"
  - parags:
      - rtl: "عند دراسة بواقي قسمة القوى $a^n$ على عدد طبيعي $m$ (حيث $n \\in \\mathbb{N}$)، نلاحظ أن البواقي تتكرر بانتظام. أصغر عدد طبيعي غير معدوم $k$ يحقق $a^k \\equiv 1 \\pmod{m}$ يسمى <b>دور</b> المتتالية $(a^n)_{n \\in \\mathbb{N}}$."
      - rtl: "<b>مثال:</b> دراسة بواقي $2^n$ بترديد $3$:"
      - center: "$2^0 \\equiv 1 \\pmod{3}$"
      - center: "$2^1 \\equiv 2 \\pmod{3}$"
      - center: "$2^2 \\equiv 4 \\equiv 1 \\pmod{3}$"
      - rtl: "البواقي هي $(1, 2, 1, 2, ...)$، وعليه فإن الدور هو $k=2$."

  - h3: "2. جدول البواقي بدلالة الدور"
    id: "remainder-table"
  - parags:
      - rtl: "يمكن تلخيص بواقي القسمة وفق قيم الأس $n$ بالنسبة للدور $k$:"

  - table:
      headers: ["قيم الأس $n$", "$2k$", "$2k+1$"]
      rows:
          - ["باقي $2^n$ على $3$", "$1$", "$2$"]

  - h3: "3. منهجية التعامل مع الأسس"
    id: "methodology"
  - parags:
      - rtl: "لتعيين باقي قسمة $a^n$ على $m$، نتبع الخطوات التالية:"
      - rtl: "1. حساب البواقي المتتالية $a^0, a^1, a^2, ...$ حتى الحصول على الباقي 1."
      - rtl: "2. استنتاج الدور $k$."
      - rtl: "3. قسمة الأس $n$ على الدور $k$ وكتابته على الشكل: $n = kq + r$."
      - rtl: "4. استنتاج الباقي من خلال القيمة الموافقة لـ $r$ في الجدول."

  - graph:
      id: "cycle-diagram"
      class: "graph-container"
      xDomain: [-3, 3]
      yDomain: [-2, 2]
      elements:
        # تمثيل بياني لدورية البواقي
        - { type: "point", x: -1.5, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "باقي 1 (n = 2k)", x: -2.3, y: 0.4, color: "#168574" }
        
        - { type: "point", x: 1.5, y: 0, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "باقي 2 (n = 2k+1)", x: 1.1, y: 0.4, color: "blue" }
        
        - { type: "line", points: [[-1.2, 0.3], [0, 0.8], [1.2, 0.3]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[1.2, -0.3], [0, -0.8], [-1.2, -0.3]], color: "green", arrowStart: false, arrowEnd: true }
        
        - { type: "text", content: "تمثيل تأرجح البواقي بين قيمتين بدلالة الدور k=2", x: -2.0, y: -1.4, color: "#eee" }

  - NB:
      title: "ملاحظة:"
      type: "success"
      NBs:
        - rtl: "الهدف في معظم التمارين هو الوصول إلى الباقي 1، حيث يمثل هذا الباقي نهاية الدورة وبداية دورة جديدة، مما يسمح بتبسيط أي أس مهما كان كبيراً."
---
