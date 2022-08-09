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

import './movieDetial.scss'
import { FaPlay } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { setMovieTrailer } from '../../Slices/movie'
const { TabPane } = Tabs;
function MovieDetails() {
   
  const { id } = useParams();
  const {movieTrailer} = useSelector((state)=>state.movie)
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
        return <div className="flex items-center justify-center w-100" style={{height:'300px'}}>
        {/* <h1 className="text-lg text-center block">This film will come soon</h1> */}
        <div>
        <h1 className=" text-center text-lg block">This film will come soon... {'<3'}</h1>

        <img src="https://2.bp.blogspot.com/-sZ0qJL0EpK0/XS80WOGQkNI/AAAAAAA1sWc/FYm6tq93O9IKflV2BSG7epni3Y6INv3NgCLcBGAs/s1600/AW3953769_10.gif" alt="" style={{height:'200px'}}/>
        </div>
        
        </div>
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
                    <div className="grid md:grid-cols-4 grid-cols-2">
                      {cumRap.lichChieuPhim?.slice(0,8).map((lichChieu,index)=>{
                        return (
                          <div key={index} onClick={()=>navigate(`/checkout/${lichChieu.maLichChieu}`)} className="cursor-pointer text-yellow-500 font-semibold bg-slate-900 inline-block text-center rounded-xl mx-1 mt-1">{dayjs(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY mm:ss A")}</div>
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
    className="movieDetails"
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
          <div className="lg:col-span-5 lg:col-start-3 col-start-3 col-span-8">
            <div className="grid grid-cols-3">
            <div onClick={()=>dispatch(setMovieTrailer({url:movieDetail.trailer,status:'block'}))} className="lg:col-span-1 col-span-3  rounded-sm relative cardHover trailer " style={{backgroundImage:`url("${movieDetail.hinhAnh}")`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',}}>
              <div className="hoverMovie" style={{position: "absolute",top:0,left:0,right:0,height:'100%',display:'block'}}>
                 <div className="circle">
    <p className="flex justify-center items-center">{<FaPlay style={{fontSize:20,lineHeight:50,position: 'relative',top:'14px',left:'1px'}}/>}</p>
  </div>
              </div>
              <img className=" rounded-md opacity-0" src={movieDetail.hinhAnh} alt="" style={{width:"",height:"350px"}} />
            </div>
              <div className="pl-4 lg:col-span-2 col-span-3 text-white">
                <p style={{borderBottom:'3px solid #FFA500',display:'inline-block'}} className="text-2xl ">{movieDetail.tenPhim}</p>
                <p><span className="font-bold">-Aliases</span> : {movieDetail.biDanh}</p>
                <p ><span className="font-bold">-Opening day</span> : {dayjs(movieDetail.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                <p><span className="font-bold">-Description</span> : {movieDetail.moTa}</p>
               
              </div>
            </div>
            
          </div>
          <div className="mx-auto col-span-2 hidden lg:block ">
          <div className="mb-2 text-center">
<p className=" text-2xl text-yellow-400 m-0 ">Rating</p>
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
<div onClick={(e)=>{e.stopPropagation();dispatch(setMovieTrailer({url:"",status:"none"}));console.log('hello')}}  style={{height:'100vh',backgroundColor:'rgba(0,0,0,0.8',display:'flex',justifyContent: 'center',alignItems:'center'}} className={`fixed top-0 right-0 left-0 z-50  d-${movieTrailer.status}`} >
          <ReactPlayer 
    controls  height={'60%'} width={'60%'} style={{margin:'0 auto',marginTop:'10%',transition:'all 1s linear',transform:'scale(1.2)',width:'740px',maxWidth:'100%',height:'416px',maxHeight:'100%'}} url={movieTrailer.url} />
        </div>
      
    </div>
  );
}

export default MovieDetails;
