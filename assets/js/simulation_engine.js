// ==========================================================================
// 1. الدالة التنفيذية: الدائرة المثلثية (تتحكم في الهندسة والبصرية والقياس)
// ==========================================================================
function buildTrigonometricCircle(id, config) {
    if (typeof JXG === 'undefined') {
        console.error("المحرك الألماني JSXGraph غير محمل في هذه الصفحة!");
        return;
    }

    // أ) التحقق التلقائي من المظهر الحالي للصفحة (Dark أو Light)
    const isDarkMode = document.body.classList.contains('dark-theme') || 
                       document.documentElement.getAttribute('data-bs-theme') === 'dark' ||
                       window.matchMedia('(prefers-color-scheme: dark)').matches;

    // ب) لوحة الألوان الذكية المتجاوبة لتنقية الخلفية وإبراز التدريجات
    const theme = {
        axisColor: isDarkMode ? '#888888' : '#333333',       // رمادي واضح في الداكن / أسود رصين في الفاتح
        gridColor: isDarkMode ? '#2c2c2c' : '#e0e0e0',       // شبكة خافتة جداً في الخلفية لمنع التداخل البصري
        textColor: isDarkMode ? '#ffffff' : '#1a1a1a',       // أرقام التدريجات والنصوص الديناميكية
        circleColor: isDarkMode ? '#555555' : '#777777'      // خط محيط الدائرة المثلثية
    };

    // ج) تهيئة لوحة الرسم بنسب متوازنة مع حظر السحب والزوم للهواتف
    const board = JXG.JSXGraph.initBoard(id, {
        boundingbox: [-1.5, 1.5, 1.5, -1.5], 
        axis: false, // نخفي المحاور التلقائية الجافة لنبنيها يدوياً بالألوان الصحيحة
        grid: {
            strokeColor: theme.gridColor,
            strokeWidth: 0.5,
            gridX: 0.2,
            gridY: 0.2
        }, 
        showCopyright: false,                 
        pan: { enabled: false },               
        zoom: { enabled: false }              
    });

    // د) بناء محاور المعلم يدوياً لفرض تلوين التدريجات (Ticks) والأرقام المختفية
    // محور الفواصل (الأفقي)
    const xAxis = board.create('axis', [[0, 0], [1, 0]], {
        strokeColor: theme.axisColor,
        strokeWidth: 1.5,
        withLabel: false
    });
    xAxis.defaultTicks.setAttribute({
        strokeColor: theme.axisColor,
        labelColor: theme.textColor, // الأرقام تصبح بيضاء في المظلم وسوداء في المضيء
        strokeWidth: 1,
        majorHeight: 5,
        drawLabels: true,
        insertLabels: true
    });

    // محور التراتيب (الشاقولي)
    const yAxis = board.create('axis', [[0, 0], [0, 1]], {
        strokeColor: theme.axisColor,
        strokeWidth: 1.5,
        withLabel: false
    });
    yAxis.defaultTicks.setAttribute({
        strokeColor: theme.axisColor,
        labelColor: theme.textColor,
        strokeWidth: 1,
        majorHeight: 5,
        drawLabels: true,
        insertLabels: true
    });

    // هـ) صب الدائرة والمركز الثابت
    const centerPos = config.center || [0, 0];
    const radiusSize = config.radius || 1;
    
    const center = board.create('point', centerPos, { visible: false, fixed: true });
    const circle = board.create('circle', [center, radiusSize], {
        strokeColor: theme.circleColor,               
        strokeWidth: 2,
        fixed: true
    });

    // و) حقن النقطة المنزلقة المقيدة تماماً بمحيط الدائرة
    const interactive = config.interactive_point || {};
    const initAngleRad = (interactive.initial_angle || 0) * Math.PI / 180;
    const startX = radiusSize * Math.cos(initAngleRad);
    const startY = radiusSize * Math.sin(initAngleRad);

    const movingPoint = board.create('glider', [startX, startY, circle], {
        name: interactive.name || 'M',
        color: interactive.color || '#ff0000',
        size: 5,
        withLabel: true,
        label: { color: theme.textColor, offset: [10, 10], fontWeight: 'bold' } 
    });

    // شعاع نصف القطر الموصل بالنقطة المتحركة
    board.create('segment', [center, movingPoint], {
        strokeColor: '#75b5ff',               
        strokeWidth: 2.5
    });

    // ز) النص الديناميكي لقيس الزاوية (يدعم الإشارات السالبة والموجبة للقياس الرئيسي)
    if (config.show_angle_text) {
        board.create('text', [-1.3, 1.2, function() {
            // حساب الزاوية بالراديان مباشرة في المجال البرمجي الطبيعي ]-pi, pi]
            let angleRad = Math.atan2(movingPoint.Y(), movingPoint.X()); 
            
            // التحويل للدرجات (ستنقلب سالبة تلقائياً بمجرد النزول تحت محور الفواصل)
            let angleDeg = angleRad * 180 / Math.PI;
            
            // حساب الكسر مع الحفاظ الصارم على إشارة الاتجاه غير المباشر
            let piFraction = (angleRad / Math.PI).toFixed(2);
            
            return 'θ = ' + angleDeg.toFixed(0) + '°  │  ' + piFraction + ' π rad';
        }], { color: '#75b5ff', fontSize: 14, fontWeight: 'bold' });
    }

    // ح) رسم إسقاطات الجيب والجيب تمام بألوان صارخة تبرز من العتمة
    if (config.show_projections) {
        // إسقاط الجيب تمام (Cos) على محور الفواصل
        const cosPoint = board.create('point', [function() { return movingPoint.X(); }, 0], { visible: false });
        board.create('segment', [movingPoint, cosPoint], { strokeColor: isDarkMode ? '#ffffff' : '#333333', strokeWidth: 1, dash: 2 });
        board.create('segment', [center, cosPoint], { strokeColor: '#00ffcc', strokeWidth: 3.5, name: '' });

        // إسقاط الجيب (Sin) على محور التراتيب
        const sinPoint = board.create('point', [0, function() { return movingPoint.Y(); }], { visible: false });
        board.create('segment', [movingPoint, sinPoint], { strokeColor: isDarkMode ? '#ffffff' : '#333333', strokeWidth: 1, dash: 2 });
        board.create('segment', [center, sinPoint], { strokeColor: '#ff0077', strokeWidth: 3.5, name: '' });
    }
}

