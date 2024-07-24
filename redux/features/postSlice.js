import {createSlice} from "@reduxjs/toolkit";

export const postSlice = createSlice({
   name : "post",
   initialState : {
       postList : [],
       headline: "",
       description: ""
   },
   reducers : {
       setPost : (state, action) => {
           state.postList = action.payload.flat()
       },

       setHeadline : (state, action) => {
           state.headline = action.payload
       },

       setDescription : (state, action) => {
           state.description = action.payload
       },
   }
});

export const {setPost, setDescription, setHeadline} = postSlice.actions;
export const postReducer = postSlice.reducer;