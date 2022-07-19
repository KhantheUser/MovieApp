// import {createSlice} from '@reduxjs/toolkit';

// const loadingSlice = createSlice({
//     name: 'loading',
//     initialState: {
//         isLoading: false,

//     }
//     ,
//     reducers:{}
// })

// export default loadingSlice.reducer;

const initialState ={
    isLoading:false,
    
   
}
const loadingSlice = (state=initialState,action)=>{
    switch(action.type){
        case 'DISPLAY_LOADING':{
           return {...state,isLoading:true}
            
        }
        case 'HIDE_LOADING':{
            return {...state,isLoading:false}
        }
        // case 'SET_ACTIVE':{
        //     return {...state,tabActive:'2'}
        // }
        // case "SET_SUCCESS_TICKET":{
        //     return {...state,successTicket:true}
        // }
        
        default : return state
    }
}
export default loadingSlice;