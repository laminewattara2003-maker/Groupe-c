// ==========================================
// PARTIE 1 : DATA ET VARIABLES GLOBALES
// ==========================================
let questions = [
    // --- PARTIE 1 : 25 QUESTIONS À CHOIX DRASTIQUE (QCD / VRAI-FAUX) ---
    {q: "1- La cellule peut survivre dans un environnement en perpétuel changement.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "2- Le corps humain est composé de millions de cellules.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, le cours précise "billions"
    {q: "3- Les métazoaires sont des êtres vivants unicellulaires.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, ce sont les protozoaires
    {q: "4- L'azote (N) fait partie des 4 éléments chimiques de base du vivant.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "5- Les molécules se combinent entre elles pour donner directement des tissus.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, elles donnent les cellules, qui donnent les tissus
    {q: "6- Les glucides ou sucres constituent une source d'énergie pour la cellule.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "7- Le fer (Fe) est nécessaire à la coagulation du sang.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, c'est le Calcium (Ca). Le Fer est pour l'hémoglobine.
    {q: "8- Les oligoéléments sont moins abondants mais très importants pour les fonctions cellulaires.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "9- L'ion Sodium (Na+) et le Potassium (K+) sont essentiels à la propagation de l'influx nerveux.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "10- Les cellules vivantes sont composées d'environ 80% d'eau.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, le cours indique environ 60% d'eau
    {q: "11- Le liquide interstitiel est une solution salée diluée analogue à l'eau de mer.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "12- La cellule ne peut être étudiée qu'au microscope.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "13- Une cellule peut mesurer de 2 microns jusqu'à un mètre de long.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "14- Les cellules musculaires lisses ont une forme à 'deux bouts pointus'.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "15- Toutes les cellules comprennent trois (03) régions principales.", o: ["A- Vrai", "B- Faux"], a: ["A"]}, // Membrane, cytoplasme, noyau
    {q: "16- La membrane plasmique assure l'intégrité de la cellule.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "17- Le cytosol ou hyaloplasme est un liquide translucide constitué en grande partie d'eau.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "18- Les nucléoles (au nombre de 2) sont limités par une membrane épaisse.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, structures non limitées par une membrane
    {q: "19- La chromatine renferme 46 chromosomes constitués par l'ADN.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "20- Le chondriome ou appareil mitochondrial gère l'activité sécrétoire de la cellule.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, il gère l'activité (respiration), c'est Golgi qui est sécrétoire
    {q: "21- L'ergastoplasme désigne des ribosomes en activité intense de synthèse protéique.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "22- La pinocytose concerne l'ingestion de matériels solides.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, pinocytose = liquides, phagocytose = solide
    {q: "23- Les cellules anaérobies trouvent l'O2 par des actions chimiques particulières.", o: ["A- Vrai", "B- Faux"], a: ["A"]},
    {q: "24- L'amitose est le mode de division des cellules pluricellulaires.", o: ["A- Vrai", "B- Faux"], a: ["B"]}, // Faux, amitose = unicellulaires, mitose = pluricellulaires
    {q: "25- La cellule est morte quand l'anabolisme a définitivement cessé.", o: ["A- Vrai", "B- Faux"], a: ["A"]},

    // --- PARTIE 2 : 15 QUESTIONS À CHOIX MULTIPLES (QCM) ---
    {q: "26- Quelles sont les propriétés fondamentales de la matière vivante possédées par les cellules ?", o: ["A- L'information héréditaire", "B- La synthèse et la croissance", "C- La division et la reproduction", "D- La stabilité thermique absolue"], a: ["A", "B", "C"]},
    {q: "27- Quels sont les 4 éléments de base (atomes) révélés par l'analyse chimique chez le vivant ?", o: ["A- Le carbone (C)", "B- L'oxygène (O)", "C- L'hydrogène (H) et l'azote (N)", "D- Le magnésium (Mg)"], a: ["A", "B", "C"]},
    {q: "28- Concernant la classification en molécules selon leurs propriétés physico-chimiques :", o: ["A- Les protides ont pour type le blanc d'œuf", "B- Les lipides sont des corps gras", "C- Les glucides sont des acides aminés", "D- Les glucides ou sucres sont des sources d'énergie"], a: ["A", "B", "D"]},
    {q: "29- À propos du rôle des oligoéléments dans l'organisme :", o: ["A- Le calcium (Ca) est nécessaire à la coagulation du sang", "B- Le fer (Fe) entre dans la composition de l'hémoglobine", "C- L'iode (I) intervient dans la synthèse de l'hormone thyroïdienne", "D- Ils sont abondants et représentent 80% de la cellule"], a: ["A", "B", "C"]},
];

// Mélange automatique des questions
quizData = quizData.sort(() => Math.random() - 0.5);

// 2. VARIABLES DE GESTION
const urlAPI = "https://sheetdb.io/api/v1/j1cpg1cncbkxo";
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = []; 
let historicalAnswers = []; 
let studentName = "";
let timerInterval;
let timeLeft = 30; 
let lockSelection = false;

// COMPTEUR GLOBAUX DE PARTICIPANTS (DÈS L'OUVERTURE)
window.onload = function() {
    fetch(urlAPI)
    .then(res => res.json())
    .then(data => {
        if (Array.isArray(data)) {
            const onlineText = document.getElementById("total-online");
            if(onlineText) onlineText.innerText = `👥 Total : ${data.length} étudiant(s) ont validé leur copie.`;
        }
    })
    .catch(() => {});
};
// ==========================================
// PARTIE 2 : LOGIQUE DE L'EXAMEN ET FONCTIONS
// ==========================================

// 3. COMMENCER L'EXAMEN + SÉCURITÉ ANTI-DOUBLON JOURNALIÈRE
function startExam() {
    const nameInput = document.getElementById("student-name").value.trim();
    if (nameInput === "") {
        alert("Veuillez entrer votre nom et prénom avant de commencer.");
        return;
    }
    
    studentName = nameInput;
    const startButton = document.querySelector("#login-screen button");
    startButton.disabled = true;
    startButton.innerText = "Vérification de sécurité...";

    // Récupérer la date du jour au format local (JJ/MM/AAAA)
    let todayStr = new Date().toLocaleDateString("fr-FR");

    // Recherche si l'étudiant a déjà envoyé un résultat
    fetch(`${urlAPI}/search?Nom=${encodeURIComponent(studentName)}`)
    .then(res => res.json())
    .then(records => {
        let alreadyComposedToday = false;
        if (Array.isArray(records) && records.length > 0) {
            alreadyComposedToday = records.some(row => row.Date && row.Date.includes(todayStr));
        }

        if (alreadyComposedToday) {
            alert(`⛔ Sécurité : ${studentName}, vous avez déjà soumis une copie aujourd'hui (${todayStr}). Une seule tentative par jour est autorisée.`);
            startButton.disabled = false;
            startButton.innerText = "Commencer l'épreuve";
        } else {
            document.getElementById("login-screen").classList.add("hidden");
            document.getElementById("exam-screen").classList.remove("hidden");
            loadQuestion();
        }
    })
    .catch(() => {
        // En cas d'erreur de connexion à l'API lors du check, on laisse passer l'étudiant
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("exam-screen").classList.remove("hidden");
        loadQuestion();
    });
}

// 4. CHRONOMÈTRE DE 30 SECONDES (PAR QUESTION)
function startQuestionTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById("timer").innerText = `Temps restant : ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Temps restant : ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            validateAndNext(true);
        }
    }, 1000);
}

// 5. CHARGER UNE QUESTION
function loadQuestion() {
    selectedAnswers = [];
    lockSelection = false;
    document.getElementById("next-btn").disabled = true;
    document.getElementById("next-btn").innerText = "Valider la réponse";

    document.getElementById("progress").innerText = `Question ${currentQuestionIndex + 1}/${quizData.length}`;

    const currentQuiz = quizData[currentQuestionIndex];
    document.getElementById("question-text").innerText = currentQuiz.q;

    let badgeType = document.getElementById("quiz-type");
    if (!badgeType) {
        badgeType = document.createElement("div");
        badgeType.id = "quiz-type";
        badgeType.style.display = "inline-block";
        badgeType.style.padding = "4px 8px";
        badgeType.style.color = "white";
        badgeType.style.borderRadius = "4px";
        badgeType.style.fontSize = "12px";
        badgeType.style.marginBottom = "15px";
        badgeType.style.fontWeight = "bold";
        document.getElementById("question-container").insertBefore(badgeType, document.getElementById("question-text"));
    }

    if (currentQuiz.a.length === 1) {
        badgeType.innerText = "QCD : Réponse Unique Directe";
        badgeType.style.background = "#2980b9";
    } else {
        badgeType.innerText = `QCM : Multiples Choix (${currentQuiz.a.length} attendus)`;
        badgeType.style.background = "#e67e22";
    }

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQuiz.o.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.style.transition = "background 0.3s";
        button.onclick = () => selectOption(button, option.charAt(0));
        optionsContainer.appendChild(button);
    });

    startQuestionTimer();
}

// 6. GÉRER LE CLIC SUR UNE OPTION
function selectOption(btnElement, letter) {
    if (lockSelection) return; 
    const currentQuiz = quizData[currentQuestionIndex];

    if (currentQuiz.a.length === 1) {
        selectedAnswers = [letter];
        const allButtons = document.querySelectorAll(".option-btn");
        allButtons.forEach(btn => btn.classList.remove("selected"));
        btnElement.classList.add("selected");
        
        validateAndNext(false);
    } else {
        if (selectedAnswers.includes(letter)) {
            selectedAnswers = selectedAnswers.filter(item => item !== letter);
            btnElement.classList.remove("selected");
        } else {
            selectedAnswers.push(letter);
            btnElement.classList.add("selected");
        }
        document.getElementById("next-btn").disabled = (selectedAnswers.length === 0);
    }
}

// 7. AFFICHAGE DES COULEURS (VERT/ROUGE) ET SÉCURISATION VISUELLE
function nextQuestion() {
    validateAndNext(false);
}

function validateAndNext(isTimeOut = false) {
    if (lockSelection) return;
    lockSelection = true;
    clearInterval(timerInterval);

    const currentQuiz = quizData[currentQuestionIndex];

    historicalAnswers.push({
        question: currentQuiz.q,
        options: currentQuiz.o,
        correctAnswers: currentQuiz.a,
        userAnswers: [...selectedAnswers]
    });

    let sortedCorrect = [...currentQuiz.a].sort().join(",");
    let sortedSelected = [...selectedAnswers].sort().join(",");
    let isCorrect = (sortedCorrect === sortedSelected);

    if (isCorrect && !isTimeOut) {
        score++;
    }

    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
        let currentLetter = btn.innerText.charAt(0);
        if (currentQuiz.a.includes(currentLetter)) {
            btn.style.background = "#2ecc71";
            btn.style.color = "white";
            btn.style.borderColor = "#27ae60";
        } else if (selectedAnswers.includes(currentLetter)) {
            btn.style.background = "#e74c3c";
            btn.style.color = "white";
            btn.style.borderColor = "#c0392b";
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            endExam();
        }
    }, 1500);
}

// 8. FIN DE L'EXAMEN ET TRANSMISSION AUTOMATIQUE
function endExam() {
    document.getElementById("exam-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    const resultTextElement = document.getElementById("result-text");
    let noteSur20 = ((score / quizData.length) * 20).toFixed(2);

    resultTextElement.innerHTML = `
        Merci ${studentName}.<br>Votre note : <strong>${noteSur20}/20</strong> (${score}/${quizData.length}).<br><br>
        <div id="db-status" style="color:#f39c12; font-weight:bold; margin-bottom:15px;">Envoi de votre note au classement général...</div>
        <button onclick="showCorrection()" style="background:#27ae60; margin-bottom:10px;">Voir la correction détaillée</button>
        <button onclick="fetchRanking()" style="background:#8e44ad;">Voir le classement complet</button>
        <div id="ranking-container" style="margin-top:20px; text-align:left;"></div>
    `;

    const donneesEtudiant = {
        data: [
            {
                "Nom": studentName,
                "Note": `${noteSur20}/20 (${score}/${quizData.length})`,
                "Date": new Date().toLocaleString("fr-FR")
            }
        ]
    };

    fetch(urlAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donneesEtudiant)
    })
    .then(response => {
        if (!response.ok) throw new Error();
        return response.json();
    })
    .then(() => {
        document.getElementById("db-status").innerText = "✓ Note enregistrée ! Vous êtes officiellement classé.";
        document.getElementById("db-status").style.color = "#2ecc71";
    })
    .catch(() => {
        document.getElementById("db-status").innerText = "⚠️ Erreur réseau. Fais une capture d'écran de ton score !";
        document.getElementById("db-status").style.color = "#e74c3c";
    });
}

// 9. AFFICHAGE DE LA CORRECTION INTÉGRALE
function showCorrection() {
    clearInterval(timerInterval);
    let correctionHTML = `<div style="text-align:left; padding:10px;"><h2>Correction de ton Évaluation</h2>`;

    historicalAnswers.forEach((item, index) => {
        let isCorrect = [...item.correctAnswers].sort().join(",") === [...item.userAnswers].sort().join(",");
        let blockColor = isCorrect ? "#d4edda" : "#f8d7da";
        let labelResult = isCorrect ? "✅ Correct" : "❌ Incorrect";

        correctionHTML += `
            <div style="background:${blockColor}; padding:15px; border-radius:8px; margin-bottom:15px; color:#2c3e50; border: 1px solid #ccc;">
                <strong>Question ${index + 1} : ${item.question}</strong> <span style="float:right; font-weight:bold;">${labelResult}</span><br><br>
                <div style="margin-left:10px; font-size:14px;">
        `;

        item.options.forEach(opt => {
            let letter = opt.charAt(0);
            let isExpected = item.correctAnswers.includes(letter);
            let isChosen = item.userAnswers.includes(letter);
            
            let styleLine = "padding:4px; border-radius:4px; margin-bottom:2px;";
            if (isExpected) {
                styleLine += "background:#2ecc71; color:white; font-weight:bold;"; 
            } else if (isChosen && !isExpected) {
                styleLine += "background:#e74c3c; color:white;"; 
            }

            correctionHTML += `<div style="${styleLine}">${opt} ${isChosen ? '<b>(Ton choix)</b>' : ''} ${isExpected ? '<b>(Correct)</b>' : ''}</div>`;
        });

        correctionHTML += `</div></div>`;
    });

    correctionHTML += `<button onclick="window.location.reload()" style="background:#2d7ff9; margin-top:15px;">Retour à l'accueil</button></div>`;
    document.getElementById("result-screen").innerHTML = correctionHTML;
}

// 10. AFFICHAGE DE TOUS LES ÉTUDIANTS CLASSÉS (SANS AUCUNE LIMITE)
function fetchRanking() {
    const rContainer = document.getElementById("ranking-container");
    rContainer.innerHTML = "<em>Chargement du classement général en temps réel...</em>";

    fetch(urlAPI)
    .then(res => res.json())
    .then(data => {
        if (!Array.isArray(data)) return;

        let cleanScore = (txt) => {
            if(!txt) return 0;
            let part = txt.split('/')[0];
            return parseFloat(part) || 0;
        };

        data.sort((a, b) => cleanScore(b.Note) - cleanScore(a.Note));

        let tableHTML = `
            <h3 style="margin-top:20px; color:#8e44ad;">🏆 Classement Général (${data.length} participants)</h3>
            <table style="width:100%; border-collapse: collapse; margin-top:10px; font-size:14px;">
                <thead>
                    <tr style="background:#8e44ad; color:white; text-align:left;">
                        <th style="padding:8px; border:1px solid #ddd;">Rang</th>
                        <th style="padding:8px; border:1px solid #ddd;">Nom Étudiant</th>
                        <th style="padding:8px; border:1px solid #ddd;">Note /20</th>
                    </tr>
                </thead>
                <tbody>
        `;

        data.forEach((user, index) => {
            let rowBg = (user.Nom === studentName) ? "#fff2cc" : (index % 2 === 0 ? "#f9f9f9" : "#ffffff");
            let weight = (user.Nom === studentName) ? "font-weight:bold; color:#b45f06;" : "";
            
            let medaille = (index === 0) ? "🥇 " : (index === 1) ? "🥈 " : (index === 2) ? "🥉 " : "";

            tableHTML += `
                <tr style="background:${rowBg}; ${weight}">
                    <td style="padding:8px; border:1px solid #ddd;">${medaille}${index + 1}</td>
                    <td style="padding:8px; border:1px solid #ddd;">${user.Nom}</td>
                    <td style="padding:8px; border:1px solid #ddd; font-weight:bold;">${user.Note}</td>
                </tr>
            `;
        });

        tableHTML += `</tbody></table>`;
        rContainer.innerHTML = tableHTML;
    })
    .catch(() => {
        rContainer.innerHTML = "<span style='color:red;'>Impossible de charger le classement. Vérifiez votre connexion.</span>";
    });
}