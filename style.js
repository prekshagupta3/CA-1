
const form = document.getElementById("form");
const input = document.getElementById("input");
const chat = document.getElementById("chat");
const welcome = document.getElementById("welcome");

function addMessage(text, className) {
    const message = document.createElement("div");
    message.className = "message " + className;
    message.textContent = text;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

function getReply(text) {
    const message = text.toLowerCase().trim();

    if (message.includes("hello") || message === "hi") {
        return "Hello! 👋 How can I help you?";
    }

    if (message.includes("how are you")) {
        return "I'm fine, thank you! 😊 How are you?";
    }

    if (message.includes("your name")) {
        return "I'm Mini ChatGPT, your simple chatbot! 🤖";
    }

    if (message.includes("html")) {
        return "HTML is used to create the structure of a website. It uses elements such as headings, paragraphs, images, and links.";
    }

    if (message.includes("css")) {
        return "CSS is used to style websites with colors, layouts, spacing, and fonts.";
    }

    if (message.includes("javascript")) {
        return "JavaScript makes websites interactive. It can respond to clicks, validate forms, and update page content.";
    }

    if (message.includes("joke")) {
        return "Why do programmers love dark mode? Because light attracts bugs! 😄";
    }

    if (message.includes("thank")) {
        return "You're welcome! 😊";
    }

    if (message.includes("bye")) {
        return "Goodbye! Have a great day! 👋";
    }

    return "I'm a simple chatbot. Try asking me about HTML, CSS, JavaScript, or say hello! 😊";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userText = input.value.trim();

    if (userText === "") {
        return;
    }

    welcome.hidden = true;

    addMessage(userText, "user");

    input.value = "";
    input.style.height = "auto";

    setTimeout(function () {
        const reply = getReply(userText);
        addMessage(reply, "bot");
    }, 300);
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
    }
});

document.querySelectorAll(".suggestions button").forEach(function (button) {
    button.addEventListener("click", function () {
        input.value = button.textContent;
        form.requestSubmit();
    });
});

document.getElementById("new-chat").addEventListener("click", function () {
    chat.querySelectorAll(".message").forEach(function (message) {
        message.remove();
    });

    welcome.hidden = false;
    input.value = "";
    input.focus();
});

document.getElementById("theme").addEventListener("click", function () {
    document.body.classList.toggle("light");
});

document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("open");
});
