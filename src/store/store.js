import { configureStore } from "@reduxjs/toolkit";
import todo from "../reducers/todo";
// import { todoSlice } from "../reducers/todo";


export const store = configureStore({

    reducer : {
            todos:todo
    }
})