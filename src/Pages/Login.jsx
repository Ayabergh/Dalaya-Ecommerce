import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className='font-outfit '>
      <div>
        <div className='text-center mt-12 font-light'>
          <p className='text-lg text-center mt-12 font-light'>Sign In</p>
          <p className='mt-2'>
          New user? <Link className='font-normal underline' to={'/signup'}>Create an account.</Link>
          </p>
        </div>

        <div className='mt-8'>
          <form action="">
            <div>
            <div className='text-center  -ml-[245px]'>
              <label htmlFor="email" className='text-[17px] text-center font-light '> Email* </label>
            </div> 
            <div className='text-center '>
              <input type="Email" placeholder="------@gmail.com" className='bg-gray-100 w-[300px] appearance-none border-2 border-white rounded  py-3 px-8  leading-tight focus:outline-none focus:bg-white focus:border-orange-100' />
            </div>
            </div>

            <div className='mt-5'>
            <div className='text-center  -ml-[215px] '>
              <label htmlFor="password" className='text-[17px] text-center font-light '> Password* </label>
            </div> 
            <div className='text-center '>
              <input type="password" placeholder="***********" className='bg-gray-100 w-[300px] appearance-none border-2 border-white rounded  py-3 px-8  leading-tight focus:outline-none focus:bg-white focus:border-orange-100' />
            </div>
            </div>
            <div class="text-center -ml-32 mt-3 ">
             <div class=""></div>
            <label class=" block font-light ">
              <input class="mr-2 leading-tight" type="checkbox"/>
              <span class="text-sm">
               Remember Me
             </span>
            </label>
             </div>

             <div class="items-center -ml-48 mt-5">
                <div class=""></div>
                 <div class="text-center ">
                <button class="shadow bg-orange-100 hover:bg-orange-300 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                  Login
                  </button>
                </div>
                 </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
