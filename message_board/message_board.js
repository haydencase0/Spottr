// 1. DOM ELEMENTS
const form = document.getElementById("message-form");
const nameInput = document.getElementById("name-input");
const input = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");


// 2. LOAD MESSAGES FROM BACKEND
async function loadMessages() {
    const res = await fetch("http://localhost:3000/messages");
    const data = await res.json();
    renderMessages(data);
}


// 3. RENDER MESSAGES + BUTTONS + REPLIES
function renderMessages(data) {
    messagesDiv.innerHTML = "";

    data.forEach(msg => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("message");

        wrapper.innerHTML = `
            <p>${msg.text}</p>
            <small>${new Date(msg.timestamp).toLocaleString()}</small>

            <div class="actions">
                <button class="delete-btn" data-id="${msg.id}">Delete</button>
                <button class="edit-btn" data-id="${msg.id}">Edit</button>
                <button class="reply-btn" data-id="${msg.id}">Reply</button>
            </div>

            <div class="replies"></div>
        `;

        // Render replies
        const repliesDiv = wrapper.querySelector(".replies");
        msg.replies.forEach(r => {
            const replyEl = document.createElement("div");
            replyEl.classList.add("reply");
            replyEl.innerHTML = `
                <p>${r.text}</p>
                <small>${new Date(r.timestamp).toLocaleString()}</small>
            `;
            repliesDiv.appendChild(replyEl);
        });

        messagesDiv.appendChild(wrapper);
    });
}


// 4. SUBMIT NEW MESSAGE
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const text = input.value.trim();
    if (text === "") return;

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