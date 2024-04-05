import express  from "express"
import path from "path";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectionToMongoDB.js"
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
const __dirname = path.resolve();

const  port = process.env.PORT || 5000
dotenv.config()

app.use(express.json())  // use to parse the incoming  request json from req.body
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));


// all routes to index file from frontend
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port,()=>{
    connectToMongoDB()
    console.log(`Port listing on ${port}`)
})