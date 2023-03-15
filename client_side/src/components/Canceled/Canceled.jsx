import React, { useEffect, useRef, useState } from 'react';
import { DeleteTask, TaskListByStatusTwo, UpdateTaskByStatus } from '../../APIRequest/APIRequest';

import "../Total_View.css"


const Canceled = () => {

    
    
    let SelectStatus = useRef();
    let [DataList, SetDataList]= useState([]);

    useEffect(()=>{
      
        TaskListByStatusTwo("Cancel").then((Response)=>{
        SetDataList(Response)
  
      })
    },[]);


        // Delete Task
        const DeleteItem=(id)=>{

            alert("Delete Task Success")

            DeleteTask(id);

            window.location.reload()

        }


        //Update Task status
        const UpdateTaskStatus =(id)=>{        
            // let SelectStatus = document.getElementById("SelectStatus").value
            // alert(SelectStatus.value)
            let StatusValue = SelectStatus.value
            
            UpdateTaskByStatus(id, StatusValue)
            
            window.location.reload()
        }

    return (
        <div>
            
                <div className="Total_Task_View">
                    <div className="Left_View">
                        Task New
                    </div>
                    <div className="Right_View">
                        <input className='form-control' type="search" />
                        <button className='btn btn-info'>SEARCH</button>
                    </div>
                </div>

                {
                    DataList.map((item, i)=>{
                        return <section className='View_Section'>
                            <div className="Totak_Task_Main_View">
                                <div className="status_box">
                                    <div className="status_title">
                                        <h3>{item.title}</h3>

                                    </div>
                                    <div className="status_staus">
                                        <p>{item.status}</p>
                                    </div>

                                </div>
                                <p>{item.description}</p>
                                <div className="Totak_Task_Main_View_Left">
                                    <i className="fa-solid fa-calendar-days"><span className='datapadding'>{item.CreateDate}</span></i> <br />
                                    <i className="fa-sharp fa-solid fa-file-pen" >
                                    {/* <span>Status Update</span> */}
                                    <select ref={(input)=>SelectStatus=input} id='SelectStatus'>
                                        <option value={item.status}> {item.status} </option>
                                        <option value="New"> New </option>
                                        <option value="Panding"> Panding </option>
                                        <option value="Complete"> Complete </option>
                                    </select>
                                    </i> <br />
                                    <i className="fa-sharp fa-solid fa-trash" onClick={()=>{DeleteItem(item._id)}} ></i> <br />
                                </div>
                                <div className="Totak_Task_Main_View_Right">
                                    <button onClick={()=>{UpdateTaskStatus(item._id)}} className='btn btn-info taskstatustbtn'>Status Update</button>
                                </div>
                            </div>
                         </section> 
                    })
                }
        </div>
    );


};

export default Canceled;