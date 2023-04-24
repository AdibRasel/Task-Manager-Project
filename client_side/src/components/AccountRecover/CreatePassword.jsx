import React, { useRef } from 'react';
// import cogoToast from 'cogo-toast';
import { RecoverResetPassword } from '../../APIRequest/APIRequest';
import { useNavigate } from "react-router-dom";
import { getEmail, getOTP } from '../../helper/SessionHelper';

const CreatePassword = () => {
    let navigateUse = useNavigate()

    let EmailRef, PasswordRef, ConfirmPasswordRef = useRef();

    const ResetPassword=()=>{
        let Email = getEmail();
        let OTP = getOTP();
        let Password = PasswordRef.value
        let ConfirmPassword = ConfirmPasswordRef.value;

        if(Password >= 3){
            alert('Please type your password in above 3 caractor');
        }else if(ConfirmPassword >=3){
            alert('type your pass above in 3');
        }else if(Password !== ConfirmPassword){
            alert('Password & Confirm Passwoed should be seem');
        }else{

            RecoverResetPassword(Email, OTP, ConfirmPassword).then((Response)=>{

                // navigateUse("/LoginPage")
                if(Response===true){
                    alert('Password Change Success');
                    navigateUse("/LoginPage")   
                }

            }).catch((Err)=>{

            })


        }
    
    
    }




    return (
        <div>
            Create New Password Component


            <div className="Main_Send_OTP_Box">
                <h3>SET NEW PASSWORD</h3>
                <label htmlFor="">Your Email Address</label>
                <input ref={(input)=>EmailRef=input} className='form-control' type="email" placeholder='Your email address' />
                <hr />

                <label htmlFor="">New Password</label>
                <input ref={(input)=>PasswordRef=input} className='form-control' type="password" placeholder='New Password' />
                

                <label htmlFor="">Confirm Password</label>
                <input ref={(input)=>ConfirmPasswordRef=input} className='form-control' type="password" placeholder='Confirm Password' />

                {/* <a href="/LoginPage"> */}
                    <button onClick={ResetPassword} className='btn btn-info Forget_Next'>Submit</button>
                {/* </a> */}
                

                <div className="Back_Button">
                    <div className="Back_Button_Left">
                        <a href="/LoginPage"><button className='btn btn-success'>Login</button></a>
                    </div>
                    <div className="Back_Button_Right">
                        <a href="/RegistrationPage"><button className='btn btn-success'>Registration</button></a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CreatePassword;