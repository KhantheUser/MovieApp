import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import carouselApi from "../Services/carouselAPi";
export const getCarouselAPI  = createAsyncThunk("get/carousel",
async ()=>{
    try{
        const {data} = await carouselApi.getCarousel();
    // console.log(data)
    return data
    }catch(err){
        console.log(err.response.data)
    }
}
)
const carouselSlice = createSlice({
    name: "carousel",
    initialState: {
//         arrImg :[{
//     "maPhim": "1238",
//     "hinhAnh": "./images/doctorstrange2.jpg",
//     "id": "1"
//   },
//   {
//     "maPhim": "1239",
//     "hinhAnh": "./images/spiderman.jpg",
//     "id": "2"
//   },
//   {
//     "maPhim": "1240",
//     "hinhAnh": "./images/thor.jpg",
//     "id": "3"
//   },
//   {
//     "maPhim": "1241",
//     "hinhAnh": "./images/iron-man-3.jpg",
//     "id": "4"
//   }]
arrImg :[]
    },
    reducers: {},
    extraReducers : {
        [getCarouselAPI.pending] : (state,{payload})=>{
           
        },
        [getCarouselAPI.fulfilled] : (state,{payload})=>{
           state.arrImg = payload
        },
        [getCarouselAPI.rejected] : (state,{error})=>{

        }
    }
})

export default carouselSlice.reducer