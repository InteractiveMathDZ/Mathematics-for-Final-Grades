document.addEventListener("DOMContentLoaded", function () {
    // 1. المسح المركزي لجميع كبسولات المحاكاة في الدرس
    const simElements = document.querySelectorAll('[data-simulation-config]');

    simElements.forEach(function (el) {
        const simId = el.id;
        const config = JSON.parse(el.getAttribute('data-simulation-config'));
        if (!config) return;

        // 2. الموزع المركزي: يوجه المحرك تبعا للنوع المكتوب في اليامل
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
    });
});

// ==========================================================================
// الدالة المستقلة 1: الدائرة المثلثية (الآلية التنفيذية الكاملة)
// ==========================================================================
function buildTrigonometricCircle(id, config) {
    if (typeof JXG === 'undefined') {
        console.error("المحرك الألماني JSXGraph غير محمل في هذه الصفحة!");
        return;
    }

    // 1. تهيئة لوحة الرسم بنسب متوازنة للهواتف
    const board = JXG.JSXGraph.initBoard(id, {
        boundingbox: [-1.5, 1.5, 1.5, -1.5], 
        axis: true,                           
        grid: true, // تفعيل الشبكة لمطابقة الصورة الناجحة السابقة
        showCopyright: false,                 
        pan: { enabled: false },               
        zoom: { enabled: false }              
    });

    // 2. صب الكائنات الهندسية الثابتة
    const centerPos = config.center || [0, 0];
    const radiusSize = config.radius || 1;
    
    const center = board.create('point', centerPos, { visible: false, fixed: true });
    const circle = board.create('circle', [center, radiusSize], {
        strokeColor: '#555555',               
        strokeWidth: 2,
        fixed: true
    });

    // 3. حقن النقطة المنزلقة المقيدة بمحيط الدائرة
    const initAngleRad = (config.interactive_point?.initial_angle || 0) * Math.PI / 180;
    const startX = radiusSize * Math.cos(initAngleRad);
    const startY = radiusSize * Math.sin(initAngleRad);

    const movingPoint = board.create('glider', [startX, startY, circle], {
        name: config.interactive_point?.name || 'M',
        color: config.interactive_point?.color || '#ff0000',
        size: 4,
        withLabel: true,
        label: { color: '#ffffff', offset: [10, 10] } 
    });

    // 4. رسم نصف القطر الموصل
    board.create('segment', [center, movingPoint], {
        strokeColor: '#75b5ff',               
        strokeWidth: 2
    });

    // 5. النص الديناميكي لقيس الزاوية لحظة بلحظة
    if (config.show_angle_text) {
        board.create('text', [-1.2, 1.2, function() {
            let angleRad = Math.atan2(movingPoint.Y(), movingPoint.X());
            if (angleRad < 0) angleRad += 2 * Math.PI;
            let angleDeg = angleRad * 180 / Math.PI;
            
            return 'θ = ' + angleDeg.toFixed(0) + '°  │  ' + (angleRad / Math.PI).toFixed(2) + ' π rad';
        }], { color: '#75b5ff', fontSize: 15, fontWeight: 'bold' });
    }

    // 6. رسم إسقاطات الجيب والجيب تمام (Cos / Sin)
    if (config.show_projections) {
        // إسقاط Cos على محور الفواصل
        const cosPoint = board.create('point', [function() { return movingPoint.X(); }, 0], { visible: false });
        board.create('segment', [movingPoint, cosPoint], { strokeColor: '#ffffff', strokeWidth: 1, dash: 2 });
        board.create('segment', [center, cosPoint], { strokeColor: '#00ffcc', strokeWidth: 3, name: '' });

        // إسقاط Sin على محور التراتيب
        const sinPoint = board.create('point', [0, function() { return movingPoint.Y(); }], { visible: false });
        board.create('segment', [movingPoint, sinPoint], { strokeColor: '#ffffff', strokeWidth: 1, dash: 2 });
        board.create('segment', [center, sinPoint], { strokeColor: '#ff0077', strokeWidth: 3, name: '' });
    }
}

// ==========================================================================
// الدالة المستقلة 2: الزاوية المحيطية (حاضنة فارغة للتطوير المستقبلي)
// ==========================================================================
function buildInscribedAngleSimulation(id, config) {
    // كود هندسة الزوايا المحيطية سيصب هنا في وقته...
}
