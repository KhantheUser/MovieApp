import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import cinemaAPI from "../Services/cinemaAPI";


export const getCinema = createAsyncThunk("get/cinema",async()=>{
    try{
        const data = await cinemaAPI.getMovie();
        return data
    }catch(e){
        console.log(e);
    }
})
const cinemaSlice = createSlice({
    name: "cinema",
    initialState: {
        cinemaArr : []

    },
    reducers: {},
    extraReducers: {
        [getCinema.fulfilled]: (state, {payload}) => {
            state.cinemaArr = payload;

        }
    }

})

export default cinemaSlice.reducer