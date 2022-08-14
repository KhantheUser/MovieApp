import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { hover } from '@testing-library/user-event/dist/hover';
import { TOKEN, USER_LOGIN } from '../../Util/Settings/config';
export default function ProfileUser() {
    const navigate = useNavigate();
    const menu = (
  <Menu
    items={[
      {
        key: '1',
        style: {background: 'black'},
        label: (
        <p onClick={()=>navigate('/')} className='text-white my-1 hover:text-yellow-400 hover:bg-black'>
            Home
          </p>
        ),
      },
      {
        key: '2',
        style: {background: 'black'},
        label: (
        <p onClick={()=>navigate('/profile')} className='text-white my-1 hover:text-yellow-400 hover:bg-black'>
            Profile
          </p>
        ),
      },
      {
        key: '3',
        style: {background: 'black'},
        label: (
          <p onClick={()=>navigate('/systems')} className='text-white my-1 hover:text-yellow-400'>
            Systems
          </p>
        ),
      },
      {
        key: '4',
        style: {background: 'black'  },
        label: (
           <p onClick={()=>{
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN)
            navigate('/')
            window.location.reload()
           }} className='text-white my-1 hover:text-yellow-400'>
            Logout
          </p>
        ),
      },
    ]}
    style={{backgroundColor:'rgba(0,0,0,0.8)'}}
    
  />
);
const [t, i18n] = useTranslation();
const {userLogin} = useSelector(state=> state.user)
  return (
     <Dropdown arrow={false}     overlay={menu} placement="bottom" >
     <div   className="self-center px-8 py-3 rounded flex items-center cursor-pointer">
       <span>{t('Hello')}</span> 
       <span style={{height:'40px',width:'40px',lineHeight:'40px'}} className='ml-2 text-center   rounded-full text-yellow-500 inline-block text-lg bg-white '>{userLogin.taiKhoan.slice(0,1).toUpperCase()}</span>
       </div>
    </Dropdown>
    
  )
}
