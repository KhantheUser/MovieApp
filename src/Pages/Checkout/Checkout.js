import React, { Fragment, useEffect ,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams ,useNavigate} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";
import {FaUserAlt} from 'react-icons/fa'
import { Button, Modal } from 'antd';
// import styled from "styled-components";

import { datGhe, datGheMobile, datGheThunk, getPhongVe, handleModal, postDatVe, setTabActive } from "../../Slices/ticket";
import style from "./Checkout.module.css";
import { Tabs } from "antd";
import './Checkout.scss'
import _ from "lodash";
import ThongTinDatVe from "../../_core/ThongTinDatVe";
import { postThongTinDatVe } from "../../Slices/userAuth";
import dayjs from "dayjs";
import { connection } from "../..";
// import { TOKEN, USER_LOGIN } from "../../Util/Settings/config";
// import { use } from "i18next";
import { Select } from 'antd';
import ProfileUser from "../../Components/Profile/ProfileUser";
import UseWindowSide from "../../CustomHook/useWindowSize";
function Checkout() {
   const { Option } = Select;
   const { chiTietPhongVe,danhSachGheDangDat,danhSachGheKhachDat } = useSelector((state) => state.ticket);
   const dispatch = useDispatch();
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const { id } = useParams();
  const size = UseWindowSide()
   const handleChange = (value) => {
  // console.log(value);

  let danhSachGheDangDat = []
  danhSachGhe.forEach((item)=>{
    if(value.includes(item.tenGhe)){
      danhSachGheDangDat.push(item)
    }
  })
  dispatch(datGheMobile(danhSachGheDangDat))


};
  const { userLogin } = useSelector((state) => state.user);
  const {ticketLoading} = useSelector((state) => state.ticket)

  
  console.log(danhSachGhe);

  const renderSeats = () => {
    return danhSachGhe?.map((item,index)=>{
      let classGheKhachDat =''
      let classGheVip = item.loaiGhe ==="Vip" ? "gheVip" : ""
      let classGheDaDat = item.daDat ===true ? "gheDaDat" :""
      let classGheDangDat = ''
      let isYours = "";
      if(userLogin.taiKhoan === item.taiKhoanNguoiDat){
        isYours = "gheYours"
      }
      let indexGheKhachDat = danhSachGheKhachDat.findIndex((ghe)=>ghe.maGhe === item.maGhe)
      if(indexGheKhachDat !== -1){
        classGheKhachDat = "gheKhachDat"
      }
      let indexGheDD = danhSachGheDangDat.findIndex((gheDD)=>{
        return  gheDD.maGhe === item.maGhe
      })
      if(indexGheDD !== -1){
        classGheDangDat = "gheDangDat"
      }
      return <Fragment key={index}>
       <button onClick={()=> {
       dispatch(datGheThunk({item , id}))

       }
       
       }  className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheKhachDat}`} >{item.daDat === true? isYours=== ""?<AiOutlineClose style={{margin:"0 auto ",fontWeight:"bold"}} /> :<FaUserAlt style={{margin:"0 auto ",fontWeight:"bold"}} />: item.stt}
         <span className="viTri"></span>
       </button>
       {(index+1) % 16===0?<br/>:""}
       </Fragment>
    })
  };
  const renderSeatsMobile = ()=>{
    return (
      <div className=""  style={{width:'100%',height:'70%'}}>
          <img className="mx-auto" src="https://homemcr.org/app/uploads/2015/04/Cinema-1-Seating-Plan.jpg" style={{width:'90%'}} alt="" />
     </div>
    )
  }
  const renderSeatListMobile = ()=>{
    return (
     <Select
    mode="multiple"
    style={{
      width: '90%',
      
    }}
    placeholder="Select your seats"
    
    onChange={handleChange}
    optionLabelProp="label"
  >
   
   
  
   { danhSachGhe?.map((ghe,index)=>{
    if(ghe.daDat=== false)
      return (
        <Option key={index}  value={ghe.tenGhe}>
        <div className="demo-option-label-item">
          {ghe.stt} - {ghe.loaiGhe}
        </div>
        </Option>
      )
    })}
    </Select>)
  }
  useEffect(() => {
    dispatch(getPhongVe(id));
    // loading danh sach ghe dang duoc dat tu server
    connection.on('loadDanhSachGheDaDat',(danhSachGheKhachDat)=>{
      console.log('danhSachGheKhachDat',danhSachGheKhachDat);
    })
  }, [id]);

  const isModalVisible = useSelector((state)=>state.ticket.successTicket)
  console.log(isModalVisible)
 

  const handleOk = () => {
    dispatch(handleModal())
  };


  return (
<div className="checkout" style={{backgroundImage:'url("https://i.pinimg.com/originals/87/3f/71/873f71c1f893a0aafad8695324fedfc9.gif")',backgroundSize:'cover ',height:'100%'}}>
      
      <Modal title={<div className="text-center text-2xl  text-green-500" style={{fontFamily:"'Edu TAS Beginner', cursive"}}>Thank you for checkout</div>} visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <div className="flex justify-center">
              <img src="https://media4.giphy.com/media/ibolLe3mOqHE3PQTtk/200w.gif?cid=82a1493bbwnw6kgbawd6bidtieodzx5jvl0ym7y8i2ke5lb8&rid=200w.gif&ct=g" alt="" />
        </div>
      </Modal>
    

    <div className="container-dn pt-4 " >
      <div className="grid grid-cols-12">
        <div className="lg:col-span-9 col-span-12">
          <div className="flex flex-col items-center mt-5">
           
              <div
              className="bg-orange-400"
              style={{ height: "15px", width: "90%" }}
            ></div>
            <div className={`${style.trapezoid} `}>
              <h3 className="text-center mt-3 text-lg text-white ">Screen</h3>
            </div>
            

            <div>
              {ticketLoading? <div><img style={{width: "150px", height: "150px"}} src="https://cutewallpaper.org/24/loading-gif-png/loadinggifpng5-superior-lawn-care.png"/> </div>:size.width<888 ? renderSeatsMobile(): renderSeats()}
            </div>
          </div>
          <div className="mt-5  flex   justify-around">
            <div className="text-center">
              <button className="ghe"></button>
              <h3 className="text-white">Regular</h3>
            </div>
             <div className="text-center">
              <button className="ghe gheVip"></button>
              <h3 className="text-white">VIP</h3>
            </div>
             <div className="text-center">
              <button className="ghe gheDangDat"></button>
              <h3 className="text-white">Selecting</h3>
            </div>
            <div className="text-center">
              <button className="ghe gheDaDat"></button>
              <h3 className="text-white">Sold</h3>
            </div>
            <div className="text-center">
              <button className="ghe gheDaDat" >
                <FaUserAlt style={{margin:"0 auto ",fontWeight:"bold"}} />
              </button>
              <h3 className="text-white">Your seat</h3>
            </div>
             <div className="text-center">
              <button className="ghe gheKhachDat"></button>
              <h3 className="text-white">Other selecting</h3>
            </div>
           
          </div>

         
          <div className="w-full mt-6 text-center multiSelect">
           
            {renderSeatListMobile()}
          </div>


        </div>
        <div className="lg:col-span-3 col-span-12 p-4 mt-4">
          <h3 className="text-yellow-500 text-center text-3xl">{ danhSachGheDangDat?.reduce((tongTien,gheDD,index)=>{
                  return tongTien + gheDD.giaVe
                },0).toLocaleString() } vnd</h3>
          <hr />
          <h3 className="text-lg text-white my-3">{thongTinPhim?.tenPhim}</h3>
          <p className="text-white text-base">Cinema: {thongTinPhim?.tenCumRap}</p>
          <p className="text-white text-base">Address :{thongTinPhim?.diaChi}</p>
          <p className="text-white text-base">
            Time showing : {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}{" "}
            - {thongTinPhim?.tenRap}
          </p>
          <hr />
          <div className="flex flex-wrap my-5">
            <div className="text-left w-3/5 flex flex-wrap">
            
              <span className="text-orange-500 text-base font-bold">Seats:</span>
              {_.sortBy(danhSachGheDangDat,['stt'])?.map((gheDD,index)=>{
                return <span className="text-red-600 mx-1 text-base" key={index}>{`${gheDD.stt},`}</span>
              })}
            </div>
            <div className="text-right w-2/5">
              <span className="text-yellow-500 text-lg font-bold">{
                danhSachGheDangDat?.reduce((tongTien,gheDD,index)=>{
                  return tongTien + gheDD.giaVe
                },0).toLocaleString() 
              } vnd</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i className="text-white text-base" >Email</i>
            <p className="text-white text-base">{userLogin.email}</p>
          </div>
          <div className="my-5">
            <i className="text-white text-base">Phone</i>
            <p className="text-white text-base">{userLogin.soDT}</p>
          </div>
          <hr />
          <div className="my-5">
            <button onClick={()=>{
             
              const thongTinDatVe = new ThongTinDatVe()
              thongTinDatVe.maLichChieu = id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;

             dispatch(postDatVe(thongTinDatVe))
            dispatch({
              type:"SET_SUCCESS_TICKET",
            })
             
             
            }} className="w-full bg-orange-500 hover:bg-orange-600 duration-500 transition-all text-2xl p-2 rounded-sm text-white text-center">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const { TabPane } = Tabs;
export default function Demo (props){
  const {userLogin} = useSelector(state=>state.user);
  const navigate = useNavigate()
  const operations = <>
    {userLogin !== {} ? <ProfileUser/>:""}
  </>
  const {tabActive} = useSelector(state=>state.ticket)
  const dispatch = useDispatch()
  useEffect(()=>{
return ()=>{
      dispatch(setTabActive('1'))
     }
  },[])
  const {ticketLoading} = useSelector(state=>state.ticket)
  return (
    

    
    <div className="">
 <Tabs tabBarExtraContent={operations} style={{backgroundColor: 'black'}} defaultActiveKey='1' onChange={(key)=>dispatch(setTabActive(key))} activeKey={tabActive}  >



    <TabPane  tab={<span className="text-yellow-400 block font-semibold  ">Pick your seats and Checkout</span>}  key="1">
      
     <Checkout/>
      
    </TabPane>
    <TabPane tab={<span className="text-yellow-400 block font-semibold">Payment's history</span>}   key="2">
      <KetQuaDatVe/>
    </TabPane>
    <TabPane tab={<span className="text-yellow-400 block font-semibold" onClick={()=>navigate('/')}>Home</span>}   key="3">
     
    </TabPane>
   
   
  </Tabs>
    </div>
    
    
  )

}


function KetQuaDatVe (props){
  const {thongTinNguoiDung,userLogin,thongTinLoading} = useSelector(state=>state.user)
  
  console.log(thongTinNguoiDung)
  console.log(userLogin)
  const dispatch = useDispatch()
  const renderTicketItem = ()=>{
    return thongTinNguoiDung.thongTinDatVe?.map((ticket,index)=>{
      let seats =ticket.danhSachGhe[0]
      
      return (
         <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium text-yellow-500">{ticket.tenPhim}</h2>
            <p className="text-blue-500"><span className="text-gray-700 font-semibold "> Bought :</span>{dayjs(ticket.ngayDat).format(' DD/MM/YYYY')}<span className="ml-2 text-red-500">{dayjs(ticket.ngayDat).format('hh:mm')}</span></p>
            <p>Address : {seats.tenHeThongRap}</p>
            <p><span className="font-semibold">Cinema :</span> <span className="text-green-500">{seats.tenCumRap}</span>  - <span className="font-semibold">Seats :</span>   {_.sortBy(ticket.danhSachGhe,['tenGhe']).map((ghe,index)=><span key={index} className="text-green-500">{`[${ghe.tenGhe}] `}</span>)}</p>
          </div>
        </div>
      </div>
      )
    })
  }
  useEffect(()=>{
    
      dispatch(postThongTinDatVe())
     
  },[])
  return (
 
     <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Let's check your movie's information and have happy minutes with your friends :Smile</p>
    </div>
    <div className="flex flex-wrap -m-2">
     {thongTinLoading ? <div style={{margin:'0 auto'}}><img src="https://i0.wp.com/www.geekyhostess.com/wp-content/uploads/2014/09/anigif.gif?fit=500%2C500"/></div> : renderTicketItem()}
      
    </div>
  </div>
</section>

   
  )
}
  
