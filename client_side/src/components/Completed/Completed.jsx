import React from 'react';

import "../Total_View.css"

const Completed = () => {
    return (
        <div>


            
                <div className="Total_Task_View">
                    <div className="Left_View">
                        Task Completed
                    </div>
                    <div className="Right_View">
                        <input className='form-control' type="search" />
                        <button className='btn btn-info'>SEARCH</button>
                    </div>
                </div>



                <section className='View_Section'>
                    <div className="Totak_Task_Main_View">
                        <h3>Title</h3>
                        <p>Description</p>
                        <div className="Totak_Task_Main_View_Left">
                            <i class="fa-solid fa-calendar-days"></i>
                            <i class="fa-sharp fa-solid fa-file-pen"></i>
                            <i class="fa-sharp fa-solid fa-trash"></i>
                        </div>
                        <div className="Totak_Task_Main_View_Right">
                            <p>Status</p>
                        </div>
                    </div>
                </section>

            


        </div>
    );
};

export default Completed;