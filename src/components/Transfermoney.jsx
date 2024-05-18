import axios from 'axios'
import React, { useContext, useState } from 'react'
import { context, server } from '../main'
import toast from 'react-hot-toast'
import bgimg from "../images/finalBG.png"
import { Navigate } from 'react-router-dom'


const Transfermoney = () => {


    const { user, isAuthenticated } = useContext(context);

    if (!isAuthenticated) {
      return <Navigate to={"/"} />
  }

    const [email, setemail] = useState("")
    const [transfer, setTransfer] = useState({ transfer: null })


    const transferHandler = async (e) => {
        e.preventDefault();

        const { data } = await axios.post(`${server}/users/transfer`, {
            email: email,
            money: transfer,
        }, {
            withCredentials: true,
        })
        setemail("");
        setTransfer("")

        toast.success(data.message);
    }

    return (
        <div className='h-screen w-full flex items-center justify-center'>

            <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

            <div className="add z-10 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-16">
                <form onSubmit={transferHandler} action="" className='text-center'>
                    <div>
                        <label htmlFor="" className='mr-5'>Email</label>
                        <input className='p-3 w-[20vw] outline-none border-none rounded-xl mb-4' type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter email here..' />
                    </div>
                    <div>
                        <label htmlFor="" className='mr-5'>Amount</label>
                        <input className='p-3 w-[20vw] outline-none border-none rounded-xl mb-4' type="Number" value={transfer} onChange={(e) => setTransfer(e.target.value)} placeholder='Enter amount here..' />
                    </div>
                    <button className='px-7 py-2 bg-slate-500 text-base rounded-lg hover:bg-slate-600 hover:text-white'>Transfer</button>
                </form>
            </div>
        </div>
    )
}

export default Transfermoney