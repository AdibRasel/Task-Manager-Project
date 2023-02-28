import React, {Fragment} from 'react';


import MyDesign from "../components/MyDesign/MyDesign"
import New from '../components/New/New';


const NewPage = () => {
    return (
        <Fragment>

            <MyDesign>
                <div className="Page_Title">
                    New 
                </div>

                <New />

            </MyDesign>
            
        </Fragment>
    );
};

export default NewPage;