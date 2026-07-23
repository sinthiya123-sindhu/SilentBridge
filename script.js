// ===============================
// MODAL FUNCTIONS
// ===============================

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modal-title");

const modalContent =
    document.getElementById("modal-content");


function openModal(title, content) {

    modalTitle.innerText = title;

    modalContent.innerHTML = content;

    modal.style.display = "flex";

}


function closeModal() {

    modal.style.display = "none";

}


window.onclick = function(event) {

    if (event.target === modal) {

        closeModal();

    }

};


// ===============================
// AI AGENT
// ===============================

function openAgent() {

    openModal(

        "🤖 Ask CareerPilot AI",

        `

        <p>

        Hi Sindhu! I analyzed your current preparation.
        What would you like to know?

        </p>


        <br>


        <div class="question">


            <h3>
                Select an option
            </h3>


            <button class="option"
                onclick="agentReply('focus')">

                🎯 What should I focus on today?

            </button>


            <button class="option"
                onclick="agentReply('skill')">

                📊 Analyze my skill gap

            </button>


            <button class="option"
                onclick="agentReply('plan')">

                🗺️ Create my preparation plan

            </button>


            <div id="agent-reply">

            </div>


        </div>

        `

    );

}


function agentReply(type) {

    let reply = "";


    if (type === "focus") {

        reply = `

        🎯 Based on your current performance,
        focus on SQL today.

        <br><br>

        Your SQL skill is 55%.
        Complete 5 SQL questions and review
        JOIN operations.

        `;

    }


    if (type === "skill") {

        reply = `

        📊 Your strongest skill is Python at 82%.

        <br><br>

        Your biggest improvement areas are:

        <br>

        • Data Structures - 42%

        <br>

        • SQL - 55%

        <br><br>

        I recommend improving SQL first.

        `;

    }


    if (type === "plan") {

        reply = `

        🗺️ Your AI preparation plan:

        <br><br>

        Week 1: SQL Fundamentals

        <br>

        Week 2: Data Structures

        <br>

        Week 3: Coding Practice

        <br>

        Week 4: Mock Interviews

        `;

    }


    document.getElementById(

        "agent-reply"

    ).innerHTML = `

        <div class="ai-response">

            <strong>
                🤖 CareerPilot AI
            </strong>

            <br><br>

            ${reply}

        </div>

    `;

}


// ===============================
// PRACTICE
// ===============================

function openPractice(type) {


    if (type === "aptitude") {

        openModal(

            "🧮 Aptitude Practice",

            `

            <div class="question">

                <h3>

                If a number is increased by 20%
                and then decreased by 20%,
                what is the final change?

                </h3>


                <button class="option"
                    onclick="checkAnswer(this, false)">

                    A. No Change

                </button>


                <button class="option"
                    onclick="checkAnswer(this, false)">

                    B. 4% Increase

                </button>


                <button class="option"
                    onclick="checkAnswer(this, true)">

                    C. 4% Decrease

                </button>


                <button class="option"
                    onclick="checkAnswer(this, false)">

                    D. 2% Decrease

                </button>


                <div id="answer">

                </div>

            </div>

            `

        );

    }


    if (type === "technical") {

        openModal(

            "💻 Technical Practice",

            `

            <div class="question">

                <h3>

                Which Python data type is
                ordered and changeable?

                </h3>


                <button class="option"
                    onclick="checkAnswer(this, true)">

                    A. List

                </button>


                <button class="option"
                    onclick="checkAnswer(this, false)">

                    B. Tuple

                </button>


                <button class="option"
                    onclick="checkAnswer(this, false)">

                    C. Set

                </button>


                <button class="option"
                    onclick="checkAnswer(this, false)">

                    D. Frozen Set

                </button>


                <div id="answer">

                </div>

            </div>

            `

        );

    }


    if (type === "coding") {

        openModal(

            "⌨️ Coding Practice",

            `

            <div class="question">

                <h3>

                Write a Python program to check
                whether a number is even or odd.

                </h3>


                <textarea

                    id="code-input"

                    placeholder="Write your Python code here...">

                </textarea>


                <button class="purple-button"

                    onclick="reviewCode()">

                    🤖 Ask AI to Review

                </button>


                <div id="code-result">

                </div>

            </div>

            `

        );

    }


    if (type === "interview") {

        openModal(

            "🎤 AI Mock Interview",

            `

            <div class="question">

                <h3>

                Tell me about yourself.

                </h3>


                <textarea

                    id="interview-input"

                    placeholder="Type your answer here...">

                </textarea>


                <button class="purple-button"

                    onclick="reviewInterview()">

                    🤖 Get AI Feedback

                </button>


                <div id="interview-result">

                </div>

            </div>

            `

        );

    }

}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(button, correct) {


    const answer =

        document.getElementById("answer");


    if (correct) {

        answer.innerHTML = `

            <div class="ai-response">

                ✅ Correct!

                <br><br>

                Excellent work.
                Keep practicing to improve
                your placement readiness.

            </div>

        `;

        button.style.borderColor =

            "#49b878";

    }

    else {

        answer.innerHTML = `

            <div class="ai-response">

                ❌ Not quite.

                <br><br>

                🤖 AI Hint:
                Try calculating the percentage
                step by step.

            </div>

        `;

    }

}


