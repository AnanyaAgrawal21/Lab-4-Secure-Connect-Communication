const { io } = require("socket.io-client");

const token = process.argv[2];

if (!token) {
  console.log("Please provide your login token");
  process.exit(1);
}

const socket = io("http://localhost:5000", {
  auth: { token }
});

socket.on("connect", () => {
  console.log("Connected to chat!");

  socket.emit("joinRoom", "general");

  setTimeout(() => {
    socket.emit("chatMessage", {
      room: "general",
      message: "Hello from Ananya!"
    });
  }, 1000);
});

socket.on("chatMessage", (data) => {
  console.log(data.username + ": " + data.message);
});

socket.on("connect_error", (error) => {
  console.log("Error:", error.message);
});
