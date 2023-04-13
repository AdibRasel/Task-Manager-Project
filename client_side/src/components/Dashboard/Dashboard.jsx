import React, { useEffect, useState } from 'react';
import { TotalCountStatsTask } from '../../APIRequest/APIRequest';
import "./Dashboard.css"

const Dashboard = () => {
        
    let [DataList, SetDataList]= useState([]);

    useEffect(()=>{
        TotalCountStatsTask().then((Response)=>{
        SetDataList(Response)
      })
    },[])



    return (
        <div>
            {
                DataList.map((item, i)=>{
                return <div className="col-12 col-lg-3 col-sm-6 col-md-3 p-2 DashboardBox">
                    <div className="card h-100 dashboard_card">
                        <h5 className='animated fadeInUp'>{item._id}</h5>
                        <h6 className='text-secondary animated fadeInUp'>{item.sum}</h6>
                    </div>
                </div>
                })
            }
        </div>
    );
};

export default Dashboard;