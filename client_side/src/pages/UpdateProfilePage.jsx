import React, { Fragment } from 'react';
import MyDesign from '../components/MyDesign/MyDesign';
import UpdateProfile from '../components/Profile/UpdateProfile';

const UpdateProfilePage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    <UpdateProfile />
                </div>



            </MyDesign>
            
        </Fragment>
    );
};

export default UpdateProfilePage;