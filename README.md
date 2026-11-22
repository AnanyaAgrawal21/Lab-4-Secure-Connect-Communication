# 🔐 Secure Connect and Communication Platform

## Lab Assignment 4 – Web Dev III

A secure server-side communication platform developed using **Node.js and Express.js**. This project demonstrates authentication, authorization, secure notes management, and real-time communication using Socket.IO.

## 📌 Project Overview

The Secure Connect and Communication Platform provides a backend application where users can register, log in, access protected resources, manage personal notes, and communicate in real time.

The project focuses on backend security, JWT-based authentication, password hashing, and event-driven communication.

## 🎯 Objectives

- Implement user Signup and Login.
- Secure passwords using bcrypt.
- Generate and verify JWT tokens.
- Implement protected routes.
- Develop a secure Notes API with CRUD operations.
- Enable real-time communication using Socket.IO.
- Implement event-driven functionality using EventEmitter.
- Manage environment variables using dotenv.

## 🛠️ Technologies Used

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcrypt
- dotenv
- Socket.IO
- Node.js EventEmitter
- HTML and CSS
- JSON-based local data storage

## 📂 Project Structure

```text
Lab4_Secure_Connect/
│
├── server.js
├── package.json
├── .env
├── .gitignore
│
├── middleware/
│   └── auth.js
│
├── routes/
│   ├── auth.js
│   └── notes.js
│
├── public/
│   └── chat.html
│
└── data/
    ├── users.json
    └── notes.json
```

## ✨ Features

### 1. User Authentication
- User Signup and Login
- Password hashing using bcrypt
- JWT token generation

### 2. Protected Routes
- Token-based authentication
- Access control using JWT middleware
- Unauthorized requests are blocked

### 3. Secure Notes API
- Create notes
- View personal notes
- Update notes
- Delete notes
- User-specific note access

### 4. Real-Time Chat
- Bidirectional communication using Socket.IO
- Join chat rooms
- Send and receive messages in real time

### 5. Event-Driven Communication
- Node.js EventEmitter
- Logs user activity when messages are sent

## ⚙️ Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/AnanyaAgrawal21/Lab4-Secure-Connect.git
```

### Step 2: Navigate to the Project Folder

```bash
cd Lab4-Secure-Connect
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
JWT_SECRET=your_secret_key
```

### Step 5: Start the Server

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login and generate JWT |
| GET | `/api/profile` | Access protected profile |
| POST | `/api/notes` | Create a note |
| GET | `/api/notes` | Get personal notes |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 💬 Real-Time Chat

Open the chat interface in your browser:

```text
http://localhost:5000/chat.html
```

Enter a username and message to communicate in real time.

## 🔒 Security Features

- Passwords are stored as bcrypt hashes.
- JWT tokens are used for authentication.
- Protected routes require valid tokens.
- Environment variables are used for configuration.
- `.env` and `node_modules` are excluded from GitHub using `.gitignore`.

## 📸 Project Output

The project demonstrates:

- Successful Signup and Login responses
- JWT token generation
- Protected route access
- Notes API operations
- Real-time chat messages
- EventEmitter activity logs

## 👩‍💻 Author

**Ananya Agrawal**

B.Tech – Computer Science and Engineering  
Artificial Intelligence and Machine Learning

## 📚 Course Details

- Course: Web Dev III
- Unit: 4
- Lab: 4
- Assignment: Secure Connect and Communication Platform

---

*Developed as part of the Web Dev III Lab Assignment.*
