import React, { useEffect, useRef, useState } from 'react';
// import {useSelector} from "react-redux";

import {DeleteTask, TaskListByStatusThree, TaskListByStatusTwo, UpdateTaskByStatus } from '../../APIRequest/APIRequest';

import "../Total_View.css"




const New = () => {



    let SelectStatus = useRef();
    let [DataList, SetDataList]= useState([]);

    useEffect(()=>{
        TaskListByStatusThree("New").then((Response)=>{
        SetDataList(Response)
  
      }).catch((Error)=>{
            console.log(Error)
            return false
        })

    },[]);


    // Delete Task
    const DeleteItem=(id)=>{

        alert("Delete Task Success")

        DeleteTask(id);

        window.location.reload()

    }


    // Update Task status
    const UpdateTaskStatus =(id)=>{        
        // let SelectStatus = document.getElementById("SelectStatus").value
        let StatusValue = SelectStatus.value;
        // alert(StatusValue)
        // console.log(StatusValue)
        
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
                        return( 
                            <section className='View_Section'>
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
                                        <i class="fa-solid fa-calendar-days"><span className='datapadding'>{item.CreateDate}</span></i> <br />
                                        <i class="fa-sharp fa-solid fa-file-pen" >
                                        <select ref={(input)=>SelectStatus=input}>
                                            <option value={item.status}> {item.status} </option>
                                            <option value="Cancel"> Cancel </option>
                                            <option value="Panding"> Panding </option>
                                            <option value="Complete"> Complete </option>
                                        </select>
                                        </i> <br />
                                        <i class="fa-sharp fa-solid fa-trash" onClick={()=>{DeleteItem(item._id)}} ></i> <br />
                                    </div>


                                    <div className="Totak_Task_Main_View_Right">
                                        <button onClick={()=>{UpdateTaskStatus(item._id)}} className='btn btn-info taskstatustbtn'>Status Update</button>
                                    </div>
                                </div>
                            </section> 
                        )
                    })

                }
        </div>
    )



}

export default New







































// import React, { useEffect, useState } from 'react';
// import { TaskListByStatusThree } from '../../APIRequest/APIRequest';


// const New = () => {

//     let [TaskList, SetTastList] = useState([])

//     // useEffect(()=>{
//         TaskListByStatusThree("New").then((Response)=>{
//             // return SetTastList(Response)
//             console.log(Response);;
//             // SetTastList(Response)
//         })
//         .catch((Error)=>{
//             console.log(Error)
//         })

//     // },[])






//     return (


//         <div>
            
//             <div className="Total_Task_View">
//                     <div className="Left_View">
//                         Task New
//                     </div>
//                     <div className="Right_View">
//                         <input className='form-control' type="search" />
//                         <button className='btn btn-info'>SEARCH</button>
//                     </div>
//             </div>

//             {TaskList.map((item, i)=>{
//                 return(
//                 <section className='View_Section'>
//                     <div className="Totak_Task_Main_View">
//                         <div className="status_box">
//                             <div className="status_title">
//                                 <h3>Title</h3>

//                             </div>
//                             <div className="status_staus">
//                                 <p>Status</p>
//                             </div>

//                         </div>
//                         <p>Description</p>

//                         <div className="Totak_Task_Main_View_Left">
//                             <i className="fa-solid fa-calendar-days"><span className='datapadding'>Date</span></i> <br />
//                             <i className="fa-sharp fa-solid fa-file-pen" >
//                             <select>
//                                 <option > Status Option </option>
//                                 <option value="Cancel"> Cancel </option>
//                                 <option value="Panding"> Panding </option>
//                                 <option value="Complete"> Complete </option>
//                             </select>
//                             </i> <br />
//                             <i className="fa-sharp fa-solid fa-trash">   </i> <br />
//                         </div>


//                         <div className="Totak_Task_Main_View_Right">
//                             <button className='btn btn-info taskstatustbtn'>Status Update</button>
//                         </div>
//                     </div>
//                 </section>
//                 )
//             })
//             } 






//         </div>
//     );
// };

// export default New;