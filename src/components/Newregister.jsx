import React, { useState, useContext } from 'react'
import axios from 'axios';
import { context, server } from '../main';
import { Link, Navigate } from "react-router-dom"


const Newregister = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        pan: "",
        age: "",
        confirmPassword: "",
        mobileNo: "",
        gender: "",
        birthDate: "",
        avatar: null,
    })

    const { isAuthenticated, setisAuthenticated, loading, setloading } = useContext(context);



    const [errors, setErrors] = useState({});

    const isValidEmail = (email) => {
        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    const isValidPanNumber = (panNumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(panNumber);
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

    const isValidAge = (age) => {
        return parseInt(age) >= 18 && parseInt(age) <= 100;
    }

    const validateForm = () => {

        let newErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.pan) {
            newErrors.pan = "pan number is required"
        }

        else if (!isValidPanNumber(formData.pan)) {
            newErrors.pan = "Invalid pan format pan number should be 10 digit"
        }

        if (!formData.email) {
            newErrors.email = "email is required"
        }
        else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email format"
        }

        if (!formData.age) {
            newErrors.age = "age is required"
        }
        else if (!isValidAge(formData.age)) {
            newErrors.age = "age should be 18 or more"
        }

        if (!formData.mobileNo) {
            newErrors.mobileNo = "mobile number is required"
        }
        else if (!isValidPhoneNumber(formData.mobileNo)) {
            newErrors.mobileNo = "mobile number should be 10 digits"
        }

        if (!formData.birthDate) {
            newErrors.birthDate = "birth date is required"
        }

        if (!formData.gender) {
            newErrors.gender = "gender is required"
        }

        if (!formData.password) {
            newErrors.password = "passowrd is required"
        }
        else if (!isValidPassword(formData.password)) {
            newErrors.password = "password should be 8 characters long and it must contsin one lowerCse letter , one upperCase letter, one symbol and one number";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "please enter confirm password"
        }
        else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "passowrd must match"
        }
        if(!formData.avatar){
            newErrors.avatar = "please upload avatar"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    // console.log(errors);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            const { data } = await axios.post(`${server}/users/new`, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone: formData.mobileNo,
                pan: formData.pan,
                age: parseInt(formData.age),
                gender: formData.gender,
                birthDate: formData.birthDate,
                avatar : formData.avatar
            }, {
                headers: {
                    // "Content-Type": "application/json",
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            })
            setisAuthenticated(true);

        }
        else {
            console.log("form validation failed", errors);
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({

            ...formData,
            [name]: value,
        })
    }

    const handleFileChange = (e) => {

        console.log(e.target.files[0]);
        setFormData({
          ...formData,
          avatar: e.target.files[0],
        });
      };

    if (isAuthenticated) return <Navigate to={"/"} />


    return (
        <div className='min-h-screen flex items-start justify-between p-11 bg-[#648cb3] bg-[]'>

            <img className=' h-[114vh] w-[40%] object-cover object-center rounded-lg' src="https://images.unsplash.com/photo-1687720657052-c026be7f388c?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <form action="" onSubmit={handleSubmit} className='signUp relative rounded-lg h-[100%] w-[60%] bg-[#496989]  flex flex-col gap-7 p-[2vw] '>

                <h1 className=' text-6xl font-semibold w-1/2 leading-[4vw] mb-5 text-white'>Welcome to BBitBank</h1>

                <div className='name&email flex items-center justify-between'>

                    <div className=' flex flex-col '>
                        <label htmlFor="">name</label>

                        <input
                            className=''
                            type="text"
                            name='name'
                            placeholder='name'
                            value={formData.name}
                            onChange={handleChange}
                        />

                        {errors.name && <div className='errors text-red-500'>{errors.name}</div>}
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">email</label>

                        <input
                            type="email"
                            name='email'
                            placeholder='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className='errors text-red-500'>{errors.email}</div>}


                    </div>

                </div>

                <div className='mobile&pan flex items-center justify-between'>

                    <div className='flex flex-col'>
                        <label htmlFor="">Mobile</label>

                        <input
                            type="number"
                            name='mobileNo'
                            placeholder='Mobile Number'
                            onChange={handleChange}
                            value={formData.mobileNo}
                        />
                        {errors.mobileNo && <div className='errors text-red-500'>{errors.mobileNo}</div>}

                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor="">pan number</label>

                        <input
                            type="number"
                            name='pan'
                            placeholder='Pan Number'
                            value={formData.pan}
                            onChange={handleChange}

                        />

                        {errors.pan && <div className='errors text-red-500'>{errors.pan}</div>}


                    </div>

                </div>
                <div className='age&bdate flex items-center justify-between'>

                    <div className='flex flex-col'>
                        <label htmlFor="">Age</label>

                        <input
                            type="number"
                            name='age'
                            placeholder='age'
                            value={formData.age}
                            onChange={handleChange}

                        />


                        {errors.age && <div className='errors text-red-500'>{errors.age}</div>}


                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Birth date</label>

                        <input
                            type="date"
                            name='birthDate'
                            placeholder='Enter birthDate'
                            value={formData.birthDate}
                            onChange={handleChange}

                        />


                        {errors.birthDate && <div className='errors text-red-500'>{errors.birthDate}</div>}


                    </div>

                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">gender</label>

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    {errors.gender && <div className='errors text-red-500'>{errors.gender}</div>}


                    <input
                        type="file"
                        name="avatar"
                        onChange={handleFileChange}
                        placeholder="Upload Avatar"
                    />


                </div>

                <div className="passconfpass flex items-center justify-between">

                    <div className='flex flex-col'>
                        <label htmlFor="">password</label>

                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}

                        />

                        {errors.password && <div className='errors text-red-500'>{errors.password}</div>}

                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">confirm password</label>

                        <input
                            type="password"
                            name='confirmPassword'
                            placeholder='confirm Password'
                            onChange={handleChange}
                            value={formData.confirmPassword}
                        />

                        {errors.confirmPassword && <div className='errors text-red-500'>{errors.confirmPassword}</div>}

                    </div>
                </div>


                <div className="btns flex items-center justify-center relative">

                    <button className='px-[4vw] py-[15px] rounded-[50px] bg-[#cf4a4a] hover:bg-[#e93535] text-white font-semibold text-[1.1vw]' type='submit'>Log in</button>
                    {/* or */}
                </div>
                <Link to={"/"} className=' absolute right-5 bottom-3 text-rose-600' type='submit'>Go to Home</Link>
            </form>

        </div>
    )
}

