import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../redux/movieSlice"

export const store=configureStore({
    reducer:{
       movies: moviesReducer,
    } 

})