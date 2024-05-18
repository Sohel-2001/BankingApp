import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { context } from '../main';

const AdminHome = () => {

  const{ isAuthenticated , adminisAuthenticated } = useContext(context);

  if (!adminisAuthenticated) {
    return <Navigate to={"/"} />
}

  return (
    <div className='admin-home'>

    
        <Link className='container'  to={"/adminupdate"}>Loan Requests</Link>
    
        <Link className='container' to={"/totalUsers"}>Total Users</Link>
    
        <Link className='container' to={"/ongoing_loans"}>Ongoing Loans</Link>
    

    </div>
  )
}

export default AdminHome