// ==========================================================================
// 1. الدالة التنفيذية: الدائرة المثلثية (يجب أن يراها المتصفح أولاً)
// ==========================================================================
function buildTrigonometricCircle(id, config) {
    if (typeof JXG === 'undefined') {
        console.error("المحرك الألماني JSXGraph غير محمل في هذه الصفحة!");
        return;
    }

    // تهيئة لوحة الرسم بنسب متوازنة للهواتف
    const board = JXG.JSXGraph.initBoard(id, {
        boundingbox: [-1.5, 1.5, 1.5, -1.5], 
        axis: true,                           
        grid: true, 
        showCopyright: false,                 
        pan: { enabled: false },               
        zoom: { enabled: false }              
    });

    const centerPos = config.center || [0, 0];
    const radiusSize = config.radius || 1;
    
    const center = board.create('point', centerPos, { visible: false, fixed: true });
    const circle = board.create('circle', [center, radiusSize], {
        strokeColor: '#555555',               
        strokeWidth: 2,
        fixed: true
    });

    // قراءة النقطة المنزلقة مع تأمين التواجد لحماية المتصفح من الانهيار
    const interactive = config.interactive_point || {};
    const initAngleRad = (interactive.initial_angle || 0) * Math.PI / 180;
    const startX = radiusSize * Math.cos(initAngleRad);
    const startY = radiusSize * Math.sin(initAngleRad);

    const movingPoint = board.create('glider', [startX, startY, circle], {
        name: interactive.name || 'M',
        color: interactive.color || '#ff0000',
        size: 4,
        withLabel: true,
        label: { color: '#ffffff', offset: [10, 10] } 
    });

    board.create('segment', [center, movingPoint], {
        strokeColor: '#75b5ff',               
        strokeWidth: 2
    });

    if (config.show_angle_text) {
        board.create('text', [-1.2, 1.2, function() {
            let angleRad = Math.atan2(movingPoint.Y(), movingPoint.X());
            if (angleRad < 0) angleRad += 2 * Math.PI;
            let angleDeg = angleRad * 180 / Math.PI;
            
            return 'θ = ' + angleDeg.toFixed(0) + '°  │  ' + (angleRad / Math.PI).toFixed(2) + ' π rad';
        }], { color: '#75b5ff', fontSize: 15, fontWeight: 'bold' });
    }

    if (config.show_projections) {
        const cosPoint = board.create('point', [function() { return movingPoint.X(); }, 0], { visible: false });
        board.create('segment', [movingPoint, cosPoint], { strokeColor: '#ffffff', strokeWidth: 1, dash: 2 });
        board.create('segment', [center, cosPoint], { strokeColor: '#00ffcc', strokeWidth: 3, name: '' });

        const sinPoint = board.create('point', [0, function() { return movingPoint.Y(); }], { visible: false });
        board.create('segment', [movingPoint, sinPoint], { strokeColor: '#ffffff', strokeWidth: 1, dash: 2 });
        board.create('segment', [center, sinPoint], { strokeColor: '#ff0077', strokeWidth: 3, name: '' });
    }
}

// ==========================================================================
// 2. الحاضن المركزي المشغل للمحاكاة (يشتغل بعد تحميل المستند)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    const simElements = document.querySelectorAll('[data-simulation-config]');

    simElements.forEach(function (el) {
        const simId = el.id;
        const rawConfig = el.getAttribute('data-simulation-config');
        if (!rawConfig) return;

        try {
            const config = JSON.parse(rawConfig);
            
            // الموزع المركزي صار يرى الدوال بوضوح لأنها فوقه تماماً
            switch (config.type) {
                case 'trigonometric-circle':
                    buildTrigonometricCircle(simId, config);
                    break;
                default:
                    console.warn("نوع المحاكاة غير مدرج:", config.type);
            }
        } catch (e) {
            console.error("خطأ في قراءة بيانات الجينات من الـ YAML للمحاكاة " + simId, e);
        }
    });
});
