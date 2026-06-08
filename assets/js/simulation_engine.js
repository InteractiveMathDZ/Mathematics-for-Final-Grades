
// ==========================================================================
// 3. الدالة التنفيذية المستقرة: الزاوية الموجهة لشعاعين (إصلاح الانهيار)
// ==========================================================================
function buildDirectedAngle(id, config) {
    if (typeof JXG === 'undefined') return;

    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark' || 
                   document.documentElement.getAttribute('data-theme') === 'dark' ||
                   document.body.classList.contains('dark-theme');

    const theme = {
        axisColor: isDark ? '#444444' : '#dddddd', 
        gridColor: isDark ? '#222222' : '#e5e5e5',
        textColor: isDark ? '#ffffff' : '#222222',
        uColor: '#00ffcc', 
        vColor: '#ff0077', 
        arcColor: '#75b5ff'
    };

    // تهيئة اللوحة مع حظر البان والزوم لمنع انزلاق المعلم
    const board = JXG.JSXGraph.initBoard(id, {
        boundingbox: [-2, 2, 2, -2], 
        axis: false,
        grid: { strokeColor: theme.gridColor, strokeWidth: 0.5, gridX: 0.2, gridY: 0.2 }, 
        showCopyright: false,                 
        pan: { enabled: false },               
        zoom: { enabled: false }              
    });

    // رسم المحاور المرجعية الخفيفة
    board.create('axis', [[0, 0], [1, 0]], { strokeColor: theme.axisColor, strokeWidth: 1, withLabel: false, ticks: {visible: false} });
    board.create('axis', [[0, 0], [0, 1]], { strokeColor: theme.axisColor, strokeWidth: 1, withLabel: false, ticks: {visible: false} });

    // نقطة المبدأ ثابتة
    const O = board.create('point', [0, 0], { name: 'O', color: theme.textColor, size: 3, fixed: true, label: {color: theme.textColor, offset: [-15, -15]} });
    
    // دائرة المسار غير مرئية
    const c1 = board.create('circle', [O, 1.3], { visible: false });
    
    // الشعاع الأول u (نستعمل السهم النصي الافتراضي الأنيق لـ JSXGraph المتوافق مع المتصفح)
    const A = board.create('glider', [1.3, 0, c1], {
        name: 'u', 
        color: theme.uColor, 
        size: 5,
        label: { color: theme.uColor, offset: [12, 12], fontStyle: 'bold', fontSize: 16 }
    });

    // الشعاع الثاني v
    const B = board.create('glider', [0.8, -1.0, c1], {
        name: 'v', 
        color: theme.vColor, 
        size: 5,
        label: { color: theme.vColor, offset: [12, -12], fontStyle: 'bold', fontSize: 16 }
    });

    const vectorU = board.create('arrow', [O, A], { strokeColor: theme.uColor, strokeWidth: 3 });
    const vectorV = board.create('arrow', [O, B], { strokeColor: theme.vColor, strokeWidth: 3 });

    // --------------------------------------------------------------------------
    // قطاع زاوي حركي ذكي: يحدد الأقصر مسافة تلقائياً لتفادي الالتفاف المقيت
    // --------------------------------------------------------------------------
    const angleSector = board.create('sector', [
        O, 
        function() {
            let uAng = Math.atan2(A.Y(), A.X());
            let vAng = Math.atan2(B.Y(), B.X());
            let diff = vAng - uAng;
            while (diff <= -Math.PI) diff += 2 * Math.PI;
            while (diff > Math.PI) diff -= 2 * Math.PI;
            return (diff < 0) ? B : A;
        }, 
        function() {
            let uAng = Math.atan2(A.Y(), A.X());
            let vAng = Math.atan2(B.Y(), B.X());
            let diff = vAng - uAng;
            while (diff <= -Math.PI) diff += 2 * Math.PI;
            while (diff > Math.PI) diff -= 2 * Math.PI;
            return (diff < 0) ? A : B;
        }
    ], {
        fillColor: 'transparent', 
        strokeColor: theme.arcColor,
        strokeWidth: 2.5,
        radius: 0.35, 
        withLabel: false,
        // تفعيل رأس سهم مصغر فخم لا ينهار ولا يختفي
        lastArrow: { type: 1, size: 3, strokeWidth: 2.5 },
        firstArrow: false
    });

    // --------------------------------------------------------------------------
    // النص الديناميكي الصافي عالي الأداء (بدون التسبب في انهيار اللوحة)
    // --------------------------------------------------------------------------
    board.create('text', [-1.8, 1.6, function() {
        let alphaU = Math.atan2(A.Y(), A.X());
        let alphaV = Math.atan2(B.Y(), B.X());
        
        let angleRad = alphaV - alphaU;
        while (angleRad <= -Math.PI) angleRad += 2 * Math.PI;
        while (angleRad > Math.PI) angleRad -= 2 * Math.PI;
        
        let angleDeg = angleRad * 180 / Math.PI;
        let piFraction = (angleRad / Math.PI).toFixed(2);
        
        // تمثيل نصي قياسي فخم ونظيف جداً وسريع الاستجابة
        return '(u, v) = ' + angleDeg.toFixed(0) + '°  │  ' + piFraction + ' π rad';
    }], { 
        color: theme.arcColor, 
        fontSize: 16,
        fontWeight: 'bold',
        fixed: true
    });
}


