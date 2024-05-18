import React, { useContext, useState } from 'react'
import { context, server } from '../main'
import toast from 'react-hot-toast';
import axios from 'axios';
import bgimg from "../images/finalBG.png"
import { Link } from 'react-router-dom';

const ApplyForLoan = () => {

  const { isAuthenticated, user } = useContext(context);

  if(!isAuthenticated){
    return <div className='authentication h-screen w-full flex flex-col gap-5 items-center justify-center text-7xl font-medium'>
  LogIn First

  <Link to={'/login'} className='p-5 bg-orange-400 rounded-lg text-2xl'>Login</Link>
</div>
}

  //   if((user.balance <= 5000) || (user.pending_loans.length === 2) || (user.pending_loans.length === 1 && user.accepted_loans.length === 1)){
  //     return <div className='loan-rules-outer  flex items-center justify-start'>
  //         <div className='loan-rules'>
  //             <h1>
  //             <i className="ri-error-warning-fill"></i>
  //               Loan Conditions
  //               </h1> 

  //             <div className='conditions'>
  //               <p>1. You should have 5000 minimum balance in Your account</p>
  //               <p>2. You shohld not have more than 2 Ongoing loans </p>
  //             </div>
  //         </div>
  //     </div>
  // }

  // const[loan_name, setLoanName] = useState("");
 
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState("");

  const clear = () => {
    setAmount("")
    setId("")
  }

  const applyHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = axios.put(`${server}/Homeloans/emi`, {
        // loan_name,
        id,
        amount
      }, {
        withCredentials: true,
      })

      // console.log(data);
      // setamount(null);

      // toast(data.message);

      // <div>
      // <p>Your Loan Request have been successfullt processed</p>
      // </div>
      // toast.success("Your Loan Request have been successfullt processed");
      clear();

    } catch (error) {

      console.log(error);
      // toast.error(error.response.data.message);
      // toast.error("Your loan Request can't be accepted !");
      clear();
    }


    // if(!isAuthenticated){
    //   return toast.error("Login First")
    // }
    // if(amount > user.balance ){
    //    return toast.error("Loan rejected")
    // }
    // else{
    //   return toast.success("loan accepted");
    // }
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center relative'>

      <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

      <div className='min-h-[60%] w-2/4 z-10 bg-white bg-opacity-60 backdrop-filter rounded-lg backdrop-blur-lg p-5 flex flex-col gap-6 my-[10rem]'>
        <h1 className='text text-center text-4xl font-semibold mb-7'>Pay Emi</h1>
        <form className='flex flex-col gap-6' onSubmit={applyHandler} action="">

          {/* <div>
          <label htmlFor="">Loan Name</label>
          <input type="text" value={loan_name} onChange={(e) => setLoanName(e.target.value)} placeholder='Enter Loan name Here..' />
        </div>  */}
          <div className='flex items-center justify-center gap-3'>
            <label htmlFor="">Loan Id</label>
            <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='Enter Your Loan Id Here..' />
          </div>

          <div className='flex items-center justify-center gap-3'>
            <label htmlFor="">Emi amount</label>
            <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' type="Number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Your amount Here..' />
          </div>
  

            <div className='text-center'>

          <button className='py-3 px-8 rounded-lg bg-slate-400 w-fit font-semibold hover:bg-slate-500 hover:text-white duration-300' type='submit'>apply</button>

            </div>

        </form>
      </div>
    </div>
  )
}

export default ApplyForLoan