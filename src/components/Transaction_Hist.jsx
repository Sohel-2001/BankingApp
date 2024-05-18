import React, { useContext } from 'react'
import { context } from '../main'
import { Navigate } from 'react-router-dom';
import bgimg from "../images/finalBG.png"


const Transaction_Hist = () => {

  const { user , isAuthenticated} = useContext(context);

  
  if (!isAuthenticated) {
    return <Navigate to={"/"} />
}

  return (
    <div className='hist_main h-screen w-full flex items-center justify-center'>
            <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />


      <div className="for_colour bg-white z-10 bg-opacity-60 backdrop-filter rounded-xl backdrop-blur-lg p-4 h-[60vh] w-[40vw] text-center overflow-auto ">
        <h1 className='text-xl font-semibold mb-5'>Transfer History</h1>

        <div className="inner_hist bg-slate-300 p-5 min-h-[40vh] w-full">

          {

            user.transfer_Hist.length === 0 ? <div> empty</div>

            :

            user.transfer_Hist.map((item, index) => (
              <p className='bg-slate-400 mb-3 rounded-lg p-3' key={index}> {`${index + 1}) ${item}`}</p>
            ))

            
          }

        </div>
      </div>
    </div>
  )
}

export default Transaction_Hist