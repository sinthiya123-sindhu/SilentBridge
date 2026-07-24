// ================= TEXT ANSWER =================

function submitTextAnswer() {

    let answer =
        document
            .getElementById("userAnswer")
            .value
            .trim();

    let lowerAnswer =
        answer.toLowerCase();

    let words =
        answer
            .split(/\s+/)
            .filter(word => word.length > 0);


    // BASIC VALIDATION

    if (words.length < 5) {

        showFeedback(
            "⚠️ Please write a complete answer with more details.",
            false
        );

        return;

    }


    // ================= CODING VALIDATION =================

    if (currentType === "coding") {

        let question =
            codingQuestions[currentQuestion].toLowerCase();


        // ================= EVEN OR ODD =================

        if (
            question.includes("even or odd")
        ) {

            let correctCode = `n = int(input("Enter a number: "))

if n % 2 == 0:
    print("Even")
else:
    print("Odd")`;


            let correctPattern =
                /int\s*\(\s*input\s*\(/.test(lowerAnswer) &&

                /%\s*2\s*==\s*0/.test(lowerAnswer) &&

                /\bif\b/.test(lowerAnswer) &&

                /\belse\b/.test(lowerAnswer) &&

                /print\s*\(\s*["']even["']\s*\)/.test(lowerAnswer) &&

                /print\s*\(\s*["']odd["']\s*\)/.test(lowerAnswer);


            if (correctPattern) {

                score++;

                showFeedback(
                    "✅ Correct! Your Python logic is correct. Excellent work! 🎉",
                    true
                );

            } else {

                showFeedback(
                    `
                    ❌ Your code is incorrect.

                    <br><br>

                    <b>✅ Correct Python Code:</b>

                    <pre>${correctCode}</pre>

                    <br>

                    💡 The program must:
                    <br>
                    1. Get a number from the user
                    <br>
                    2. Check whether it is divisible by 2
                    <br>
                    3. Print Even or Odd
                    `,
                    false
                );

                return;

            }

        }


        // ================= REVERSE STRING =================

        else if (
            question.includes("reverse a string")
        ) {

            let correctCode =
`text = input("Enter a string: ")

reverse = text[::-1]

print(reverse)`;


            let correctPattern =
                /input\s*\(/.test(lowerAnswer) &&

                /\[\s*::\s*-1\s*\]/.test(lowerAnswer) &&

                /print\s*\(/.test(lowerAnswer);


            if (correctPattern) {

                score++;

                showFeedback(
                    "✅ Correct! Your string reversal logic is correct. 🎉",
                    true
                );

            } else {

                showFeedback(
                    `
                    ❌ Your code is incorrect.

                    <br><br>

                    <b>✅ Correct Python Code:</b>

                    <pre>${correctCode}</pre>
                    `,
                    false
                );

                return;

            }

        }


        // ================= PRIME NUMBER =================

        else if (
            question.includes("prime")
        ) {

            let correctCode =
`n = int(input("Enter a number: "))

if n > 1:
    for i in range(2, n):
        if n % i == 0:
            print("Not Prime")
            break
    else:
        print("Prime")
else:
    print("Not Prime")`;


            let correctPattern =
                /int\s*\(\s*input\s*\(/.test(lowerAnswer) &&

                /\bfor\b/.test(lowerAnswer) &&

                /\brange\s*\(/.test(lowerAnswer) &&

                /%\s*.*==\s*0/.test(lowerAnswer) &&

                /\bif\b/.test(lowerAnswer);


            if (correctPattern) {

                score++;

                showFeedback(
                    "✅ Correct! Your prime number logic is correct. 🎉",
                    true
                );

            } else {

                showFeedback(
                    `
                    ❌ Your code is incorrect.

                    <br><br>

                    <b>✅ Correct Python Code:</b>

                    <pre>${correctCode}</pre>
                    `,
                    false
                );

                return;

            }

        }


        // ================= FACTORIAL =================

        else if (
            question.includes("factorial")
        ) {

            let correctCode =
`n = int(input("Enter a number: "))

factorial = 1

for i in range(1, n + 1):
    factorial = factorial * i

print(factorial)`;


            let correctPattern =
                /int\s*\(\s*input\s*\(/.test(lowerAnswer) &&

                /factorial\s*=\s*1/.test(lowerAnswer) &&

                /\bfor\b/.test(lowerAnswer) &&

                /range\s*\(/.test(lowerAnswer) &&

                /print\s*\(/.test(lowerAnswer);


            if (correctPattern) {

                score++;

                showFeedback(
                    "✅ Correct! Your factorial logic is correct. 🎉",
                    true
                );

            } else {

                showFeedback(
                    `
                    ❌ Your code is incorrect.

                    <br><br>

                    <b>✅ Correct Python Code:</b>

                    <pre>${correctCode}</pre>
                    `,
                    false
                );

                return;

            }

        }


        // ================= OTHER CODING QUESTIONS =================

        else {

            let codingKeywords = [

                "print",
                "if",
                "else",
                "for",
                "while",
                "def",
                "return",
                "input",
                "int",
                "range"

            ];


            let foundKeywords =
                codingKeywords.filter(
                    keyword =>
                        lowerAnswer.includes(keyword)
                );


            let hasProgrammingSyntax =
                lowerAnswer.includes("=") ||
                lowerAnswer.includes("(") ||
                lowerAnswer.includes(":");


            if (
                foundKeywords.length < 2 ||
                !hasProgrammingSyntax
            ) {

                showFeedback(
                    `
                    ❌ This is not a proper Python solution.

                    <br><br>

                    Please write the correct logic and Python code.
                    `,
                    false
                );

                return;

            }


            score++;

            showFeedback(
                "✅ Good! Your answer contains programming logic. 🎉",
                true
            );

        }

    }


    // ================= INTERVIEW VALIDATION =================

    else if (
        currentType === "interview"
    ) {

        let keywords = [

            "student",
            "education",
            "college",
            "skill",
            "python",
            "sql",
            "html",
            "css",
            "javascript",
            "project",
            "experience",
            "goal",
            "strength",
            "learn",
            "company",
            "career"

        ];


        let foundKeywords =
            keywords.filter(
                keyword =>
                    lowerAnswer.includes(keyword)
            );


        if (
            foundKeywords.length < 2
        ) {

            showFeedback(
                `
                ❌ Please provide more details.

                <br><br>

                💡 Include your:
                <br>
                • Education
                <br>
                • Skills
                <br>
                • Projects
                <br>
                • Strengths
                <br>
                • Career goals
                `,
                false
            );

            return;

        }


        score++;

        showFeedback(
            "✅ Good answer! Your response contains relevant details. 🎉",
            true
        );

    }


    // SAVE ONLY CORRECT ANSWERS

    saveProgress();


    document
        .getElementById("nextButton")
        .classList
        .remove("hidden");

                }
