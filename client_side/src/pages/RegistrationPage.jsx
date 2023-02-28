import React, {Fragment} from 'react';


import MyDesign from "../components/MyDesign/MyDesign"
import Registration from '../components/Registration/Registration';


const RegistrationPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Registration

                    <Registration />

                </div>



            </MyDesign>
            
        </Fragment>
    );
};

export default RegistrationPage;