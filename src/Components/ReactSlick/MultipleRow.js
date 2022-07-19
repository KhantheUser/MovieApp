import React, { Component } from "react";
import Slider from "react-slick";
import HomeCard from "../../Pages/Home/HomeCard/HomeCard";
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai'
import styled from './MuitipleRow.module.css'
import {Button} from '@mantine/core'
import {useDispatch} from 'react-redux'
import { getMovieComingSoon, getMovieShowing } from "../../Slices/movie";
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className="invisible lg:visible bg-slate-300 h-10 w-10 absolute top-1/2 -left-10 flex justify-center items-center rounded-full transition hover:scale-110 cursor-pointer"
          
      onClick={onClick}
    >
      <AiOutlineDoubleLeft className="text-xl"/>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  
 return (
    <div
      className="invisible lg:visible bg-slate-300 h-10 w-10 absolute top-1/2 -right-10 flex justify-center items-center rounded-full transition hover:scale-110 cursor-pointer"
          
      onClick={onClick}
    >
      <AiOutlineDoubleRight className="text-xl"/>
    </div>
  );
}

 const MultipleRows =(props)=> {
    
const dispatch = useDispatch()
 const renderMovie = ()=>{
        return props.movieArr.slice(0,12).map((movie,index)=>{
            return (
                <div  key={index} className={`${styled['width-item']} my-10`} >
               

                    <HomeCard key={index}  movie={movie}/>
              
                </div>
               
            )
        })
  }
 
    
const settings = {
      className: "center slider variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
     
      slidesToShow: 3,
      // slidesToScroll: 2,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      variableWidth: true,
      // initialSlide: 0,
      responsive: [
       
        {

          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
    return (
      <div style={{marginLeft:'4%'}} className='relative '>
       {/* <SamplePrevArrow  /> */}
      <button onClick={()=>{
        dispatch(getMovieShowing())
      }}  className="mr-3 bg-transparent hover:bg-cyan-400 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded" variant="outline" color="cyan" >Now Showing</button>
      <button onClick={()=>dispatch(getMovieComingSoon())} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Coming soon</button>

          <Slider {...settings} className="container-dn overflow-hidden ">
          
          {renderMovie()}
         
          
        </Slider>
      </div>
    );
  
}
export default MultipleRows;