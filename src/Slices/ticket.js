import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import ticketAPI from '../Services/ticketAPI';
import store from '../configStore';
import { useParams } from 'react-router-dom';
import { connection } from '..';


export const getPhongVe = createAsyncThunk('ticket/getPhongVe',async (id)=>{
    const data = await ticketAPI.getPhongVe(id);
    return data
})
export const postDatVe = createAsyncThunk('ticket/postDatVe',async (thongTinDatVe,{dispatch})=>{
    
    
    try{
        dispatch({
            type:"DISPLAY_LOADING",
        })
        const data = await ticketAPI.postDatVe(thongTinDatVe);
        await dispatch(getPhongVe(thongTinDatVe.maLichChieu))
        await dispatch({
            type:"HIDE_LOADING",
        })
        

        
        
        return data;
    }catch(error){
        dispatch({
            type:"HIDE_LOADING",
        })
        console.log(error)
    }
})
export const datGheThunk = createAsyncThunk('ticket/datGheThunk',async ({item,id},{dispatch,getState})=>{
        try{
                await dispatch(datGhe(item))
                let danhSachGheDangDat = getState().ticket.danhSachGheDangDat;
                let taiKhoan = getState().user.userLogin.taiKhoan
                
                console.log('ghe Dang dat',danhSachGheDangDat);
                console.log('Ma lich chieu',id);
                danhSachGheDangDat =JSON.stringify(danhSachGheDangDat);
                // connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,id)
        }catch(e){
            console.log(e);
        }
})

const ticketSlice = createSlice({
    name: 'ticket',
    initialState: {
        chiTietPhongVe :{},
        danhSachGheDangDat :[],
        tabActive : '1',
        successTicket : false,
        ticketLoading : false,
        danhSachGheKhachDat : [{maGhe:92521},{maGhe:92522},{maGhe:92523}]
       
    },
    reducers: {
        datGhe : (state,{payload})=>{
            console.log(payload)
            let danhSachGheCapNhap =[...state.danhSachGheDangDat]
            let index = danhSachGheCapNhap.findIndex((item,index)=>{
                return item.maGhe === payload.maGhe
            })
            if(index !== -1){
                danhSachGheCapNhap.splice(index,1)
            }else if(payload.daDat ===true){
                return
            }else if(state.danhSachGheKhachDat.find((item)=> item.maGhe === payload.maGhe)){
                // danhSachGheCapNhap.push(payload)
                return
            }
            else {
                danhSachGheCapNhap.push(payload)
            }
            state.danhSachGheDangDat = danhSachGheCapNhap
        },
        datGheMobile : (state,{payload})=>{
            state.danhSachGheDangDat = payload
        },
        setTabActive : (state,{payload})=>{
            state.tabActive = payload
        },
        handleModal : (state,{payload})=>{
            state.successTicket = false;
            state.tabActive = '2'
        }
    },
    extraReducers : {
        [getPhongVe.pending] : (state,{payload})=>{
                state.ticketLoading = true;
        },

        [getPhongVe.fulfilled] : (state,{payload})=>{
            state.chiTietPhongVe = payload;
            state.ticketLoading = false
        },
        [postDatVe.pending] : (state,{payload})=>{
        //   state.ticketLoading = true
        },
        [postDatVe.fulfilled] : (state,{payload})=>{
           state.danhSachGheDangDat = []
           state.successTicket = true;
        //    state.tabActive = '2'
        },
        [datGheThunk.fulfilled] : (state,{payload})=>{
            //  let danhSachGheCapNhap =[...state.danhSachGheDangDat]
            // let index = danhSachGheCapNhap.findIndex((item,index)=>{
            //     return item.maGhe === payload.maGhe
            // })
            // if(index !== -1){
            //     danhSachGheCapNhap.splice(index,1)
            // }else if(payload.daDat ===true){
            //     return
            // }else if(state.danhSachGheKhachDat.find((item)=> item.maGhe === payload.maGhe)){
            //     // danhSachGheCapNhap.push(payload)
            //     return
            // }
            // else {
            //     danhSachGheCapNhap.push(payload)
            // }
            // state.danhSachGheDangDat = danhSachGheCapNhap
        }
    }
})

export default ticketSlice.reducer;
export const {datGhe,setTabActive,handleModal,datGheMobile} = ticketSlice.actions;