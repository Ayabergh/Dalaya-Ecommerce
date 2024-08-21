import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <div className='font-outfit '>
        <div>
            <div  className='text-center mt-12 font-light'>
            <p className='text-lg text-center mt-12 font-light'>Sign Up</p>
          <p className='mt-2'>
          Already have an account?<Link className='font-normal underline' to={'/login'}> Sign In .</Link>
          </p>
            </div>
            
        <div className='mt-8'>
          <form action="" className=''>
            <div>
            <div className='text-center  -ml-52 '>
              <label htmlFor="First Name*" className='text-[17px] text-center  '> First Name* </label>
            </div> 
            <div className='text-center '>
              <input type="text" placeholder="Aya" className='bg-gray-100 w-[300px] appearance-none border-2 border-white rounded  py-3 px-8  leading-tight focus:outline-none focus:bg-white focus:border-orange-100' />
            </div>
            </div>

            <div>
            <div className='text-center  -ml-52 '>
              <label htmlFor="Last Name*" className='text-[17px] text-center  '> Last Name*</label>
            </div> 
            <div className='text-center '>
              <input type="text" placeholder="bergheul" className='bg-gray-100 w-[300px] appearance-none border-2 border-white rounded  py-3 px-8  leading-tight focus:outline-none focus:bg-white focus:border-orange-100' />
            </div>
            </div>
            
            <div>
            <div className='text-center  -ml-[245px] '>
              <label htmlFor="email" className='text-[17px] text-center  '> Email* </label>
            </div> 
            <div className='text-center '>
              <input type="Email" placeholder="------@gmail.com" className='bg-gray-100 appearance-none border-2 w-[300px] border-white rounded  py-3 px-8  leading-tight focus:outline-none focus:bg-white focus:border-orange-100' />
            </div>
            </div>
            
            <div className=''>
            <div className='text-center  -ml-[215px]'>
              <label htmlFor="password" className='text-[17px] text-center f'> Password* </label>
            </div> 
            <div className='text-center '>
              <input type="password" placeholder="***********" className='bg-gray-100 appearance-none border-2 border-white rounded  py-3 px-8 w-[300px]  leading-tight focus:outline-none focus:bg-white focus:border-orange-100' />
            </div>
            </div>
            <div class="text-center  mt-3 ">
             <div class=""></div>
            <label class=" block  ">
              <input class="mr-2 leading-tight" type="checkbox"/>
              <span class="text-sm">
              I agree to the <Link to={'/terms'} className='text-orange-400 underline font-medium '>Terms</Link> and <Link to={'/privacy'} className='text-orange-400 underline font-medium '>Privacy Policy</Link>
             </span>
            </label>
             </div>
             
             <div class="items-center -ml-48 mt-5">
                <div class=""></div>
                 <div class="text-center ">
                <button class="shadow bg-orange-100 hover:bg-orange-300 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                  Signup
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

export default Signup