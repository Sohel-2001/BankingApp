import React from 'react'

const Home = () => {
  return (
    <>
      <div className='img'>
        {/* <img src="https://images.unsplash.com/photo-1565373677928-90e963765eac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        {/* <img src="https://images.unsplash.com/photo-1496205856088-91b021308c54?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        {/* <img src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        {/* <img src="https://images.unsplash.com/photo-1568354900824-b26889441b6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      </div>

      <div className=' min-h-[100vh]'>

        <div className="page1 h-[100vh]  text-black flex flex-col items-center justify-center relative ">

        <div className='h-full w-full absolute z-0 blur-sm'>
          {/* <img className='h-[100%] w-[100%] object-cover object-center ' src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
        </div>

          <div className='absolute z-10 text-black'>
          <h1 className="text-8xl font-medium ">Welcome To Our Bank</h1>
          <p className='text-xl mt-3 text-center'>One of the most trusted bank in the world, with millions of users!</p>
          </div>


          <div>

          </div>


        </div>

        <div className="page2 about_us h-[100vh] w-full  p-10 flex">

          <div className="left w-1/2 h-[90%] py-16 flex flex-col justify-between px-5">
            <h2 className='heading text-5xl'>About Us.</h2>

            <div className='text-6xl font-medium '>
              Welcome to ExesBank Online Banking!
            </div>

            <div className=''>
              <p className=' '>
                At ExesBank, we believe that managing your finances should be convenient, secure, and tailored to your needs.
                With our online banking platform, you have the power to take control of your finances anytime, anywhere.

                User-Friendly Interface: Our online banking platform is designed with simplicity and functionality in mind, making it easy for you to manage your accounts,
                pay bills, and track your finances with just a few clicks.
                Security and Privacy: We prioritize the security and privacy of your financial information.
                Our robust security measures ensure that your data is protected at all times.
              </p>
              {/* Dedicated Customer Support: Our team of dedicated professionals is here to assist
              you every step of the way. Whether you have questions about your account or need assistance with a transaction, we're here to help.
              Innovative Features: We are constantly innovating to bring you new features and services that enhance your banking experience.
              From mobile banking to online account opening,

              we're always looking for ways to make banking more convenient for you. */}


            </div>

          </div>
          <div className="right w-1/2 h-[90%]">
            <div className='  h-1/2 w-[80%] ml-16  rounded-2xl overflow-hidden'>
              <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1612550761236-e813928f7271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className='h-1/2 w-full p-6 flex flex-wrap gap-7 items-center justify-center'>

              <div className=' shadow-2xl h-28 w-52 flex flex-col justify-center p-4 rounded-3xl bg-sky-400/30'>
                <p className='font-semibold text-4xl'>3.5</p>
                <p className='font-medium text-gray-700'>Years of greatness</p>
              </div>
              <div className='  shadow-2xl h-28 w-52 flex flex-col justify-center p-4 rounded-3xl bg-pink-400/30'>
                <p className='font-semibold text-4xl'>23</p>
                <p className='font-medium text-gray-700'>Branches</p>
              </div>
              <div className='  shadow-2xl h-28 w-52 flex flex-col justify-center p-4 rounded-3xl bg-yellow-400/30'>
                <p className='font-semibold text-4xl'>830+</p>
                <p className='font-medium text-gray-700'>Positive Reviews</p>
              </div>
              <div className='  shadow-2xl h-28 w-52 flex flex-col justify-center p-4 rounded-3xl bg-red-400/30'>
                <p className='font-semibold text-4xl'>100k</p>
                <p className='font-medium text-gray-700'>Trusted Customers</p>
              </div>

            </div>
          </div>

        </div>


        <div className="page3 h-screen   p-5">

          <h1 className='text-5xl font-medium ml-7'>Services</h1>

          <div className='w-full h-full flex items-center justify-around'>

            <div className='services h-[30vw] w-[20vw] bg-slate-400 rounded-2xl overflow-hidden relative'>

              <div className='absolute z-[1] hover:scale-110 duration-700'>
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

              </div>

              <div className="z-10 bottom-0 absolute text-white bg-black/70 p-5 translate-y-[100%] duration-700 content">
                <h1 className='text-2xl font-bold'>Account Management:</h1>
                <p className='text-sm mt-5'>
                  View account balances and transaction history in real-time.
                  Transfer funds between your accounts or to other accounts within the bank.
                  Set up recurring transfers and payments for convenience.
                </p>
              </div>
            </div>


            <div className=' services h-[30vw] w-[20vw] bg-slate-400 rounded-2xl overflow-hidden relative '>

              <div className='absolute z-[1] hover:scale-110 duration-700'>
                <img src="https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

              </div>

              <div className="z-10 bottom-0 absolute text-white bg-black/70 p-5 translate-y-[100%] duration-700 content">
                <h1 className='text-2xl font-bold'>Online Statements:</h1>
                <p className='text-sm mt-5'>
                  Access electronic statements for your accounts securely online.
                  View, download, or print statements at your convenience.
                  Reduce paper clutter and contribute to environmental sustainability.
                </p>
              </div>
            </div>
            <div className='services h-[30vw] w-[20vw] bg-slate-400 rounded-2xl overflow-hidden relative'>

              <div className='absolute z-[1] hover:scale-110 duration-700'>
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

              </div>

              <div className="z-10 bottom-0 absolute text-white bg-black/70 p-5 translate-y-[100%] duration-700 content">
                <h1 className='text-2xl font-bold'>Security Features:</h1>
                <p className='text-sm mt-5'>
                  Enjoy peace of mind with our advanced security features.
                  Set up multi-factor authentication for added protection.
                  Monitor your accounts for suspicious activity and report unauthorized transactions promptly.
                </p>
              </div>
            </div>
            <div className=' services h-[30vw] w-[20vw] bg-slate-400 rounded-2xl overflow-hidden relative'>

              <div className='absolute z-[1] hover:scale-110 duration-700'>
                <img src="https://images.unsplash.com/photo-1596633607590-7156877ef734?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

              </div>

              <div className="z-10 bottom-0 absolute text-white bg-black/70 p-5 translate-y-[100%] duration-700 content">
                <h1 className='text-2xl font-bold'>Customer Support:</h1>
                <p className='text-sm mt-5'>
                  Reach out to our knowledgeable customer support team for assistance.
                  Contact us via phone, email, or live chat for prompt and personalized service.
                  Get help with account inquiries, technical issues, or general banking questions.

                </p>
              </div>
            </div>


          </div>

        </div>
      </div>


    </>
  )
}

export default Home