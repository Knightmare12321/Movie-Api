import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../features/fav/favSlice";
import movieReducer from "../features/movie/movieSlice"

export const store = configureStore({
    reducer:{
        fav: favReducer,
        movie: movieReducer
    }
})