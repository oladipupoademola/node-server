//importing express
const express = require("express")

//initializing express and storing it in a variable called app
const app = express()

//port
require('dotenv').config()
const PORT = process.env.PORT || 5050

//import database connection
const connectDB = require("./database/db")

//execute database connection
connectDB()



//import user route
const userRoute = require("./routes/userRoute")

//middleware
app.use(express.json())

//Using the user route
app.use("/api/users", userRoute)


//testing general route
app.get("/api", (req, res) => {
    res.json({message: "welcome to my server"})
})




//listen for request
app.listen(PORT, () => {
    console.log("server started successfully");
})