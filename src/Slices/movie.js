import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

export const getMovie = createAsyncThunk("get/movies",async()=>{
  try{
    const data =await movieAPI.getMovie()
    return data
  }catch(e){
    console.log(e)
  }
})
export const getMovieShowing = createAsyncThunk("get/movies/showing",async(value,{dispatch})=>{
  try{
    const data =await movieAPI.getMovie()

    return data
  }catch(e){
    console.log(e)
  }
})
export const getMovieComingSoon = createAsyncThunk("get/movies/comingsoon",async()=>{
  try{
    const data =await movieAPI.getMovie()

    return data
  }catch(e){
    console.log(e)
  }
})
export const getMovieDetails = createAsyncThunk("get/movies/details",async(id)=>{
  try{
    const data = await movieAPI.getMovieDetails(id)
    return data
  }catch(e){
    console.log(e)
  }
})
export const getMoviePage = createAsyncThunk("get/movies/page",async(page)=>{
  try{
    const data = await movieAPI.getMoviePage(page)
    return data.items
  }catch(e){
    console.log(e)
  }
})
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieArr :[],
        movieDetail : {},
        movieTrailer : {
          url:"",
          status : 'none'
        }
    },
    reducers: {
       setMovieTrailer : (state,{payload})=>{
        state.movieTrailer = payload
       }
    },
    extraReducers:{
        [getMovie.fulfilled]:(state,{payload})=>{
            state.movieArr = payload
        },
        [getMovieShowing.fulfilled]:(state,{payload})=>{
         state.movieArr =payload.filter((movie,index)=>{
            console.log('s')
            return movie.dangChieu === true
          })
        },
        [getMovieComingSoon.fulfilled]:(state,{payload})=>{
          state.movieArr =payload.filter((movie,index)=>{
            return movie.sapChieu === false
          })
        },
        [getMovieDetails.fulfilled]:(state,{payload})=>{
          state.movieDetail = payload
        },
        [getMoviePage.fulfilled]:(state,{payload})=>{
          
          state.movieArr = payload.slice(0,8)
        }

    }
})

export default movieSlice.reducer
export const {setMovieTrailer} = movieSlice.actions