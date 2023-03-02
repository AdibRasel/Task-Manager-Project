import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./Registration.css"

// Registration Request function import 
import { RegistrationRequest } from '../../APIRequest/APIRequest';
import Loder from '../FullScreenLoder/Loder';



const Registration = () => {

    let EmailRef, FirstNameRef, LastNameRef, MobileRef, PasswordRef, LoderDisplay = useRef();

    let navigateUse = useNavigate()

    const OnRegistrationBtn =()=>{

        let Email = EmailRef.value;
        let FirstName = FirstNameRef.value;
        let LastName = LastNameRef.value;
        let Mobile = MobileRef.value;
        let Password = PasswordRef.value;
        

        //Validation 
        if(Email.length <= 4){
            alert("Please Type Curret Email Address")
        }else if(FirstName.length <= 2){
            alert("Please Type your Currect First Name")
        }else if(LastName.length <= 2){
            alert("Please Type your Currect Last Name")
        }else if (Mobile.length <= 2){
            alert("Please Type your Currect Mobile")
        }else if(Password.length <= 3){
            alert("Please Type your Currect Password")
        }else{

            // LoderDisplay.classList.add("Display_None")

            // alert("Success")
            RegistrationRequest(Email, FirstName, LastName, Mobile, Password, "").then((result)=>{
                if(result===true){
                    alert("Success")
                    navigateUse ("/LoginPage")
                }

                // LoderDisplay.classList.remove("Display_None")
            })
        }




    }


    return (
        <div>
           <div className="Registration">
            <h3>Sign Up</h3>
            <div className="input_item">
                <label className='form-label' htmlFor="">User Email</label>
                <input ref={(input)=>EmailRef=input} className='form-control' type="text" placeholder='User Email' />
            </div>
            <div className="input_item">
                <label className='form-label' htmlFor="">First Name</label>
                <input  ref={(input)=>FirstNameRef=input} className='form-control' type="text" placeholder='First Name' />
            </div>
            <div className="input_item">
                <label className='form-label' htmlFor="">Last Name</label>
                <input  ref={(input)=>LastNameRef=input} className='form-control' type="text" placeholder='Last Name' />
            </div>
            <div className="input_item">
                <label className='form-label' htmlFor="">Mobile</label>
                <input  ref={(input)=>MobileRef=input} className='form-control' type="text" placeholder='Mobile' />
            </div>
            {/* <div className="input_item">
                <label className='form-label' htmlFor="">Image</label>
                <input className='form-control' type="text" placeholder='Image' />
            </div> */}
            <div className="input_item">
                <label className='form-label' htmlFor="">Password</label>
                <input  ref={(input)=>PasswordRef=input} className='form-control' type="password" placeholder='Password' />
            </div>
            <div className="Submit_btn">
                <button onClick={OnRegistrationBtn} className='btn btn-info'>Next</button>
            </div>
            <div className="signIn_forgetPassword">
                <a href="/LoginPage">Sign in</a> <br />
                <a href="">Forget Password</a>
            </div>
           </div>

            <div className="Display_Loder_Component">
                <Loder />
            </div>

        </div>
    );
};

export default Registration;