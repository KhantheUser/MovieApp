import React from 'react'
// import { HeaderStyle } from '../../../../Scss/Header/HeaderStyle'
import {NavLink,useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux/es/exports';
// import cn from 'classnames'
import { USER_LOGIN } from '../../../../Util/Settings/config'
import {Select} from 'antd'
import ProfileUser from '../../../../Components/Profile/ProfileUser';
export default function Header() {
  const navigate  = useNavigate()
  const { Option } = Select;
 const { t, i18n } = useTranslation();
 const {userLogin }= useSelector(state=> state.user)
 console.log(typeof userLogin)
 const renderLogin = ()=>{
  if(JSON.stringify(userLogin) === "{}"){
    return (
      <>
        <button onClick={()=>navigate('login')}  className="self-center px-8 py-3 rounded">{t('Sign in')}</button>
   
      <button onClick={()=>navigate('register')} className="self-center px-8 py-3  rounded dark:bg-violet-400 dark:text-gray-900">{t('Sign up')}</button>
      </>
    )
  }else {
    return (
       <ProfileUser/>
    )
  }
 }
const handleChange = (value) => {
  // console.log(`selected ${value}`);
  i18n.changeLanguage(value)
};

  return (
   
 <header className="p-4  bg-black bg-opacity-80 fixed z-10 top-0 right-0 left-0 text-white">
  <div className="container flex justify-between h-14 max-h-full mx-auto">
    <NavLink  to="/" className="flex items-center p-2 hover:scale-110 transition-all duration-1000">
      <img src="./images/logo3.png" className='w-32' alt="" />
    </NavLink>
    <ul className="items-stretch hidden space-x-3 lg:flex">
      <li className="flex">
        <NavLink style={({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFD700' : 'none',
  })} to="/"  className="underLineEffect flex items-center px-4 -mb-1  dark:border-transparent text-white">{t('Home')}</NavLink>
      </li>
      <li className="flex">
        <NavLink style={({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFD700' : 'none',
  })} to="/contact" className="underLineEffect flex items-center px-4 -mb-1  dark:border-transparent text-white">{t("Contact")}</NavLink>
      </li>
      <li className="flex">
        <NavLink style={({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFD700' : 'none',
  })} to="/news" className="underLineEffect flex items-center px-4 -mb-1  dark:border-transparent text-white">{t('News')}</NavLink>
      </li>
      
    </ul>
    <div className="items-center flex-shrink-0 hidden lg:flex">
 

      {renderLogin()}
      <Select defaultValue="eng" style={{ width: 120,outline: 'none',}} onChange={handleChange}>
      <Option  value="vn">VietNamese</Option>
      <Option value="cn">Chinese</Option>
      
      <Option value="eng">English</Option>
    </Select>
    
    </div>
    <button className="p-4 lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>

    


  )
}