// ==========================================================================
// 1. الدالة التنفيذية: الدائرة المثلثية (تتحكم في الهندسة والبصرية والقياس)
// ==========================================================================
function buildTrigonometricCircle(id, config) {
    if (typeof JXG === 'undefined') {
        console.error("المحرك الألماني JSXGraph غير محمل في هذه الصفحة!");
        return;
    }

    // أ) الفحص الديناميكي الصارم للمظهر الحالي عند لحظة بناء اللوحة
    // نتحقق من سمة Bootstrap 5 أو كلاسات الـ body أو الـ html
    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark' || 
                   document.documentElement.getAttribute('data-theme') === 'dark' ||
                   document.body.classList.contains('dark-theme') ||
                   document.body.classList.contains('dark') ||
                   window.getComputedStyle(document.body).backgroundColor === 'rgb(26, 26, 26)'; // فحص لوني احتياطي

    // ب) هندسة لوحة الألوان الذكية (أبيض ناصع في الداكن / أسود حاد في الفاتح)
    const theme = {
        axisColor: '#ffffff',       // محاور بيضاء ناصعة في العتمة / سوداء حادة في الضياء
        gridColor: '#444444',       // شبكة خافتة جداً لمنع التداخل البصري مع أسطر الجداول
        textColor: '#ffffff',       // أرقام التدريجات والنصوص الديناميكية
        circleColor: '#555555',     // خط محيط الدائرة المثلثية
        projectionLine: '#cccccc'   // الخطوط المتقطعة للإسقاطات
    };

    // ج) تهيئة لوحة الرسم بنسب متوازنة مع حظر السحب والزوم للهواتف
    const board = JXG.JSXGraph.initBoard(id, {
        boundingbox: [-1.5, 1.5, 1.5, -1.5], 
        axis: false, // نخفي المحاور التلقائية الجافة لنبنيها يدوياً بالألوان الصحيحة الشاخصة
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

    // د) بناء محاور المعلم يدوياً لفرض تلوين التدريجات (Ticks) والأرقام بدقة
    // محور الفواصل (الأفقي)
    const xAxis = board.create('axis', [[0, 0], [1, 0]], {
        strokeColor: theme.axisColor,
        strokeWidth: 1.5,
        withLabel: false
    });
    
    // الحل الألماني الصارم: نمرر الألوان بداخل كائن label مخصص للـ ticks
    xAxis.defaultTicks.setAttribute({
        strokeColor: theme.axisColor,
        strokeWidth: 1,
        majorHeight: 5,
        drawLabels: true,
        insertLabels: true,
        label: {
            strokeColor: theme.textColor, // هذا السطر سيجبر الأرقام (1, 0.5, -1) على البقاء بيضاء ناصعة
            fontSize: 12,
            cssClass: 'jxg-tick-label',   // لضمان عدم تداخل الـ CSS الخارجي للموقع معها
            offset: [-5, -10],   // إزاحة خفيفة للأرقام الأفقية للأسفل واليسار لتجنب المركز
            anchorX: 'center',
            anchorY: 'top'
        }
    });

    // محور التراتيب (الشاقولي)
    const yAxis = board.create('axis', [[0, 0], [0, 1]], {
        strokeColor: theme.axisColor,
        strokeWidth: 1.5,
        withLabel: false
    });
    
    yAxis.defaultTicks.setAttribute({
        strokeColor: theme.axisColor,
        strokeWidth: 1,
        majorHeight: 5,
        drawLabels: true,
        insertLabels: true,
        label: {
            strokeColor: theme.textColor, // هنا أيضاً لتتحول أرقام المحور الشاقولي للأبيض الناصع
            fontSize: 12,
            cssClass: 'jxg-tick-label',
            offset: [-5, 0],   
            anchorX: 'right',
            anchorY: 'middle'
        }
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
        label: { color: theme.textColor, offset: [10, 10], fontWeight: 'bold', fontSize: 14 } 
    });

    // شعاع نصف القطر الموصل بالنقطة المتحركة
    board.create('segment', [center, movingPoint], {
        strokeColor: '#75b5ff',               
        strokeWidth: 2.5
    });

    // ز) النص الديناميكي لقيس الزاوية بالقياس الرئيسي الصارم
    if (config.show_angle_text) {
        board.create('text', [-1.3, 1.25, function() {
            let angleRad = Math.atan2(movingPoint.Y(), movingPoint.X()); 
            let angleDeg = angleRad * 180 / Math.PI;
            let piFraction = (angleRad / Math.PI).toFixed(2);
            
            return 'θ = ' + angleDeg.toFixed(0) + '°  │  ' + piFraction + ' π rad';
        }], { color: '#75b5ff', fontSize: 14, fontWeight: 'bold' });
    }

    // ح) رسم إسقاطات الجيب والجيب تمام بألوان صارخة مستقلة عن المظهر
    if (config.show_projections) {
        // إسقاط الجيب تمام (Cos) على محور الفواصل (أزرق مخضر)
        const cosPoint = board.create('point', [function() { return movingPoint.X(); }, 0], { visible: false });
        board.create('segment', [movingPoint, cosPoint], { strokeColor: theme.projectionLine, strokeWidth: 1, dash: 2 });
        board.create('segment', [center, cosPoint], { strokeColor: '#00ffcc', strokeWidth: 3.5, name: '' });

        // إسقاط الجيب (Sin) على محور التراتيب (وردي فاقع)
        const sinPoint = board.create('point', [0, function() { return movingPoint.Y(); }], { visible: false });
        board.create('segment', [movingPoint, sinPoint], { strokeColor: theme.projectionLine, strokeWidth: 1, dash: 2 });
        board.create('segment', [center, sinPoint], { strokeColor: '#ff0077', strokeWidth: 3.5, name: '' });
    }
}

// ==========================================================================
// 2. الحاضن المركزي المشغل للمحاكاة (الموزع المركزي المعتمد على اليامل)
// ==========================================================================
function initAllSimulations() {
    const simElements = document.querySelectorAll('[data-simulation-config]');

    simElements.forEach(function (el) {
        const simId = el.id;
        const rawConfig = el.getAttribute('data-simulation-config');
        if (!rawConfig) return;

        try {
            const config = JSON.parse(rawConfig);
            
            // تنظيف الحاوية قبل إعادة الرسم لتفادي تكرار اللوحات عند تبديل الـ Theme
            el.innerHTML = ''; 
            
            switch (config.type) {
                case 'trigonometric-circle':
                    buildTrigonometricCircle(simId, config);
                    break;
                case 'directed-angle':
                    buildDirectedAngle(simId, config); // تشغيل المحاكاة الجديدة للشعاعين
                    break;
                default:
                    console.warn("نوع المحاكاة غير مدرج:", config.type);
            }
        } catch (e) {
            console.error("خطأ في قراءة بيانات المحاكاة " + simId, e);
        }
    });
}

// تشغيل ميكانيكي عند تحميل الصفحة لأول مرة
document.addEventListener("DOMContentLoaded", initAllSimulations);

// إدراك التغير الحركي للمظهر: إعادة بناء اللوحة تلقائياً إذا قام التلميذ بضغط زر التبديل
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "data-bs-theme" || mutation.attributeName === "class") {
            // إعادة رسم المحاكاة فوراً بالألوان الجديدة المتوافقة
            initAllSimulations();
        }
    });
});
observer.observe(document.documentElement, { attributes: true });
observer.observe(document.body, { attributes: true });
