// وظيفة إدارة الوضع الليلي التلقائي
function applyAutoTheme() {
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = theme => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    };

    // التنفيذ الفوري
    setTheme(getPreferredTheme());

    // مراقبة التغيير الحي في إعدادات الجهاز
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme();
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme());
        }
    });
}

// تشغيل الوظيفة عند تحميل المستند
document.addEventListener('DOMContentLoaded', applyAutoTheme);



/* cette partie ferme le sidebar en cliquant un lien interne*/

// On récupère tous les liens qui pointent vers une ancre (#) dans le menu
const menuLinks = document.querySelectorAll('#sidebarMenu .offcanvas-body a[href^="#"]');
const myOffcanvas = document.getElementById('sidebarMenu');
    
// On crée l'instance Bootstrap pour pouvoir la contrôler
const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // 1. On laisse le navigateur naviguer vers l'ID
        // 2. On force la fermeture du volet
        bsOffcanvas.hide();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // التحقق مما إذا كان المستخدم لديه صلاحية "آدمن" في التخزين المحلي
    if (localStorage.getItem('role') === 'admin') {
        // إظهار كل العناصر التي تحمل الكلاس admin-ui
        const adminElements = document.querySelectorAll('.admin-ui');
        adminElements.forEach(el => {
            el.style.display = 'block'; // أو 'flex' حسب تصميمك
        });
        console.log("وضع الإدارة مفعل");
    }
});









