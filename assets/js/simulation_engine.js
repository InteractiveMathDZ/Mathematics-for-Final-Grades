// ==========================================================================
// 1. الدالة التنفيذية المستقرة: الزاوية الموجهة لشعاعين (إصلاح الانهيار والأقصر مسافة)
// ==========================================================================
function buildDirectedAngle(id, config) {
    if (typeof JXG === 'undefined') return;

    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark' || 
                   document.documentElement.getAttribute('data-theme') === 'dark' ||
                   document.body.classList.contains('dark-theme') ||
                   document.body.classList.contains('dark');

    const theme = {
        axisColor: isDark ? '#444444' : '#dddddd', 
        gridColor: isDark ? '#222222' : '#e5e5e5',
        textColor: isDark ? '#ffffff' : '#222222',
        uColor: '#00ffcc', 
        vColor: '#ff0077', 
        arcColor: '#75b5ff'
    };

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

    const O = board.create('point', [0, 0], { name: 'O', color: theme.textColor, size: 3, fixed: true, label: {color: theme.textColor, offset: [-15, -15]} });
    const c1 = board.create('circle', [O, 1.3], { visible: false });
    
    // الشعاع الأول u
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

    // قطاع زاوي حركي ذكي يحدد الأقصر مسافة تلقائياً لتفادي الالتفاف المقيت
    board.create('sector', [
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
        lastArrow: { type: 1, size: 3, strokeWidth: 2.5 },
        firstArrow: false
    });

    // النص الديناميكي الصافي عالي الأداء
    board.create('text', [-1.8, 1.6, function() {
        let alphaU = Math.atan2(A.Y(), A.X());
        let alphaV = Math.atan2(B.Y(), B.X());
        
        let angleRad = alphaV - alphaU;
        while (angleRad <= -Math.PI) angleRad += 2 * Math.PI;
        while (angleRad > Math.PI) angleRad -= 2 * Math.PI;
        
        let angleDeg = angleRad * 180 / Math.PI;
        let piFraction = (angleRad / Math.PI).toFixed(2);
        
        return '(u, v) = ' + angleDeg.toFixed(0) + '°  │  ' + piFraction + ' π rad';
    }], { 
        color: theme.arcColor, 
        fontSize: 16,
        fontWeight: 'bold',
        fixed: true
    });
}

