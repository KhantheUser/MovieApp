import React from 'react'
import { Carousel } from 'antd';

export default function HomeDownload() {
      const contentStyle = {
  height: '480px',
  color: '#fff',
  
  background: '#364d79',
 
  
};
  return (
    <div>
      
      <div className='grid grid-cols-11' style={{backgroundImage:'linear-gradient(to bottom ,rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url("https://miro.medium.com/max/1142/1*eYtze01BE5EzuxR_1qT9SA.jpeg")',height:'600px'}}>
          <div className='col-start-2 text-center  col-span-9 lg:col-start-3 lg:col-span-3  flex flex-col justify-center'>
          <h1 className='text-white text-3xl ' style={{lineHeight:2.2}}>The convenient application for people love movies</h1>
<p className="text-white my-5">You can enjoy your moment with people you love ,mark for our cinemas . Also , buy tickets and get more and more attractive gifts   </p>
          <a href="https://www.netflix.com/app" className="text-center text-lg font-semibold text-white inline bg-red-600 rounded-md transition-all duration-200 hover:bg-red-500" style={{padding:'18px 40px'}}>
            DOWNLOAD - FREE !
          </a>
          </div>
          <div className="col-start-7 col-span-3 lg:flex lg:flex-col lg:justify-center  hidden ">
          
         <div className='flex items-center' style={{height:'500px',width:'410px',backgroundImage:'url("https://www.nicepng.com/png/full/289-2893061_iphone-x-cutframe-iphone-x-transparent-screen.png")',backgroundSize:'64% 100%',backgroundRepeat:'no-repeat'}}>
                    <div style={{
                          height: '480px',
    position: 'relative',
    width: '235px',
    borderRadius: '35px',
    left: '15px',
    background: 'transparent',
    overflow: 'hidden',

                    }}>
                           <Carousel speed={1500} autoplay dots={false}>
   <div >
      <div style={contentStyle}>
        <img style={{height:'100%'}} src="https://static.mservice.io/blogscontents/momo-upload-api-191219162755-637123696753634114.jpg" alt="" />
      </div>
    </div>
   <div>
      <div style={contentStyle}>
        <img style={{height:'100%'}} src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/m/o/mortal_kombat_-_vn_-_payoff_poster_1_1_.jpg" alt="" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img style={{height:'100%'}} src="https://image-us.24h.com.vn/upload/3-2022/images/2022-07-26/Phan-moi-cua-Tham-tu-Conan-lap-ky-luc-phong-ve-Viet-unnamed-1658804424-88-width602height891.jpg" alt="" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img style={{height:'100%'}} src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/m/i/minions_2_-_kc_01.7.22.jpg" alt="" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img style={{height:'100%'}} src="https://preview.redd.it/dzqevq4ukgn81.jpg?width=640&crop=smart&auto=webp&s=2bb9885569abb728236673ffb85d8ddeb24c8e32" alt="" />
      </div>
    </div>
     <div>
      <div style={contentStyle}>
        <img style={{height:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEIGm0EB8LHmnGnAglTbpoznnN5a4GE_w8w&usqp=CAU" alt="" />
      </div>
    </div>
    
  </Carousel>
                    </div>
         </div>

          </div>
      </div>
    </div>
  )
}
