import React from 'react';
import "./Profile.css"

import ProfileImage from "../../assets/Images/Profile_Image.jpg"

const Profile = () => {

    const LogOutBtn=()=>{
        localStorage.clear();
        window.location.href="/LoginPage"
    }

    return (
        <div>
            
        <div className="Main_Profile_Box">
            <div className="Profile_Left_Side">
                <img src={ProfileImage} alt="" /> <br />
                <button className='btn btn-info' onClick={LogOutBtn}>Logout</button>
            </div>
            <div className="Profile_Right_Side">
                <h1>Name</h1>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>Mobile No</h3>
                <h3>Email Address</h3>
                <h3>Password</h3>
                <h3>Image</h3>
            </div>
        </div>

            



        </div>
    );
};

export default Profile;