// ==========================================================================
// 2. الدالة المستقلة: الزاوية المحيطية (حاضنة فارغة جاهزة للتطوير مستقبلاً)
// ==========================================================================
function buildInscribedAngleSimulation(id, config) {
    // سيصب منطق هندسة الزوايا المحيطية والمركزية هنا في وقته...
}

// ==========================================================================
// 3. الحاضن المركزي المشغل للمحاكاة (الموزع المركزي المعتمد على اليامل)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    const simElements = document.querySelectorAll('[data-simulation-config]');

    simElements.forEach(function (el) {
        const simId = el.id;
        const rawConfig = el.getAttribute('data-simulation-config');
        if (!rawConfig) return;

        try {
            const config = JSON.parse(rawConfig);
            
            // قراءة نوع المحاكاة من اليامل وتوجيهه ميكانيكياً للدالة المناسبة
            switch (config.type) {
                case 'trigonometric-circle':
                    buildTrigonometricCircle(simId, config);
                    break;
                case 'inscribed-angle':
                    buildInscribedAngleSimulation(simId, config);
                    break;
                default:
                    console.warn("نوع المحاكاة غير مدرج في المحرك المركزي:", config.type);
            }
        } catch (e) {
            console.error("خطأ في قراءة بيانات الجينات من الـ YAML للمحاكاة " + simId, e);
        }
    });
});
