import React, { useRef } from 'react';
import {useNavigate} from "react-router-dom"
import { NewTaskRequest } from '../../APIRequest/APIRequest';
// import cogoToast from 'cogo-toast';


import "./Create.css"

const Create = () => {

    let TitleRef, DescriptionRef = useRef();
    let Navigates = useNavigate();
    

    const CreateButton =()=>{
        let Title = TitleRef.value;
        let Description = DescriptionRef.value;

        if(Title >= 0){
            alert('Please Type Title Name');
        }else if(Description >= 0){
            alert('Please Type Description')
        }else{

            NewTaskRequest(Title, Description).then((Res)=>{

                if(Res===true){
                    alert('Task Create Success')
                    Navigates("/NewPage")

                }else{
                    alert('Create Faild from Create Page then blcok')
                }

            })

        }


    }



    return (
        <div>
            <div className="Create_Task_Component">
                <h3>Create New Task</h3>
                <div className="Create_Task_Item">
                    <label htmlFor="">Task Name</label>
                    <input ref={(input)=>TitleRef=input} className='form-control' type="text" placeholder='Task Name' />
                </div>
                <div className="Create_Task_Item">
                    <label htmlFor="">Task Description</label> <br />
                    <textarea ref={(input)=>DescriptionRef=input} className='form-control' placeholder='Task Description' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button onClick={CreateButton} className='btn btn-info'>Create</button>
            </div>
        </div>
    );
};

export default Create;