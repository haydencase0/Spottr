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

        (msg.replies || []).forEach((reply, replyIndex) => {
            const replyEl = document.createElement("div");
            replyEl.classList.add("reply");

            replyEl.innerHTML = `
                <p>${reply.text}</p>
                <div class="message-name">— ${reply.name}</div>
                <button class="delete-reply-btn" 
                        data-message-index="${index}" 
                        data-reply-index="${replyIndex}">
                    Delete
                </button>
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
    if (name === "" || text === "") return;

    const newMessage = {
        name: name,
        text: text,
        timestamp: new Date().toISOString(),
        replies: []
    };

    // Get existing messages
    const stored = JSON.parse(localStorage.getItem("messages")) || [];

    // Add new one
    stored.push(newMessage);

    // Save back to localStorage
    localStorage.setItem("messages", JSON.stringify(stored));

    // Re-render
    renderLocalMessages();

    nameInput.value = "";
    input.value = "";
});

function renderLocalMessages() {
    messagesDiv.innerHTML = "";

    const stored = JSON.parse(localStorage.getItem("messages")) || [];

    stored.forEach((msg, index) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("message");

        wrapper.innerHTML = `
            <p>${msg.text}</p>
            <div class="message-name">— ${msg.name}</div>
            <small>${new Date(msg.timestamp).toLocaleString()}</small>

            <button class="reply-btn" data-index="${index}">Reply</button>
            <button class="delete-btn" data-index="${index}">Delete</button>

            <div class="replies"></div>
        `;
        const repliesDiv = wrapper.querySelector(".replies");

        (msg.replies || []).forEach((reply, replyIndex) => {
            const replyEl = document.createElement("div");
            replyEl.classList.add("reply");

            replyEl.innerHTML = `
                <p>${reply.text}</p>
                <div class="message-name">— ${reply.name}</div>

                <button class="delete-reply-btn"
                        data-message-index="${index}"
                        data-reply-index="${replyIndex}">
                    Delete
                </button>
            `;

            repliesDiv.appendChild(replyEl);
        });

        messagesDiv.appendChild(wrapper);
    });
}

messagesDiv.addEventListener("click", (e) => {
    const stored = JSON.parse(localStorage.getItem("messages")) || [];

    // DELETE
    if (e.target.classList.contains("delete-btn")) {
        const index = e.target.getAttribute("data-index");

        stored.splice(index, 1);
        localStorage.setItem("messages", JSON.stringify(stored));
        renderLocalMessages();
    }

    // REPLY
    if (e.target.classList.contains("reply-btn")) {
        const index = e.target.getAttribute("data-index");

        const replyText = prompt("Enter your reply:");
        const replyName = prompt("Your name:");

        if (!replyText || !replyName) return;

        const reply = {
            name: replyName,
            text: replyText,
            timestamp: new Date().toISOString()
        };

        stored[index].replies.push(reply);

        localStorage.setItem("messages", JSON.stringify(stored));
        renderLocalMessages();
    }

    // DELETE REPLY
    if (e.target.classList.contains("delete-reply-btn")) {
        const messageIndex = e.target.getAttribute("data-message-index");
        const replyIndex = e.target.getAttribute("data-reply-index");

        const stored = JSON.parse(localStorage.getItem("messages")) || [];

        stored[messageIndex].replies.splice(replyIndex, 1);

        localStorage.setItem("messages", JSON.stringify(stored));
        renderLocalMessages();
    }
});

// run on page load
renderLocalMessages();