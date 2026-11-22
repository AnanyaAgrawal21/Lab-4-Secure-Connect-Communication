
require("dotenv").config();

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const EventEmitter = require("events");

const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");
const authenticateToken = require("./middleware/auth");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const eventEmitter = new EventEmitter();

app.use(express.json());
app.use(express.static(require("path").join(__dirname, "public")));

app.get("/", (req, res) => {
    res.json({
        message: "Secure Connect Platform is running"
    });
});

app.use("/api/auth", authRoutes);

app.get("/api/profile", authenticateToken, (req, res) => {
    res.json({
        message: "Protected route accessed successfully",
        user: req.user
    });
});

app.use("/api/notes", notesRoutes);

// EventEmitter
eventEmitter.on("userActivity", (message) => {
    console.log("Event:", message);
});

// Socket.IO Chat
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", (room) => {
        socket.join(room);
        console.log(socket.id, "joined room:", room);
    });

    socket.on("chatMessage", (data) => {
        console.log("Chat message:", data.message);

        io.to(data.room).emit("chatMessage", {
            username: data.username,
            message: data.message
        });

        eventEmitter.emit(
            "userActivity",
            `${data.username} sent a message`
        );
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Secure Connect server running on http://localhost:${PORT}`);
});

