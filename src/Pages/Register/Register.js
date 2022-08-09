import React from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { handleModal, postUserRegister } from '../../Slices/userAuth';
import {useNavigate} from 'react-router-dom'
import { Modal } from 'antd';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 const [value,setValue] = useState({taiKhoan:'',matKhau:'',email:'',soDt:'',hoTen:'',maNhom:'GP01'});
 const handleChangeValue = (e)=>{
    const {value,name} = e.target;
    setValue((prev)=>{
      return {...prev,[name]:value}
    })
 }
 const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(postUserRegister(value))
 }
 const isModalVisible = useSelector((state)=>state.user.successAuth)
  console.log(isModalVisible)
 

  const handleOk = () => {
    dispatch(handleModal())
    // navigate('/')
    // localStorage.setItem('USER_LOGIN',JSON.stringify(value.))
    
  };
  return (
  <form onSubmit={handleSubmit} style={{backgroundImage:'url("https://yi-files.s3.eu-west-1.amazonaws.com/products/1187000/1187484/1980461-full.jpg")',backgroundSize:'100%'}} className="bg-grey-lighter min-h-screen flex flex-col">
   
      <Modal title={<div className="text-center text-2xl  text-green-500" style={{fontFamily:"'Edu TAS Beginner', cursive"}}>Thank you for checkout</div>} visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <div className="flex justify-center">
              <img src="https://media4.giphy.com/media/ibolLe3mOqHE3PQTtk/200w.gif?cid=82a1493bbwnw6kgbawd6bidtieodzx5jvl0ym7y8i2ke5lb8&rid=200w.gif&ct=g" alt="" />
        </div>
      </Modal>
  <div className="container max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full  ">
      <h1 className="mb-8 text-3xl text-center">Sign up</h1>
    <div className="flex gap-3">
 <div className=" w-1/2">
        <input type="text" value={value.hoTen} onChange={handleChangeValue} className="block border border-grey-light w-full p-3 rounded mb-4" name="hoTen" placeholder="Full Name" />
      <input type="text" value={value.taiKhoan} onChange={handleChangeValue} className="block border border-grey-light w-full p-3 rounded mb-4" name="taiKhoan" placeholder="Account " />
      <input type="text" value={value.email} onChange={handleChangeValue} className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
      </div>
      <div className="w-1/2">
 <input value={value.soDt} onChange={handleChangeValue} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="soDt" placeholder="Phone number" />
      <input value={value.matKhau} onChange={handleChangeValue} type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="matKhau" placeholder="Password" />
      <input  type="" className="block border border-grey-light w-full p-3 rounded mb-4" name="" value="GP01" disabled/>
      </div>
    </div>
     
     
      <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white text-lg hover:bg-green-dark focus:outline-none my-1">Create Account</button>
      <div className="text-center text-sm text-grey-dark mt-4">
        By signing up, you agree to the 
        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
          Terms of Service
        </a> and 
        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
          Privacy Policy
        </a>
      </div>
    </div>
    <div className="text-grey-dark mt-6 text-white">
      Already have an account? 
      <a className="no-underline border-b border-blue text-blue" href="../login">
        Log in
      </a>.
    </div>
  </div>
</form>

  )
}
