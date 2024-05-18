import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../main'
import bgimg from "../images/finalBG.png"


const Loan = () => {

    const { isAuthenticated, user } = useContext(context);

    if(!isAuthenticated){
          return <div className='authentication h-screen w-full flex flex-col gap-5 items-center justify-center text-7xl font-medium'>
        LogIn First

        <Link to={'/login'} className='p-5 bg-orange-400 rounded-lg text-2xl'>Login</Link>
      </div>
    }



    return(
        <div className='h-screen w-full relative flex items-center justify-center'>

            <img className=' absolute h-full w-full object-center object-cover z-0' src={bgimg} alt="" />



                <div className='z-10 flex bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg h-[60vh] w-[35vw] rounded-lg flex-col items-center justify-center'>

                    <Link className=' bg-slate-300 w-64 w- p-4 mb-3 rounded-xl text-center font-medium text-base hover:bg-slate-600 hover:scale-105 hover:text-white' to={'/apply'}>Apply for Loan</Link>
                    <Link className=' bg-slate-300 w-64 p-4 mb-3 rounded-xl text-center font-medium text-base hover:bg-slate-600 hover:scale-105 hover:text-white' to={'/activeloans'}>Check Your active loans</Link>
                    <Link className=' bg-slate-300 w-64 p-4 mb-3 rounded-xl text-center font-medium text-base hover:bg-slate-600 hover:scale-105 hover:text-white' to={'/loan_hist'}>Check Your pending loans</Link>
                    {/* <Link className=' bg-slate-300 w-64 p-4 mb-3 rounded-xl text-center font-medium text-base hover:bg-slate-600 hover:scale-105 hover:text-white' to={'/loan_emi'}>Pay Emi of Your Loans</Link> */}
                    <Link className=' bg-slate-300 w-64 p-4 mb-3 rounded-xl text-center font-medium text-base hover:bg-slate-600 hover:scale-105 hover:text-white' to={'/completed_loans'}>Check completed  Loans</Link>

                </div>

        </div>
    )













    // return (

    //     <div className=' min-h-screen relative flex justify-center items-center'>

    //         <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />


    //         <div className='z-10 bg-white h-[30rem] w-[90vw] my-[10rem] bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl flex items-center justify-around p-11 px-20'>

    //             <div className='loan2 bg-slate-300 h-[10rem] w-[10rem] flex flex-col items-center justify-center rounded-xl text-2xl text-center hover:scale-110 duration-150'>
    //                 <i className="ri-car-fill"></i>
    //                 <Link to={'/apply'}>Car loan</Link>
    //             </div>

    //             <div className='loan2 bg-slate-300  h-[10rem] w-[10rem] flex flex-col items-center justify-center rounded-xl  text-2xl text-center hover:scale-110 duration-150'>
    //                 <i className="ri-home-fill"></i>
    //                 <Link to={'/apply'}>Home loan</Link>
    //             </div>

    //             <div className='loan2 bg-slate-300  h-[10rem] w-[10rem] flex flex-col items-center justify-center rounded-xl  text-2xl text-center hover:scale-110 duration-150'>
    //                 <i className="ri-graduation-cap-fill"></i>
    //                 <Link to={'/apply'}>Education loan</Link>
    //             </div>

    //             <div className='loan2  bg-slate-300 h-[10rem] w-[10rem] flex flex-col items-center justify-center rounded-xl  text-2xl text-center hover:scale-110 duration-150'>
    //                 <i className="ri-user-3-fill"></i>
    //                 <Link to={'/apply'}>Personal loan</Link>
    //             </div>

    //         </div>
    //     </div>
    // )
}

export default Loan