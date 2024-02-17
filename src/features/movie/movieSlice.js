import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    filteredMovies: [],
    value: "",
    selection: "popular",
    url: "https://api.themoviedb.org/3/movie/popular?api_key=e58b9005de2ae66c8af27c9c2846ee65",
    selectedMovie: null
}

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload
            state.filteredMovies = action.payload
        },
        setUrl: (state, action) => {
            state.url = action.payload
        },
        setSelection: (state, action) => {
            state.selection = action.payload
        },
        filterMovie: (state, action) => {
            state.value = action.payload
            let filteredMovies = [...state.movies]
            if (action.payload) {
                filteredMovies = filteredMovies.filter(item => {
                    return (
                        item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
                    )
                })
            }
            state.filteredMovies = filteredMovies;
        },
        selectMovie: (state, action) => {
            state.selectedMovie = action.payload
        }

    },

})

export const { getMovies, setUrl, setSelection, filterMovie, selectMovie } = movieSlice.actions
export default movieSlice.reducer;