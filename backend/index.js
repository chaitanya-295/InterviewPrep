import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
dotenv.config()

const app = express()

const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDb()
})

