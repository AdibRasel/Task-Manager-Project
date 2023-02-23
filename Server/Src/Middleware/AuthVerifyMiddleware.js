const Jwt = require("jsonwebtoken");

module.exports=(Req, Res, next)=>{
    let Token = Req.headers["token"];
    Jwt.verify(Token, "12345", function(Err, Decode){
        if(Err){
            console.log(Token);
            Res.status(401).json({status:"Jwt Verify Faild", Token: Token})
        }else{
            let email= Decode["data"];
            console.log(email);
            Req.headers.email = email;
            // Res.status(401).json({status:"Jwt Verify Success", email:email, Token: Token, decode: Decode})
            next()
        }
    })
}