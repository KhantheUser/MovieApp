import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {object,string} from 'yup'
import { handleModal, postUserLogin } from '../../Slices/userAuth'
import { Modal } from 'antd';

export default function Login() {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const isModalVisible = useSelector((state)=>state.user.successAuth)
  console.log(isModalVisible)
 

  const handleOk = () => {
    dispatch(handleModal())
   
    
  };
  const schema = object({
    taiKhoan: string().required('Field is required'),
    matKhau: string().required('Field is required')

  })
  const {userLogin} = useSelector((state)=>state.user)
  console.log(userLogin)
 const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
    mode : 'onTouched'
  });
  return (
   <div style={{backgroundImage:'url("https://images.ctfassets.net/7so8go2zrvbw/2cPBaJIBwmXKiPFmORaRlw/1288322d48e889c11a40b615899230ee/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png?w=800&h=450&q=95&fm=png")',backgroundSize:'100%',backgroundRepeat:'repeat',}} className=" dark:bg-gray-900 ">
    <Modal title={<div className="text-center text-2xl  text-green-500" style={{fontFamily:"'Edu TAS Beginner', cursive"}}>Oops!!! Your account or password is wrong</div>} visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <div className="flex justify-center">
              <img src="http://vidia.vn/vnt_upload/File/Image/dogcute_7.gif" alt="" />
        </div>
      </Modal>
  <div className="flex justify-center h-screen">
    <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: 'url(https://yi-files.s3.eu-west-1.amazonaws.com/products/1187000/1187484/1980461-full.jpg'}}>
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
        <div>
          <h2 className="text-5xl font-bold text-red-600">NetFlix</h2>
          <p className="max-w-xl text-lg mt-3 text-gray-300">Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device.</p>
        </div>
      </div>
    </div>
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center text-red-600">NetFlix</h2>
          <p className="mt-3 text-white">Sign in to access your account</p>
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit((thongTinDangNhap)=>dispatch(postUserLogin(thongTinDangNhap)))}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-white">Acount</label>
              <input type="text" {...register('taiKhoan')} placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              {errors.taiKhoan && <p className="text-red-500 text-md italic">{errors.taiKhoan.message}</p>}
            </div>
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-white">Password</label>
                <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
              </div>
              <input type="password" {...register('matKhau')} placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              {errors.matKhau && <p className="text-red-500 text-md italic">{errors.matKhau.message}</p>}

            </div>
            <div className="mt-6">
              <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50">
               Log in
              </button>
            </div>
          </form>
          <p className="mt-6 text-sm text-center text-gray-400">Don't have an account yet? <button onClick={()=>navigate("/register")} className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</button>.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
