import axios from 'axios';
import React, { useContext, useState } from 'react'
import { context, server } from '../main';
import toast from 'react-hot-toast';
import bgimg from "../images/finalBG.png"
import { Navigate } from 'react-router-dom';


const Debitmoney = () => {

    const { user, isAuthenticated } = useContext(context);

    if (!isAuthenticated) {
      return <Navigate to={"/"} />
  }

  const [debit, setdebit] = useState(0)

  const debithandler = async (e) => {
    e.preventDefault();


    // console.log("ff");

    try {

      const { data } = await axios.put(`${server}/users/debit`, {
        debit
      }, {
        withCredentials: true,
      })
      setdebit("")
      toast(data.message);

    } catch (error) {
      toast.error(error.response.data.message)
    }



  }


  return (
    <div className='h-screen w-full flex items-center justify-center'>

    <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

    <div className="add z-10 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-16">
        <form onSubmit={debithandler} action="" className='text-center'>
            <div> 
            <label htmlFor="" className='mr-5'>Amount</label>

                <input className='p-3 w-[20vw] outline-none border-none rounded-xl mb-4' type="Number" value={debit} onChange={(e) => setdebit(e.target.value)} placeholder='Enter amount here..' />
                 </div>
            <button className='px-7 py-2 bg-slate-500 text-base rounded-lg hover:bg-slate-600 hover:text-white'>debit</button>
        </form>
    </div>
</div>
  )
}

export default Debitmoney