import React, { Fragment } from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function Loading() {
    const {isLoading}=useSelector((state)=>state.loading)
  return (
    <Fragment>
        {isLoading?
    <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5',display:'flex',justifyContent:'center',alignItems: 'center',zIndex:99}}>
        <div className="text-4xl text-white" style={{backgroundImage:'url("https://cdn.dribbble.com/users/2029054/screenshots/6127016/ezgif.com-video-to-gif.gif")',backgroundSize:'cover',height:'100%',width:'100%',opacity:'0.8'}} ></div>
    </div> :""}
    </Fragment>
  )
}
