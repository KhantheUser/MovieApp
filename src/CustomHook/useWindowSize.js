import React,{useState,useEffect} from 'react'

function UseWindowSide() {
    const [size,setSize]=useState({
        width : window.innerWidth,
        height:window.innerHeight
    })
    
    useEffect(()=>{
        const handleResize = ()=>{
            setSize({
                width : window.innerWidth,
                height:window.innerHeight
            })
        }
        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[size])
  return size
}

export default UseWindowSide