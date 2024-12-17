# MERN Chat Application with Socket.IO

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Environment Setup](#environment-variables)
7. [Running the Application](#running-the-application)
8. [Project Structure](#project-structure)
9. [Available Scripts](#available-scripts)
10. [Contributing](#contributing)

## Overview

The **MERN Chat App** is a real-time communication platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. This application provides a seamless, interactive messaging experience with robust user authentication and responsive design.

## Features

- **Real-time Messaging**: Instant communication using Socket.IO
- **User Authentication**: Secure login and registration with JWT
- **Responsive UI**: Mobile-friendly design with Tailwind CSS
- **State Management**: Efficient client-side state handling with Zustand
- **Secure Communication**: Password hashing with bcrypt
- **Scalable Backend**: RESTful API with Express.js and MongoDB

## Tech Stack

### Frontend
- **React.js**: User interface library
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library
- **React Router**: Client-side routing
- **Zustand**: State management
- **Socket.IO Client**: Real-time communication

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **Socket.IO**: WebSocket communication
- **JSON Web Token (JWT)**: Authentication
- **Bcrypt.js**: Password encryption
- **Dotenv**: Environment variable management

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0.0 or later)
- **MongoDB** (version 4.4 or later)
- **npm** or **Yarn**

## Installation

1. **Clone the Repository**
```bash
git clone git@github.com:JiteshK1/mern-chat-app.git
cd mern-chat-app
```

2. **Install Dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## Environment Variables

Create `.env` files in both `backend` and `frontend` directories:

### Backend `.env`
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-chat-db
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### Frontend `.env`
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Running the Application

1. **Start MongoDB**
```bash
# Ensure MongoDB is running
mongod
```

2. **Start Backend Server**
```bash
cd backend
npm run start
```

3. **Start Frontend Development Server**
```bash
cd frontend
npm run dev
```

## Project Structure
```
mern-chat-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   ├── hooks/
    │   ├── utils/
    │   └── App.jsx
    └── vite.config.js
```

## Available Scripts

### Backend
- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run backend tests

### Frontend
- `npm run dev`: Start the development server
- `npm run build`: Create a production build
- `npm run preview`: Preview the production build
- `npm test`: Run frontend tests



## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

**Happy Chatting! 🚀**
