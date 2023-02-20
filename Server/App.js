//Basic Lib Import
const express = require("express");
const Router = require("./Src/Router/Api");
const App = new express();
const BodyParser = require("body-parser");


// Security Middleware Lib Import
const RateLimiter = require("express-rate-limit");
const Helmet = require("helmet")
const MongoSanitize = require("express-mongo-sanitize");
const Xss = require("xss-clean");
const Hpp = require("hpp");
const Cors = require("cors");


// Database Configuration
const Mongose = require("mongoose");


// Security Middleware Implement 
App.use(Cors())
App.use(Helmet())
App.use(MongoSanitize())
App.use(Xss())
App.use(Hpp())


// Body Parser Implement 
App.use(BodyParser.json())


// Request Rate Limite 
const Limiter =  RateLimiter(
        {
            windowMs: 15 * 60 * 1000, // 15 Minute
            max: 3000 // 3000 request
        }
    )
App.use(Limiter)



// Mongo DB Database Connection 
let Url = "mongodb://127.0.0.1:27017/Task_Manager"  // ToDo হচ্ছে মঙ্গোডিভি ডাটাবেসের নাম, যে আগেই তৈরি করে নিতে হবে। 
// let OPTION = {username:"", password:""}
// Mongose.connect(Url, OPTION(error)=>{
//     console.log("Mongo DB Datbase Connection Success");
//     console.log(error)
// })
Mongose.connect(Url,(error)=>{
    console.log("Mongo DB Datbase Connection Success");
    console.log(error)
})


// API Create, Or Routing Implement
App.use("/api/v1", Router)


// Undefine Route Or Undefine API 
App.use("*",(req, res)=>{
    res.status(404)
    res.json(
        {
            Status: "Not Found",
            Data:"Undefine Route Or Rong API"
        }
    )
})



module.exports = App;


//class 5 User Registration