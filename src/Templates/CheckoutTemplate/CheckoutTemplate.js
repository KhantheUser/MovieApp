import React, { useEffect } from 'react'
import { USER_LOGIN } from '../../Util/Settings/config'
import { Navigate } from 'react-router-dom'
import Checkout from '../../Pages/Checkout/Checkout'
export default function CheckoutTemplate() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
   if(!localStorage.getItem(USER_LOGIN)){
    return <Navigate to="/login"/>
   }else{
return (
    <div>
      <Checkout/>
    </div>
  )
   }
  
}
