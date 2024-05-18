import axios from 'axios';
import React, { useContext, useState } from 'react'
import { context, server } from '../main';
import toast from 'react-hot-toast';
import bgimg from "../images/finalBG.png"
import { Navigate } from 'react-router-dom';

const Addmoney = () => {

    const { user, isAuthenticated } = useContext(context);

    if (!isAuthenticated) {
      return <Navigate to={"/"} />
  }


    const [money, setmoney] = useState()


    const addhandler = async (e) => {
        e.preventDefault();
        // console.log(Number(add));

        //  const money2 = Number(money);
        // console.log(typeof(money2));

        const {data} = await axios.put(`${server}/users/credit`, {
            money
        }, {
            withCredentials: true,
        })

        setmoney("")
        toast.success(data.message);

    }

    return (
        <div className='h-screen w-full flex items-center justify-center'>

            <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

            <div className="add z-10 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-16">
                <form onSubmit={addhandler} action="" className='text-center'>
                    <div> 
                        <label htmlFor="" className='mr-5'>Amount</label>
                        <input className='p-3 w-[20vw] outline-none border-none rounded-xl mb-4' type="Number" value={money} onChange={(e) => setmoney(e.target.value)} placeholder='Enter amount here..' /> 
                        </div>
                    <button className='px-7 py-2 bg-slate-500 text-base rounded-lg hover:bg-slate-600 hover:text-white'>add</button>
                </form>
            </div>
        </div>
    )
}

export default Addmoney