// const form = document.getElementById("message-form");
// const input = document.getElementById("message-input");
// const messages = document.getElementById("messages");

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // stop page refresh

//     const text = input.value.trim();
//     if (text === "") return;

//     const message = document.createElement("div");
//     message.classList.add("message");
//     message.textContent = text;

//     messages.appendChild(message);

//     input.value = "";
// });

const form = document.getElementById("message-form");
const input = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");

// Load messages on page load
async function loadMessages() {
    const res = await fetch("http://localhost:3000/messages");
    const data = await res.json();

    messagesDiv.innerHTML = ""; // clear old messages

    data.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("message");
        div.textContent = msg.text;
        messagesDiv.appendChild(div);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    // Send message to backend
    await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    input.value = "";
    loadMessages(); // refresh messages
});

// Load messages when the page opens
loadMessages();