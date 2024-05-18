import React, { useContext, useEffect } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import { context } from '../main'
import bgimg from "../images/finalBG.png"


const Profile_home = () => {
    const { user, isAuthenticated } = useContext(context);


        if(!isAuthenticated){
            return <div className='authentication h-screen w-full flex flex-col gap-5 items-center justify-center text-7xl font-medium'>
          LogIn First

          <Link to={'/login'} className='p-5 bg-orange-400 rounded-lg text-2xl'>Login</Link>
        </div>
      }
    // console.log(isAuthenticated);


    return (

        <div className='min-h-screen flex items-center justify-center bg-black/30 relative'>

            <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />


           

            <div className='border-2 z-10  min-h-[80vh] w-[50%]  flex  my-[20rem] relative  bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg '>

                <div className='h-60 w-60 border-2  rounded-full overflow-hidden absolute top-[-15%] right-[50%] left-[50%] translate-x-[-50%]'>

                    <img className='h-full w-full object-cover object-top' src={user.avatar} alt="" />

                </div>

                <div className='min-h-full w-full py-5 px-4 flex flex-col gap-14 mt-16'>

                    <h1 className='text-3xl font-semibold'>Account Details</h1>

                    <div className=' flex flex-col gap-7'>
                        <p className='border-2 bg-slate-200  p-5 rounded-xl text-xl font-medium'><span className='text-2xl'>Name</span> = {user.name}</p>
                        <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'> <span className='text-2xl'>Account No.</span> = {user._id}</p>
                        <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'> <span className='text-2xl'>Balance</span> = {user.balance}</p>
                        <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'><span className='text-2xl'>Email </span> = {user.email}</p>
                        {/* <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'> <span className='text-2xl'>D.O.B </span>= {user && user.birthDate.slice(0,10)}</p> */}
                    </div>

                    <NavLink to={'/transactions'} className='p-5 text-center  rounded-xl text-xl font-semibold border-2 bg-slate-400 hover:bg-slate-500 hover:text-white  duration-200'>Money Transactions</NavLink>
                </div>


                {/* <div className='h-full w-[40%] flex flex-col items-center justify-top p-7'>

                    <div className='h-60 w-60 border-2  rounded-full overflow-hidden'>

                        <img className='h-full w-full object-cover object-top' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    </div>

                    <h2 className='text-3xl font-semibold mt-6'>{user.name} </h2>


                </div> */}

            </div>


        </div>








        // <div className='min-h-screen flex items-center justify-center bg-black/30 relative'>

        //     <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

        //     <div className='border-2 z-10  min-h-[80vh] w-[70%]  flex overflow-hidden my-[10rem]  bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg '>

        //         <div className='min-h-full w-[60%] border-r-2  py-5 px-4 flex flex-col gap-14 '>

        //             <h1 className='text-4xl font-semibold'>Account Details</h1>

        //             <div className=' flex flex-col gap-7'>
        //                 <p className='border-2 bg-slate-200  p-5 rounded-xl text-xl font-medium'><span className='text-2xl'>Name</span> = {user.name}</p>
        //                 <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'> <span className='text-2xl'>Account No.</span> = {user._id}</p>
        //                 <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'> <span className='text-2xl'>Balance</span> = {user.balance}</p>
        //                 <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'><span className='text-2xl'>Email </span> = {user.email}</p>
        //                 <p className='border-2 bg-slate-200 p-5 rounded-xl text-xl font-medium'> <span className='text-2xl'>D.O.B </span>= {user.birthDate}</p>
        //             </div>

        //             <button className='p-5  rounded-xl text-xl font-semibold border-2 bg-slate-400 hover:bg-slate-500 hover:text-white  duration-200'>Check Balance</button>
        //         </div>


        //         <div className='h-full w-[40%] flex flex-col items-center justify-top p-7'>

        //             <div className='h-60 w-60 border-2  rounded-full overflow-hidden'>

        //                 <img className='h-full w-full object-cover object-top' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        //             </div>

        //             <h2 className='text-3xl font-semibold mt-6'>{user.name} </h2>


        //         </div>

        //     </div>


        // </div>
    )
}

export default Profile_home