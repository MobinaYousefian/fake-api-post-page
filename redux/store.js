import { configureStore } from '@reduxjs/toolkit'
import {postReducer} from "@/redux/features/postSlice";
import {statusReducer} from "@/redux/features/statusSlice";

export const store = configureStore({
    reducer: {
        post: postReducer,
        status: statusReducer
    },
})