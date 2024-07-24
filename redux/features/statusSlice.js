import {createSlice} from "@reduxjs/toolkit";

export const statusSlice = createSlice({
   name: "status",
    initialState : {
       isActive : false,
        statusIcon: "",
        statusText: ""
    },
    reducers : {
       activeStatus : (state, action) => {
           state.isActive = true;
           if (action.payload.status === "SUCCESS") {
               state.statusIcon = "/check-mark.svg"
               state.statusText = `${action.payload.req} was successful`
           }
           if (action.payload.status === "Error") {
               state.statusIcon = "/error.svg"
               state.statusText = `failed to ${action.payload.req}. Try again later`
           }
       },

       closeStatus : (state) => {
           state.isActive = false;
       }
    }
});

export const {activeStatus, closeStatus} = statusSlice.actions;
export const statusReducer = statusSlice.reducer;