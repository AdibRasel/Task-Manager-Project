const UserModel = require("../Model/UserModel");
const Jwt = require("jsonwebtoken");
const OTPModel = require("../Model/OTPModel");
const SendEmailUtility = require("../utility/SendEmailUtility");
const { updateOne } = require("../Model/OTPModel");


// Registration 
exports.Registration=(Req, Res)=>{
    let ReqBody = Req.body;
    UserModel.create(ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(200).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}



//User Login
exports.LoginUser=(Req, Res)=>{
    let ReqBody = Req.body;
    UserModel.aggregate([
        {$match:ReqBody},
        {$project:{_id:0, Email:1, FirstName:1, LasttName:1,Mobile:1,Photo:1}}
    ],(Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            if(Data.length>0){
                let Payload={exp: Math.floor(Date.now() / 100) + (24*60*60), data:Data[0]["Email"] };
                let Token = Jwt.sign(Payload, "12345");
                Res.status(200).json({status:"Success", Token:Token, data:Data[0]})
            }else{
                Res.status(401).json({status:"Unathorized"})
            }
        }
    })
}


//Profile Details 
exports.ProfileDetails=(Req, Res)=>{
    let email = Req.body["email"];
    UserModel.aggregate([
        {$match:{email:email}},
        {$project:{_id:0, Email:1, FirstName:1, LasttName:1,Mobile:1,Photo:1, Password:1}}
    ],(Err,Data)=>{
        if(Err){
            Res.status(400).json({status:"Faild", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}


// Profile Update 
exports.ProfileUpdate=(Req, Res)=>{
    let Email = Req.headers["email"];
    let ReqBody = Req.body;
    UserModel.updateOne({email:Email}, ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}



// Recover Verify Email Setep 1
exports.RecoverVerifyEmail= async (Req, Res)=>{

    let email = Req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000)

    try{
    // Email Account Qury
    let UserCount = (await UserModel.aggregate([{$match:{Email:email}}, {$count: "total"} ]))
        if(UserCount.length>0){
            // OTP Insert
            let CreateOTP = await OTPModel.create({email:email, otp: OTPCode})
            // Email Send 
            let SendEmail = await SendEmailUtility(email, "Your PIN Code is = " + OTPCode, "Task Manager PIN Verification")
            Res.status(200).json({status:"Success", data:SendEmail, email:email, OtpCode: OTPCode, data:CreateOTP})
        }else{
            Res.status(200).json({status:"Faild", data : "No User Found"})
        }


    }catch(e){
        Res.status(200).json({status:"Faild", data:e})
    }
}


// Recover Verify OTP setep 2
exports.RecoverVerifyOTP= async (Req, Res)=>{
    let Email = Req.params.email;
    let OTPCode = Req.params.otp;
    // let Email = Req.body["email"];
    // let OTPCode = Req.body["otp"];
    let status = 0;
    let statusUpdate=1;


    try{
        let OTPCount = (await OTPModel.aggregate([{$match: {email: Email, otp: OTPCode, status:status}}, {$count: "total"}]))

        if(OTPCount.length>0){
            let OTPUpdate = await OTPModel.updateOne({email: Email, otp: OTPCode, status:status}, {
                email: Email,
                otp: OTPCode,
                status:statusUpdate
            })
            Res.status(200).json({status:"Success", data:OTPUpdate})
        }else{
            Res.status(200).json({status:"Faild from else block", data:"Invalid OTP Code", datatwo:OTPUpdate})
        }

    }catch(e){
        Res.status(200).json({status:"faild", data:e})
    }


    // Query Email, OTPCode, - -->Result
    // Query Email, OTPCode, - -- 1 > Update

} 





//Recover Reset Pass step 3
exports.RecoverResetPass = async (Req, Res)=>{

    let email = Req.body["email"];
    let OTPCode = Req.body["otp"];
    let NewPass = Req.body["Password"]
    let statusUpdate = 1;

    try{
        let OTPUsedCount = await OTPModel.aggregate([{$match:{email:email, otp: OTPCode, status: statusUpdate}}, {$count: "total"} ])
        if(OTPUsedCount.length>0){
            let PassUpdate = await UserModel.updateOne({email:email},{
                Password: NewPass
            })
            Res.status(200).json({status: "Success", data: PassUpdate})
        }else{
            Res.status(200).json({status: "Success", data: "Invalid OTP Code"})
        }
    }catch(e){
        Res.status(200).json({status:"Faild", data:e})
    }

}