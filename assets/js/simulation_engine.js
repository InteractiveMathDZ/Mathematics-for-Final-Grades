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
            offset: [0, -10],   // إزاحة خفيفة للأرقام الأفقية للأسفل واليسار لتجنب المركز
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
            offset: [-20, 0],   
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
