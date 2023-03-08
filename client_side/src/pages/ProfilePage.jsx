import React, {Fragment} from 'react';


import MyDesign from "../components/MyDesign/MyDesign"
import Profile from '../components/Profile/Profile';


const ProfilePage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    <Profile />
                </div>



            </MyDesign>
            
        </Fragment>
    );
};

export default ProfilePage;