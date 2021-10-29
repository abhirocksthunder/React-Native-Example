/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";
import { MovieData } from "../app/models/Movies";


interface MoviesList{
    movies: MovieData[]
}

const initialState = {
    movies : []
} as MoviesList;

const moviesSlicer = createSlice({
    name:'movies',
    initialState,
    reducers:{
        getNewReleases(state,action){
            return{
                ...state,
                movies: action.payload
            };
        }
    }
});

export const moviesActions = moviesSlicer.actions;

export default moviesSlicer.reducer;