import React, { useEffect, useState } from 'react';
import "./Profile.css"

// import ProfileImage from "../../assets/Images/Profile_Image.jpg"
import { getUserDetails} from '../../helper/SessionHelper';
import { GetProfileDetails } from '../../APIRequest/APIRequest';

const Profile = () => {


    // let [ProfileList, SetProfileList]= useState([]);

    // useEffect(()=>{

    //     GetProfileDetails()
    //     // .then((Response)=>{
    //     //     SetProfileList(Response)
    //     // })

    // },[])

    console.log(GetProfileDetails())
    // alert(ProfileList)





    const LogOutBtn=()=>{
        localStorage.clear();
        window.location.href="/LoginPage"
    }



    return (
        <div>
            
        <div className="Main_Profile_Box">
            <div className="Profile_Left_Side">
                <img src={getUserDetails()["Photo"]} alt="" /> <br />
                <button className='btn btn-info' onClick={LogOutBtn}>Logout</button>
            </div>
            <div className="Profile_Right_Side">
                <h1>Name: {getUserDetails()["FirstName"] + " " + getUserDetails()["LasttName"]}</h1>
                <h3>First name: {getUserDetails()["FirstName"]}</h3>
                <h3>Last Name: {getUserDetails()["LasttName"]}</h3>
                <h3>Mobile No: {getUserDetails()["Mobile"]}</h3>
                <h3>Email Address: {getUserDetails()["Email"]}</h3>
            </div>
        </div>

            



        </div>
    );
};

export default Profile;