import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/products-reducer";



export const store = configureStore({

    reducer : {
          product: productReducer
    }
})