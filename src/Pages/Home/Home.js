import React from 'react'
import { useEffect } from 'react'

import { useSelector ,useDispatch} from 'react-redux'
import MultipleRows from '../../Components/ReactSlick/MultipleRow'
import { getCinema } from '../../Slices/cinema'
import { getMovie } from '../../Slices/movie'
import HomeCarousel from '../../Templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
import HomeCard from './HomeCard/HomeCard'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home() {
  const {movieArr} = useSelector(state => state.movie)
  const {cinemaArr} = useSelector(state => state.cinema)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getMovie())
      dispatch(getCinema())
  },[])
  const renderMovie = ()=>{
    return movieArr.map((movie,index)=>{
      return ( <HomeCard key={index} movie={movie}/> )
    })
  }
  return (
    <>

       <HomeCarousel />

    
    <div className='container-dn mt-20 '>
    
    
  

    <MultipleRows movieArr={movieArr} />
   

    
    <div className='mx-18'>

      <HomeMenu cinemaArr={cinemaArr}/>
    </div>
    </div>
        </>
  )
}
