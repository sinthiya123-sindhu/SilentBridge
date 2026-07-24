// ================= USER =================

let user = {
    name: "",
    role: "",
    skills: []
};

let currentType = "";
let currentQuestion = 0;
let score = 0;


// ================= QUESTIONS =================

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
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: 2
    },
    {
        question: "What is 12 × 8?",
        options: ["86", "96", "108", "112"],
        answer: 1
    },
    {
        question: "What is the next number: 2, 4, 8, 16, ?",
        options: ["20", "24", "32", "36"],
        answer: 2
    },
    {
        question: "A train travels 60 km in 2 hours. What is its speed?",
        options: [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "60 km/h"
        ],
        answer: 1
    },
    {
        question: "Find the odd one: Apple, Mango, Carrot, Banana",
        options: [
            "Apple",
            "Mango",
            "Carrot",
            "Banana"
        ],
        answer: 2
    },
    {
        question: "If today is Monday, after 3 days?",
        options: [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        answer: 2
    },
    {
        question: "What is 10 × 10?",
        options: [
            "10",
            "50",
            "100",
            "1000"
        ],
        answer: 2
    }
];


const technicalQuestions = [
    {
        question: "Which keyword defines a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: 1
    },
    {
        question: "Which is ordered and changeable in Python?",
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
        question: "Which SQL command retrieves data?",
        options: ["GET", "SELECT", "FETCH", "SHOW"],
        answer: 1
    },
    {
        question: "Which symbol is used for Python comments?",
        options: ["//", "#", "/*", "--"],
        answer: 1
    },
    {
        question: "Which HTML tag creates a paragraph?",
        options: ["<p>", "<para>", "<text>", "<paragraph>"],
        answer: 0
    },
    {
        question: "Which CSS property changes text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "text-style"
        ],
        answer: 2
    },
    {
        question: "What is OOP?",
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
        question: "Which command removes all rows from a table?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        answer: 2
    }
];


const codingQuestions = [
    "Write a Python program to check whether a number is even or odd.",
    "Write a Python program to find the largest number.",
    "Write a Python program to reverse a string.",
    "Write a Python program to check whether a number is prime.",
    "Write a Python program to find factorial.",
    "Write a Python program to find the sum of a list.",
    "Write a Python program to count vowels.",
    "Write a Python program to check palindrome.",
    "Write a Python program to find the largest number in a list.",
    "Write a Python program for Fibonacci series."
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


// ================= STORAGE =================

function getUserKey() {

    return "placement_user_" +
        user.name
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "_");

}


function getSavedData() {

    const saved =
        localStorage.getItem(getUserKey());

    if (saved) {

        return JSON.parse(saved);

    }

    return {

        user: user,

        progress: {}

    };

}


function saveData(data) {

    localStorage.setItem(
        getUserKey(),
        JSON.stringify(data)
    );

}


// ================= SETUP =================

document
    .getElementById("setupForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document
                .getElementById("userName")
                .value
                .trim();

        const role =
            document
                .getElementById("targetRole")
                .value;

        const skills =
            [
                ...document.querySelectorAll(
                    ".skills input:checked"
                )
            ]
                .map(input => input.value);


        user = {

            name: name,

            role: role,

            skills: skills

        };


        const savedData =
            getSavedData();


        if (
            savedData.user &&
            Object.keys(savedData.progress).length > 0
        ) {

            user =
                savedData.user;

            openApp();

            alert(
                `Welcome back, ${user.name}! 👋\n\nYour progress has been saved.`
            );

        } else {

            saveData({

                user: user,

                progress: {}

            });

            openApp();

        }

    });


// ================= OPEN APP =================

function openApp() {

    document
        .getElementById("setupScreen")
        .classList
        .add("hidden");

    document
        .getElementById("app")
        .classList
        .remove("hidden");

    loadDashboard();

}


// ================= DASHBOARD =================

function loadDashboard() {

    document
        .getElementById("welcomeText")
        .innerText =
        `Welcome back, ${user.name} 👋`;

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
        `Hi ${user.name}! 🤖 I recommend starting with Aptitude to build your foundation. You can also practice Technical, Coding, or Mock Interview questions.`;

    createSkillAnalysis();

    createRoadmap();

    updateStats();

    createContinueCard();

}


// ================= CONTINUE =================

function createContinueCard() {

    const data =
        getSavedData();

    const progress =
        data.progress;

    let html = "";


    for (
        const type in progress
    ) {

        const item =
            progress[type];


        if (
            item.question > 0 &&
            item.question < 10
        ) {

            html += `

                <div class="dashboard-card">

                    <h2>
                        🔄 Continue ${type.toUpperCase()}
                    </h2>

                    <p>
                        Completed:
                        ${item.question} / 10
                    </p>

                    <p>
                        Score:
                        ${item.score}
                    </p>

                    <button
                        class="primary-btn"
                        onclick="startPractice('${type}')"
                    >

                        Continue Practice →

                    </button>

                </div>

            `;

        }

    }


    document
        .getElementById("continueCard")
        .innerHTML =
        html;

}


// ================= START PRACTICE =================

function startPractice(type) {

    currentType =
        type;


    const data =
        getSavedData();


    if (
        data.progress[type]
    ) {

        currentQuestion =
            data.progress[type].question;

        score =
            data.progress[type].score;

    } else {

        currentQuestion =
            0;

        score =
            0;

    }


    document
        .getElementById("dashboardSection")
        .classList
        .add("hidden");

    document
        .getElementById("progressSection")
        .classList
        .add("hidden");

    document
        .getElementById("practiceSection")
        .classList
        .remove("hidden");


    document
        .getElementById("practiceTitle")
        .innerText =
        type.toUpperCase();


    loadQuestion();

}