export default Newregister









// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { context, server } from '../main';
// import { Link, Navigate } from 'react-router-dom';

// const Newregister = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     pan: '',
//     age: '',
//     confirmPassword: '',
//     mobileNo: '',
//     gender: '',
//     birthDate: '',
//     avatar: null,
//   });

//   const { isAuthenticated, setisAuthenticated } = useContext(context);

//   const [errors, setErrors] = useState({});

//   // Validation functions...

//   const validateForm = () => {
//     // Validation logic...
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const isValid = validateForm();

//     if (isValid) {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('password', formData.password);
//       formDataToSend.append('phone', formData.mobileNo);
//       formDataToSend.append('pan', formData.pan);
//       formDataToSend.append('age', parseInt(formData.age));
//       formDataToSend.append('gender', formData.gender);
//       formDataToSend.append('birthDate', formData.birthDate);
//       formDataToSend.append('avatar', formData.avatar);

//       try {
//         const { data } = await axios.post(`${server}/users/new`, formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//           withCredentials: true,
//         });
//         setisAuthenticated(true);
//       } catch (error) {
//         console.error('Error uploading data', error);
//       }
//     } else {
//       console.log('Form validation failed', errors);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       avatar: e.target.files[0],
//     });
//   };

//   if (isAuthenticated) return <Navigate to='/' />;

