import axios from 'axios'
import React, { useContext, useState } from 'react'
import { context, server } from '../main'
import toast from 'react-hot-toast'
import { Link, Navigate } from 'react-router-dom'
import bgimg from "../images/finalBG.png"


const Transactions = () => {

  const { user, isAuthenticated } = useContext(context);

    if (!isAuthenticated) {
      return <Navigate to={"/"} />
  }


  



 

 


  return (
    <div className=' h-screen w-full flex items-center justify-center'>

      <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />


      <div className='min-h-[30vh] w-[30%] rounded-lg flex flex-col items-center gap-6 py-10 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg'>

          <Link className='p-3 bg-slate-300 w-[70%] text-center rounded-2xl text-lg font-medium hover:bg-slate-600 hover:text-white' to={'/debit_money'}>Debit Money</Link>
          <Link className='p-3 bg-slate-300 w-[70%] text-center rounded-2xl text-lg font-medium hover:bg-slate-600 hover:text-white' to={'/add_money'}>Add Money</Link>
          <Link className='p-3 bg-slate-300 w-[70%] text-center rounded-2xl text-lg font-medium hover:bg-slate-600 hover:text-white' to={'/transfer_money'}>Transfer Money</Link>
          {/* <Link className='p-3 bg-slate-300 w-[70%] text-center rounded-2xl text-lg font-medium hover:bg-slate-600 hover:text-white' to={'/loan_hist'}>Loan status</Link> */}
          <Link className='p-3 bg-slate-300 w-[70%] text-center rounded-2xl text-lg font-medium hover:bg-slate-600 hover:text-white' to={'/trans_hist'}>Check Transfer History</Link>


      </div>

    </div>
  )

  // return (
  //   <div className='transaction_main'>
  //       <div className="add">
  //           <form onSubmit={addhandler} action="">
  //              <div> <input type="Number" value={money} onChange={(e) => setmoney(e.target.value)} placeholder='Enter amount here..' /> </div>
  //               <button>add</button>
  //           </form>
  //       </div>


  //       <div className="debit">
  //           <form onSubmit={debithandler} action="">
  //              <div> <input type="Number" value={debit} onChange={(e) => setdebit(e.target.value)} placeholder='Enter amount here..' /> </div>
  //               <button >debit</button>
  //           </form>
  //       </div>


  //       <div className="transfer">
  //           <form onSubmit={transferHandler} action="">

  //             <div>
  //                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter email here..' /> 
  //             </div>

  //               <div> 
  //                 <input type="Number" value={transfer} onChange={(e) => setTransfer(e.target.value)} placeholder='Enter amount here..' /> 
  //               </div>

  //               <button>transfer</button>
  //           </form>
  //       </div>

  //   </div>
  // )
}

export default Transactions