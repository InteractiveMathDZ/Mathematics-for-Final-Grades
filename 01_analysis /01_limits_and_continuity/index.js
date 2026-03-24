
function calculate_results(allAnswers, correctAnswers) {
    let stats = { score: 0, errors: 0, checkedCount: 0 };
    allAnswers.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked) {
            stats.checkedCount++;
            if (correctAnswers.includes(id)) {
                stats.score++;
            } else {
                stats.errors++;
            }
        }
    });
    return stats;
}

/**
 * Affiche le résultat de manière universelle
 * @param {Object} stats - Les résultats du calcul
 * @param {number} totalExpected - Nombre de bonnes réponses attendues
 * @param {string} hintBoxId - ID de la zone d'affichage
 * @param {string} successMsg - Message de succès (HTML/LaTeX)
 * @param {string} errorMsg - Message d'erreur (HTML/LaTeX)
 */
function display_universal_validation(stats, totalExpected, hintBoxId, successMsg, errorMsg) {
    const hintBox = document.getElementById(hintBoxId);
    if (!hintBox) return;

    if (stats.checkedCount === 0) {
        alert("أجب على السؤال، باختيار المربعات الصغيرة على يسار الخيارت المقترحة!");
        return;
    }

    // Vérification : toutes les bonnes réponses cochées ET aucune erreur
    if (stats.score === totalExpected && stats.errors === 0) {
        hintBox.className = "hint-box alert alert-success shadow-sm";
        hintBox.innerHTML = `<b>ممتاز !</b> ${successMsg}`;
    } else if (stats.score < totalExpected && stats.errors === 0)  {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة جزئية، إختر جميع الإجابات الصحيحة.</b> ${errorMsg}`;
    } else {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة خاطئة، حاول مرة أخرى!</b> ${errorMsg}`;
    }

    if (window.MathJax) {
        MathJax.typesetPromise([hintBox]);
    }
}



/**
 * Fonction universelle pour valider une réponse numérique
 * @param {string} inputId - L'ID du champ de saisie
 * @param {number} correctAnswer - La valeur mathématique attendue
 * @param {string} hintBoxId - L'ID de la zone de message
 * @param {string} successMsg - Le message en cas de succès (en LaTeX/HTML)
 * @param {string} errorMsg - Le message en cas d'erreur (en LaTeX/HTML)
 */
function checkNumericExercise(inputId, correctAnswer, hintBoxId, successMsg, errorMsg) {
    const inputElement = document.getElementById(inputId);
    const hintBox = document.getElementById(hintBoxId);
    const userAnswer = inputElement.value;

    if (userAnswer === "") {
        alert("يرجى كتابة النتيجة أولاً !");
        return;
    }

    if (parseFloat(userAnswer) === correctAnswer) {
        hintBox.className = "hint-box alert alert-success shadow-sm";
        hintBox.innerHTML = `<b>إجابة صحيحة !</b> ${successMsg}`;
    } else {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة خاطئة.</b> ${errorMsg}`;
    }

    if (window.MathJax) {
        MathJax.typesetPromise([hintBox]);
    }
}

/*______________________________________*/

function verify_2_1_1() {
    const correct = ['st-ans-2-1-1-c', 'st-ans-2-1-1-e'];
    const all = ['st-ans-2-1-1-a', 'st-ans-2-1-1-b', 'st-ans-2-1-1-c', 'st-ans-2-1-1-d', 'st-ans-2-1-1-e', 'st-ans-2-1-1-f'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-1-1',
        "لقد فهمت التكافؤ بين الكتابة $\\mathbb{R}^*$ و اتحاد المجالات.",
        "انتبه إلى اتجاه المعقوفتين وإقصاء الصفر."
    );
}

/*________________________________________*/

function verify_2_1_2() {
    checkNumericExercise(
        'st-ans-2-1-2', 
        0, 
        'hint-2-1-2',
        "<b>إجابة صحيحة !</b> فعلاً، كلما كبر المقام (في القيمة المطلقة)، اقترب الكسر من الصفر: $\\lim\\limits_{x \\to -\\infty} \\frac{1}{x} = 0$.",
        "تذكر القاعدة: $\\frac{L}{\\infty} = 0$."
    );  
}













/*_____________________*/


