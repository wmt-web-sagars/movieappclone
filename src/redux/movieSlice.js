import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

export const {getApiConfiguration,getGenres}=movieSlice.actions
export default  movieSlice.reducer