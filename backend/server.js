import express  from "express"
const app = express()
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectionToMongoDB.js"
import cookieParser from "cookie-parser";

const  port = process.env.PORT || 5000
dotenv.config()

app.use(express.json())  // use to parse the incoming  request json from req.body
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use("/api/users", userRoutes);



// app.get('/',(req,res)=>{
//     res.send("hello world")
// })


app.listen(port,()=>{
    connectToMongoDB()
    console.log(`Port listing on ${port}`)
})