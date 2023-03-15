import React, { Fragment } from 'react';
import MyDesign from '../../components/MyDesign/MyDesign';

import CreatePassword from "../../components/AccountRecover/CreatePassword"

const CreatePasswordPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Set New Password Page
                </div>

                <CreatePassword />

            </MyDesign>
            
        </Fragment>
    );
};

export default CreatePasswordPage;