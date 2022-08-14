import logo from "./logo.svg";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense, useEffect,useState } from "react";
// import MovieDetails from "./Pages/MovieDetails/MovieDetails";
// import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
// import Home from "./Pages/Home/Home";
// import Contact from "./Pages/Contact/Contact";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import New from "./Pages/News/New";
// import CheckoutTemplate from "./Templates/CheckoutTemplate/CheckoutTemplate";
// import Loading from "./Components/Loading/Loading";
// import Profile from "./Pages/Profile/Profile";
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";
// import UseWindowSide from "./CustomHook/useWindowSize";

const MovieDetails = lazy(() => import("./Pages/MovieDetails/MovieDetails"));
const HomeTemplate = lazy(() => import("./Templates/HomeTemplate/HomeTemplate"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Register/Register"));
const New = lazy(() => import("./Pages/News/New"));
const CheckoutTemplate = lazy(() => import("./Templates/CheckoutTemplate/CheckoutTemplate"));
const Loading = lazy(() => import("./Components/Loading/Loading"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));



export const history = createBrowserHistory();


// const CheckoutTemplateLazy = lazy (()=>import('./Templates/CheckoutTemplate/CheckoutTemplate'))
// const CheckoutTemplate = lazy(() => import('./Templates/CheckoutTemplate/CheckoutTemplate'));

function App() {
 
  return (
    <div className="App relative ">
    <Suspense fallback={<div style={{width:'100%',height:'100vh',backgroundImage:'url("https://img.wattpad.com/2a0398b803517691323753460ac40d5f4d8960d0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f554e4e6966786a325458565079773d3d2d3839383632313534372e313631356236353736386431303038653736363331343031323137392e676966")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

    </div>}>
    <Loading/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />

            <Route path="details/:id" element={<MovieDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />

            <Route path="news" element={<New />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          <Route path="/checkout/:id" element={<CheckoutTemplate />}></Route>
        
        </Routes>
      </BrowserRouter>
          </Suspense>
         
         
    <div onClick={()=>window.scrollTo(0,0)} style={{width:'40px',height:'40px',backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',bottom:'4%',right:'2%'}} className="rounded-md flex justify-center items-center text-white cursor-pointer">
            <AiOutlineDown className="text-lg hover:text-yellow-400  hover:rotate-180 transition-all duration-300"/>
         </div>
    </div>
    
  );
}

export default App;
