const form = document.getElementById("message-form");
const nameInput = document.getElementById("name-input");
const input = document.getElementById("message-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    const name = nameInput.value.trim();
    const text = input.value.trim();
    if (name === "" || text === "") return;

    const message = document.createElement("div");
    message.classList.add("message");

    const messageText = document.createElement("div");
    messageText.textContent = text;

    const messageName = document.createElement("div");
    messageName.classList.add("message-name");
    messageName.textContent `- ${name}`;

    message.appendChild(messageText);
    message.appendChild(messageName);

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;

    nameInput.value = "";
    messageIn
});