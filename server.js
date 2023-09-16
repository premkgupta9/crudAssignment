require("dotenv").config()
const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/User.route.js");
const { connectToDatabase } = require("./config/dbConnection.js");


const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  // user route
connectToDatabase()

app.listen(process.env.PORT,()=>{
   
    console.log("Server Started on PORT NO:",process.env.PORT)
     
})