import React, { useRef } from 'react';
import { LoginRequest } from '../../APIRequest/APIRequest';
import "./Login.css"

const Login = () => {

    let PassRef, EmailRef = useRef();

    const SubmitLogin=()=>{

        let Email = EmailRef.value;
        let Password = PassRef.value

        // validation start 
        if(EmailRef.value <= 2){
            alert("Please Type Your Email Address")
        }else if(PassRef.value <= 2){
            alert("Please Type your Password")
        }else{

            LoginRequest(Email, Password).then((Res)=>{
                if(Res === true){
                    alert("Login Success from login page");
                    window.location.href="/"
                }
            }).catch((Err)=>{
                alert("Login Faild From Login Page");
                return false;
            })

             
            // alert("Success")
        }
        // end validation 
    } 


    return (
        <div>
            <form className='Login_Form'>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-2">
                    <label className="form-label text-left" for="form2Example1">Email address</label>
                    <input ref={(input)=>EmailRef=input} type="email" id="form2Example1" placeholder='Email Address' className="form-control" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" placeholder='Password' for="form2Example2">Password</label>
                    <input ref={(input)=>PassRef=input} type="password" id="form2Example2" placeholder='Password' className="form-control" />
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div className="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <button onClick={SubmitLogin} type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>Not a member? <a href="/RegistrationPage">Register</a></p>
                    {/* <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                    </button> */}
                </div>
            </form>
        </div>
    );
};

export default Login;