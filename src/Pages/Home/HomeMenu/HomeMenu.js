import React ,{useState,useEffect, Fragment} from 'react'
import Slider from "react-slick";
import {   Tabs  } from 'antd'
import { useDispatch } from 'react-redux';
import { getCinema } from '../../../Slices/cinema';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import  './scrollbar.scss'
import dayjs from 'dayjs';
import './HomeMenu.scss'
import UseWindowSide from '../../../CustomHook/useWindowSize';

const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const navigate = useNavigate()
  const size = UseWindowSide()
  const {cinemaArr} = props;
  const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getCinema())
        
     },[])
    let mangPhimMobile =[]
      cinemaArr.slice(0,3).forEach((cinema,index)=>{
        cinema.lstCumRap.slice(0,3).map((cumRap)=>{
          cumRap.danhSachPhim.slice(0,3).map((phim,index)=>{
            mangPhimMobile.push(phim)
          })
        })
      })
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const renderCardPhim =(a,b)=>{
      return (
        <div className="cumRapMobile" >
           {mangPhimMobile.slice(a,b).map((phim,index)=>{
              return (
                <div key={index} className=' test flex ' style={{backgroundColor:'rgba(0,0,0,0.8)'}} >

                  <img src={phim.hinhAnh} style={{width:'90px',height:'120px'}} alt="" />
                  <div className="ml-2 ">
                    <h3 className="text-white font-semibold text-lg">{phim.tenPhim}</h3>
                    <p>{phim.moTa}</p>
                    <button onClick={()=>navigate(`details/${phim.maPhim}`)} className="text-yellow-500 text-lg mt-4 rounded-md hover:text-white hover:bg-yellow-500 transition-all duration-300" style={{padding: '5px 10px',border:'1px solid yellow'}}>Get Tickets</button>
                  </div>
                </div>
                
              )
           })}
            
          </div>
      )
    }
     
      

  const renderHeThongRapMobile= ()=>{
    return (

   
    
   <div className='  p-2'>
        <Slider arrows={false} className="sliderMobile" {...settings}>
           {renderCardPhim(0,4)}
           {renderCardPhim(4,8)}
           {renderCardPhim(8,12)}
           {renderCardPhim(12,16)}
           {renderCardPhim(16,20)}
           {renderCardPhim(20,24)}
          
          
        
          
        </Slider>
      </div>
     )
  }
  const renderHeThongRap = ()=>{
    return cinemaArr?.map((cinema,index)=>{
      
      return (
       <TabPane   tab={<img className='rounded-full  ' style={{width:'50px', height:'50px'}} src={cinema.logo}/>} key={index}> 
            <Tabs     tabPosition={tabPosition}>
                {cinema.lstCumRap?.slice(0,6).map((cumRap,index)=>{
                  return (
                    <TabPane  tab={
                      <div  style={{width:'320px'}} className='flex items-center'>

                    <img className="rounded-md"   style={{width:'50px', height:'50px'}} src={cumRap.hinhAnh}/>
                      <div className="ml-4 text-left flex-col justify-center">
                       <p style={{color:""}} className="text-cyan-500 font-semibold">
                        {cumRap.tenCumRap}
                        
                       </p> 
                      <p className="text-red-500 m-0">[Details]</p>
                      </div>
                      </div>
                    
                    } key={index}>
                    <div  style={{height:"500px",overflowY:"scroll"}}>
{cumRap.danhSachPhim.map((film,index)=>{
                      return (
                      <Fragment key={index}>
                      <div className='my-2' >
                       <div className='flex'>
                        <img
                        className="rounded-sm cursor-auto" src={film.hinhAnh} alt="" style={{width:'70px', height:'100px'}} onError={(e)=>e.target.src="https://acegif.com/wp-content/uploads/loading-1.gif"}/>
                         <div className='ml-2'>
                        <h3 className="text-base hover:text-blue-500 cursor-pointer text-white ">{film.tenPhim}</h3>
                        <p className="text-white hover:text-blue-500 cursor-pointer">{cumRap.diaChi}</p>
                        <div className="grid grid-cols-4 gap-6">

                        {film.lstLichChieuTheoPhim?.slice(0,8).map((lichChieu,index)=>{
                          return (
                            <div style={{padding:'6px 10px',background:'#0f172a',borderRadius:5}} key={index}>

                            <NavLink  className="text-green-500" to={`details/${film.maPhim}`}>{dayjs(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")}</NavLink>
                            </div>
                          )
                        })}
                        </div>
                       </div>
                       </div>
                      
                      
                      </div>
                      <hr />
                      </Fragment>)
                    })}
                    </div>
                    
                    </TabPane>
                  )
                })}
            </Tabs>
          
        </TabPane>
      )
    }
    )
  }
     const [tabPosition, setTabPosition] = useState('left');
   
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div className="py-12 " >
     
     
      {size.width > 1024 ?  <Tabs tabPosition={tabPosition}>
       

        {renderHeThongRap()}
        
       
      </Tabs> : renderHeThongRapMobile()}
      {/* {renderHeThongRapMobile()} */}
     
      
    </div>
  )
}
