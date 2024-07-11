import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({              //to handle middlewares
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))  //to handle json data
app.use(express.urlencoded({extended:true,limit:"16kb"})) //to handle URLs
app.use(express.static("public"))  //to handle public files like photos
app.use(cookieParser())  //to handle cookies

//+++++++++ Routes Import +++++++++++
import userRouter from "./routes/user.routes.js"
//+++++++++ Router Declaration ++++++
app.use("/api/v1/users",userRouter)

//http://localhost:8000/api/v1/users/register

export {app}