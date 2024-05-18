import React from 'react'
import { BsBank } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from 'react-router-dom';



const Footer = () => {


  const loaction = useLocation();
  
  const excludePaths = ["/login","/register","/adminlogin"];

  if(excludePaths.includes(loaction.pathname)){
    return null;  
  }

  return (
    <div className='footer  h-[50vh] w-full p-10 z-10'>


      <div className='flex items-center justify-between h-full w-full'>


        <div className=' h-[15vw] w-[20vw]   p-5 text-white'>
          <BsBank className=' text-8xl ml-20' />
          <p className='text-2xl font-semibold text-center'>BBitBank</p>

          <div className='flex items-center gap-5 mt-7 justify-center'>
            <p className='text-xl bg-sky-600 p-2 rounded-full'>
              <FaFacebook />
            </p>
            <p className='text-xl bg-pink-600 p-2 rounded-full'>
              <FaInstagram />
            </p>
            <p className='text-xl bg-black/70 p-2 rounded-full'>
              <FaXTwitter />
            </p>
            <p className='text-xl bg-red-600 p-2 rounded-full'>
              <FaYoutube />
            </p>
          </div>

        </div>


        <div className=' h-[15vw] w-[20vw]  flex flex-col gap-5 items-center'>

          <h1 className='text-2xl text-white'>Product</h1>
          <p className='text-slate-400'>Overview</p>
          <p className='text-slate-400'>Customer Stories</p>
          <p className='text-slate-400'>Integrations</p>
          <p className='text-slate-400'>Security</p>
        </div>

        <div className=' h-[15vw] w-[20vw]  flex flex-col gap-5 items-center'>

          <h1 className='text-2xl text-white'>Company</h1>
          <p className='text-slate-400'>About Us</p>
          <p className='text-slate-400'>Media Kit</p>
          <p className='text-slate-400'>Contact Support</p>
          <p className='text-slate-400'>Security</p>
        </div>




        <div className='footer-last'>

        </div>

      </div>

    </div>
  )
}

export default Footer