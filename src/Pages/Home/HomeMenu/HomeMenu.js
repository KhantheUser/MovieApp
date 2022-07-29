import React ,{useState,useEffect, Fragment} from 'react'

import {  Radio, Space, Tabs  } from 'antd'
import { useDispatch } from 'react-redux';
import { getCinema } from '../../../Slices/cinema';
import { toContainElement } from '@testing-library/jest-dom/dist/matchers';
import { NavLink } from 'react-router-dom';
import  './scrollbar.scss'
import dayjs from 'dayjs';
import './HomeMenu.scss'
const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const {cinemaArr} = props;
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCinema())
        console.log(cinemaArr)
     },[])
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

                            <NavLink  className="text-green-500" to={`checkout/${lichChieu.maLichChieu}`}>{dayjs(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")}</NavLink>
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
    <div className="py-12" >
     
      <Tabs tabPosition={tabPosition}>
       

        {renderHeThongRap()}
       
      </Tabs>
    </div>
  )
}
