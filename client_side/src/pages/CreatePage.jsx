import React, {Fragment} from 'react';


import MyDesign from "../components/MyDesign/MyDesign"


import Create from '../components/Create/Create';


const CreatePage = () => {
    return (
        <Fragment>

        <MyDesign>
            <div className="Page_Title">
                Create
            </div>
            <Create />



        </MyDesign>
        
    </Fragment>
    );
};

export default CreatePage;