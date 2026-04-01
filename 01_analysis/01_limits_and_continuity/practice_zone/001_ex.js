
function showLog(msg, isError = false) {
    const statusDiv = document.getElementById('debug-status');
    if (statusDiv) {
        statusDiv.style.backgroundColor = isError ? "#f8d7da" : "#d1ecf1";
        statusDiv.style.color = isError ? "#721c24" : "#0c5460";
        statusDiv.innerHTML = (isError ? "⚠️ خطأ: " : "ℹ️ نظام: ") + msg;
    }
}





function drawLimitsGraph() {
    try {
        const container = document.getElementById('graph-limits');
        if (!container) throw new Error("لم يتم العثور على حاوية الرسم graph-limits");

        const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        const colors = {
            axis: isDark ? '#888' : '#333',
            grid: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.05)',
            line: isDark ? '#66b2ff' : '#0d6efd',
            helper: isDark ? '#ffaaaa' : '#dc3545',
            text: isDark ? '#eee' : '#333',
            bg: isDark ? '#1a1a1a' : '#ffffff'
        };

        container.innerHTML = '';

        functionPlot({
            target: "#graph-limits",
            width: container.offsetWidth - 20,
            height: 400,
            grid: true,
            xAxis: { domain: [-1.2, 2], color: colors.axis },
            yAxis: { domain: [-0.2, 1.5], color: colors.axis },
            data: [
                {
                    fn: "(sqrt(x + 1) - 1) / x",
                    color: colors.line,
                    strokeWidth: 3,
                    sampler: 'builtIn',
                    graphType: 'polyline',
                    skipTip: true
                },
                {
                    points: [[0, 0.5]],
                    fnType: 'points',
                    graphType: 'scatter',
                    color: colors.helper,
                    attr: { r: 3, fill: colors.bg, stroke: colors.helper, "stroke-width": 2 }
                }
            ],
            annotations: [
                { y: 0.5, color: colors.helper, text: 'y = 0.5' },
                { x: 0, color: colors.helper }
            ]
        });

        // تحسين الـ SVG يدوياً
        const svg = container.querySelector('svg');
        if (svg) {
            svg.querySelectorAll('.grid line').forEach(l => l.style.stroke = colors.grid);
            svg.querySelectorAll('text').forEach(t => t.style.fill = colors.text);
            svg.querySelectorAll('.annotations line').forEach(l => {
                l.setAttribute('stroke-dasharray', '5,5');
                l.setAttribute('opacity', '0.7');
            });
        }
        showLog("تم رسم البيان وتحديث النظام بنجاح.");
    } catch (e) {
        showLog("فشل الرسم: " + e.message, true);
    }
}
// مراقبة تغيير الوضع (Dark/Light) لإعادة الرسم تلقائياً
const themeObserver = new MutationObserver(() => drawLimitsGraph());
themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });
























    

