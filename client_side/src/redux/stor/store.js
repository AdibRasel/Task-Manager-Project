import { configureStore } from "@reduxjs/toolkit";


// import { SettingsSlice } from "../state-slice/settings-slice";

// export default configureStore({
//     reducer:{
//         settings: SettingsSlice
//     }
// })

import { taskSlice } from "../state-slice/task-slice";


export default configureStore ({
    reducer:{
        Task: taskSlice
    }
})