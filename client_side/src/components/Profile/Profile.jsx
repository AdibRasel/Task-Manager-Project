import React, { useEffect, useState } from 'react';
import "./Profile.css"

// import ProfileImage from "../../assets/Images/Profile_Image.jpg"
import { getUserDetails} from '../../helper/SessionHelper';
import { GetProfileDetails } from '../../APIRequest/APIRequest';

const Profile = () => {


    const LogOutBtn=()=>{
        localStorage.clear();
        window.location.href="/LoginPage"
    }



    return (
        <div>
            
        <div className="Main_Profile_Box">
            <div className="Profile_Left_Side">
                <img src={getUserDetails()["Photo"]} alt="" /> <br />
                <h3>{getUserDetails()["FirstName"] + " " + getUserDetails()["LasttName"]}</h3>
                <span>Full Stack Developer <br /> Noakhali, Chatkhil, Bangladesh</span>
                <br />
                <a href="/UpdateProfile">
                    <button className='btn btn-danger'> <i class="fas fa-edit"></i> Update Profile </button> <br />
                </a>
                <button className='btn btn-info' onClick={LogOutBtn}>Logout</button>
            </div>
            <div className="Profile_Right_Side">
                <h4>Name: {getUserDetails()["FirstName"] + " " + getUserDetails()["LasttName"]}</h4>
                <hr />
                <h4>First name: {getUserDetails()["FirstName"]}</h4>
                <hr />
                <h4>Last Name: {getUserDetails()["LasttName"]}</h4>
                <hr />
                <h4>Mobile No: {getUserDetails()["Mobile"]}</h4>
                <hr />
                <h4>Email Address: {getUserDetails()["Email"]}</h4>
            </div>
        </div>

            



        </div>
    );
};

export default Profile;