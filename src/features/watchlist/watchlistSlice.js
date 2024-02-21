import { createSlice } from "@reduxjs/toolkit";
const storage = JSON.parse(localStorage.getItem("watchlists"))
const initialState = {
    watchlists: storage || []
}

function getIndex(fav, arr){
    return arr.findIndex(item => item.id == fav.id)
}

export const watchSlice = createSlice({
    name: "watch",
    initialState,
    reducers:{
        addWatch:(state, action) =>{
            state.watchlists = [...state.watchlists, action.payload]
            localStorage.setItem("watchlists", JSON.stringify(state.watchlists));
        },
        deleteWatch:(state,action) =>{
            state.watchlists.splice(getIndex(action.payload, state.watchlists), 1)
            localStorage.setItem("watchlists", JSON.stringify(state.watchlists));
        }
    },
    
})

export const {addWatch, deleteWatch} = watchSlice.actions
export default watchSlice.reducer; 