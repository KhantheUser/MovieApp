import React from 'react'
import { useEffect ,useState} from 'react'
import { Pagination } from '@mantine/core';
import { useSelector ,useDispatch} from 'react-redux'
import MultipleRows from '../../Components/ReactSlick/MultipleRow'
import { getCinema } from '../../Slices/cinema'
import { getMovie, getMoviePage } from '../../Slices/movie'
import HomeCarousel from '../../Templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
import HomeCard from './HomeCard/HomeCard'
import HomeMenu from './HomeMenu/HomeMenu'
import HomeDownload from './HomeDownload/HomeDownload';
import HomeMore from './HomeMore/HomeMore';

export default function Home() {

     const dispatch = useDispatch()
   const [activePage, setPage] = useState(1);
 
    // const [totalPage, setTotalPage] = useState(1);
    const handlePage = (key)=>{
      // console.log(typeof key.toString())
      console.log(key)
      setPage(key)
      dispatch(getMoviePage(key))
    }
  const {movieArr} = useSelector(state => state.movie)
  const {cinemaArr} = useSelector(state => state.cinema)
 
  useEffect(()=>{
      dispatch(getMoviePage(1))
      dispatch(getCinema())
  },[])
 
  return (
    <>

       <HomeCarousel />

    {/* MultipleRows and pagination */}
    <div className='container-dn mt-14 ' >
    
    
  

    <MultipleRows movieArr={movieArr} />
    <div className="text-center flex justify-center pb-4">

    <Pagination  page={activePage} onChange={(key)=>handlePage(key)} total={10} style={{margin:'0 auto'}} />;
    </div>
   

    
    
    </div>

    {/* Home menu */}
    <div style={{backgroundImage:"linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://www.tollywood.net/wp-content/uploads/2021/12/IMDb-list-of-10-most-anticipated-films-of-2022.jpg')",backgroundSize:"100%"}}>
      <div className='container-dn'>

      <HomeMenu cinemaArr={cinemaArr}/>
    </div>
    </div>

    {/* Home download */}
    <HomeMore/>
 <HomeDownload/>
    
        </>
  )
}
