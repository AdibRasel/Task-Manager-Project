import React, { useEffect, useRef, useState } from 'react';
import { GetProfileDetails } from '../../APIRequest/APIRequest';

import "./UpdateProfile.css"


const UpdateProfile = () => {






    let ProfilePicture, Email, FirstName, LastName, Mobile, Password = useRef();




    let [ProfileList, SetProfileList]= useState([]);

    useEffect(()=>{

        GetProfileDetails()
        .then((Response)=>{
            SetProfileList(Response)
        })

    },[])

    console.log(ProfileList)
    // alert(ProfileList)



    return (
        <div>
            
            <div className="ProfilePageSee">
                <div className="Left_Profile_See">
                    <a href="/ProfilePage">
                        <button className='btn btn-info'>See Profile <i class="fa-solid fa-eye"></i></button>
                    </a>
                </div>

                <div className="Right_Profile_Image_See">
                    <img src={ProfileList.Photo} alt="" />
                </div>

            </div>

            <hr />


            <div className="row">
            
            <div className="col-md-4">
                <label htmlFor="">Profile Picture</label>
                <input ref={(input)=>ProfilePicture=input} type="file" className='form-control' />
            </div>


            <div className="col-md-4">
                <label htmlFor="">Email Address</label>
                <input defaultValue={ProfileList.Email} ref={(input)=>Email=input} type="text" className='form-control' />
            </div>


            <div className="col-md-4">
                <label htmlFor="">First Name</label>
                <input defaultValue={ProfileList.FirstName} ref={(input)=>FirstName=input} type="text" className='form-control' />
            </div>

           </div>




            <hr />



           <div className="row">
            

            <div className="col-md-4">
                <label htmlFor="">Last Name</label>
                <input defaultValue={ProfileList.LasttName} ref={(input)=>LastName=input} type="text" className='form-control' />
            </div>


            <div className="col-md-4">
                <label htmlFor="">Mobile</label>
                <input defaultValue={ProfileList.Mobile} ref={(input)=>Mobile=input} type="text" className='form-control' />
            </div>


            <div className="col-md-4">
                <label htmlFor="">Password</label>
                <input defaultValue={ProfileList.Password} ref={(input)=>Password=input} type="password" className='form-control' />
            </div>




            </div>    



        </div>
    );
};

export default UpdateProfile;