// ==========================================================================
// 2. الدالة التنفيذية: الدائرة المثلثية (مصححة الألوان بالكامل للمظهرين)
// ==========================================================================
function buildTrigonometricCircle(id, config) {
    if (typeof JXG === 'undefined') return;

    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark' || 
                   document.documentElement.getAttribute('data-theme') === 'dark' ||
                   document.body.classList.contains('dark-theme') ||
                   document.body.classList.contains('dark');

    // تصحيح هندسة الألوان لتدعم التبديل اللحظي بدقة
    const theme = {
        axisColor: '#ffffff',       
        gridColor: '#444444',       
        textColor: '#ffffff',       
        circleColor: '#666666',     
        projectionLine: '#aaaaaa'   
    };

    const board = JXG.JSXGraph.initBoard(id, {
        boundingbox: [-1.5, 1.5, 1.5, -1.5], 
        axis: false, 
        grid: { strokeColor: theme.gridColor, strokeWidth: 0.5, gridX: 0.2, gridY: 0.2 }, 
        showCopyright: false,                 
        pan: { enabled: false },               
        zoom: { enabled: false }              
    });

    // محور الفواصل (الأفقي) مع إضافة السهم التوجيهي الصريح
    const xAxis = board.create('axis', [[0, 0], [1, 0]], {
        strokeColor: theme.axisColor,
        strokeWidth: 1.5,
        withLabel: false,
        lastArrow: { type: 1, size: 3 }
    });
    
    xAxis.defaultTicks.setAttribute({
        strokeColor: theme.axisColor,
        strokeWidth: 1,
        majorHeight: 5,
        drawLabels: true,
        insertLabels: true,
        label: {
            strokeColor: theme.textColor, 
            fontSize: 12,
            cssClass: 'jxg-tick-label',   
            offset: [-5, -10],   
            anchorX: 'center',
            anchorY: 'top'
        }
    });

    // محور التراتيب (الشاقولي) مع إضافة السهم التوجيهي الصريح
    const yAxis = board.create('axis', [[0, 0], [0, 1]], {
        strokeColor: theme.axisColor,
        strokeWidth: 1.5,
        withLabel: false,
        lastArrow: { type: 1, size: 3 }
    });
    
    yAxis.defaultTicks.setAttribute({
        strokeColor: theme.axisColor,
        strokeWidth: 1,
        majorHeight: 5,
        drawLabels: true,
        insertLabels: true,
        label: {
            strokeColor: theme.textColor, 
            fontSize: 12,
            cssClass: 'jxg-tick-label',
            offset: [-5, 0],   
            anchorX: 'right',
            anchorY: 'middle'
        }
    });

    const centerPos = config.center || [0, 0];
    const radiusSize = config.radius || 1;
    
    const center = board.create('point', centerPos, { visible: false, fixed: true });
    const circle = board.create('circle', [center, radiusSize], {
        strokeColor: theme.circleColor,               
        strokeWidth: 2,
        fixed: true
    });

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

    board.create('segment', [center, movingPoint], {
        strokeColor: '#75b5ff',               
        strokeWidth: 2.5
    });

    // النص الديناميكي لقيس الزاوية بالقياس الرئيسي الصارم
    if (config.show_angle_text) {
        board.create('text', [-1.3, 1.25, function() {
            let angleRad = Math.atan2(movingPoint.Y(), movingPoint.X()); 
            let angleDeg = angleRad * 180 / Math.PI;
            let piFraction = (angleRad / Math.PI).toFixed(2);
            
            return 'θ = ' + angleDeg.toFixed(0) + '°  │  ' + piFraction + ' π rad';
        }], { color: '#75b5ff', fontSize: 14, fontWeight: 'bold' });
    }

    // رسم إسقاطات الجيب والجيب تمام
    if (config.show_projections) {
        const cosPoint = board.create('point', [function() { return movingPoint.X(); }, 0], { visible: false });
        board.create('segment', [movingPoint, cosPoint], { strokeColor: theme.projectionLine, strokeWidth: 1, dash: 2 });
        board.create('segment', [center, cosPoint], { strokeColor: '#00ffcc', strokeWidth: 3.5, name: '' });

        const sinPoint = board.create('point', [0, function() { return movingPoint.Y(); }], { visible: false });
        board.create('segment', [movingPoint, sinPoint], { strokeColor: theme.projectionLine, strokeWidth: 1, dash: 2 });
        board.create('segment', [center, sinPoint], { strokeColor: '#ff0077', strokeWidth: 3.5, name: '' });
    }
}

// ==========================================================================
// 3. الحاضن المركزي المشغل للمحاكاة (الموزع المركزي المعتمد على اليامل)
// ==========================================================================
function initAllSimulations() {
    const simElements = document.querySelectorAll('[data-simulation-config]');

    simElements.forEach(function (el) {
        const simId = el.id;
        const rawConfig = el.getAttribute('data-simulation-config');
        if (!rawConfig) return;

        try {
            const config = JSON.parse(rawConfig);
            el.innerHTML = ''; 
            
            switch (config.type) {
                case 'trigonometric-circle':
                    buildTrigonometricCircle(simId, config);
                    break;
                case 'directed-angle':
                    buildDirectedAngle(simId, config); 
                    break;
                default:
                    console.warn("نوع المحاكاة غير مدرج:", config.type);
            }
        } catch (e) {
            console.error("خطأ في قراءة بيانات المحاكاة " + simId, e);
        }
    });
}

// تشغيل ميكانيكي آمن
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllSimulations);
} else {
    initAllSimulations();
}

// المراقبة الحركية لتبديل المظهر (Theme Switcher)
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "data-bs-theme" || mutation.attributeName === "class") {
            initAllSimulations();
        }
    });
});
observer.observe(document.documentElement, { attributes: true });
observer.observe(document.body, { attributes: true });
