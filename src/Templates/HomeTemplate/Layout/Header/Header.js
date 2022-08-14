import React, { useEffect, useState } from 'react'
// import { HeaderStyle } from '../../../../Scss/Header/HeaderStyle'
import {NavLink,useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux/es/exports';
import {FaUserCircle,FaBars, FaHome} from 'react-icons/fa'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {AiFillContacts,AiOutlineGlobal} from 'react-icons/ai'
import UseWindowSide from '../../../../CustomHook/useWindowSize';
import cn from 'classnames'
import { BiNews } from "react-icons/bi"
// import cn from 'classnames'
import {Select} from 'antd'
import ProfileUser from '../../../../Components/Profile/ProfileUser';
import './Header.scss'

export default function Header() {
  const [scroll,setScroll] = useState(0)
  const size = UseWindowSide()
  const [isModalMobile,setIsModalMobile] = useState(false)
  

  
  useEffect (()=>{
    window.addEventListener('scroll',()=>{
      setScroll(window.scrollY)
    }
    )
    return ()=>{
      window.removeEventListener('scroll',()=>{
      setScroll(window.scrollY)
    })
    }
  },[scroll])
  const navigate  = useNavigate()
  const { Option } = Select;
 const { t, i18n } = useTranslation();
 const {userLogin }= useSelector(state=> state.user)

 
 const renderLogin = ()=>{
  if(JSON.stringify(userLogin) === "{}"){
    return (
      <>
      <div className="hover:text-yellow-400 userAuth">

     
        <button  onClick={()=>navigate('login')}  className="self-center px-4    py-3 rounded font-semibold">
      <FaUserCircle className='inline text-white text-2xl relative -top-1.2 mr-2 icon '/>

        {t('Sign in')}
        </button>
         </div>
   <div className="hover:text-yellow-400 userAuth">
      <button onClick={()=>navigate('register')} className="self-center px-4 py-3 font-semibold  rounded dark:bg-violet-400 dark:text-gray-900">
      <FaUserCircle className='inline text-white text-2xl relative -top-1.2 mr-2 icon '/>
      {t('Sign up')}
      
      </button>
      </div>
      </>
    )
  }else {
    return (
       <ProfileUser/>
    )
  }
 }
const handleChange = (value) => {
  i18n.changeLanguage(value)
};

  return (
   <>
 <header className={cn('p-4  bg-black bg-opacity-80 fixed z-10 top-0 right-0 left-0 text-white ',{
  'disappear': scroll > 500,
 })}>
  <div className="container relative flex justify-between h-10 max-h-full mx-auto">
    <NavLink  to="/" className="flex items-center p-2 hover:scale-110 transition-all duration-1000">
      <img src="./images/logo3.png" className='w-32' alt="" />
    </NavLink>
    <ul className="items-stretch hidden space-x-3 lg:flex">
      <li className="flex">
        <NavLink style={({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFD700' : 'none',
  })} to="/"  className="underLineEffect flex items-center px-4 -mb-1  dark:border-transparent text-white">
<BsFillHouseDoorFill className='text-2xl mr-2'/>
  {t('Home')}</NavLink>
      </li>
      <li className="flex">
        <NavLink style={({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFD700' : 'none',
  })} to="/contact" className="underLineEffect flex items-center px-4 -mb-1  dark:border-transparent text-white">
  <AiFillContacts className='text-2xl mr-2'/>
  
  {t("Contact")}</NavLink>
      </li>
      <li className="flex">
        <NavLink style={({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFD700' : 'none',
  })} to="/news" className="underLineEffect flex items-center px-4 -mb-1  dark:border-transparent text-white">
  <BiNews className='text-2xl mr-2'/>
  {t('News')}</NavLink>
      </li>
      
    </ul>
    <div className="items-center flex-shrink-0 hidden lg:flex">
 

      {renderLogin()}
      <Select defaultValue="eng" style={{ width: 120,outline: 'none',}} onChange={handleChange}>
     
      <Option  value="vn">VietNamese</Option>
      <Option value="cn">Chinese</Option>
      
      <Option value="eng">English
      
      </Option>
    </Select>
    
    </div>
    <button onClick={()=>setIsModalMobile(!isModalMobile)} className="p-4 lg:hidden text-2xl" style={{position:'absolute',top:'-44%',right:'-6%'}}>
      <FaBars/>
    </button>
  </div>

  
</header> 

{/* mobile */}
{/* {size.width =1023 ? setIsModalMobile(true):''} */}
 <div onClick={(e)=>{
 
  
  setIsModalMobile(!isModalMobile)
}}  className={cn('mobileModal',{

  'hidden':!isModalMobile,
})}  style={{position:'fixed',top:0,left:0,height:'100vh',zIndex:11,width:'100%',backgroundColor:'rgba(0,0,0,0.6)'}}>

<div className='mobile' style={{width:'40%',height:'100%',backgroundColor:'#fff'}}>
    <div className="p-4 title" style={{borderBottom:'1px solid #ccc'}}>
      {JSON.stringify(userLogin) === "{}" ?
      <>
       <h3 className='flex items-center cursor-pointer ' onClick={()=>navigate('/login')}>
      <span className="hover:text-red-300">
      <FaUserCircle className='inline text-gray-400 text-xl transition duration-400'/>

      </span>
      <span  className="text-base ml-1 text-gray-400">Login</span>
      </h3>
      <h3 className='flex items-center cursor-pointer ' onClick={()=>navigate('/register')}>
      <span>
      <FaUserCircle className='inline text-gray-400 text-xl transition duration-400'/>

      </span>
      <span  className="text-base ml-1 text-gray-400">Sign up</span>
      </h3>
      </>
      : 
      <>
      <h3 className="text-base text-gray-400">Hello {userLogin.hoTen} {'<3'}</h3>
      <h3 className='flex items-center cursor-pointer '>
      <span>
      <FaUserCircle className='inline text-gray-400 text-xl transition duration-400'/>

      </span>
      <span  className="text-base ml-1 text-gray-400 " onClick={()=>{
       localStorage.removeItem('USER_LOGIN');
            localStorage.removeItem('TOKEN')
            navigate('/')
            window.location.reload()
      }}>Log out</span>
      </h3>
      </>
      }
      



      
      
    </div>
    <div className="p-4 title " >
     <h3 className="font-semibold text-base hover:text-yellow-300 flex items-center transition-all duration-300 cursor-pointer" onClick={()=>navigate('/')}>
     <FaHome className='inline text-gray-400 text-xl mr-1 '/>
     Home
     </h3>
     <h3 className="font-semibold text-base hover:text-yellow-300 transition-all flex items-center duration-300 cursor-pointer" onClick={()=>navigate('news')}>
     <BiNews className='inline text-gray-400 text-xl mr-1 '/>
     News</h3>
     <h3 className="font-semibold text-base hover:text-yellow-300 transition-all flex items-center duration-300 cursor-pointer" onClick={()=>navigate('contact')}>
     <AiFillContacts className='inline text-gray-400 text-xl mr-1 '/>
     Contact</h3>
     <h3 className="font-semibold text-base hover:text-yellow-300 transition-all flex items-center duration-300 cursor-pointer" onClick={()=>navigate('profile')}>
     <FaUserCircle className='inline text-gray-400 text-xl mr-1 '/>
     Profile</h3>
      
    </div>
</div>
<div 

 style={{width:'60%',height:'100%',backgroundColor:'red'}}>

</div>
</div>


</>

    


  )
}
