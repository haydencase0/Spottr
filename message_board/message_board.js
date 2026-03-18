const form = document.getElementById("message-form");
const input = document.getElementById("message-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    const text = input.value.trim();
    if (text === "") return;

    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = text;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;

    input.value = "";
});