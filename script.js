let user = {
    name: "",
    role: "",
    skills: []
};

let currentType = "";
let currentQuestion = 0;
let score = 0;
let totalSolved = 0;

let progress = {
    aptitude: 0,
    technical: 0,
    coding: 0,
    interview: 0
};


// ==============================
// QUESTIONS
// ==============================

const aptitudeQuestions = [

{
    question: "What is 20% of 150?",
    options: ["20", "30", "40", "50"],
    answer: 1
},

{
    question: "If 5 pens cost ₹50, what is the cost of 1 pen?",
    options: ["₹5", "₹10", "₹15", "₹20"],
    answer: 1
},

{
    question: "What is the average of 10, 20 and 30?",
    options: ["15", "20", "25", "30"],
    answer: 1
},

{
    question: "A number increased by 20% and decreased by 20%. What is the final change?",
    options: ["No change", "4% increase", "4% decrease", "2% decrease"],
    answer: 2
},

{
    question: "What is the next number? 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: 2
},

{
    question: "If a train travels 60 km in 2 hours, what is its speed?",
    options: ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
    answer: 1
},

{
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    answer: 2
},

{
    question: "Find the odd one: Apple, Mango, Carrot, Banana",
    options: ["Apple", "Mango", "Carrot", "Banana"],
    answer: 2
},

{
    question: "What is 12 × 8?",
    options: ["86", "96", "108", "112"],
    answer: 1
},

{
    question: "If today is Monday, what day will it be after 3 days?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    answer: 2
}

];


