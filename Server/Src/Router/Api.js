const Express = require("express");
const Router = Express.Router();

//User Controller import 
const UserController = require("../Controller/UsersController");
// Auth Verify Middleware Import 
const AuthVerifyMiddleware = require("../Middleware/AuthVerifyMiddleware");
// Task Controller import 
const TaskController = require("../Controller/TasksController");


// ===================Profile===================== 
//Registration
Router.post("/Registration", UserController.Registration)


//Login User
Router.post("/LoginUser", UserController.LoginUser)


//Profile Update
Router.post("/ProfileUpdate", AuthVerifyMiddleware , UserController.ProfileUpdate)


//Profile Detailas
Router.get("/ProfileDetails", AuthVerifyMiddleware , UserController.ProfileDetails)



// =====================Task===================== 
//Task Create
Router.post("/CreateTask", AuthVerifyMiddleware , TaskController.CreateTask)


//Task Status Update
Router.get("/TaskStatusUpdate/:id/:status", AuthVerifyMiddleware , TaskController.TaskStatusUpdate)


//Task DeleteTask
Router.get("/DeleteTask/:id", AuthVerifyMiddleware , TaskController.DeleteTask)


//List Task By Status
Router.get("/ListTaskByStatus/:status", AuthVerifyMiddleware , TaskController.ListTaskByStatus)



// Total Count Statst by Task
Router.get("/TotalCountStatsTask", AuthVerifyMiddleware , TaskController.TotalCountStatsTask)



// Recover Verify Email setp 1
Router.get("/RecoverVerifyEmail/:email" , UserController.RecoverVerifyEmail)

// Recover Verify OTP setp 2
// Router.get("/RecoverVerifyOTP/:email/:otp" , UserController.RecoverVerifyOTP)
Router.get("/RecoverVerifyOTP/:email/:otp" , UserController.RecoverVerifyOTP)

// Recover Reset Password
Router.post("/RecoverResetPass" , UserController.RecoverResetPass)




module.exports = Router