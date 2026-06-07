document.addEventListener("DOMContentLoaded", function () {
    // 1. المسح المركزي لجميع المحاكات في الدرس
    const simElements = document.querySelectorAll('[data-simulation-config]');

    simElements.forEach(function (el) {
        const simId = el.id;
        const config = JSON.parse(el.getAttribute('data-simulation-config'));
        if (!config) return;

        // 2. الموزع المركزي: يوجه المحرك تبعا للنوع المكتوب في اليامل
        switch (config.type) {
            
            case 'trigonometric-circle':
                // هنا يتم استدعاء دالة بناء الدائرة المثلثية (التي تظهر الآن عندك)
                buildTrigonometricCircle(simId, config);
                break;
                
            case 'inscribed-angle':
                // هنا سنستدعي دالة بناء الزاوية المحيطية والمركزية مستقبلا
                buildInscribedAngleSimulation(simId, config);
                break;
                
            case 'vector-rotation':
                // هنا محاكاة تدوير الأشعة وحساب الارتباط الخطي مثلا
                buildVectorRotation(simId, config);
                break;

            default:
                console.warn("نوع المحاكاة غير مدرج في المحرك المركزي:", config.type);
        }
    });
});

// ==========================================
// الدالة المستقلة 1: الدائرة المثلثية (الحالية)
// ==========================================
function buildTrigonometricCircle(id, config) {
    // كود الرسم الألماني الخاص بالدائرة وإسقاطاتها...
}

// ==========================================
// الدالة المستقلة 2: الزاوية المحيطية (المستقبلية)
// ==========================================
function buildInscribedAngleSimulation(id, config) {
    // كود رسم دائرة ونقطة مركزية ونقطتين على المحيط لحساب الزوايا...
}
