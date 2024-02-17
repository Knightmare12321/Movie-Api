import { createSlice } from "@reduxjs/toolkit";
const storage = JSON.parse(localStorage.getItem("favourites"))
const initialState = {
    favs: storage || []
}

function getIndex(fav, arr){
    return arr.findIndex(item => item.id == fav.id)
}

export const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers:{
        addFav:(state, action) =>{
            state.favs = [...state.favs, action.payload]
            localStorage.setItem("favourites", JSON.stringify(state.favs));
        },
        deleteFav:(state,action) =>{
            state.favs.splice(getIndex(action.payload, state.favs), 1)
            localStorage.setItem("favourites", JSON.stringify(state.favs));
        }
    },
    
})

export const {addFav, deleteFav} = favSlice.actions
export default favSlice.reducer;