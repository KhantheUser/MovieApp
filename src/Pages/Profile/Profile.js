import React, { useRef, useState } from 'react'
import { Card } from 'antd';
import {AiOutlineGithub,AiFillYoutube,AiFillFacebook,AiFillLinkedin,AiOutlineHeart,AiOutlineComment} from 'react-icons/ai'
import './Profile.scss'
export default function Profile() {
 const inputImage = useRef()
 const handlePreviewAvatar = (e)=>{
      const file = e.target.files[0]
       const fileReader = new FileReader()
       
 const newFile = fileReader.readAsDataURL(file)
  
  fileReader.onload = ()=>{
   
    const url = fileReader.result
    localStorage.setItem('avatar',url)
    setImage(url)
    
  }

 }
const [image,setImage ]= useState(localStorage.getItem('avatar'))
  return (
  <div className='profile'>
      <div style={{backgroundImage:' linear-gradient(to bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/81612511_582279418996922_6533374512598089728_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=-nqYEJzRwEUAX9RXxwh&_nc_ht=scontent.fhan5-6.fna&oh=00_AT_GdyHREk26xlBvIqAy89Zk6VQwsKY_1ekG-lVWd8OOxA&oe=63097BBB")',height:'600px',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
          <div className='grid grid-cols-12   relative top-40' >
              <div className='col-start-2 col-span-4'>
                  <h2 className="text-white text-5xl font-semibold">Hello , I am</h2>
                  <h1 style={{fontFamily:'monospace',}} className="text-white text-8xl font-bold">Thien Duc</h1>
                  <p className="text-white text-3xl">Frond end Designer | Developer</p>
              </div>

          </div>
      </div>
      <div  className="grid grid-cols-12 relative" style={{height:'100px',boxShadow:'2px 2px 8px rgba(0,0,0,0.1)',padding:'20px 0'}}>
      
         <div className='h-36 w-36 relative bg-white rounded-full overflow-hidden avatar' >
                  <div>
                    <img onClick={()=>{inputImage.current.click();
//  console.log(inputImage.current.value)

                    }} style={{height:'8rem ',width:'8rem' ,position:'relative',top:'8px',left:'8px' }} className="rounded-full cursor-pointer" src={image} alt="" />
                  </div>
                  <input onChange={handlePreviewAvatar} ref={inputImage} type="file" className='hidden' id="" />
                    <div className="h-10 w-10 bg-black absolute opacity-0 " style={{height:'77px',width:'146px',top:'70%'}}>
                      
                    </div>
                    
         </div>
                  <div className='col-start-2 col-span-1  hidden  lg:flex items-center text-pink-600 text-lg font-semibold cursor-pointer hover:text-pink-400 transition-all duration-200'>
                          Home
                         
                  </div>
                  <a href="#aboutMe" className='col-start-3 col-span-1 hidden  lg:flex items-center text-pink-600 text-lg font-semibold cursor-pointer hover:text-pink-400 transition-all duration-200'>
                          About me
                  </a>
                  <a href="#contactHire" className='col-start-4 col-span-1  hidden  lg:flex items-center text-pink-600 text-lg font-semibold cursor-pointer hover:text-pink-400 transition-all duration-200'>
                          Contact
                  </a>
                  <a href="#comments" className='col-start-10 col-span-1  hidden  lg:flex items-center text-pink-600 text-lg font-semibold cursor-pointer hover:text-pink-400 transition-all duration-200'>
                          Comments
                  </a>
                  <div className='col-start-11 col-span-1  hidden  lg:flex items-center text-pink-600 text-lg font-semibold cursor-pointer'>
                          Rating
                  </div>
      </div>
      <div className="grid grid-cols-12" id="aboutMe" style={{boxShadow:'2px 2px 2px rgba(0,0,0,0.8)',padding:'20px 0'}}>
         <div className='col-span-12 md:col-span-6 lg:col-span-4 p-14  ' style={{borderRight:'1px solid #ccc'}}>
          <h1 className='text-3xl font-semibold mb-12 '>
            Who am I ?
          </h1>
          <h2 className='text-xl '>
            A Web Designer / Developer Located In Our Lovely Earth
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?
          </p>
          <button className='text-pink-600 text-lg hover:bg-pink-600 hover:text-white rounded-md transition-all duration-300' style={{border:'1px #f8a3bc solid',padding:'12px 6px'}}>
            Download my CV
          </button>
          
         </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-4 p-14  ' style={{borderRight:'1px solid #ccc'}}>
          <h1 className='text-3xl font-semibold mb-12 '>
            Personal Info
          </h1>
          <p>
            <span className="font-semibold">Birthdate : </span>
            <span>16/01/2002</span>
          </p>
           <p>
            <span className="font-semibold">Phone number : </span>
            <span>09**42**8*</span>
          </p>
           <p>
            <span className="font-semibold">College : </span>
            <span>Bach Khoa Ha Noi</span>
          </p>
           <p>
            <span className="font-semibold">Email : </span>
            <span>ducthien1212@gmail.com</span>
          </p>
           <p>
            <span className="font-semibold">Facebook : </span>
            <span>Thien Duc</span>
          </p>
          <div className="flex ">
              <span className="block mr-2 text-4xl text-red-300">
                <AiOutlineGithub/>
              </span>
               <span className="block mr-2 text-4xl text-red-300">
                <AiFillYoutube/>
              </span>
               <span className="block mr-2 text-4xl text-red-300">
                <AiFillLinkedin/>
              </span>
               <span className="block mr-2 text-4xl text-red-300">
                <AiFillFacebook/>
              </span>
          </div>
         </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-4 p-14' >
          <h1 className='text-3xl font-semibold mb-12 '>
            My Expertise
          </h1>
          <div className='flex items-center mb-3'>
            <img className='rounded-md' style={{height:'40px',width:'40px'}} src="https://st.quantrimang.com/photos/image/2018/08/01/image-map-trong-javascript-200.jpg" alt="" />
            <p className="ml-2 text-base">Javascript</p>
          </div>
           <div className='flex items-center mb-3'>
            <img className='rounded-md' style={{height:'40px',width:'40px'}} src="https://cdn.tgdd.vn/2020/11/GameApp/Untitled-23333-200x200-1.jpg" alt="" />
            <p className="ml-2 text-base">Photoshop</p>
          </div>
           <div className='flex items-center mb-3'>
            <img className='rounded-md' style={{height:'40px',width:'40px'}} src="https://cdn.tgdd.vn/2021/01/GameApp/AdobePremiereProLogo.svg-200x200.png" alt="" />
            <p className="ml-2 text-base">Premiere Pro</p>
          </div>
           <div className='flex items-center mb-3'>
            <img className='rounded-md' style={{height:'40px',width:'40px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png" alt="" />
            <p className="ml-2 text-base">After Effect</p>
          </div>
          
         </div>
      </div>

      <div id="contactHire" style={{height:'217px',backgroundColor:'#343a40',margin:'80px 0'}} className="text-center flex flex-col justify-center">
          <h1 className="text-white text-4xl font-semibold">I'm ready for Freelance</h1>
          <div>
            <button className="px-9 rounded-md hover:scale-110 transition-all duration-200 py-2 bg-red-400">Hire me</button>
          </div>
      </div>

      {/* Comemnt Phim */}
      <div className='grid grid-cols-9'>
      <div className='col-start-2'>
        <h1 className='text-4xl text-red-400 mb-10 ' style={{borderBottom:'3px solid '}}>
          Comments
        </h1>
      </div>
      </div>
      <div className='grid grid-cols-9' id="comments">
      
      <div className='  col-start-2 col-span-7 mb-10 flex' >
            <div className="hidden lg:block " style={{width:'30%'}} >
              <img style={{width:'100%',height:'100%'}} src="http://cdn.tgdd.vn/Files/2021/06/02/1356902/danh-sach-nhung-vu-an-hay-nhat-cua-phim-tham-tu-lung-danh-conan-202207051441250213.jpg" alt="" />
            </div>
           <div className="w-full lg:w-8/12" style={{padding:'30px 30px',border:'1px solid #ccc'}}>
             <h1 className='text-2xl font-semibold'>Conan 25 : The Bride of Halloween</h1>
             <p>
              <span className='text-gray-400'>
                By:Admin
              </span>
              <span><AiOutlineHeart className='inline text-red-500 ml-2 mr-1'/></span>234
              <span><AiOutlineComment className='inline text-red-500 ml-2 mr-1'/></span>123

             </p>
             <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>
             <p className="font-semibold">
              Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.
             </p>
             <p className="text-gray-400">Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>
             <a href="" className="text-red-500">Read more...</a>
           </div>
      </div>
      <div className='  col-start-2 col-span-7 mb-10 flex' >
            <div className="hidden lg:block "  style={{width:'30%'}}>
              <img style={{width:'100%',height:'100%'}} src="https://vcdn1-giaitri.vnecdn.net/2022/05/05/DoctorStrange2mmm-1651738078-4301-1651738447.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=hvLU0ITOvD2EhxFK8TD8Og" alt="" />
            </div>
           <div className='w-full lg:w-8/12' style={{padding:'30px 30px',border:'1px solid #ccc'}}>
             <h1 className='text-2xl font-semibold'>Doctor Strange 2 : The madness of muitiverse</h1>
             <p>
              <span className='text-gray-400'>
                By:Admin
              </span>
              <span><AiOutlineHeart className='inline text-red-500 ml-2 mr-1'/></span>234
              <span><AiOutlineComment className='inline text-red-500 ml-2 mr-1'/></span>123

             </p>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.
            </p>
             <a href="" className="text-red-500">Read more...</a>
           </div>
      </div>
      <div className='  col-start-2 col-span-7 mb-10 flex' >
            <div className="hidden lg:block "  style={{width:'30%'}}>
              <img style={{width:'100%',height:'100%'}} src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2016/01/25/4/1/1/7/1453717413223_600.jpg" alt="" />
            </div>
           <div className='w-full lg:w-8/12' style={{padding:'30px 30px',border:'1px solid #ccc'}}>
             <h1 className='text-2xl font-semibold'>Minions : Despicable Me</h1>
             <p>
              <span className='text-gray-400'>
                By:Admin
              </span>
              <span><AiOutlineHeart className='inline text-red-500 ml-2 mr-1'/></span>234
              <span><AiOutlineComment className='inline text-red-500 ml-2 mr-1'/></span>123

             </p>
             <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>
             <p className="font-semibold">
              Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.
             </p>
             <p className="text-gray-400">Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>
             <a href="" className="text-red-500">Read more...</a>
           </div>
      </div>
      

      </div>
  </div>
  )
  }
