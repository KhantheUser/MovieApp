import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel'
import ReactPlayer from 'react-player';
import { setMovieTrailer } from '../../Slices/movie'
export default function HomeTemplate() {
  const dispatch = useDispatch()
  useEffect(()=>{
      window.scrollTo(0, 0)
  },[])
  const {movieTrailer} = useSelector((state)=>state.movie)
  return (
    <div style={{backgroundImage:'#F5FFFA'}}>
    <div  onClick={(e)=>{e.stopPropagation();dispatch(setMovieTrailer({url:"",status:"none"}));console.log('hello')}}  style={{height:'100vh',backgroundColor:'rgba(0,0,0,0.8',display:'flex',justifyContent: 'center',alignItems:'center'}} className={`fixed top-0 right-0 left-0  z-50  d-${movieTrailer.status}`} >
    <div className="w-11/12   md:w-7/12 h-full mx-auto flex justify-center items-center">

    
          <ReactPlayer 
     controls    style={{margin:'10% 0',transition:'all 1s linear',transform:'scale(1.2)'}} url={movieTrailer.url} />
     </div>
        </div>
       <Header/>
        
        <div  className='' > 

        <Outlet />
        </div>
       <Footer/>
    </div>
  )
}