const technicalQuestions = [

{
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    answer: 1
},

{
    question: "Which data type is ordered and changeable in Python?",
    options: ["Tuple", "Set", "List", "String"],
    answer: 2
},

{
    question: "What does SQL stand for?",
    options: [
        "Structured Query Language",
        "Simple Query Language",
        "System Query Language",
        "Standard Question Language"
    ],
    answer: 0
},

{
    question: "Which SQL command is used to retrieve data?",
    options: ["GET", "SELECT", "FETCH", "SHOW"],
    answer: 1
},

{
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/*", "--"],
    answer: 1
},

{
    question: "Which HTML tag is used to create a paragraph?",
    options: ["<p>", "<para>", "<text>", "<paragraph>"],
    answer: 0
},

{
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "text-style"],
    answer: 2
},

{
    question: "What is the full form of OOP?",
    options: [
        "Object Oriented Programming",
        "Object Operating Program",
        "Open Object Programming",
        "Object Ordered Programming"
    ],
    answer: 0
},

{
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: 1
},

{
    question: "Which SQL command removes all rows from a table?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    answer: 2
}

];


const codingQuestions = [

"Write a Python program to check whether a number is even or odd.",

"Write a Python program to find the largest of two numbers.",

"Write a Python program to reverse a string.",

"Write a Python program to check whether a number is prime.",

"Write a Python program to find the factorial of a number.",

"Write a Python program to find the sum of numbers in a list.",

"Write a Python program to count vowels in a string.",

"Write a Python program to check whether a string is a palindrome.",

"Write a Python program to find the largest number in a list.",

"Write a Python program to print the Fibonacci series."

];


const interviewQuestions = [

"Tell me about yourself.",

"What are your strengths?",

"What is your weakness?",

"Why should we hire you?",

"Why do you want to join our company?",

"Where do you see yourself in five years?",

"Explain your final year project.",

"Why did you choose your technical field?",

"Tell me about a challenge you faced.",

"Do you have any questions for us?"

];


// ==============================
// SETUP
// ==============================

document
    .getElementById("setupForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        user.name =
            document.getElementById("userName").value;

        user.role =
            document.getElementById("targetRole").value;

        user.skills =
            [...document.querySelectorAll(
                ".skills input:checked"
            )].map(input => input.value);

        localStorage.setItem(
            "placementUser",
            JSON.stringify(user)
        );

        document
            .getElementById("setupScreen")
            .classList.add("hidden");

        document
            .getElementById("app")
            .classList.remove("hidden");

        loadDashboard();

    });


// ==============================
// LOAD DASHBOARD
// ==============================

function loadDashboard() {

    document
        .getElementById("welcomeText")
        .innerText =
        `Good morning, ${user.name} 👋`;

    document
        .getElementById("profileName")
        .innerText =
        user.name;

    document
        .getElementById("role")
        .innerText =
        user.role;

    document
        .getElementById("agentMessage")
        .innerText =
        `Based on your selected skills, I created a personalized preparation plan for your goal of becoming a ${user.role}.`;

    createSkillAnalysis();

    createRoadmap();

    updateStats();

}


// ==============================
// SKILL ANALYSIS
// ==============================

function createSkillAnalysis() {

    let skills =
        user.skills.length
        ? user.skills
        : ["Python", "SQL", "Communication"];

    let html = "";

    skills.forEach((skill, index) => {

        let percentage =
            45 + (index * 10);

        if (percentage > 85) {
            percentage = 85;
        }

        html += `

        <div class="skill-row">

            <div class="skill-info">

                <span>${skill}</span>

                <b>${percentage}%</b>

            </div>

            <div class="skill-bar">

                <div
                    class="skill-fill"
                    style="width:${percentage}%">

                </div>

            </div>

        </div>

        `;

    });

    document
        .getElementById("skillAnalysis")
        .innerHTML = html;

}


// ==============================
// ROADMAP
// ==============================

function createRoadmap() {

    let roadmap = [

        "Strengthen your core technical skills",

        "Practice aptitude and logical reasoning",

        "Solve coding problems regularly",

        "Improve SQL and data structures",

        "Complete mock interviews"

    ];

    let html = "";

    roadmap.forEach((item, index) => {

        html += `

        <div class="roadmap-item">

            <div class="roadmap-number">
                ${index + 1}
            </div>

            <div>

                <b>${item}</b>

                <p>
                    AI recommended step for your placement preparation.
                </p>

            </div>

        </div>

        `;

    });

    document
        .getElementById("roadmap")
        .innerHTML = html;

}


// ==============================
// START PRACTICE
// ==============================

function startPractice(type) {

    currentType = type;

    currentQuestion = 0;

    score = 0;

    document
        .getElementById("dashboardSection")
        .classList.add("hidden");

    document
        .getElementById("progressSection")
        .classList.add("hidden");

    document
        .getElementById("practiceSection")
        .classList.remove("hidden");

    loadQuestion();

}


// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    let questions;

    if (currentType === "aptitude") {

        questions = aptitudeQuestions;

    }

    if (currentType === "technical") {

        questions = technicalQuestions;

    }

    if (currentType === "coding") {

        questions = codingQuestions;

    }

    if (currentType === "interview") {

        questions = interviewQuestions;

    }


    document
        .getElementById("questionNumber")
        .innerText =
        `Question ${currentQuestion + 1} / 10`;

    document
        .getElementById("questionProgress")
        .style.width =
        `${((currentQuestion + 1) / 10) * 100}%`;

    document
        .getElementById("feedback")
        .innerHTML = "";

    document
        .getElementById("nextButton")
        .classList.add("hidden");


    let question =
        questions[currentQuestion];


    if (
        currentType === "aptitude" ||
        currentType === "technical"
    ) {

        document
            .getElementById("questionText")
            .innerText =
            question.question;

        let html = "";

        question.options.forEach(
            (option, index) => {

                html += `

                <button
                    class="option"
                    onclick="checkAnswer(${index})">

                    ${option}

                </button>

                `;

            }

        );

        document
            .getElementById("answerArea")
            .innerHTML = html;

    }


    else {

        document
            .getElementById("questionText")
            .innerText =
            question;

        document
            .getElementById("answerArea")
            .innerHTML = `

            <textarea
                id="userAnswer"
                placeholder="Write your answer here...">

            </textarea>

            <button
                class="primary-btn"
                onclick="submitTextAnswer()">

                🤖 Get AI Feedback

            </button>

            `;

    }

}


// ==============================
// CHECK MCQ ANSWER
// ==============================

function checkAnswer(selected) {

    let questions =
        currentType === "aptitude"
        ? aptitudeQuestions
        : technicalQuestions;

    let question =
        questions[currentQuestion];

    let options =
        document.querySelectorAll(".option");

    options.forEach(
        button => button.disabled = true
    );


    if (selected === question.answer) {

        score++;

        options[selected]
            .classList.add("correct");

        showFeedback(
            "✅ Correct! Great job.",
            true
        );

    }

    else {

        options[selected]
            .classList.add("wrong");

        options[question.answer]
            .classList.add("correct");

        showFeedback(
            "❌ Incorrect. Review this topic and try again.",
            false
        );

    }

    document
        .getElementById("nextButton")
        .classList.remove("hidden");

}


// ==============================
// TEXT ANSWER
// ==============================

function submitTextAnswer() {

    let answer =
        document
        .getElementById("userAnswer")
        .value
        .trim();

    if (!answer) {

        showFeedback(
            "🤖 Please write your answer first.",
            false
        );

        return;

    }

    score++;

    showFeedback(

        `🤖 AI Feedback:

        <br><br>

        Good attempt!

        <br><br>

        Try to include clear examples and explain your answer confidently.

        `,

        true

    );

    document
        .getElementById("nextButton")
        .classList.remove("hidden");

}


// ==============================
// NEXT QUESTION
// ==============================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= 10) {

        finishPractice();

        return;

    }

    loadQuestion();

}


// ==============================
// FINISH
// ==============================

function finishPractice() {

    progress[currentType] = score;

    totalSolved += 10;

    localStorage.setItem(
        "placementProgress",
        JSON.stringify(progress)
    );

    updateStats();


    document
        .getElementById("questionText")
        .innerHTML =
        `🎉 ${currentType.toUpperCase()} COMPLETED`;

    document
        .getElementById("answerArea")
        .innerHTML = `

        <div class="feedback success">

            <h2>
                Your Score: ${score} / 10
            </h2>

            <br>

            ${getPerformanceMessage(score)}

        </div>

        `;

    document
        .getElementById("feedback")
        .innerHTML = "";

    document
        .getElementById("nextButton")
        .classList.add("hidden");

}


function getPerformanceMessage(score) {

    if (score >= 8) {

        return "🌟 Excellent performance! Keep practicing.";

    }

    if (score >= 5) {

        return "👍 Good performance. Continue improving.";

    }

    return "💪 Keep practicing. You can improve with consistency.";

}


// ==============================
// FEEDBACK
// ==============================

function showFeedback(message, success) {

    document
        .getElementById("feedback")
        .innerHTML = `

        <div class="feedback ${success ? "success" : "error"}">

            ${message}

        </div>

        `;

}


// ==============================
// DASHBOARD
// ==============================

function showDashboard() {

    document
        .getElementById("practiceSection")
        .classList.add("hidden");

    document
        .getElementById("progressSection")
        .classList.add("hidden");

    document
        .getElementById("dashboardSection")
        .classList.remove("hidden");

}


// ==============================
// PROGRESS
// ==============================

function showProgress() {

    document
        .getElementById("dashboardSection")
        .classList.add("hidden");

    document
        .getElementById("practiceSection")
        .classList.add("hidden");

    document
        .getElementById("progressSection")
        .classList.remove("hidden");


    let html = "";

    Object.keys(progress).forEach(type => {

        html += `

        <p>

            ${type.toUpperCase()} :

            <b>${progress[type]} / 10</b>

        </p>

        `;

    });


    document
        .getElementById("progressContent")
        .innerHTML = html;

}


// ==============================
// UPDATE STATS
// ==============================

function updateStats() {

    let total =

        progress.aptitude +

        progress.technical +

        progress.coding +

        progress.interview;


    let readiness =
        Math.min(
            Math.round((total / 40) * 100),
            100
        );


    document
        .getElementById("readiness")
        .innerText =
        readiness + "%";


    document
        .getElementById("solved")
        .innerText =
        total;


}


// ==============================
// AI RECOMMENDATION
// ==============================

function showRecommendation() {

    let weakest =
        Object.keys(progress)
        .sort(
            (a, b) =>
            progress[a] - progress[b]
        )[0];

    alert(

        `🤖 AI Recommendation:

Focus more on ${weakest} practice.

Your AI agent recommends completing
10 questions in this area next.`

    );

}


// ==============================
// CHANGE PROFILE
// ==============================

function resetUser() {

    localStorage.clear();

    location.reload();

}


// ==============================
// LOAD SAVED USER
// ==============================

let savedUser =
    localStorage.getItem("placementUser");


if (savedUser) {

    user =
        JSON.parse(savedUser);

    document
        .getElementById("setupScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");

    loadDashboard();

}


let savedProgress =
    localStorage.getItem(
        "placementProgress"
    );


if (savedProgress) {

    progress =
        JSON.parse(savedProgress);

              }
