import React, { useContext, useEffect } from 'react'
import {Link, NavLink, useLocation } from "react-router-dom";
import { context, server } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';

const Header = () => {

  const{isAuthenticated,setisAuthenticated,loading,setloading, adminisAuthenticated, setadminisAuthenticated} = useContext(context);

  // console.log(isAuthenticated);

  const loaction = useLocation();
  
  const excludePaths = ["/login","/register","/adminlogin"];

  if(excludePaths.includes(loaction.pathname)){
    return null;  
  }

  useEffect(() => {

  },[]);

  const logoutHandler = async() =>{
    setloading(true);

    try {

      const {data} = await axios.get(`${server}/users/logout`,{
        withCredentials : true,
      })
  
      toast.success("Logged Out Successfully");
      setisAuthenticated(false);
      setadminisAuthenticated(false);
      setloading(false);
      
    } catch (error) {

      toast.error(error.response.data.message);
      console.log(error);
      setisAuthenticated(true);
      setadminisAuthenticated(true);
      setloading(false);
      
    }
  }

  

  return (
    <nav className=' p-6  header text-white absolute rounded-3xl w-[90%] z-10 ml-[5rem] top-4 flex justify-between items-center'>

      <div className="text-4xl font-semibold">

       <h2>BBitBank.</h2>

      </div>


      <article className=' shadow-2xl flex items-center gap-16 text-lg '>
        <NavLink className={({isActive}) => isActive ? ` border-b-4 border-white ` : ``} to={"/"}>Home</NavLink>
        {/* <Link to={"/profile"}>Profile</Link> */}

      
        {/* <a href="/profile">Profile</a> */}

        {
          adminisAuthenticated ? "" : <NavLink className={({isActive}) => isActive ? ` border-b-4 border-white ` : ``} to={"/profile"}>Profile</NavLink>
        }
        {/* {
          adminisAuthenticated ? "" : <a href="/profile">Profile</a>
        } */}

        {
          adminisAuthenticated ? "" : <NavLink className={({isActive}) => isActive ? ` border-b-4 border-white` : ``} to={"/loan"}>Loan</NavLink>
        }
        

        {/* <button disabled={adminisAuthenticated}><a href="/adminlogin">Admin</a></button> */}

        {/* <a href="/adminlogin">Admin</a> */}



        {/* {
          adminisAuthenticated ? 
          // (<button disabled={loading} onClick={logoutHandler} className='btn'>LogOut</button>)
          ""
          // (<Link to={"/logout"}>Logout</Link>)
          :
          ( <Link to={"/adminlogin"}>Admin</Link>)
        } */}

        {/* <Link to={"/admin"}>Admin</Link> */}

        {
          isAuthenticated || adminisAuthenticated ? 
          (<button disabled={loading} onClick={logoutHandler} className='btn'>LogOut</button>)
          // (<Link to={"/logout"}>Logout</Link>)
          :
          ( <NavLink className={({isActive}) => isActive ? ` border-b-4 border-white` : ``} to={"/login"}>Login</NavLink>)
        }
       
      </article>

    </nav>
  )
}

export default Header