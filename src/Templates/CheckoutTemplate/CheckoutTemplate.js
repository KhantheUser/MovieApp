import React, { useEffect } from 'react'
import { USER_LOGIN } from '../../Util/Settings/config'
import { Navigate } from 'react-router-dom'
import Checkout from '../../Pages/Checkout/Checkout'
import UseWindowSide from '../../CustomHook/useWindowSize'
export default function CheckoutTemplate() {
  const size = UseWindowSide()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
   if(!localStorage.getItem(USER_LOGIN) ){
    return <Navigate to="/login"/>
   }
   else if(size.width<888){
      return <>
      <h1>
        Wait for us {'<3'} !!!
      </h1>
        <div style={{backgroundImage:'url("https://i.pinimg.com/originals/df/ea/dd/dfeaddf703acf71277dbb1d6d81479b0.gif")',backgroundSize:'100% 100%',height:'100vh'}}>

      </div>
      </>
   }else {
    return (
      <div>
        <Checkout/>
      </div>
    )
   }

   }
  

