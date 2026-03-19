// const form = document.getElementById("message-form");
// const input = document.getElementById("message-input");
// const messagesDiv = document.getElementById("messages");

// // Load messages on page load
// async function loadMessages() {
//     const res = await fetch("http://localhost:3000/messages");
//     const data = await res.json();

//     messagesDiv.innerHTML = ""; // clear old messages

//     data.forEach(msg => {
//         const div = document.createElement("div");
//         div.classList.add("message");
//         div.textContent = msg.text;
//         messagesDiv.appendChild(div);
//     });
// }

// form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const text = input.value.trim();
//     if (text === "") return;

//     // Send message to backend
//     await fetch("http://localhost:3000/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text })
//     });

//     messages.scrollTop = messages.scrollHeight;

//     input.value = "";
//     loadMessages(); // refresh messages
// });

// // Load messages when the page opens
// loadMessages();

// 1. DOM ELEMENTS
const form = document.getElementById("message-form");
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

    const text = input.value.trim();
    if (!text) return;

    await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    input.value = "";
    loadMessages();
});


// 5. DELETE / EDIT / REPLY HANDLERS
messagesDiv.addEventListener("click", async (e) => {
    const id = e.target.dataset.id;

    // DELETE
    if (e.target.classList.contains("delete-btn")) {
        await fetch(`http://localhost:3000/messages/${id}`, {
            method: "DELETE"
        });
        loadMessages();
    }

    // EDIT
    if (e.target.classList.contains("edit-btn")) {
        const newText = prompt("Edit your message:");
        if (!newText) return;

        await fetch(`http://localhost:3000/messages/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: newText })
        });

        loadMessages();
    }

    // REPLY
    if (e.target.classList.contains("reply-btn")) {
        const replyText = prompt("Reply:");
        if (!replyText) return;

        await fetch(`http://localhost:3000/messages/${id}/reply`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: replyText })
        });

        loadMessages();
    }
});


// 6. INITIAL LOAD
loadMessages();
