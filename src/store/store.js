import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../features/fav/favSlice";
import movieReducer from "../features/movie/movieSlice"
import watchReducer from "../features/watchlist/watchlistSlice"

export const store = configureStore({
    reducer:{
        fav: favReducer,
        watch: watchReducer,
        movie: movieReducer
    }
})