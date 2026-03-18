const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = []; // temporary storage

// Get all messages
app.get("/messages", (req, res) => {
    res.json(messages);
});

// Post a new message
app.post("/messages", (req, res) => {
    const { text } = req.body;

    if (!text || text.trim() === "") {
        return res.status(400).json({ error: "Message cannot be empty" });
    }

    const newMessage = {
        id: Date.now(),
        text
    };

    messages.push(newMessage);
    res.json(newMessage);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});