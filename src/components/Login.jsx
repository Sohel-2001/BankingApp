// import React, { useContext, useEffect, useState } from 'react'
// import { Link, Navigate } from 'react-router-dom'
// import { context, server } from '../main'
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const Login = () => {

//   const {isAuthenticated,user,setisAuthenticated,loading,setloading} = useContext(context);

//   const[email,setemail] = useState("");
//   const[password,setpassword] = useState("");

//   const clear = () =>{
//     setemail("");
//     setpassword("");
//   }

//   const submitHandler = async(e) =>{

//     e.preventDefault();
//     setloading(true);

//     try {

//       const {data} = await axios.post(`${server}/users/login`,{
//         email,
//         password
//       },{
//         headers : {
//           "Content-Type" : "application/json"
//         },
//         withCredentials : true,
//       })
  
//       toast.success(data.message);
//       // console.log(user);
//       setisAuthenticated(true);
//       setloading(false);
//       clear();
      
//     } catch (error) {

//       toast.error(error.response.data.message);
//       console.log(error);
//       setisAuthenticated(false);
//       setloading(false);
      
//     }
//   }



//   if(isAuthenticated) return <Navigate to={"/"}/>

//   return (
//     <div className="fixed">
//     <div className='login'>

//       <div className='login_inner'>

//         <form action="" onSubmit={submitHandler}>

//           <h1>Login</h1>

//           <div className="input-box">
//             <input 
//                   type="email" 
//                   placeholder='email' 
//                   value={email} 
//                   onChange={(e) => setemail(e.target.value)}
//             />

//             <i className="ri-mail-fill"></i>

//           </div>


//           <div className="input-box">
//             <input 
//                   type="password" 
//                   placeholder='password' 
//                   value={password} 
//                   onChange={(e) => setpassword(e.target.value)} 
//             />

//             <i className="ri-lock-fill"></i>

//           </div>

//           <button disabled={loading} type="submit" className='btn'>LogIn</button>

//           <div className='register_login'>
//             <h4>or</h4>

//             <Link to={"/register"}>Sign Up</Link>
//           </div>

//         </form>



//       </div>

//     </div>
//     </div>
//   )
// }

// export default Login




import React, { useState, useContext } from 'react'
import axios from 'axios';
import { context, server } from '../main';
import { Link, Navigate } from "react-router-dom"


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        
    })

  const { isAuthenticated, setisAuthenticated, loading, setloading } = useContext(context);



    const [errors, setErrors] = useState({});

    const isValidEmail = (email) => {
        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const isValidPassword = (password) => {

        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;

        return (
            password.length >= 8 &&
            symbolRegex.test(password) &&
            numberRegex.test(password) &&
            upperCaseRegex.test(password) &&
            lowerCaseRegex.test(password)
        );

    }


    const validateForm = () => {

        let newErrors = {};

     
        if (!formData.email) {
            newErrors.email = "email is required"
        }
        else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email format"
        }

        if (!formData.password) {
            newErrors.password = "passowrd is required"
        }
        else if (!isValidPassword(formData.password)) {
            newErrors.password = "password should be 8 characters long and it must contsin one lowerCse letter , one upperCase letter, one symbol and one number";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    // console.log(errors);

    const handleSubmit =async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            const { data } = await axios.post(`${server}/users/login`, {
                email : formData.email,
                password : formData.password,
              }, {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              })
      setisAuthenticated(true);
      window.alert("Login successful")

        }
        else {
            console.log("form validation failed", errors);
      window.alert("Login not successful")

        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({

            ...formData,
            [name]: value,
        })
    }

  if (isAuthenticated) return <Navigate to={"/"} />


    return (
        <div className='min-h-screen flex items-start justify-between p-11 bg-[#648cb3] bg-[]'>

            <img className=' h-[114vh] w-[40%] object-cover object-center rounded-lg' src="https://images.unsplash.com/photo-1687720657052-c026be7f388c?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <form action="" onSubmit={handleSubmit} className='signUp relative rounded-lg h-[114vh] w-[60%] bg-[#496989]  flex flex-col  gap-7 p-[2vw] '>

                <h1 className=' text-6xl font-semibold w-1/2 leading-[4vw] mb-5 text-white'>Welcome to BBitBank</h1>

                <div className='name&email flex flex-col items-center gap-6   h-1/2 justify-center'>


                    
          <div className="input-box flex flex-col">
            <label htmlFor="">Email</label>
            <input 
                  type="email" 
                  name='email'
                  placeholder='email' 
                  value={formData.email} 
                  onChange={handleChange}
            />

            {/* <i className="ri-mail-fill"></i> */}

          </div>


          <div className="input-box flex flex-col">
          <label htmlFor="">Password</label>

            <input 
                  type="password" 
                  name='password'
                  placeholder='password' 
                  value={formData.password} 
                  onChange={handleChange} 
            />

            {/* <i className="ri-lock-fill"></i> */}

          </div>

                <div className="btns flex flex-col items-center justify-center relative">
                    
                <button className='px-[4vw] py-[15px] rounded-[50px] bg-[#cf4a4a] hover:bg-[#e93535] text-white font-semibold text-[1.1vw]' type='submit'>Log in</button>
                or
                <Link to={'/register'}>SignUp</Link>
                </div>
                <Link to={"/"} className=' absolute right-5 bottom-3 text-rose-600' type='submit'>Go to Home</Link>

                </div>
            </form>

        </div>

    )
}

export default Login




