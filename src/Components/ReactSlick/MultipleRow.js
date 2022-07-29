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
    const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];
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
      rows: 2,
      slidesPerRow: 1,
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
    
      <div style={{marginLeft:'4%'}} className='relative '>
    
      
      

          <Slider {...settings} className="container-dn overflow-hidden ">
          
          {renderMovie()}
         
          
        </Slider>
      </div>
        </>
    );
  
}
export default MultipleRows;