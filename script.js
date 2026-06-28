// ==========================================
// PARTIE 1 : DATA ET VARIABLES GLOBALES
// ==========================================

// 1. BASE DE DONNÉES DES 40 QUESTIONS
let quizData = [
    {q:`1- Le principe actif des suspensions buvables est :`,o:[`A- Stable dans le sel`,`B- Instable dans l'eau`,`C- Stable dans le l'huile`,`D- Instable dans l'huile`],a:["B"]},
    {q:`2- Le médicament sert à :`,o:[`A- Guérir les maladies`,`B- Autres`,`C- Prévenir les maladies`,`D- Autre`],a:["A", "C"]},
    {q:`3- Dispenser le médicament consiste à :`,o:[`A- Donner la posologie au patient`,`B- Ne pas préciser les effets secondaires`,`C- Entreposer le médicament`,`D- Autres`],a:["A"]},
    {q:`4- Le principe actif (PA) d'un médicament est aussi :`,o:[`A- Son nom commercial`,`B- Son nom international`,`C- Son excipient`,`D- Autre`],a:["B"]},
    {q:`5- Dans EFFERALGAN 500 mg comprimé effervescent peut se prendre :`,o:[`A- Par voie percutanée`,`B- Par voie transmuqueuse`,`C- Par voie parentérale`,`D- Autre`],a:["D"]},
    {q:`6- La pharmacie galénique c'est :`,o:[`A- L'étude du mode d'action du médicament`,`B- L'étude des plantes médicinales`,`C- L'étude de la forme du médicament`,`D- Autre`],a:["C"]},
    {q:`7- Les sirops sont des préparations médicamenteuses :`,o:[`A- Saturées en eau`,`B- Saturées en sel`,`C- Saturées en lipide`,`D- Saturées en sucre`],a:["D"]},
    {q:`8- Les suspensions buvables doivent être préparées :`,o:[`A- Après la prise du médicament`,`B- Avant la prise du médicament`,`C- Pendant la prise du médicament`,`D- Autre`],a:["B"]},
    {q:`9- La voie parentérale c'est l'administration des médicaments par :`,o:[`E- Per os`,`F- Intra musculaire (IM)`,`G- Voie anale`,`H- Voie cutanée`],a:["F"]},
    {q:`10- Les inconvénients de la voie PER OS sont :`,o:[`A- Inobservance du traitement à cause du goût`,`B- Antiallergique`,`C- Antiparasitaire`,`D- Impossibilité d'administration si trouble de la déglutition`],a:["A", "D"]},
    {q:`11- Il faut la présence obligatoire d'un infirmier pour pratiquer :`,o:[`A- La voie percutanée`,`B- La voie transmuqueuse`,`C- La voie per os`,`D- Autre`],a:["D"]},
    {q:`12- La D.C.I du médicament c'est :`,o:[`E- sa dénomination commerciale`,`F- sa dénomination commune internationale`,`G- son principe actif`,`H- Autres`],a:["F", "G"]},
    {q:`13- L'allergie aux excipients d'un médicament est un :`,o:[`E- Effet bénéfique`,`F- Effet non voulu`,`G- Effet secondaire`,`H- Autre`],a:["F", "G"]},
    {q:`14- En cas d'effets secondaire d'un médicament il faut :`,o:[`E- Diminution de la dose`,`F- Augmenter la dose`,`G- Changer de prescription`,`H- Autres`],a:["E", "G"]},
    {q:`15- Dans une ordonnance médicale, il faut :`,o:[`E- La D.C.I`,`F- Le dosage`,`G- Un excipient`,`H- Le conditionnement primaire`],a:["E", "F"]},
    {q:`16- En pharmacologie, il y a :`,o:[`E- 2 voies de prise des médicaments`,`F- 5 voies de prise des médicaments`,`G- 1 seule voie de prise des médicaments`,`H- 6 voies de prise des médicaments`],a:["F"]},
    {q:`17- La voie parentérale concerne :`,o:[`E- La voie sous-cutanée`,`F- La voie orale`,`G- La voie intra-veineuse`,`H- La voie percutanée`],a:["E", "G"]},
    {q:`18- La voie transmuqueuse associe :`,o:[`A- La voie oculaire`,`B- La voie rectale`,`C- La voie cutanée`,`D- La voie sublinguale`],a:["A", "B", "D"]},
    {q:`19- La pharmacognosie est l'étude :`,o:[`I- Des plantes médicinales`,`J- Du médicament depuis son administration jusqu'à son élimination`,`K- Des bactéries`,`L- Autres`],a:["I"]},
    {q:`20- Le principe actif (PA) d'un médicament est aussi :`,o:[`I- Son nom commercial`,`J- Son nom international`,`K- Son excipient`,`L- Autre`],a:["J"]},
    {q:`21- L'effet indésirable d'un médicament peut être :`,o:[`E- Une pharmaco dépendance`,`F- L'indication thérapeutique`,`G- Une allergie au principe actif`,`H- Un Décès du patient`],a:["E", "G", "H"]},
    {q:`22- La rapidité des effets du médicament est obtenue par :`,o:[`I- La voie sous-cutanée`,`J- La voie orale`,`K- La voie intra-veineuse`,`L- La voie percutanée`],a:["I", "K"]},
    {q:`23- Le médicament sert :`,o:[`M- Seulement aux maladies humaines`,`N- Seulement aux maladies animales`,`M- A la fois aux maladies humaines et animales`,`O- Aux maladies des plantes`],a:["M"]},
    {q:`24- Dans EFFERALGAN 500 mg :`,o:[`N- Le principe actif est paracétamol 500 milligrammes`,`I- L'acide acétylsalicylique 500 milligrammes`,`J- La carbocysteine 500 milligrammes`,`K- Autres`],a:["N"]},
    {q:`25- Dans EFFERALGAN 500 milligrammes, le benzoate de sodium est :`,o:[`I- Le conditionnement secondaire`,`J- Le principe actif`,`K- Autre`,`L- Le conditionnement primaire`],a:["K"]},
    {q:`26- Les formes injectables sont des préparations galéniques :`,o:[`O- Non stériles`,`P- Autres`,`Q- A inhaler`,`R- Stériles`],a:["R"]},
    {q:`27- Dans un médicament l'eau est :`,o:[`S- Un principe actif`,`T- Un excipient`,`U- Un conditionnement`,`V- Autre`],a:["T"]},
    {q:`28- En pharmacologie, l'IVD est aussi appelée :`,o:[`W- La voie intra veineuse`,`X- Autres`,`Y- La voie sous-`,`Z- La voie intra veineuse directe`],a:["Z"]},
    {q:`29- Les crèmes sont des préparations :`,o:[`A- Lavables à l'eau`,`B- Non lavables à l'eau`,`C- A inhaler`,`D- Stériles`],a:["A"]},
    {q:`30- Les médicaments magistraux sont :`,o:[`A- Des spécialités pharmaceutiques`,`B- Autres`,`C- Des médicaments officinaux`,`D- Préparés par le pharmacien ou le PGP`],a:["D"]},
    {q:`31- Les médicaments génériques constituent :`,o:[`A- L'original d'un médicament`,`B- La DCI d'un médicament`,`C- Autre`,`D- Une copie de l'originale d'un médicament`],a:["D"]},
    {q:`32- L'intérêt de la prescription en D.C.I c'est :`,o:[`A- D'améliorer disponibilité des médicaments`,`B- Autres`,`C- De choisir une spécialité pharmaceutique`,`D- De réduire le risque de prendre plusieurs médicaments portant des noms différents mais contenant un même principe actif`],a:["A", "D"]},
    {q:`33- Le numéro de téléphone est :`,o:[`A- Nécessaire à inscrire sur l'ordonnance`,`B- Autres`,`E- N'est pas nécessaire à inscrire sur l'ordonnance`,`F- Permet de réduire le risque de prendre plusieurs médicaments`],a:["A"]},
    {q:`34- La PHARMACIE est un lieu :`,o:[`A- De vente seulement des médicaments`,`B- De vente et de conseil sur les médicaments`,`G- De choix d'une spécialité pharmaceutique`,`H- De stockage des médicaments`],a:["B", "H"]},
    {q:`35- L'arrêt définitif du traitement doit se faire :`,o:[`A- Autre`,`C- En cas d'effet curatif`,`I- En cas de prévention`,`J- En cas d'effets indésirables`],a:["J"]},
    {q:`36- COARTEM 80 mg est :`,o:[`A- Le nom commercial d'un médicament`,`B- Autres`,`K- Une D.C.I d un médicament`,`L- Un principe actif d'un médicament`],a:["A"]},
    {q:`37- L'alcool à 70 degrés est :`,o:[`A- Un générique`,`B- Un médicament officinal`,`M- Une spécialité pharmaceutique`,`N- Un médicament magistral`],a:["B"]},
    {q:`38- La VENTOLINE SPRAY est à prendre par voie :`,o:[`A- Transmuqueuse`,`B- Autre`,`O- Per os`,`P- Parentérale`],a:["A", "B", "O"]},
    {q:`39- Le paracétamol en suppositoire est destiné à être administré par voie :`,o:[`A- Vaginale`,`B- Per os`,`Q- Pulmonaire`,`R- Rectale`],a:["R"]},
    {q:`40- La voie percutanée concerne :`,o:[`A- Les oreilles`,`B- La peau`,`S- La bouche`,`T- Les poumons`],a:["B"]}
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