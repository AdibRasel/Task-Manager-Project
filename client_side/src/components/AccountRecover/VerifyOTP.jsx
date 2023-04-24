import React, { useRef, useState } from 'react';
// import cogoToast from 'cogo-toast';
// const ReactCodeInput = dynamic(import('react-code-input'));
import ReactCodeInput from "react-code-input";
import { RecoverVerifyOTPRequest } from '../../APIRequest/APIRequest';
import { getEmail } from '../../helper/SessionHelper';
import { useNavigate } from "react-router-dom";


const VerifyOTP = () => {


    let navigateUse = useNavigate()


    let  defaultInputStyle= {
        fontFamily: "monospace",
        MozAppearance: "textfield",
        margin: "4px",
        paddingLeft: "8px",
        width: "45px",
        borderRadius: '3px',
        height: "45px",
        fontSize: "32px",
        border: '1px solid lightskyblue',
        boxSizing: "border-box",
        color: "black",
        backgroundColor: "white",
        borderColor: "lightgrey"
    }


    let [OTP,SetOTP]=useState("")
    // let OTPRef = useRef();

        
    const SubmitOTP = () => {
        
        // let OTPValue = OTP.value
        // alert("Hello"+ OTP)


        if(OTP < 5){

            alert("Enter 6 Digit Code")
            alert('Enter 6 Digit Code');

        }else {

            RecoverVerifyOTPRequest(getEmail(), OTP).then((Result)=>{
                
                if(Result===true){
                    alert('OTP Code varifaction Success');
                    navigateUse("/CreatePasswordPage")    
                }

            }).catch((Err)=>{
                alert('OTP Verify Faild');
            })


        }
    }  

    
    return (
        <div>
            Verify OTP Component


            <div className="Main_Send_OTP_Box">
                <h3>OTP VERIFICATION</h3>
                <label htmlFor="">A 6 Digit verification code has been sent to your email address</label>
                {/* <input type="email" className='form-control' placeholder='User Email' /> */}


                <ReactCodeInput onChange={(value)=>SetOTP(value)} inputStyle={defaultInputStyle}  fields={6}/>
                {/* <ReactCodeInput ref={(input)=>SetOTP=input}  inputStyle={defaultInputStyle}  fields={6}/> */}
                {/* <input type="text"ref={(input)=>OTPRef=input}  /> */}




                {/* <a href="/CreatePasswordPage"> */}
                    <button onClick={SubmitOTP} className='btn btn-info Forget_Next'>NEXT</button>
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

export default VerifyOTP;