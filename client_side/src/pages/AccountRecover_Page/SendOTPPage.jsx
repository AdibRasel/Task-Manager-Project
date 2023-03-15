import React, { Fragment } from 'react';
import MyDesign from '../../components/MyDesign/MyDesign';


import SendOTPComponent from "../../components/AccountRecover/SendOTP"

const SendOTPPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Send OTP Page
                </div>

                <SendOTPComponent />

            </MyDesign>
            
        </Fragment>
    );
};

export default SendOTPPage;