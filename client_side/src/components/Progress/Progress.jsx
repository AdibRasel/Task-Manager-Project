import React, { useEffect, useState } from 'react';
import { TaskListByStatusTwo } from '../../APIRequest/APIRequest';

import "../Total_View.css"


const Progress = () => {


    let [DataList, SetDataList]= useState([]);

    useEffect(()=>{
      
      TaskListByStatusTwo("Panding").then((Response)=>{
  
        SetDataList(Response)
  
      })
    },[])


    return (
        <div>


            
        <div className="Total_Task_View">
            <div className="Left_View">
                Task Progress
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
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="Totak_Task_Main_View_Left">
                            <i class="fa-solid fa-calendar-days">{item.CreateDate}</i>
                            <i class="fa-sharp fa-solid fa-file-pen"></i>
                            <i class="fa-sharp fa-solid fa-trash"></i>
                        </div>
                        <div className="Totak_Task_Main_View_Right">
                            <p>{item.status}</p>
                        </div>
                    </div>
                 </section> 
                // return alert(item.title)
            })
        }

    


</div>
    );
};

export default Progress;