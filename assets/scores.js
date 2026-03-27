
function checkOrCreateStudent() {
    let data = localStorage.getItem('student_profile');

    if (data) {
        // --- حالة التلميذ العائد ---
        let profile = JSON.parse(data);
        profile.isNew = false;
        
        // تحديث تاريخ الزيارة الحالية قبل العرض
        profile.info.lastVisit = new Date().toLocaleString('ar-DZ');
        
        // حفظ التحديث في الذاكرة
        localStorage.setItem('student_profile', JSON.stringify(profile));
        
        return profile;
    } else {
        // --- حالة التلميذ الجديد ---
        let newProfile = {
            isNew: true,
            info: {
                creationDate: new Date().toLocaleString('ar-DZ'),
                lastVisit: new Date().toLocaleString('ar-DZ') // أول زيارة هي نفسها تاريخ الإنشاء
            },
            records: {} 
        };
        localStorage.setItem('student_profile', JSON.stringify(newProfile));
        return newProfile;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const statusDiv = document.getElementById('debug-status');
    
    // فحص التلميذ
    let student = checkOrCreateStudent();

    // تحديث الواجهة للمعاينة على اللوحي
    if (student.isNew) {
        statusDiv.className = "alert alert-success text-center small";
        statusDiv.innerHTML = `<i class="bi bi-person-plus"></i> تلميذ جديد: تم إنشاء ملفك بنجاح (${student.info.creationDate})`;
    } else {
        statusDiv.className = "alert alert-info text-center small";
        statusDiv.innerHTML = `<i class="bi bi-person-check"></i> أهلاً بك مجدداً! آخر زيارة لك كانت: ${student.info.lastVisit}`;
    }
});


function checkOrCreateStudent() {
    let data = localStorage.getItem('student_profile');

    if (data) {
        let profile = JSON.parse(data);
        profile.isNew = false;
        // تحديث تاريخ آخر زيارة
        profile.info.lastVisit = new Date().toLocaleString('ar-DZ');
        localStorage.setItem('student_profile', JSON.stringify(profile));
        return profile;
    } else {
        let newProfile = {
            isNew: true,
            info: {
                creationDate: new Date().toLocaleString('ar-DZ'),
                lastVisit: new Date().toLocaleString('ar-DZ')
            },
            records: {} 
        };
        localStorage.setItem('student_profile', JSON.stringify(newProfile));
        return newProfile;
    }
}
