const Express = require("express");
const Router = Express.Router();

//UserController import 
const UserController = require("../Controller/UsersController")

//Registration
Router.post("/Registration", UserController.Registration)



module.exports = Router