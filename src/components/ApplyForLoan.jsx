// import React, { useContext, useState } from 'react'
// import { context, server } from '../main'
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import bgimg from "../images/finalBG.png"
// import { Link } from 'react-router-dom';

// const ApplyForLoan = () => {

//   const { isAuthenticated, user } = useContext(context);

//   if(!isAuthenticated){
//     return <div className='authentication h-screen w-full flex flex-col gap-5 items-center justify-center text-7xl font-medium'>
//   LogIn First

//   <Link to={'/login'} className='p-5 bg-orange-400 rounded-lg text-2xl'>Login</Link>
// </div>
// }

//     if((user.balance <= 5000) || (user.pending_loans.length === 2) || (user.pending_loans.length === 1 && user.accepted_loans.length === 1)){
//       return <div className='loan-rules-outer  flex items-center justify-start'>
//           <div className='loan-rules'>
//               <h1>
//               <i className="ri-error-warning-fill"></i>
//                 Loan Conditions
//                 </h1> 

//               <div className='conditions'>
//                 <p>1. You should have 5000 minimum balance in Your account</p>
//                 <p>2. You shohld not have more than 2 Ongoing loans </p>
//               </div>
//           </div>
//       </div>
//   }

//   // const[loan_name, setLoanName] = useState("");
//   const [user_name, setUserName] = useState("");
//   const [D_O_B, setDOB] = useState("");
//   const [address, setaddress] = useState("");
//   const [loan_name, setLoanname] = useState("");
//   const [phn, setPhn] = useState(null);
//   const [requested_amount, setReqAmount] = useState(null);
//   const [loan_period, setLoanPeriod] = useState(null);

//   const clear = () => {
//     // setLoanName("");
//     setUserName("");
//     setDOB("");
//     setaddress("");
//     setPhn("");
//     setReqAmount("");
//     setLoanPeriod("");
//   }

//   const applyHandler = async (e) => {
//     e.preventDefault();

//     try {

//       const { data } = axios.post(`${server}/Homeloans/applyHomeLoan`, {
//         // loan_name,
//         user_name,
//         D_O_B,
//         address,
//         phn,
//         loan_name,
//         requested_amount,
//         loan_period
//       }, {
//         withCredentials: true,
//       })

//       // console.log(data);
//       // setamount(null);

//       // toast.success(data.message);

//       // <div>
//       // <p>Your Loan Request have been successfullt processed</p>
//       // </div>
//       // toast.success("Your Loan Request have been successfullt processed");
//       clear();

//     } catch (error) {

//       console.log(error);
//       // toast.error(error.response.data.message);
//       // toast.error("Your loan Request can't be accepted !");
//       clear();
//     }


//     // if(!isAuthenticated){
//     //   return toast.error("Login First")
//     // }
//     // if(amount > user.balance ){
//     //    return toast.error("Loan rejected")
//     // }
//     // else{
//     //   return toast.success("loan accepted");
//     // }
//   }

//   return (
//     <div className='min-h-screen w-full flex items-center justify-center relative'>

//       <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

//       <div className='min-h-[60%] w-2/4 z-10 bg-white bg-opacity-60 backdrop-filter rounded-lg backdrop-blur-lg p-5 flex flex-col gap-6 my-[10rem]'>
//         <h1 className='text text-center text-4xl font-semibold mb-7'>Apply For Loan</h1>
//         <form className='flex flex-col gap-6' onSubmit={applyHandler} action="">

//           {/* <div>
//           <label htmlFor="">Loan Name</label>
//           <input type="text" value={loan_name} onChange={(e) => setLoanName(e.target.value)} placeholder='Enter Loan name Here..' />
//         </div>  */}
//           <div className='flex items-center justify-center gap-3'>
//             <label htmlFor="">User Name</label>
//             <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' type="text" value={user_name} onChange={(e) => setUserName(e.target.value)} placeholder='Enter Your name Here..' />
//           </div>

//           <div className='flex items-center justify-center gap-3'>
//             <label htmlFor="">Loan Type</label>

//             <select className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' value={loan_name} onChange={(e) => setLoanname(e.target.value)} name="loan period" id="ddselect">
//               <option value="">Choose one</option>
//               <option value="Home Loan">Home Loan</option>
//               <option value="car Loan">Car Loan</option>
//               <option value="Education Loan">Education Loan</option>
//               <option value="Personal Loan">Personal Loan</option>
//             </select>
//           </div>
//           <div className='flex items-center justify-center gap-3'>
//             <label htmlFor="">Date Of Birth</label>
//             <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' type="date" value={D_O_B} onChange={(e) => setDOB(e.target.value)} placeholder='Enter Your date of birth Here..' />
//           </div>
//           <div className='flex items-center justify-center gap-3'>
//             <label htmlFor=""> Address</label>
//             <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder='Enter Your address Here..' />
//           </div>
//           <div className='flex items-center justify-center gap-3'>
//             <label htmlFor=""> Phone Number</label>
//             <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' type="number" value={phn} onChange={(e) => setPhn(e.target.value)} placeholder='Enter Your Number Here..' />
//           </div>
//           <div className='flex items-center justify-center gap-3'>
//             <label htmlFor="">Loan Amount</label>
//             <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' type="number" value={requested_amount} onChange={(e) => setReqAmount(e.target.value)} placeholder='Enter Loan amount Here..' />
//           </div>
//           {/* <div>
//           <label htmlFor="">Loan Period</label>
//           <input type="number" value={loan_period} onChange={(e) => setLoanPeriod(e.target.value)} placeholder='Enter Loan period Here..' />
//         </div>  */}

