document.addEventListener("DOMContentLoaded", function () {
    // 1. البحث عن كل كبسولات المحاكاة المتواجدة في الصفحة
    const simElements = document.querySelectorAll('[data-simulation-config]');

    simElements.forEach(function (el) {
        const simId = el.id;
        // قراءة جينات الـ YAML التي مررها جيكل كـ JSON
        const config = JSON.parse(el.getAttribute('data-simulation-config'));

        if (!config || config.type !== 'trigonometric-circle') return;

        // 2. تهيئة ساحة الرسم للألماني JSXGraph بنسب متوازنة للهواتف
        const board = JXG.JSXGraph.initBoard(simId, {
            boundingbox: [-1.5, 1.5, 1.5, -1.5], // حدود المعلم لتبدو الدائرة متمركزة ومريحة
            axis: true,                           // إظهار المحاور الإحداثية
            grid: false,                          // إلغاء الشبكة للحفاظ على فخامة البياض
            showCopyright: false,                 // إخفاء حقوق المحرك لصفاء الرؤية
            pan: { enabled: false },               // منع سحب اللوحة بالكامل لتفادي مشاكل شاشات اللمس
            zoom: { enabled: false }              // منع التكبير والتصغير للحفاظ على الأبعاد الثابتة
        });

        // 3. صب الكائنات الهندسية الحرة: المركز والدائرة الثابتة
        const centerPos = config.center || [0, 0];
        const radiusSize = config.radius || 1;
        
        const center = board.create('point', centerPos, { visible: false, fixed: true });
        const circle = board.create('circle', [center, radiusSize], {
            strokeColor: '#555555',               // خط رمادي رصين يتماشى مع النمط المظلم
            strokeWidth: 2,
            fixed: true
        });

        // 4. حقن النقطة المنزلقة المقيدة بالحركة فقط فوق محيط الدائرة
        const initAngleRad = (config.interactive_point.initial_angle || 0) * Math.PI / 180;
        const startX = radiusSize * Math.cos(initAngleRad);
        const startY = radiusSize * Math.sin(initAngleRad);

        const movingPoint = board.create('glider', [startX, startY, circle], {
            name: config.interactive_point.name || 'M',
            color: config.interactive_point.color || '#ff0000',
            size: 4,
            withLabel: true,
            label: { color: '#ffffff', offset: [10, 10] } // نص أبيض للنقطة يرتفع برفق
        });

        // 5. رسم نصف القطر الموصل بين المركز والنقطة الحرة
        const radiusLine = board.create('segment', [center, movingPoint], {
            strokeColor: '#75b5ff',               // لون أزرق ناصع يشع من السواد
            strokeWidth: 2
        });

        // 6. إذا تم تفعيل نص قيس الزاوية الديناميكي
        if (config.show_angle_text) {
            board.create('text', [0.2, 1.2, function() {
                // حساب الزاوية بالراديان والدرجات لحظة بلحظة أثناء حركة السحب
                let angleRad = Math.atan2(movingPoint.Y(), movingPoint.X());
                if (angleRad < 0) angleRad += 2 * Math.PI;
                let angleDeg = angleRad * 180 / Math.PI;
                
                return 'θ = ' + angleDeg.toFixed(0) + '°  │  ' + (angleRad / Math.PI).toFixed(2) + ' π rad';
            }], { color: '#75b5ff', fontSize: 15, fontWeight: 'bold' });
        }

        // 7. إذا تم تفعيل الإسقاطات (الجيب والجيب تمام)
        if (config.show_projections) {
            // إسقاط على محور الفواصل (Cos)
            const cosPoint = board.create('point', [function() { return movingPoint.X(); }, 0], { visible: false });
            board.create('segment', [movingPoint, cosPoint], { strokeColor: '#ffffff', strokeWidth: 1, dash: 2 });
            board.create('segment', [center, cosPoint], { strokeColor: '#00ffcc', strokeWidth: 3, name: 'cos' });

            // إسقاط على محور التراتيب (Sin)
            const sinPoint = board.create('point', [0, function() { return movingPoint.Y(); }], { visible: false });
            board.create('segment', [movingPoint, sinPoint], { strokeColor: '#ffffff', strokeWidth: 1, dash: 2 });
            board.create('segment', [center, sinPoint], { strokeColor: '#ff0077', strokeWidth: 3, name: 'sin' });
        }
    });
});
