
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
        
        // ثالثاً: (المهمة الجديدة) ملء الدرجات السابقة في الصفحة
        hydrateScores(); 
    }
});


function updateParentScores(fullID, delta) {
    // نفكك المعرف باستخدام الشرطة "-"
    let parts = fullID.split('-'); 
    
    // نتحرك من الأسفل إلى الأعلى (حذف جزء في كل مرة)
    // مثال: math-anal-limits-exem-ex-2-1-1 -> math-anal-limits-exem-ex-2-1
    while (parts.length > 1) {
        parts.pop(); // حذف الجزء الأخير
        let parentID = parts.join('-');
        
        let data = localStorage.getItem('student_profile');
        let profile = JSON.parse(data);
        
        if (!profile.records[parentID]) {
            profile.records[parentID] = { avg: 0, count: 0 };
        }
        
        // تحديث المجموع التراكمي للأب بناءً على الفارق (Delta)
        // ملاحظة: الأباء (الفصول والمجالات) نحدث مجموع نقاطهم مباشرة
        profile.records[parentID].avg += delta; 
        
        localStorage.setItem('student_profile', JSON.stringify(profile));
        
        // --- التحديث البصري المحرك (المهم جداً) ---
        // بدلاً من innerHTML، نستخدم المحرك الذي يحرك الشريط
        updateUI(parentID, profile.records[parentID].avg);
    }
}
    


function recordResult(exerciseID, newScore) {
    let data = localStorage.getItem('student_profile');
    let profile = JSON.parse(data);
    let delta = 0;

    if (!profile.records[exerciseID]) {
        profile.records[exerciseID] = { avg: newScore, count: 1 };
        delta = newScore; // الفارق هو القيمة كاملة لأنها أول مرة
    } else {
        let record = profile.records[exerciseID];
        let oldAvg = record.avg;
        
        // حساب المعدل الجديد
        record.count++;
        record.avg = ((oldAvg * (record.count - 1)) + newScore) / record.count;
        
        // الفارق الذي سيؤثر على المجموع الكلي هو (المعدل الجديد - المعدل القديم)
        delta = record.avg - oldAvg;
    }

    localStorage.setItem('student_profile', JSON.stringify(profile));
    
    // --- هنا المحرك الرئيسي للتحديث التصاعدي ---
    updateParentScores(exerciseID, delta);

    return profile.records[exerciseID];
}

function updateScores(exerciseID, score){
        // استدعاء المحرك لتسجيل النتيجة
        let result = recordResult(exerciseID, score);
        updateUI(exerciseID, result.avg);
    
        // تحديث واجهة المستخدم (الـ p الذي يحمل المعرف)
        let displayElement = document.getElementById(exerciseID);
        if(displayElement) {
            displayElement.innerHTML = `المعدل: ${result.avg} | المحاولات: ${result.count}`;
         }

    
}

/*
function hydrateScores() {
    // 1. جلب البيانات من المخزن
    let data = localStorage.getItem('student_profile');
    if (!data) return; // إذا كان تلميذاً جديداً تماماً، لا يوجد ما نملأه

    let profile = JSON.parse(data);
    let records = profile.records;

    // 2. المرور على كل سجل موجود في محفظة التلميذ
    for (let id in records) {
        // البحث عن العنصر الذي يحمل هذا المعرف في صفحة الـ HTML الحالية
        let element = document.getElementById(id);
        
        if (element) {
            let record = records[id];
            
            // 3. التمييز بين "السؤال" و "العناوين الكبرى" في العرض
            if (id.split('-').length > 5) { 
                // حالة السؤال (مثل 2-1-1): نعرض المعدل وعدد المحاولات
                element.innerHTML = `المعدل: ${record.avg} | المحاولات: ${record.count}`;
            } else {
                // حالة العناوين (قسم، فصل، مادة): نعرض "درجة الإتقان" فقط
                element.innerHTML = `درجة الإتقان: ${Math.round(record.avg)}`;
            }
            
            // إضافة لمسة جمالية: تغيير لون النص إذا كان المعدل ممتازاً
            if (record.avg >= 10) element.style.color = "green";
        }
    }
}*/

function hydrateScores() {
    let data = JSON.parse(localStorage.getItem('student_profile'));
    if (!data || !data.records) return;

    Object.keys(data.records).forEach(id => {
        let record = data.records[id];
        // نرسل الـ ID والمعدل لدالة التحديث البصري
        updateUI(id, record.avg);
    });
}

// دالة التحديث البصري الموحدة (المحرك البصري)
function updateUI(id, avgScore) {
    let bar = document.getElementById(id + "-bar");
    let valLabel = document.getElementById(id + "-val");
    if (bar && valLabel) {
        let percent = (avgScore / 12) * 100;
        bar.style.width = percent + "%";
        valLabel.innerHTML = `${avgScore.toFixed(1)} / 12`;
        // تغيير اللون
        bar.className = "progress-bar progress-bar-striped " + (percent < 50 ? "bg-danger" : "bg-success");
    }
}



























    
    

