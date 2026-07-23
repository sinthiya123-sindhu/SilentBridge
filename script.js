let currentMessage = "";


/* Start Communication */

function startCommunication() {

    document
        .getElementById("communication")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Start Camera */

function startCamera() {

    const status =
        document.getElementById("cameraStatus");

    status.innerText =
        "Camera started 🎥 — Ready to detect signs!";

    alert(
        "Camera demo started! 🤟\n\nAI is ready to understand sign language."
    );

}


/* Detect Sign */

function detectSign(message) {

    currentMessage = message;

    document
        .getElementById("resultText")
        .innerText = message;

    document
        .getElementById("detectedText")
        .innerText = message;

}


/* Speak Text */

function speakText() {

    if (currentMessage === "") {

        alert("Please select a sign first 🤟");

        return;
    }

    const speech =
        new SpeechSynthesisUtterance(currentMessage);

    window.speechSynthesis.speak(speech);

}


/* Change Mode */

function changeMode(mode) {

    const buttons =
        document.querySelectorAll(".mode-buttons button");

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    if (mode === "sign") {

        buttons[0].classList.add("active");

        document
            .getElementById("resultText")
            .innerText =
            "Show a sign to begin 🤟";

    }

    else {

        buttons[1].classList.add("active");

        document
            .getElementById("resultText")
            .innerText =
            "Speak something to begin 🎤";

    }

}


/* Scroll */

function scrollToSection(sectionId) {

    document
        .getElementById(sectionId)
        .scrollIntoView({
            behavior: "smooth"
        });

}