// ================= LOAD QUESTION =================

function loadQuestion() {

    let questions;


    if (
        currentType === "aptitude"
    ) {

        questions =
            aptitudeQuestions;

    }

    else if (
        currentType === "technical"
    ) {

        questions =
            technicalQuestions;

    }

    else if (
        currentType === "coding"
    ) {

        questions =
            codingQuestions;

    }

    else {

        questions =
            interviewQuestions;

    }


    if (
        currentQuestion >= 10
    ) {

        showCompleted();

        return;

    }


    document
        .getElementById("questionNumber")
        .innerText =
        `Question ${currentQuestion + 1} / 10`;


    document
        .getElementById("questionProgress")
        .style
        .width =
        `${((currentQuestion + 1) / 10) * 100}%`;


    document
        .getElementById("feedback")
        .innerHTML =
        "";


    document
        .getElementById("nextButton")
        .classList
        .add("hidden");


    const question =
        questions[currentQuestion];


    if (
        currentType === "aptitude" ||
        currentType === "technical"
    ) {


        document
            .getElementById("questionText")
            .innerText =
            question.question;


        let html =
            "";


        question.options.forEach(
            function (option, index) {

                html += `

                    <button
                        class="option"
                        onclick="checkAnswer(${index})"
                    >

                        ${option}

                    </button>

                `;

            }
        );


        document
            .getElementById("answerArea")
            .innerHTML =
            html;

    }


    else {


        document
            .getElementById("questionText")
            .innerText =
            question;


        document
            .getElementById("answerArea")
            .innerHTML =
            `

                <textarea
                    id="userAnswer"
                    placeholder="Write your answer here..."
                ></textarea>

                <button
                    class="primary-btn"
                    onclick="submitTextAnswer()"
                >

                    Submit Answer 🤖

                </button>

            `;

    }

}


// ================= MCQ =================

function checkAnswer(selected) {

    const questions =
        currentType === "aptitude"
            ? aptitudeQuestions
            : technicalQuestions;


    const question =
        questions[currentQuestion];


    const options =
        document.querySelectorAll(".option");


    options.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    if (
        selected === question.answer
    ) {

        score++;


        options[selected]
            .classList
            .add("correct");


        showFeedback(
            "✅ Correct! Excellent work.",
            true
        );

    }

    else {

        options[selected]
            .classList
            .add("wrong");


        options[question.answer]
            .classList
            .add("correct");


        showFeedback(
            "❌ Incorrect. Review this topic and keep practicing.",
            false
        );

    }


    saveProgress();


    document
        .getElementById("nextButton")
        .classList
        .remove("hidden");

}


// ==================================================
// TEXT ANSWER VALIDATION
// ==================================================

function submitTextAnswer() {

    const answer =
        document
            .getElementById("userAnswer")
            .value
            .trim();


    if (
        answer === ""
    ) {

        showFeedback(
            "⚠️ Please write an answer.",
            false
        );

        return;

    }


    // ================= CODING =================

    if (
        currentType === "coding"
    ) {


        const question =
            codingQuestions[currentQuestion]
                .toLowerCase();


        // ---------- EVEN OR ODD ----------

        if (
            question.includes("even or odd")
        ) {


            const correct =

                /int\s*\s*input\s*\(/i
                    .test(answer)

                &&

                /%\s*2\s*==\s*0/
                    .test(answer)

                &&

                /\bif\b/i
                    .test(answer)

                &&

                /\belse\b/i
                    .test(answer)

                &&

                /print\s*\(\s*["']even["']\s*/i
                    .test(answer)

                &&

                /print\s*\s*["']odd["']\s*/i
                    .test(answer);


            if (
                correct
            ) {

                score++;


                showFeedback(
                    "✅ Correct! Your Even or Odd program is correct 🎉",
                    true
                );

            }

            else {

                showFeedback(
                    `
                    ❌ Incorrect answer.

                    <br><br>

                    <b>Correct Python Code:</b>

                    <pre>
n = int(input("Enter a number: "))

if n % 2 == 0:
    print("Even")
else:
    print("Odd")
                    </pre>
                    `,
                    false
                );

                return;

            }

        }


        // ---------- LARGEST NUMBER ----------

        else if (
            question.includes("largest number")
        ) {


            const correct =

                /input\s*/i
                    .test(answer)

                &&

                /int/i
                    .test(answer)

                &&

                /if/i
                    .test(answer)

                &&

                /print/i
                    .test(answer);


            if (
                correct
            ) {

                score++;


                showFeedback(
                    "✅ Correct! Your largest number logic looks correct 🎉",
                    true
                );

            }

            else {

                showFeedback(
                    "❌ Incorrect. Use input, comparison logic and print.",
                    false
                );

                return;

            }

        }


        // ---------- REVERSE STRING ----------

        else if (
            question.includes("reverse a string")
        ) {


            const correct =

                /input\s*\(/i
                    .test(answer)

                &&

                /\[\s*::\s*-1\s*/
                    .test(answer)

                &&

                /print\s*\(/i
                    .test(answer);


            if (
                correct
            ) {

                score++;


                showFeedback(
                    "✅ Correct! Your string reversal logic is correct 🎉",
                    true
                );

            }

            else {

                showFeedback(
                    "❌ Incorrect. Use string slicing [::-1].",
                    false
                );

                return;

            }

        }


        // ---------- PRIME ----------

        else if (
            question.includes("prime")
        ) {


            const correct =

                /int\s*\(\s*input\s*\(/i
                    .test(answer)

                &&

                /\bfor\b/i
                    .test(answer)

                &&

                /range\s*\(/i
                    .
