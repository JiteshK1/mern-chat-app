MERN Chat Application with Socket.IO

This project is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time communication.
Table of Contents

    Overview
    Features
    Tech Stack
    Installation
    Available Scripts
    Project Structure
    Environment Variables
    Screenshots
    License

Overview

The MERN Chat App allows users to communicate with each other in real-time. It leverages the power of Socket.IO for seamless WebSocket communication. The backend handles user authentication, message persistence, and real-time updates, while the frontend provides an interactive UI for chat functionality.
Features

    Real-time messaging using Socket.IO.
    User authentication with JWT.
    Responsive and interactive UI built with React and TailwindCSS.
    State management using Zustand.
    Backend API built with Express.js and MongoDB.
    Efficient development setup using Vite.
    Secure communication with bcrypt and JWT.

Tech Stack
Frontend:

    React: For building the user interface.
    Tailwind CSS & DaisyUI: For styling and components.
    React Router: For routing between pages.
    Zustand: For state management.
    Socket.IO Client: For real-time communication.

Backend:

    Node.js & Express.js: For building the server.
    MongoDB & Mongoose: For database management.
    Socket.IO: For WebSocket-based communication.
    JWT: For user authentication.
    Bcrypt.js: For password hashing.
    Dotenv: For environment variable management.

Installation
Prerequisites:

    Node.js (v18+)
    MongoDB (installed and running)

Steps to Set Up the Project:

    Clone the Repository:

git clone <repository-url>
cd <project-folder>

Install Backend Dependencies:

npm install

Install Frontend Dependencies:

cd frontend
npm install

Configure Environment Variables:

    Create a .env file in the backend folder.
    Add the following variables:

    PORT=5000
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>

Start the Application:

    Start the backend server:

npm run server

Start the frontend:

        cd frontend
        npm run dev

    Open the application in your browser at http://localhost:5173 (default Vite port).

Available Scripts
Backend Scripts:

    npm run server: Starts the backend with Nodemon.
    npm start: Starts the backend without Nodemon.
    npm run build: Installs all dependencies for both frontend and backend, then builds the frontend.

Frontend Scripts:

    npm run dev: Runs the frontend in development mode with Vite.
    npm run build: Builds the frontend for production.
    npm run preview: Previews the production build.
    npm run lint: Runs ESLint for code linting.

Project Structure

root/
│
├── backend/
│   ├── server.js            # Entry point for the backend server
│   ├── config/              # Configuration files (e.g., MongoDB)
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   └── .env                 # Environment variables
│
├── frontend/
│   ├── src/                 # React application source files
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Application pages
│   │   ├── store/           # Zustand state management
│   │   └── App.jsx          # Root component
│   ├── public/              # Static files
│   ├── index.html           # HTML template
│   └── tailwind.config.js   # Tailwind CSS configuration
│
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation

Environment Variables

Ensure the following environment variables are set in the .env file in the backend directory:

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
