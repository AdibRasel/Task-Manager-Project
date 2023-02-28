import React, {Fragment} from 'react';


import MyDesign from "../components/MyDesign/MyDesign"

import Ccompleated from "../components/Completed/Completed"

const CompletedPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Complete
                </div>

                <Ccompleated />



            </MyDesign>
            
        </Fragment>
    );
};

export default CompletedPage;