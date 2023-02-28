import React, {Fragment} from 'react';


import MyDesign from "../components/MyDesign/MyDesign"
import Progress from '../components/Progress/Progress';


const ProgressPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Progress
                </div>

                <Progress />

            </MyDesign>
            
        </Fragment>
    );
};

export default ProgressPage;