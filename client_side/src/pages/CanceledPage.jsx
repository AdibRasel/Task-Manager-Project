import React, {Fragment} from 'react';
import Canceled from '../components/Canceled/Canceled';


import MyDesign from "../components/MyDesign/MyDesign"

const CanceledPage = () => {
  
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    Cancel
                </div>

                <Canceled />

            </MyDesign>
            
        </Fragment>
    );
};

export default CanceledPage;