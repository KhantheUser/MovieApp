import React, { Component } from "react";
import Slider from "react-slick";
import { MultiSelect } from '@mantine/core';
import HomeCard from "../../Pages/Home/HomeCard/HomeCard";
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai'
import styled from './MuitipleRow.module.css'
import {Button} from '@mantine/core'
import {useDispatch} from 'react-redux'
import { getMovie, getMovieComingSoon, getMovieShowing } from "../../Slices/movie";
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
  console.log(props.movieArr)
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
      className: "center ",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
     
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      variableWidth: true,
      responsive: [
       
        {

          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            rows :1,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows:1,
           
            
          }
        },
        {
          breakpoint: 510,
          settings: {
            slidesToShow: 1,
            
            slidesToScroll: 2,
            rows:1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    

    return (
      <>
         <div className=" mx-auto text-center">
           
         <button  onClick={()=>{
        dispatch(getMovie())
      }}  className={`${styled['now-showing']} mr-3 bg-transparent relative overflow-hidden  text-cyan-700 font-semibold  py-2 px-4 border hover:border-transparent rounded`} variant="outline" color="cyan" ><span className={styled['ani-showing']}></span> All Movies</button>
           
        <button  onClick={()=>{
        dispatch(getMovieShowing())
      }}  className={`${styled['now-showing']} mr-3 bg-transparent relative overflow-hidden  text-cyan-700 font-semibold  py-2 px-4 border hover:border-transparent rounded`} variant="outline" color="cyan" ><span className={styled['ani-showing']}></span> Now Showing </button>
      
      <button  onClick={()=>{
        dispatch(getMovieComingSoon())
      }}  className={`${styled['now-showing']} mr-3 bg-transparent relative overflow-hidden  text-cyan-700 font-semibold  py-2 px-4 border hover:border-transparent rounded`} variant="outline" color="cyan" ><span className={styled['ani-showing']}></span> Coming soon </button>
          
       </div>
    
      <div style={{marginLeft:'4%'}} className='relative overflow-hidden'>
    
      
      
<Slider {...settings} dots={false}>
{renderMovie()}
        </Slider>
        
      </div>
        </>
    );
  
}
export default MultipleRows;