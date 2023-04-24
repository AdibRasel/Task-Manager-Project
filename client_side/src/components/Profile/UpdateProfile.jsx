// import React, { useEffect, useRef, useState } from 'react';
import React, { useEffect, useRef, useState } from 'react';
// import cogoToast from 'cogo-toast';
import { GetProfileDetails, ProfileUpdate, ProfileUpdateTwo } from '../../APIRequest/APIRequest';
import { setUserDetails } from '../../helper/SessionHelper';

import "./UpdateProfile.css"


const UpdateProfile = () => {


    let FirstName, LasttName, Mobile, Password, Photo, UserImgPrview = useRef();
    let [ProfileList, SetProfileList]= useState([]);

    useEffect(()=>{

        GetProfileDetails()
        .then((Response)=>{
            SetProfileList(Response)
        })

    },[])

    console.log(ProfileList)
    // alert(ProfileList)

    //Image Preview
    const handleImageUpload = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        UserImgPrview.src=(reader.result);
        // Photo.src=(reader.result);
      };
    };

    //Update Profile btn
    const UpdateProfilebtn = ()=>{

        let FirstNameValue = FirstName.value;
        let LasttNameValue = LasttName.value;
        let MobileValue = Mobile.value;
        let PasswordValue = Password.value;
        let PhotoValue = UserImgPrview.src;
        let PhotoValueTwo= Photo.value


        //Validation 
        if(FirstNameValue <= 4){
            alert('Please Type your Currect First Name');
        }else if(LasttNameValue <= 2){
            alert('Please Type your Currect Last Name');
        }else if(MobileValue <= 2){
            alert('TPlease Type your Currect Mobile Number');
        }else if(PasswordValue <= 3){
            alert('Please Type your Currect Password');
        }
        else if(PhotoValue <= 1){
            alert('Please Type your Currect Password');
        }
        else{

            // LoderDisplay.classList.add("Display_None")
            // alert("Success")
            ProfileUpdate(FirstNameValue, LasttNameValue, MobileValue, PasswordValue, PhotoValue).then((result)=>{
                if(result===true){


                    let UserDetails = {
                        FirstName:FirstNameValue,
                        LasttName:LasttNameValue,
                        Mobile:MobileValue,
                        Photo: PhotoValue
                    }
                    setUserDetails(UserDetails)
                    alert('Profile Update Success');
                }
                // LoderDisplay.classList.remove("Display_None")
            }).catch((Err)=>{
                alert('"Update Faild in Profile Update Page block');
                // return false
            })
        }
    }







    return (
        <div>
            
            <div className="ProfilePageSee">
                <div className="Left_Profile_See">
                    <a href="/ProfilePage">
                        <button className='btn btn-info'>See Profile <i class="fa-solid fa-eye"></i></button>
                    </a>
                </div>

                <div className="Right_Profile_Image_See">
                    <img ref={(input)=>UserImgPrview=input} src={ProfileList.Photo} alt="" />
                    {/* <img ref={(input)=>Photo=input} src={ProfileList.Photo} alt="" /> */}
                </div>

            </div>

            <hr />


            <div className="row">
            
                <div className="col-md-4">
                    <label htmlFor="">Profile Picture</label>
                    <input ref={(input)=>Photo=input} onChange={handleImageUpload} type="file" className='form-control' />
                </div>


                <div className="col-md-4">
                    <label htmlFor="">Email Address</label>
                    <input defaultValue={ProfileList.Email} type="text" className='form-control' />
                </div>


                <div className="col-md-4">
                    <label htmlFor="">First Name</label>
                    <input ref={(input)=> FirstName = input} defaultValue={ProfileList.FirstName}  type="text" className='form-control' />
                </div>

            </div>




            <hr />



           <div className="row">
            

            <div className="col-md-4">
                <label htmlFor="">Last Name</label>
                <input ref={(input)=> LasttName = input} defaultValue={ProfileList.LasttName}  type="text" className='form-control' />
            </div>


            <div className="col-md-4">
                <label htmlFor="">Mobile</label>
                <input ref={(input)=> Mobile = input} defaultValue={ProfileList.Mobile}  type="text" className='form-control' />
            </div>


            <div className="col-md-4">
                <label htmlFor="">Password</label>
                <input ref={(input)=> Password = input} defaultValue={ProfileList.Password}  type="password" className='form-control' />
            </div>




            </div>    


            <div className="ButtonProfileUpdate">
                <button onClick={UpdateProfilebtn} className='btn btn-info'>Submit</button>
            </div>



        </div>
    );
};

export default UpdateProfile;