//@ts.ignore
import React from 'react'
import LoginForm from '../Components/forms/LoginForm';

import COVER_IMAGE from '../assets/images/tel2.jpg'

// const colors = {
//   primary: "#00FFFF",
//   background:"E0E0E0",
//   disabled: "B3B3B3"
// }

const Login = () => {
  const handleLogin = (credentials) =>{
    console.log("Login submitted:", credentials)
  }

  return (
    <div className='w-full h-screen flex items-start bg-gray-100'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[5%] left-[5%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>Agence Nationale des Technologies de l'Information et de la Communication</h1>
          <p className='text-xl text-white font-normal'>ANTIC</p>
        </div>
        <img src={COVER_IMAGE} className='w-full h-full'  alt='cover' />;
      </div>

      <div className='w-1/2 h-full bg-[#F5F5F5] flex flex-col p-15 justify-between'>
        <h1 className='text-x1 text-[#060606] font-semibold'>CESAM</h1>
        <LoginForm onSubmit={handleLogin} />

        <div className='w-full flex items-center justify-center '>
        <p className='text-sm text-[#060606] font-normal'>Don't have an account? <span className='font-semibold underline-offset-2 cursor-pointer'>Sign up</span></p>

        </div>
      </div>
      
  
      

      
    </div>
  )
}

export default Login
