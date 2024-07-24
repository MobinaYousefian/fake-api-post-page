import {createSlice} from "@reduxjs/toolkit";

export const postSlice = createSlice({
   name : "post",
   initialState : {
       postList : []
   },
   reducers : {
       setPost : (state, action) => {
           state.postList = action.payload
       }
   }
});

export const {setPost} = postSlice.actions;
export const postReducer = postSlice.reducer;