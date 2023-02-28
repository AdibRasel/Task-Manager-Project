import React, {Fragment} from 'react';
import Login from '../components/Login/Login';


import MyDesign from "../components/MyDesign/MyDesign"


const LoginPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Login
                    <Login />
                </div>



            </MyDesign>
            
        </Fragment>
    );
};

export default LoginPage;