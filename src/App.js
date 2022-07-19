import logo from "./logo.svg";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense, useEffect,useState } from "react";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import New from "./Pages/News/New";
import CheckoutTemplate from "./Templates/CheckoutTemplate/CheckoutTemplate";
import Loading from "./Components/Loading/Loading";
import Profile from "./Pages/Profile/Profile";
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";
import UseWindowSide from "./CustomHook/useWindowSize";
export const history = createBrowserHistory();

// const CheckoutTemplateLazy = lazy (()=>import('./Templates/CheckoutTemplate/CheckoutTemplate'))
// const CheckoutTemplate = lazy(() => import('./Templates/CheckoutTemplate/CheckoutTemplate'));

function App() {
  const size = UseWindowSide()
  return (
    <div className="App relative ">
    <Suspense fallback={<h1>is Loading</h1>}>
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
