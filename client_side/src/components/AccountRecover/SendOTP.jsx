import React, { useRef } from 'react';
import cogoToast from 'cogo-toast';
import { RecoverVerifyEmailRequest } from '../../APIRequest/APIRequest';
import { setEmail } from '../../helper/SessionHelper';
import { useNavigate } from "react-router-dom";


import "./Forget.css"

const SendOTP = () => {

    let navigateUse = useNavigate()


    let EmailRef = useRef();

    const VerifyEmail =()=>{
        let Email = EmailRef.value;
        if(Email < 2){
            cogoToast.warn('Please Type your Email Address');
        }else{
            

            RecoverVerifyEmailRequest(Email).then((Result)=>{
                if(Result=== true){
                    navigateUse("/VerifyOTPPage")
                }
            }).catch((Err)=>{

            })



        }  
    }

    return (
        <div>
            Send OTP Component


            <div className="Main_Send_OTP_Box">
                <h3>EMAIL ADDRESS</h3>
                <label htmlFor="">Your email address</label>
                <input ref={(input)=>EmailRef=input} type="email" className='form-control' placeholder='User Email' />
                {/* <a href=""> */}
                {/* <a href=""> */}
                    <button onClick={VerifyEmail} className='btn btn-info Forget_Next'>NEXT</button>
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

export default SendOTP;