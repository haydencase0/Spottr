const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

// GET all messages
app.get("/messages", (req, res) => {
    res.json(messages);
});

// POST a new message
app.post("/messages", (req, res) => {
    const { text } = req.body;

    if (!text || text.trim() === "") {
        return res.status(400).json({ error: "Message cannot be empty" });
    }

    const newMessage = {
        id: Date.now(),
        text,
        timestamp: new Date().toISOString(),
        replies: []
    };

    messages.push(newMessage);
    res.json(newMessage);
});

// DELETE a message
app.delete("/messages/:id", (req, res) => {
    const id = Number(req.params.id);
    messages = messages.filter(msg => msg.id !== id);
    res.json({ success: true });
});

// EDIT a message
app.put("/messages/:id", (req, res) => {
    const id = Number(req.params.id);
    const { text } = req.body;

    const msg = messages.find(m => m.id === id);
    if (!msg) return res.status(404).json({ error: "Message not found" });

    msg.text = text;
    res.json(msg);
});

// REPLY to a message
app.post("/messages/:id/reply", (req, res) => {
    const id = Number(req.params.id);
    const { text } = req.body;

    const msg = messages.find(m => m.id === id);
    if (!msg) return res.status(404).json({ error: "Message not found" });

    const reply = {
        id: Date.now(),
        text,
        timestamp: new Date().toISOString()
    };

    msg.replies.push(reply);
    res.json(reply);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});