const Mongose = require("mongoose");
const DataSchema=Mongose.Schema({
    Email:{type:String, unique:true},
    FirstName:{type:String},
    LasttName:{type:String},
    Mobile:{type:String},
    Password:{type:String},
    Photo:{type:String},
    CreateDate:{type:Date, default:Date.now()},
}, {versionKey:false});
const UserModel = Mongose.model("Users",DataSchema);
module.exports = UserModel;