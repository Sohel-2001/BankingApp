import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Home from './components/Home'
// import Profile from './components/Profile'
import Profile from './components/Profile_home'
import Trans_Hist from './components/Transaction_Hist'
import Transactions from './components/Transactions'
import Loan_Hist from './components/Loan_Hist'
// import Register from './components/Register'
import Newregister from './components/Newregister'
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'
import { useEffect } from 'react'
import axios from 'axios'
import { context, server } from './main'
import Loan from './components/Loan'
import LoanEmi from './components/LoanEmi'
import CompletedLoans from './components/CompletedLoans'
import ApplyForLoan from './components/ApplyForLoan'
import Admin_login from './components/Admin_login'
import AdminUpdate from './components/AdminUpdate'
import AdminHome from './components/AdminHome'
import TotalUsers from './components/TotalUsers'
import Ongoing_loans from './components/Ongoing_loans'
import Addmoney from './components/Addmoney'
import Debitmoney from './components/Debitmoney'
import Transfermoney from './components/Transfermoney'
import ActiveLoans from './components/ActiveLoans'
// import Image from './components/Image'

const App = () => {

  const { setuser ,user, setisAuthenticated, isAuthenticated} = useContext(context);

  useEffect(() =>{

    axios.get(`${server}/users/me`,{
      withCredentials : true,
    })
    .then((res) =>{ 
      

        setuser(res.data.user);

          setisAuthenticated(true)

        // setisAuthenticated(true);

    })
    .catch(() => {
      setuser({});
      setisAuthenticated(false);
    })
  },[setuser,setisAuthenticated])



  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/trans_hist' element={<Trans_Hist/>}/>
        <Route path='/transactions' element={<Transactions/>}/>
        <Route path='/add_money' element={<Addmoney/>}/>
        <Route path='/debit_money' element={<Debitmoney/>}/>
        <Route path='/transfer_money' element={<Transfermoney/>}/>
        <Route path='/loan_hist' element={<Loan_Hist/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Newregister/>}/>
        <Route path='/loan' element={<Loan/>}/>
        <Route path='/loan_emi' element={<LoanEmi/>}/>
        <Route path='/activeloans' element={<ActiveLoans/>}/>
        <Route path='/completed_loans' element={<CompletedLoans/>}/>
        <Route path='/apply' element={<ApplyForLoan/>}/>
        {/* <Route path='/adminUpdate' element={<AdminUpdate/>}/> */}
        {/* <Route path='/adminlogin' element={<Admin_login/>}/> */}
        {/* <Route path='/adminhome' element={<AdminHome/>}/> */}
        {/* <Route path='/totalUsers' element={<TotalUsers/>}/> */}
        {/* <Route path='/ongoing_loans' element={<Ongoing_loans/>}/> */}
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  )
}

export default App