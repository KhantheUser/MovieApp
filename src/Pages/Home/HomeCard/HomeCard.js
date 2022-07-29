import React from 'react'
import {Card} from 'antd'
import {useDispatch} from 'react-redux'
import { Button } from '@mantine/core';
import './HomeCard.css'
import { NavLink } from 'react-router-dom';
import {FaPlay} from 'react-icons/fa'
import { setMovieTrailer } from '../../../Slices/movie';

const { Meta } = Card;


export default function HomeCard(props) {
  const dispatch = useDispatch()
  const {movie} = props
  const handleErrorImage = (e)=>{
e.target.src = 'https://i.pinimg.com/originals/8f/0f/1a/8f0f1a58f61495c4d27bec21c31d7a28.gif'
  }
  return (
    
//     <Card className='home-card   '
//     hoverable={true}
//     style={{
//       position: 'relative',
//       width: "90%",
//       maxWidth :"100%",
//       borderRadius: "8px",


      
//     }}
//     cover={<div className='homeCardImg' style={{backgroundImage:`url(${movie.hinhAnh}), url("https://i.pinimg.com/originals/63/eb/c0/63ebc09daae37481cbdc0aa734202609.gif")`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
// <img onError={handleErrorImage} alt="example" src={movie.hinhAnh} className="opacity-0  " width="100%" style={{height:"250px"}} />
// <div className='hoverMovie' style={{backgroundColor:'rgba(0,0,0,0.8)',height:'250px',position:"absolute",top:-1,left:0,width:'100%',display:'none'} }></div>
//     </div>}
//   >
  
//  <h2 className='h-10'>{movie.tenPhim}</h2>
//    <p className="h-16">{movie.moTa.length >100 ? <span>{movie.moTa.slice(0,100)}...</span>:<span>{movie.moTa}</span>}</p>

  
//   <NavLink to={`details/${movie.maPhim}`}>

//    <Button variant="outline" color="cyan">Get Tickets</Button>
//   </NavLink>
//   </Card>
<div className="card cardHover" style={{width: '18rem'}}>
  <div className='homeCardImg' style={{backgroundImage:`url(${movie.hinhAnh}), url("https://i.pinimg.com/originals/63/eb/c0/63ebc09daae37481cbdc0aa734202609.gif")`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
<img onError={handleErrorImage} alt="example" src={movie.hinhAnh} className="opacity-0  " width="80%" style={{height:"250px"}} />
 <div className='hoverMovie' onClick={()=>dispatch(setMovieTrailer({url:movie.trailer,status:'block'}))} >
  <div className="circle">
  <p className="flex justify-center items-center">{<FaPlay style={{fontSize:20,lineHeight:50,position: 'relative',top:'12px'}}/>}</p>
</div>
 </div>
    </div>
  <div className="card-body">
    <h5 className="card-title h-10 text-lg font-semibold mb-6 ">{movie.tenPhim.length > 50 ? movie.tenPhim.slice(0,50)+'...' : movie.tenPhim}</h5>
    <p className="h-16 card-text">{movie.moTa.length >100 ? <span>{movie.moTa.slice(0,100)}...</span>:<span>{movie.moTa}</span>}</p>
   <NavLink to={`details/${movie.maPhim}`}>
 


    <Button variant="outline" color="cyan">Get Tickets</Button>
  </NavLink>
    
  </div>
</div>


  )
}
