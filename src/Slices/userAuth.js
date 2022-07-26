import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { history } from "../App";
import userAuth from "../Services/userAuthAPI";
import { TOKEN, USER_LOGIN } from "../Util/Settings/config";


export const postUserLogin = createAsyncThunk("post/user/login",async(thongTinDangNhap)=>{
    try{
          const data=  await userAuth.postUserLogin(thongTinDangNhap)
        //   console.log(data)
          
          return data
    }catch(e){
       console.log('error login')
    }
})
export const postThongTinDatVe = createAsyncThunk("post/user/thongTinDatVe",async()=>{
    try {
        const data = await userAuth.postThongTinNguoiDung();
        return data
    }catch(e){
        console.log(e)
    }
})
const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        userLogin: JSON.parse(localStorage.getItem(USER_LOGIN)) || {},

        thongTinNguoiDung :{},
        thongTinLoading : false
    },
    reducers : {

    },
    extraReducers : {
       
        [postUserLogin.fulfilled] : (state, {payload})=>{
            if(typeof payload === "string"){
                <Navigate to="/login"/>
                alert('Password or account is wrong')
            }else{
                localStorage.setItem(USER_LOGIN,JSON.stringify(payload))
            localStorage.setItem(TOKEN,JSON.stringify(payload.accessToken))
            history.goBack()
            state.userLogin = payload;
            }
            
        },
        [postThongTinDatVe.pending]:(state,{payload})=>{
            state.thongTinLoading = true
        },
        [postThongTinDatVe.fulfilled] : (state, {payload})=>{
            state.thongTinNguoiDung = payload;
            state.thongTinLoading = false
        }
    }
})

export default userAuthSlice.reducer