import { configureStore } from '@reduxjs/toolkit'
import {postReducer} from "@/redux/features/postSlice";

export const store = configureStore({
    reducer: {post: postReducer},
})