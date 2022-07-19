import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import cinema from '../../../../Slices/cinema';
import { GoOctoface } from "react-icons/go";
export default function Footer() {
  const {cinemaArr} = useSelector(state => state.cinema)
  const newCinemaArr = _.map((cinemaArr),(cinema)=>_.pick(cinema,['logo','tenHeThongRap']))
  return (
   <footer className="bg-black opacity-80">
  <div className="container-dn p-6 grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 ">
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-white">Getting started</h2>
      <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
        <a className="text-white" href="#">Installation</a>
        <a className="text-white" href="#">Release Notes</a>
        <a className="text-white" href="#">Upgrade Guide</a>
        <a className="text-white" href="#">Using with Preprocessors</a>
        <a className="text-white" href="#">Optimizing for Production</a>
        <a className="text-white" href="#">Browser Support</a>
        <a className="text-white" href="#">IntelliSense</a>
      </div>
    </div>
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-white">Core Concepts</h2>
      <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
        <a className="text-white" href="#">Utility-First</a>
        <a className="text-white" href="#">Responsive Design</a>
        <a className="text-white" href="#">Hover, Focus, &amp; Other States</a>
        <a className="text-white" href="#">Dark Mode</a>
        <a className="text-white" href="#">Adding Base Styles</a>
        <a className="text-white" href="#">Extracting Components</a>
        <a className="text-white" href="#">Adding New Utilities</a>
      </div>
    </div>
    <div className="flex flex-col space-y-4 w-40">
      <h2 className="font-medium text-white">Partner</h2>
      <div className=" text-sm dark:text-gray-400 grid grid-cols-2 ">
     
        {newCinemaArr.map((cinema,index)=> <div key={index}>
          <img src={cinema.logo} alt="" style={{width:"50px",height:'50px'}}/>
          <p className="text-white">{cinema.tenHeThongRap}</p>
        </div>)}
      </div>
    </div>
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-white">Community</h2>
      <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
      
        {/* <a href="" className='block flex items-center hover:text-blue-400'>
          <p className="text-white m-0" style={{width:'70px'}}>Github</p>
          <GoOctoface color='white' className='m-0'/>
        </a> */}
        <a className="block flex items-center text-white"  href="#">Github

        </a>
          <a className="block flex items-center text-white"  href="#">Discord

        </a>
          <a className="block flex items-center text-white"  href="#">Youtube

        </a>
          <a className="block flex items-center text-white"  href="#">Google

        </a>

        
       
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center flex items-center px-6 h-16 text-sm bg-gray-900 opacity-90">
    <span className="text-white ">© Copyright 1986. All Rights Reserved.</span>
  </div>
</footer>

  )
}
