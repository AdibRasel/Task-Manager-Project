import {createSlice} from "@reduxjs/toolkit";

export const taskSlice=createSlice({
    name:"task",
    initialState:{
        New:[],
        Completed:[],
        Progress:[],
        Canceled:[]
    },
    reducers:{
        SetNewTask:(state,action)=>{
            state.New=action.payload
        },
        SetComplateTask:(state, action)=>{
            state.Completed=action.payload
        },
        SetProgressTask:(state,action)=>{
            state.Progress=action.payload
        },
        SetCanceledTask:(state,action)=>{
            state.Canceled=action.payload
        }
    }
})

export const {SetNewTask, SetComplateTask, SetProgressTask, SetCanceledTask}=taskSlice.actions;
export default taskSlice.reducer;