import { configureStore } from "@reduxjs/toolkit";
import product from "../reducers/product";



export const store = configureStore({

    reducer : {
          product:product
    }
})