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
    <div>
    <div onClick={(e)=>{e.stopPropagation();dispatch(setMovieTrailer({url:"",status:"none"}));console.log('hello')}}  style={{height:'100vh',backgroundColor:'rgba(0,0,0,0.8',display:'flex',justifyContent: 'center',alignItems:'center'}} className={`fixed top-0 right-0 left-0 z-50  d-${movieTrailer.status}`} >
          <ReactPlayer width="740px"
    height="416px" controls  style={{margin:'0 auto',marginTop:'10%',transition:'all 1s linear',transform:'scale(1.2)'}} url={movieTrailer.url} />
        </div>
       <Header/>
        
        <div style={{backgroundImage:"linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://www.tollywood.net/wp-content/uploads/2021/12/IMDb-list-of-10-most-anticipated-films-of-2022.jpg')",backgroundSize:"100%"}} className=''> 

        <Outlet />
        </div>
       <Footer/>
    </div>
  )
}
