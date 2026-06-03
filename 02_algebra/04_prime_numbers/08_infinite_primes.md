---
layout: lesson
title: "المبحث 8: لغز اللانهاية (برهان إقليدس)"
subtitle: "إثبات عدم تناهي الأعداد الأولية"
permalink: /infinite_primes/
mathJax: true
graph: true
lessonID: "primN"

# روابط الاتصال
previous_title: "المبحث 7: مبرهنة فيرما الصغرى (صيغة أولية)"
previous_url: "/fermat_primes/"
next_title: "المبحث 9: الأعداد الأولية في المسائل اللوغاريتمية"
next_url: "/primes_log/"

elements:
  - h3: "1. طريقة البرهان بالخلف (Reductio ad absurdum)"
    id: "proof-by-contradiction"
  - parags:
      - rtl: "نفترض جدلاً أن مجموعة الأعداد الأولية منتهية، ونرمز لها بـ $P = \\{P_1, P_2, \\dots, P_n\\}$."
      - rtl: "ننشئ العدد الطبيعي $N$ التالي:"
      - center: "$N = (P_1 \\times P_2 \\times \\dots \\times P_n) + 1$"

  - h3: "2. تحليل العدد N"
    id: "analysis-of-n"
  - parags:
      - rtl: "• عند قسمة $N$ على أي عدد أولي $P_i$ من قائمتنا، يكون باقي القسمة دائماً هو $1$."
      - rtl: "• هذا يعني أن $N$ لا يقبل القسمة على أي عدد أولي من قائمتنا المفترضة."
      - rtl: "• وحسب المبرهنة الأساسية في الحساب، فإن $N$ إما أن يكون أولياً (وهو غير موجود في القائمة) أو له قاسم أولي غير موجود في القائمة."

  - h3: "3. الاستنتاج"
    id: "conclusion"
  - parags:
      - rtl: "في كلتا الحالتين، نصل إلى تناقض مع فرضية أن القائمة $P$ تحتوي على جميع الأعداد الأولية."
      - rtl: "إذن، فرضية التناهي خاطئة، وعدد الأعداد الأولية لا متناهٍ."

  - graph:
      id: "infinite-primes-logic"
      class: "graph-container"
      xDomain: [-2, 11]
      yDomain: [-1, 6]
      elements:
        # رسم تدفق البرهان
        - { type: "line", points: [[0, 4.5], [2.5, 4.5]], color: "red" }
        - { type: "text", content: "فرضية: الأولية منتهية", x: 0.1, y: 4.8, color: "red" }
        
        - { type: "line", points: [[2.5, 3.5], [6, 3.5], [6, 5.5], [2.5, 5.5], [2.5, 3.5]], color: "orange" }
        - { type: "text", content: "N = (P₁×...×Pn) + 1", x: 2.7, y: 4.0, color: "orange" }
        
        - { type: "line", points: [[6, 4.5], [8.5, 4.5]], color: "red", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "تناقض (قاسم جديد)", x: 7.0, y: 3.8, color: "blue" }
        
        - { type: "text", content: "النتيجة: الأعداد الأولية لا متناهية", x: 1.5, y: 1.1, color: "#168574" }
---
