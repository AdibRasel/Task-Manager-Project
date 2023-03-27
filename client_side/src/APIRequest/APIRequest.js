import axios from "axios"
// import React, { useRef } from 'react';

import { getEmail, getToken, setEmail, setOTP, setToken, setUserDetails } from "../helper/SessionHelper";

// React Reducx import
import store from "../redux/stor/store";
import { SetCanceledTask, SetComplateTask, SetNewTask, SetProgressTask } from "../redux/state-slice/task-slice";
// End React Reducx import


// import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice"
// import store from "../redux/stor/store"

// const BaseURL = "https://taskmanagerproject-p0m3.onrender.com/api/v1"
const BaseURL = "http://localhost:5000/api/v1"

// Token 
const AxiosHeader ={headers:{"Token":getToken()}}
// Token end 

// LoderDisplay = useRef()

// Registration Request function
export function RegistrationRequest(Email, FirstName, LasttName, Mobile, Password, Photo){
    
    let URL = BaseURL+"/Registration"
    let PostBody = {
        Email:Email,
        FirstName:FirstName,
        LasttName:LasttName,
        Mobile:Mobile,
        Password: Password,
        Photo:Photo
    }
    return axios.post(URL, PostBody).then( (res) => {

        // loder start display none 
        // store.dispatch(HideLoader())

        // LoderDisplay.classList.add("Display_None")


        if(res.status === 200){
            
            if(res.data["status"]=== "Fail"){
                // email exist kore ki na seta chack kora hoyeche
                if(res.data.data.keyPattern.Email ===1){
                    alert("Email Already Exist");
                    return false
                }else{
                    alert("Something Went Wrong" + res)
                    console.log(res);
                    return false;
                }
                // end email exist kore ki na seta chack kora hoyeche 
            }else{
                // LoderDisplay.classList.remove("Display_None")

                alert("Success");
                return true;

            }


        }else{
            alert("Error in status not match in == 200")
            return false
        }


    }).catch( (Err) => {

        // loder stop display none
        // store.dispatch(ShowLoader())

        if(Err.status === 200){
            alert("Email All Redy exist")
            return false
        }else{
            alert("error Catch block")
            return false
        }


        // console.error(err);
        // alert("Error Catch Block");
        // return false;
    });

}




// Login Request Function 
export function LoginRequest(Email, Password){
    let URL = BaseURL+"/LoginUser";

    let PostBody={"Email":Email, "Password":Password};
    return axios.post(URL, PostBody).then((Res)=>{
        if(Res.status===200){

            // Token 
            setToken(Res.data["Token"]);
            setUserDetails(Res.data["data"])
            // Token

            alert("Login Success From API Request")
            return true;
        }else{
            alert("Login Faild From API Request")
            return false;
        }
    }).catch((Err)=>{
        alert("Login Faild From API Request");
        return false;
    })
}





//get Profile Details
export function GetProfileDetails(){
    let URL = BaseURL+"/ProfileDetails"
    // let PostBody = getEmail()
    return axios.get(URL, AxiosHeader ).then((Response)=>{
        if(Response.status === 200){
            // alert(Response)
            // console.log(Response.data.data[0].Email)
          return Response.data.data[0]
        }else{
            // return Res
        }
    }).catch((Err)=>{
        console.log("GetProfile Faild from catch block")
    })
}











// New Task Request 
export function NewTaskRequest(Title, Description){
    let URL = BaseURL+"/CreateTask";

    let PostBody = {"title":Title,"description":Description,status: "New"};

    return axios.post(URL, PostBody, AxiosHeader).then((Res)=>{

        if(Res.status===200){
            // alert("Create Task Success from then block API Request");
            return true
        }else{
            alert("Create Task Faild from then block in API Request");
            return false;
        }

    }).catch((Err)=>{
        alert("Create Task Faild From Catch block APIRequest");
        return false;
    })
    
}   



// Task List By Status 
export function TaskListByStatus(Status){
    // let URL = BaseURL+"ListTaskByStatus/"+New;
    let URL = BaseURL+"/ListTaskByStatus/"+Status;

    axios.get(URL, AxiosHeader).then((Res)=>{

        if(Res.status===200){
            if(Res.status==="New"){
                alert("Task Show Success (New) from API Request then block")

                store.dispatch(SetNewTask(Res.data["data"]))

            }
        }else if(Status==="completed"){

            alert("Task Show Success (completed) from API Request then block")

            store.dispatch(SetComplateTask(Res.data["data"]))
        
        }else if(Status==="Canceled"){

            alert("Task Show Success (Canceled) from API Request then block")

            store.dispatch(SetCanceledTask(Res.data["data"]))


        }else if(Status==="Progress"){

            alert("Task Show Success (Progress) from API Request then block")

            store.dispatch(SetProgressTask(Res.data["data"]))


        }else{

            alert("Error in APIRequest in then block ")

        }


    }).catch((Err)=>{
        alert("Error if APIRequest catch block")
    })

}




// Task List By Status Two
export function TaskListByStatusTwo(Status){

    let URL = BaseURL+"/ListTaskByStatus/"+Status;

    // let URL = "/api/v1/ReadProuct"
    return axios.get(URL, AxiosHeader).then((Response)=>{
            
        if(Response.status===200){
            // return Response.data["data"][0]
                return Response.data.data
            }else{
                // return Response.data["data"][0]
                return false
            }
        }).catch((Error)=>{
            console.log(Error)
            return false
        })

}


