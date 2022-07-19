import React from "react";
import { Rate } from 'antd';
import { useEffect,useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, getMovieDetails } from "../../Slices/movie";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import './circle.css'
import {  Radio, Space, Tabs  } from 'antd';
import _, { map } from "lodash";
import { render } from "@testing-library/react";
import './movieDetial.css'
const { TabPane } = Tabs;
function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {movieDetail} = useSelector((state)=>state.movie)
  const details = JSON.stringify(movieDetail.heThongRapChieu)
  console.log(movieDetail)
  console.log(id)
   const [tabPosition, setTabPosition] = useState('left');

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id]);
  const renderHeThongRap = ()=>{
    if(details === '[]'){
        return <div className="flex items-center justify-center w-100" style={{height:'200px'}}><h1 className="text-lg text-center">This film will come soon</h1></div>
    }
      return movieDetail.heThongRapChieu?.map((htr,index)=>{
          
          return (
            <TabPane  tab={<div style={{minWidth:'100px'}} ><img className="mx-auto" style={{width:'50px',height:'50px'}} src={htr.logo} alt="logo"/>{htr.tenHeThongRap}</div>} key={index}>
                
                 {htr.cumRapChieu?.map((cumRap,index)=>{
                  return (
                    <div className="pb-4" key={index}>
                    <div className="pt-2 flex flex-row">
                      <img src={cumRap.hinhAnh} className="rounded-sm" style={{width:'50px', height:'50px'}} alt={cumRap.hinhAnh} />
                      <div className="ml-2">
                        <p className="m-0 text-base font-semibold text-red-700 hover:text-red-500">{cumRap.tenCumRap}</p>
                        <p className="text-blue-700 hover:text-blue-500">{cumRap.diaChi}</p>
                        <div className="grid grid-cols-4">
                          
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4">
                      {cumRap.lichChieuPhim?.map((lichChieu,index)=>{
                        return (
                          <div key={index} onClick={()=>navigate(`/checkout/${lichChieu.maLichChieu}`)} className="cursor-pointer text-yellow-500 font-semibold bg-slate-900 inline-block text-center rounded-xl ml-1">{dayjs(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY mm:ss A")}</div>
                        )
                      })}
                    </div>
                    </div>
                  )
                 })}
            </TabPane>
          )
         })
   
  }
  
  return (
    // linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),
    <div
      style={{
        // height: "800px",
        backgroundImage:`url(${movieDetail.hinhAnh})`,
        backgroundSize:'100%',
        backgroundRepeat:'no-repeat',
        backgroundPosition :'center'
          
      }}
    >
      <div
        style={{
          // height: "800px",
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="grid grid-cols-12 pt-36">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img className="col-span-1 rounded-md" src={movieDetail.hinhAnh} alt="" style={{width:"250px",height:"350px"}} />
              <div className="pl-4 col-span-2 text-white">
                <p style={{borderBottom:'3px solid #FFA500',display:'inline-block'}} className="text-2xl ">{movieDetail.tenPhim}</p>
                <p><span className="font-bold">-Aliases</span> : {movieDetail.biDanh}</p>
                <p ><span className="font-bold">-Opening day</span> : {dayjs(movieDetail.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                <p><span className="font-bold">-Description</span> : {movieDetail.moTa}</p>
               
              </div>
            </div>
            
          </div>
          <div className="mx-auto col-span-2 ">
          <div className="mb-2 text-center">
<p className="text-white text-2xl text-yellow-400 m-0 ">Rating</p>
          <Rate allowHalf value={movieDetail.danhGia/2}/>
          </div>
          
              <div className={`c100 p${movieDetail.danhGia*10} orange`}>
                    <span >{movieDetail.danhGia*10}%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
          </div>
        </div>

        <div className=" mt-5 text-white pd-12 grid grid-cols-12 ">
                <div className="col-start-3 col-span-9 ">
                <Tabs   defaultActiveKey="1" centered >
    <TabPane tab={<span style={{color: '#FFD700'}}>Showtimes</span>} key="1">
        <Tabs className="bg-gray-200  rounded-sm" tabPosition={tabPosition}>
          
          {
           renderHeThongRap()
          }
         
      </Tabs>
    </TabPane>
    <TabPane tab={<span style={{color:'#FFD700'}}>Information</span>} key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane  tab={<span style={{color:'#FFD700'}}>Rating</span>} key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>

       
                </div>
      </div>
      </div>

      
    </div>
  );
}

export default MovieDetails;