//           <div className='flex items-center justify-center gap-3'>
//             <label htmlFor="">Loan Period</label>

//             <select className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' value={loan_period} onChange={(e) => setLoanPeriod(e.target.value)} name="loan period" id="ddselect">
//               <option value="">Choose one</option>
//               <option value="3">3</option>
//               <option value="9">9</option>
//               <option value="12">12</option>
//             </select>
//           </div>

//             <div className='text-center'>

//           <button className='py-3 px-8 rounded-lg bg-slate-400 w-fit font-semibold hover:bg-slate-500 hover:text-white duration-300' type='submit'>apply</button>

//             </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default ApplyForLoan


import React, { useContext, useState } from 'react'
import { context, server } from '../main'
import toast from 'react-hot-toast';
import axios from 'axios';
import bgimg from "../images/finalBG.png"
import { Link } from 'react-router-dom';


// import React, { useState, useContext } from 'react'
// import axios from 'axios';
// import { context, server } from '../main';
// import { Link, Navigate } from "react-router-dom"

const ApplyForLoan = () => {

  const { isAuthenticated, setisAuthenticated, user } = useContext(context);

  if (!isAuthenticated) {
    return <div className='authentication h-screen w-full flex flex-col gap-5 items-center justify-center text-7xl font-medium'>
      LogIn First

      <Link to={'/login'} className='p-5 bg-orange-400 rounded-lg text-2xl'>Login</Link>
    </div>
  }

  if ((user.balance <= 5000) || (user.pending_loans.length === 2) || (user.pending_loans.length === 1 && user.accepted_loans.length === 1)) {
    return <div className='loan-rules-outer  flex items-center justify-start'>
      <div className='loan-rules'>
        <h1>
          <i className="ri-error-warning-fill"></i>
          Loan Conditions
        </h1>

        <div className='conditions'>
          <p>1. You should have 5000 minimum balance in Your account</p>
          <p>2. You shohld not have more than 2 Ongoing loans </p>
        </div>
      </div>
    </div>
  }

  const [formData, setFormData] = useState({
    user_name: "",
    D_O_B: "",
    address: "",
    loan_name: "",
    phn: "",
    requested_amount: "",
    loan_period: "",
    Income_Certificate: null,
    Birth_Certificate: null,
    Pan_Card: null,
    Adhaar_Card: null,
  })

  const clear = () => {
        formData.Adhaar_Card = null
        formData.Pan_Card = null
        formData.Income_Certificate = null
        formData.Birth_Certificate = null
        formData.D_O_B = ""
        formData.address = ""
        formData.loan_name = ""
        formData.loan_period = ""
        formData.phn = ""
        formData.requested_amount = ""
        formData.user_name = ""
      }

  // const [errors, setErrors] = useState({});



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${server}/Homeloans/applyHomeLoan`, {
        user_name: formData.user_name,
        D_O_B: formData.D_O_B,
        // password: formData.password,
        address: formData.address,
        loan_name: formData.loan_name,
        phn: formData.phn,
        requested_amount: formData.requested_amount,
        loan_period: formData.loan_period,
        Income_Certificate: formData.Income_Certificate,
        Birth_Certificate: formData.Birth_Certificate,
        Pan_Card: formData.Pan_Card,
        Adhaar_Card: formData.Adhaar_Card,
      }, {
        headers: {
          // "Content-Type": "application/json",
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })

      clear();

    }
    catch(error) {
      console.log("form validation failed",error);
      clear();
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({

      ...formData,
      [name]: value,
    })
  }

  const handleIncome_CertificateChange = (e) => {

    console.log(e.target.files[0]);
    setFormData({
      ...formData,
      Income_Certificate: e.target.files[0],
    });
  };
  const handleBirth_CertificateChange = (e) => {

    console.log(e.target.files[0]);
    setFormData({
      ...formData,
      Birth_Certificate: e.target.files[0],
    });
  };
  const handlePanChange = (e) => {

    console.log(e.target.files[0]);
    setFormData({
      ...formData,
      Pan_Card: e.target.files[0],
    });
  };
  const handleAdhaarChange = (e) => {

    console.log(e.target.files[0]);
    setFormData({
      ...formData,
      Adhaar_Card: e.target.files[0],
    });
  };

  // if (isAuthenticated) return <Navigate to={"/a"} />


  return (

    <div className='min-h-screen w-full flex items-center justify-center relative'>

      <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

      <div className='min-h-[60%] w-2/4 z-10 bg-white bg-opacity-60 backdrop-filter rounded-lg backdrop-blur-lg p-5 flex flex-col gap-6 my-[10rem]'>
        <h1 className='text text-center text-4xl font-semibold mb-7'>Apply For Loan</h1>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit} action="">

          {/* <div>
      //           <label htmlFor="">Loan Name</label>
      //           <input type="text" value={loan_name} onChange={(e) => setLoanName(e.target.value)} placeholder='Enter Loan name Here..' />
      //         </div>  */}
          <div className='flex items-center justify-center gap-3'>
            <label htmlFor="">User Name</label>
            <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' name='user_name' type="text" value={formData.user_name} onChange={handleChange} placeholder='Enter Your name Here..' />
          </div>

          <div className='flex items-center justify-center gap-3'>
            <label htmlFor="">Loan Type</label>

            <select className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' value={formData.loan_name} onChange={handleChange} name="loan_name" id="ddselect">
              <option value="">Choose one</option>
              <option value="Home Loan">Home Loan</option>
              <option value="car Loan">Car Loan</option>
              <option value="Education Loan">Education Loan</option>
              <option value="Personal Loan">Personal Loan</option>
            </select>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <label htmlFor="">Date Of Birth</label>
            <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' name='D_O_B' type="date" value={formData.D_O_B} onChange={handleChange} placeholder='Enter Your date of birth Here..' />
          </div>
          <div className='flex items-center justify-center gap-3'>
            <label htmlFor=""> Address</label>
            <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' name='address' type="text" value={formData.address} onChange={handleChange} placeholder='Enter Your address Here..' />
          </div>
          <div className='flex items-center justify-center gap-3'>
            <label htmlFor=""> Phone Number</label>
            <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' name='phn' type="number" value={formData.phn} onChange={handleChange} placeholder='Enter Your Number Here..' />
          </div>
          <div className='flex items-center justify-center gap-3'>
            <label htmlFor="">Loan Amount</label>
            <input className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' name='requested_amount' type="number" value={formData.requested_amount} onChange={handleChange} placeholder='Enter Loan amount Here..' />
          </div>
          {/* <div>
      //           <label htmlFor="">Loan Period</label>
      //           <input type="number" value={loan_period} onChange={(e) => setLoanPeriod(e.target.value)} placeholder='Enter Loan period Here..' />
      //         </div>  */}

          <div className='flex items-center justify-center gap-3'>
            <label htmlFor="">Loan Period</label>

            <select className='w-2/4 py-3 px-2 rounded-lg outline-none border-none' value={formData.loan_period} onChange={handleChange} name="loan_period" id="ddselect">
              <option value="">Choose one</option>
              <option value="3">3</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>

          <div className='flex items-center justify-center gap-3'>

            <label htmlFor="">Income_Certificate</label>
            <input
              type="file"
              name="Income_Certificate"
              onChange={handleIncome_CertificateChange}
              placeholder="Upload Income_Certificate"
            />

          </div>

          <div className='flex items-center justify-center gap-3'>
          <label htmlFor="">Birth_Certificate</label>

            <input
              type="file"
              name="Birth_Certificate"
              onChange={handleBirth_CertificateChange}
              placeholder="Upload Birth_Certificate"
            />
          </div>

          <div className='flex items-center justify-center gap-3'>

          <label htmlFor="">Pan Card</label>

            <input
              type="file"
              name="Pan_Card"
              onChange={handlePanChange}
              placeholder="Upload Pan_Card"
            />

          </div>

          <div className='flex items-center justify-center gap-3'>

          <label htmlFor="">Adhaar Card</label>

          
          <input
            type="file"
            name="Adhaar_Card"
            onChange={handleAdhaarChange}
            placeholder="Upload Adhaar_Card"
          />

          </div>

          <div className='text-center'>

            <button className='py-3 px-8 rounded-lg bg-slate-400 w-fit font-semibold hover:bg-slate-500 hover:text-white duration-300' type='submit'>apply</button>

          </div>

        </form>
      </div>
    </div>

    // <div className='min-h-screen flex items-start justify-between p-11 bg-[#648cb3] bg-[]'>

    //     <img className=' h-[114vh] w-[40%] object-cover object-center rounded-lg' src="https://images.unsplash.com/photo-1687720657052-c026be7f388c?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    //     <form action="" onSubmit={handleSubmit} className='signUp relative rounded-lg h-[100%] w-[60%] bg-[#496989]  flex flex-col gap-7 p-[2vw] '>

    //         <h1 className=' text-6xl font-semibold w-1/2 leading-[4vw] mb-5 text-white'>Welcome to BBitBank</h1>

    //         <div className='name&email flex items-center justify-between'>

    //             <div className=' flex flex-col '>
    //                 <label htmlFor="">name</label>

    //                 <input
    //                     className=''
    //                     type="text"
    //                     name='name'
    //                     placeholder='name'
    //                     value={formData.name}
    //                     onChange={handleChange}
    //                 />

    //                 {errors.name && <div className='errors text-red-500'>{errors.name}</div>}
    //             </div>

    //             <div className='flex flex-col'>
    //                 <label htmlFor="">email</label>

    //                 <input
    //                     type="email"
    //                     name='email'
    //                     placeholder='email'
    //                     value={formData.email}
    //                     onChange={handleChange}
    //                 />
    //                 {errors.email && <div className='errors text-red-500'>{errors.email}</div>}


    //             </div>

    //         </div>

    //         <div className='mobile&pan flex items-center justify-between'>

    //             <div className='flex flex-col'>
    //                 <label htmlFor="">Mobile</label>

    //                 <input
    //                     type="number"
    //                     name='mobileNo'
    //                     placeholder='Mobile Number'
    //                     onChange={handleChange}
    //                     value={formData.mobileNo}
    //                 />
    //                 {errors.mobileNo && <div className='errors text-red-500'>{errors.mobileNo}</div>}

    //             </div>


    //             <div className='flex flex-col'>
    //                 <label htmlFor="">pan number</label>

    //                 <input
    //                     type="number"
    //                     name='pan'
    //                     placeholder='Pan Number'
    //                     value={formData.pan}
    //                     onChange={handleChange}

    //                 />

    //                 {errors.pan && <div className='errors text-red-500'>{errors.pan}</div>}


    //             </div>

    //         </div>
    //         <div className='age&bdate flex items-center justify-between'>

    //             <div className='flex flex-col'>
    //                 <label htmlFor="">Age</label>

    //                 <input
    //                     type="number"
    //                     name='age'
    //                     placeholder='age'
    //                     value={formData.age}
    //                     onChange={handleChange}

    //                 />


    //                 {errors.age && <div className='errors text-red-500'>{errors.age}</div>}


    //             </div>
    //             <div className='flex flex-col'>
    //                 <label htmlFor="">Birth date</label>

    //                 <input
    //                     type="date"
    //                     name='birthDate'
    //                     placeholder='Enter birthDate'
    //                     value={formData.birthDate}
    //                     onChange={handleChange}

    //                 />


    //                 {errors.birthDate && <div className='errors text-red-500'>{errors.birthDate}</div>}


    //             </div>

    //         </div>
    //         <div className='flex flex-col'>
    //             <label htmlFor="">gender</label>

    //             <select
    //                 name="gender"
    //                 value={formData.gender}
    //                 onChange={handleChange}
    //             >
    //                 <option value="">Select Gender</option>
    //                 <option value="male">Male</option>
    //                 <option value="female">Female</option>
    //                 <option value="other">Other</option>
    //             </select>

    //             {errors.gender && <div className='errors text-red-500'>{errors.gender}</div>}


    //             <input
    //                 type="file"
    //                 name="avatar"
    //                 onChange={handleFileChange}
    //                 placeholder="Upload Avatar"
    //             />


    //         </div>

    //         <div className="passconfpass flex items-center justify-between">

    //             <div className='flex flex-col'>
    //                 <label htmlFor="">password</label>

    //                 <input
    //                     type="password"
    //                     name='password'
    //                     placeholder='Password'
    //                     value={formData.password}
    //                     onChange={handleChange}

    //                 />

    //                 {errors.password && <div className='errors text-red-500'>{errors.password}</div>}

    //             </div>

    //             <div className='flex flex-col'>
    //                 <label htmlFor="">confirm password</label>

    //                 <input
    //                     type="password"
    //                     name='confirmPassword'
    //                     placeholder='confirm Password'
    //                     onChange={handleChange}
    //                     value={formData.confirmPassword}
    //                 />

    //                 {errors.confirmPassword && <div className='errors text-red-500'>{errors.confirmPassword}</div>}

    //             </div>
    //         </div>


    //         <div className="btns flex items-center justify-center relative">

    //             <button className='px-[4vw] py-[15px] rounded-[50px] bg-[#cf4a4a] hover:bg-[#e93535] text-white font-semibold text-[1.1vw]' type='submit'>Log in</button>
    //             {/* or */}
    //         </div>
    //         <Link to={"/"} className=' absolute right-5 bottom-3 text-rose-600' type='submit'>Go to Home</Link>
    //     </form>

    // </div>
  )
}

export default ApplyForLoan
