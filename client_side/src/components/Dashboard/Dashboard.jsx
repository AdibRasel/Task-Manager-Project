import React from 'react';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            

            <div className="col-12 col-lg-3 col-sm-6 col-md-3 p-2 DashboardBox">
                <div className="card h-100 dashboard_card">
                    <h5 className='animated fadeInUp'>Total</h5>
                    <h6 className='text-secondary animated fadeInUp'>00</h6>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;