// Task List By Status Three
export function TaskListByStatusThree(Status){

    let URL = BaseURL+"/ListTaskByStatus/"+Status;

    // let URL = "/api/v1/ReadProuct"
    return axios.get(URL, AxiosHeader).then((Response)=>{
            console.log(Response.data.data)
            // return Response.data["data"][0]
            return Response.data.data
          
        }).catch((Error)=>{
            console.log(Error)
            // return false
        })
}

// Total Count Stats Task
export function TotalCountStatsTask(){
    let URL = BaseURL+"/TotalCountStatsTask";
    return axios.get(URL, AxiosHeader).then((Response)=>{
        if(Response.status===200){
            return Response.data['data'];
        }else{
            return false
        }
    }).catch((Err)=>{
        return false
    })

}

// Task Delete 
export function DeleteTask(id){
    let URL = BaseURL+"/DeleteTask/"+id;
    return axios.get(URL, AxiosHeader).then((Res)=>{

        if(Response.status===200){
            alert("Delete Faild in APIRequest then block")
            return true;
        }else{
            alert("Delete Success in APIRequest then block")
            return false
        }

    }).catch((Err)=>{
        alert("Delete Faild in APIRequest catch block")
        return false
    })

}


//Update Task status
export function UpdateTaskByStatus(id, status){
    let URL = BaseURL+"/TaskStatusUpdate/"+id+"/"+status;
    return axios.get(URL, AxiosHeader).then((Res)=>{

        if(Response.status===200){
            alert("Update Faild in APIRequest then block")
            return true;
        }else{
            alert("Update Success in APIRequest then block")
            return false
        }

    }).catch((Err)=>{
        alert("Update Faild in APIRequest catch block")
        return false
    })
}






// Profile Update
export function ProfileUpdate(FirstName, LasttName, Mobile, Password, Photo){
    // let URL = BaseURL+"/ProfileUpdate";
    const URL = BaseURL+"/ProfileUpdate"
    let PostBody = {
        FirstName:FirstName,
        LasttName:LasttName,
        Mobile:Mobile,
        Password:Password,
        Photo: Photo
    }
    let UserDetails = {
        FirstName:FirstName,
        LasttName:LasttName,
        Mobile:Mobile,
        Photo: Photo
    }
    return axios.post(URL, PostBody, AxiosHeader).then((Res)=>{

        if(Response.status===200){
            alert("Update Faild in APIRequest then block 123")
            // setUserDetails(Res)
            setUserDetails(UserDetails)
            
            return true;
        }else{
            alert("Update Success in APIRequest then block")

            setUserDetails(UserDetails)

            return false
        }

    }).catch((Err)=>{
        alert("Update Faild in APIRequest catch block" + Err)

        return false
    })
}


// Profile Update Two
export function ProfileUpdateTwo(FirstName, LasttName, Mobile, Password){
    const URL = BaseURL+"/ProfileUpdate"
    let PostBody = {
        FirstName:FirstName,
        LasttName:LasttName,
        Mobile:Mobile,
        Password:Password,
        // Photo: Photo
    }
    return axios.post(URL, AxiosHeader).then((Result)=>{
        if(Response.status===200){
            alert("Update Faild in APIRequest then block")
            return true;
        }else{
            alert("Update Success in APIRequest then block")
            return false
        }
    }).catch((Err)=>{
        alert("Update Faild in APIRequest catch block" + Err)

        return false
    })
}



// Recover password Step 01 Send OTP
export function RecoverVerifyEmailRequest(Email){

    let URL = BaseURL+"/RecoverVerifyEmail/"+Email
    return axios.get(URL).then((Response)=>{
        setEmail(Email)
        if(Response.status===200){
            

            if(Response.data['status']=== 'Success'){

                setEmail(Email)
                alert("A 6 Digit verification code has been sent to your email address")
                return true;


            }else{
                alert("Email not find")
                return false;
            }


        }else{
            alert("Faild in then block else")
            return false;
        }

    }).catch((Err)=>{
        alert("Error in Catch Block")
        return false;
    })

}



// Recover password Step 02 Veryfi OTP
export function RecoverVerifyOTPRequest(email, OTP){

    let URL = BaseURL+"/RecoverVerifyOTP/"+email+"/"+OTP
    // let URL = BaseURL+"/RecoverVerifyOTP"
    // let PostBody = {
    //     email:"softzonesapur@gmail.com",
    //     otp: OTPValue
    // }
    return axios.get(URL).then((Response)=>{

        if(Response.status===200){
           

            if(Response.data['status']=== 'Success'){

                setOTP(OTP)
                alert("OTP Code varifaction Success")
                return true;


            }else{
                alert("Invalit OTP Code = " + Response.data['status'] + email + OTP)
                return false;
            }


        }else{
            alert("Faild in then block else")
            return false;
        }

    }).catch((Err)=>{
        alert("Error in Catch Block -----"+ Err)
        return false;
    })

}



// Recover password Step 03 Reset Password
export function RecoverResetPassword(Email, OTP, Password){

    let URL = BaseURL+"/RecoverResetPass"

    let PostBody={
        email:Email,
        otp: OTP,
        Password : Password
    }

    return axios.post(URL, PostBody).then((Response)=>{

        if(Response.status===200){
            // Messange 
            alert("Success")
            return true;
        }else{
            alert("Faild in then block else")
        }

    }).catch((Err)=>{
        alert("Error in Catch Block")
    })

}