//   return (
//     <div className='min-h-screen flex items-start justify-between p-11 bg-[#648cb3]'>
//       <img
//         className='h-[114vh] w-[40%] object-cover object-center rounded-lg'
//         src='https://images.unsplash.com/photo-1687720657052-c026be7f388c?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//         alt=''
//       />
//       <form
//         action=''
//         onSubmit={handleSubmit}
//         className='signUp relative rounded-lg h-[100%] w-[60%] bg-[#496989] flex flex-col gap-7 p-[2vw]'
//       >
//         <h1 className='text-6xl font-semibold w-1/2 leading-[4vw] mb-5 text-white'>
//           Welcome to BBitBank
//         </h1>
//         <div className='name&email flex items-center justify-between'>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Name</label>
//             <input
//               type='text'
//               name='name'
//               placeholder='name'
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && <div className='errors text-red-500'>{errors.name}</div>}
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Email</label>
//             <input
//               type='email'
//               name='email'
//               placeholder='email'
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <div className='errors text-red-500'>{errors.email}</div>}
//           </div>
//         </div>
//         <div className='mobile&pan flex items-center justify-between'>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Mobile</label>
//             <input
//               type='number'
//               name='mobileNo'
//               placeholder='Mobile Number'
//               onChange={handleChange}
//               value={formData.mobileNo}
//             />
//             {errors.mobileNo && <div className='errors text-red-500'>{errors.mobileNo}</div>}
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Pan Number</label>
//             <input
//               type='text'
//               name='pan'
//               placeholder='Pan Number'
//               value={formData.pan}
//               onChange={handleChange}
//             />
//             {errors.pan && <div className='errors text-red-500'>{errors.pan}</div>}
//           </div>
//         </div>
//         <div className='age&bdate flex items-center justify-between'>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Age</label>
//             <input
//               type='number'
//               name='age'
//               placeholder='age'
//               value={formData.age}
//               onChange={handleChange}
//             />
//             {errors.age && <div className='errors text-red-500'>{errors.age}</div>}
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Birth Date</label>
//             <input
//               type='date'
//               name='birthDate'
//               placeholder='Enter birthDate'
//               value={formData.birthDate}
//               onChange={handleChange}
//             />
//             {errors.birthDate && <div className='errors text-red-500'>{errors.birthDate}</div>}
//           </div>
//         </div>
//         <div className='flex flex-col'>
//           <label htmlFor=''>Gender</label>
//           <select
//             name='gender'
//             value={formData.gender}
//             onChange={handleChange}
//           >
//             <option value=''>Select Gender</option>
//             <option value='male'>Male</option>
//             <option value='female'>Female</option>
//             <option value='other'>Other</option>
//           </select>
//           {errors.gender && <div className='errors text-red-500'>{errors.gender}</div>}
//         </div>
//         <div className='flex flex-col'>
//           <label htmlFor='avatar'>Upload Avatar</label>
//           <input
//             type='file'
//             name='avatar'
//             onChange={handleFileChange}
//             placeholder='Upload Avatar'
//           />
//         </div>
//         <div className='passconfpass flex items-center justify-between'>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Password</label>
//             <input
//               type='password'
//               name='password'
//               placeholder='Password'
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <div className='errors text-red-500'>{errors.password}</div>}
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor=''>Confirm Password</label>
//             <input
//               type='password'
//               name='confirmPassword'
//               placeholder='Confirm Password'
//               onChange={handleChange}
//               value={formData.confirmPassword}
//             />
//             {errors.confirmPassword && (
//               <div className='errors text-red-500'>{errors.confirmPassword}</div>
//             )}
//           </div>
//         </div>
//         <div className='btns flex items-center justify-center relative'>
//           <button
//             className='px-[4vw] py-[15px] rounded-[50px] bg-[#cf4a4a] hover:bg-[#e93535] text-white font-semibold text-[1.1vw]'
//             type='submit'
//           >
//             Register
//           </button>
//         </div>
//         <Link
//           to='/'
//           className='absolute right-5 bottom-3 text-rose-600'
//           type='submit'
//         >
//           Go to Home
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Newregister;
