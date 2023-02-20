const UserModel = require("../Model/UserModel");


// Registration 
exports.Registration=(Req, Res)=>{
    let ReqBody = Req.body;
    UserModel.create(ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success, Controller to Model", data:Data})
        }
    })
}