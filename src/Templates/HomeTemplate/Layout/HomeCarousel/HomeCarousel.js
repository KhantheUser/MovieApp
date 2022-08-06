import React ,{useEffect,useRef} from 'react'
import { Carousel } from 'antd'
import Slider from 'react-slick'

import { useSelector,useDispatch } from 'react-redux';
import { getCarouselAPI } from '../../../../Slices/carrousel';
import './HomeCarrousel.scss'
export default function HomeCarousel() {
 
  const dispatch = useDispatch();
    const contentStyle = {
  height: '500px',
  maxHeight: '500px',

  
  
  
  
  backgroundSize:"100% 100%",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
useEffect(()=>{
  dispatch(getCarouselAPI())
},[])
const {arrImg} = useSelector(state => state.carrousel);
const carouselRef = useRef()
 const handleNext = () => carouselRef.current.next();

 const handlePrev = () => carouselRef.current.prev();
const renderBanner = ()=>{
  
  return arrImg.map((item,index)=>{
    return (
     <div  key={index} >

     
        <div  style={{...contentStyle,backgroundImage: `url(${item.hinhAnh})`}}>
              <img src={item.hinhAnh} alt={item.hinhAnh} className="w-full h-full opacity-0 " />
        </div>
       
         
        </div>
      
    )
  })
  
  
  
}
  return (
    <div>

   
     <Carousel   easing='linear' className='relative' ref={carouselRef}
        
     autoplay>
   
    {renderBanner()}
   
  </Carousel>
 <div className="arrow-next-css " onClick={handleNext} >

        </div>
        <div className="arrow-pre-css lg:block" onClick={handlePrev} >

        </div>
   </div>
  
  )
}
