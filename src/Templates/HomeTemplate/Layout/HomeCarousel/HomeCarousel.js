import React ,{useEffect} from 'react'
import { Carousel } from 'antd'
import { useSelector,useDispatch } from 'react-redux';
import { getCarouselAPI } from '../../../../Slices/carrousel';
import './HomeCarrousel.css'
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
    
     <Carousel  autoplay>
   
    {renderBanner()}
  </Carousel>
  )
}
