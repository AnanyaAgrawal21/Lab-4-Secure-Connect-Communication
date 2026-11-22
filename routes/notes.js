
const express = require("express");
const fs = require("fs");
const path = require("path");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

const notesFile = path.join(__dirname, "../data/notes.json");

function readNotes() {
    return JSON.parse(fs.readFileSync(notesFile, "utf8"));
}

function saveNotes(notes) {
    fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
}

// All notes routes are protected
router.use(authenticateToken);

// Create note
router.post("/", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    const notes = readNotes();

    const newNote = {
        id: Date.now().toString(),
        title,
        content,
        owner: req.user.id,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);
    saveNotes(notes);

    res.status(201).json({
        message: "Note created successfully",
        note: newNote
    });
});

// Get user's notes
router.get("/", (req, res) => {
    const notes = readNotes();

    const userNotes = notes.filter(
        note => note.owner === req.user.id
    );

    res.json(userNotes);
});

// Update note
router.put("/:id", (req, res) => {
    const notes = readNotes();

    const note = notes.find(
        note => note.id === req.params.id &&
                note.owner === req.user.id
    );

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    note.updatedAt = new Date().toISOString();

    saveNotes(notes);

    res.json({
        message: "Note updated successfully",
        note
    });
});

// Delete note
router.delete("/:id", (req, res) => {
    let notes = readNotes();

    const initialLength = notes.length;

    notes = notes.filter(
        note => !(note.id === req.params.id &&
                  note.owner === req.user.id)
    );

    if (notes.length === initialLength) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    saveNotes(notes);

    res.json({
        message: "Note deleted successfully"
    });
});

module.exports = router;
