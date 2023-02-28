import React from 'react';

import "./Create.css"

const Create = () => {
    return (
        <div>
            <div className="Create_Task_Component">
                <h3>Create New Task</h3>
                <div className="Create_Task_Item">
                    <label htmlFor="">Task Name</label>
                    <input className='form-control' type="text" placeholder='Task Name' />
                </div>
                <div className="Create_Task_Item">
                    <label htmlFor="">Task Description</label> <br />
                    <textarea className='form-control' placeholder='Task Description' name="" id="" cols="30" rows="10">Task Description</textarea>
                </div>
                <button className='btn btn-info'>Create</button>
            </div>
        </div>
    );
};

export default Create;