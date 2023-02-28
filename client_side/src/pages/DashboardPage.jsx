import React, {Fragment, Suspense} from 'react';




const MyDesign = React.lazy(() => import('../components/MyDesign/MyDesign'));
const Loder = React.lazy(() => import('../components/FullScreenLoder/Loder'));

const DashboardComponent = React.lazy(()=> import ("../components/Dashboard/Dashboard"))

const DashboardPage = () => {
    return (
     
            <Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <MyDesign>


                        <div className="Page_Title">
                            Dashboard
                            <DashboardComponent />
                            <Loder />
                        </div>


                    </MyDesign>
                </Suspense>
            </Fragment>
   
    );
};

export default DashboardPage;