import React, { Fragment } from 'react';
import MyDesign from '../../components/MyDesign/MyDesign';

import VerifyOTP from "../../components/AccountRecover/VerifyOTP"

const VerifyOTPPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Verify OTP Page
                </div>

                <VerifyOTP />

            </MyDesign>
            
        </Fragment>
    );
};

export default VerifyOTPPage;