// ===============================
// CODE REVIEW
// ===============================

function reviewCode() {


    const code =

        document.getElementById(

            "code-input"

        ).value;


    const result =

        document.getElementById(

            "code-result"

        );


    if (code.trim() === "") {

        result.innerHTML = `

            <div class="ai-response">

                🤖 Please write your code first.

            </div>

        `;

        return;

    }


    if (

        code.includes("if") &&

        code.includes("%")

    ) {

        result.innerHTML = `

            <div class="ai-response">

                🤖 AI Review:

                <br><br>

                ✅ Your approach looks correct.

                <br><br>

                💡 Tip:
                Use int() to convert
                user input into a number.

            </div>

        `;

    }

    else {

        result.innerHTML = `

            <div class="ai-response">

                🤖 Try using the modulo operator %

                to check whether the remainder is 0.

            </div>

        `;

    }

}


// ===============================
// INTERVIEW REVIEW
// ===============================

function reviewInterview() {


    const answer =

        document.getElementById(

            "interview-input"

        ).value;


    const result =

        document.getElementById(

            "interview-result"

        );


    if (answer.trim() === "") {

        result.innerHTML = `

            <div class="ai-response">

                🤖 Please write your answer first.

            </div>

        `;

        return;

    }


    result.innerHTML = `

        <div class="ai-response">

            🤖 AI Interview Feedback:

            <br><br>

            ✅ Good attempt!

            <br><br>

            Include these points:

            <br>

            • Your education

            <br>

            • Your technical skills

            <br>

            • Your project

            <br>

            • Your career goal

            <br><br>

            ⭐ Recommended structure:

            Present → Skills → Project → Goal

        </div>

    `;

}


// ===============================
// PROFILE
// ===============================

function showProfile() {


    openModal(

        "👤 My Profile",

        `

        <div class="question">

            <h3>
                Student Profile
            </h3>

            <br>

            👤 Name: Sindhu

            <br><br>

            🎓 Status: Final Year Student

            <br><br>

            💼 Target Role: Python Developer

            <br><br>

            🐍 Primary Skill: Python

            <br><br>

            🎯 Readiness: 68%

        </div>

        `

    );

}


// ===============================
// PROGRESS
// ===============================

function showProgress() {


    openModal(

        "📊 My Progress",

        `

        <div class="question">

            <h3>
                Your Preparation Progress
            </h3>

            <br>

            🎯 Placement Readiness: 68%

            <br><br>

            🔥 Current Streak: 7 Days

            <br><br>

            ✅ Questions Solved: 124

            <br><br>

            💻 Coding Problems: 32

            <br><br>

            🎤 Mock Interviews: 5

        </div>

        `

    );

}


// ===============================
// MENU SECTION
// ===============================

function showSection(section, button) {


    document

        .querySelectorAll(".menu-item")

        .forEach(item => {

            item.classList.remove("active");

        });


    button.classList.add("active");

            }
