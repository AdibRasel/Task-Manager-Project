// import Task Model
const TaskModel = require("../Model/TaskModel")

// Create Task 
exports.CreateTask=(Req, Res)=>{
    let ReqBody = Req.body;
    // let ReqHeader = Req.headers;
    ReqBody.email=Req.headers['email']; // User Model থেকে User email কে নিয়ে আসবে বডি থেকে, যা অথ ভ্যারিফাই থেকে পাঠানো হয়েছে।
    TaskModel.create(ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}

// Delete Task
exports.DeleteTask=(Req, Res)=>{
    let Id = Req.params.id;
    let Query = {_id:Id};
    TaskModel.remove(Query, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}

// Task Status Update 
exports.TaskStatusUpdate=(Req,Res)=>{
    let Id = Req.params.id;
    let Status = Req.params.status;
    let Query = {_id: Id};
    let ReqBody = {status:Status};
    TaskModel.updateOne(Query, ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}



// List task By Status 
exports.ListTaskByStatus=(Req, Res)=>{
    let status = Req.params.status;
    let email = Req.headers["email"];
    TaskModel.aggregate([
        {$match:{status:status, email:email}},
        {$project:{
            _id:1, title:1, description:1, status:1,
            CreateDate:{
                $dateToString:{
                    date:"$CreateDate",
                    format:"%d-%m-%Y"
                }
            }
        }}
    ], (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}




// Total Count Statst by Task
exports.TotalCountStatsTask=(Req, Res)=>{
    let Email = Req.headers["email"];
    TaskModel.aggregate([
        {$match:{email:Email}},
        {$group:{_id:"$status", sum:{$count:{} }}} 
    ], (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}