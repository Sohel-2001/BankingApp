import React, { useContext, useEffect, useState } from 'react'
import { context, server } from '../main'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import bgimg from "../images/finalBG.png"


const ActiveLoans = () => {
  const { user, isAuthenticated } = useContext(context);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />
  }


  return (
    <div className='loanHist_main h-screen w-full flex items-center justify-center relative'>
      <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

      <div className='z-10 h-[70vh] w-[50vw] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-7 mt-[7rem]'>

      <h1 className='text-center text-3xl font-medium'>Loan Details</h1>

        <div className='middle_loanHist  h-[90%] rounded-lg overflow-scroll p-6'>


          {


            user.accepted_loans.length == 0 ? 

            <div>empty</div>

            :

            //user.loans.map()....
            user.accepted_loans.map((item, index) => (
              // <p key={index}>{}</p>

              <div key={index} className="inner_loanHist font-medium flex  bg-white flex-col gap-2 m-4 p-4 rounded-lg text-xl">
                <p>Loan Number : {index + 1} </p>
                <p>Loan Id : {item._id} </p>
                <p>Loan Type : {item.loan_name} </p>
                <p>Loan Amount : {item.requested_amount}</p>
                <p>Loan Amount paid: {item.loan_amount_paid}</p>
                <p>Loan Amount pending: {item.loan_amount_pending}</p>
                <p>Total Emi: {item.total_EMI}</p>
                <p>Loan Period: {item.loan_period}</p>
                <p >Loan status: <span className={item.status === "completed" ? `text-green-400` : `text-red-500`}>{item.status}</span></p>
              </div>


            ))
          }
         
        </div>
      </div>
    </div>
  )
}

export default ActiveLoans











// import React, { useContext, useEffect, useState } from 'react'
// import { context, server } from '../main'
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
// import bgimg from "../images/finalBG.png"


// const ActiveLoans = () => {
//   const { user, isAuthenticated } = useContext(context);

//   if (!isAuthenticated) {
//     return <Navigate to={"/"} />
//   }

//   const [loans, setloans] = useState([]);

//   const findUserLoans = async (e) => {


//     const { data } = await axios.get(`${server}/users/allLoans`, {
//       withCredentials: true,
//     })

//     setloans(data.final);

//     // console.log(data.final[0]);
//     // console.log(loans);
//   }

//   useEffect(() => {

//     findUserLoans();

//   }, [])

//   return (
//     <div className='loanHist_main h-screen w-full flex items-center justify-center relative'>
//       <img className='h-full w-full object-cover object-center absolute z-0' src={bgimg} alt="" />

//       <div className='z-10 h-[70vh] w-[50vw] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-7 mt-[7rem]'>

//       <h1 className='text-center text-3xl font-medium'>Loan Details</h1>

//         <div className='middle_loanHist  h-[90%] rounded-lg overflow-scroll p-6'>


//           {

//             //user.loans.map()....
//             loans.filter((item) =>item.status == "accepted").map((item, index) => (
//               // <p key={index}>{}</p>

//               <div key={index} className="inner_loanHist font-medium flex  bg-white flex-col gap-2 m-4 p-4 rounded-lg text-xl">
//                 <p>Loan Number : {index + 1} </p>
//                 <p>Loan Type : {item.loan_name} </p>
//                 <p>Loan Amount : {item.requested_amount}</p>
//                 <p>Loan Amount paid: {item.loan_amount_paid}</p>
//                 <p>Loan Amount pending: {item.loan_amount_pending}</p>
//                 <p>Total Emi: {item.total_EMI}</p>
//                 <p>Loan Period: {item.loan_period}</p>
//                 <p >Loan status: <span className={item.status === "completed" ? `text-green-400` : `text-red-500`}>{item.status}</span></p>
//               </div>


//             ))
//           }
         
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ActiveLoans