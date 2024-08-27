import React from 'react'
import pic1 from '../assets/w-1.png'
import { Link } from 'react-router-dom';
import pic2  from '../assets/w-2.jpg';
import pic3 from '../assets/w-9.jpg';
import pic4  from '../assets/w-7.jpg';
import pic5  from '../assets/w-8.jpg';
import pic6  from '../assets/w-11.jpg';
import pic7  from '../assets/d1.jpg';
import pic8  from '../assets/d2.jpg';
import pic9  from '../assets/d6.jpg';
import pic10  from '../assets/d4.jpg';
import pic11  from '../assets/d5.jpg';

import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer';
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <div className='font-outfit'>
    <div >
    <div className= 'bg-orange-100 h-[460px] md:h-[602px] font-outfit  '>
      <div className=''>
        <div className=''>
          <img src={pic1} className=' h-[380px] -mr-40 mt-20 md:mt-[2px] absolute right-0 md:h-[600px] md:-mr-32 '/>        
        </div>
        <div className='pt-24 pl-6 md:pt-32 md:pl-10'>
        <p className='md:text-[20px] font-medium  '>2024 Collection</p>
          <h1 className='md:text-7xl font-semibold text-5xl pt-2 '>Where Fashion <br /> Meets Family <br />and Home</h1>
          <p className='text-[15px] md:text-[20px] pt-2'>New Colors, New Looks.</p>
     </div>
     <div className='pt-8 pl-8 '>
      <button className='bg-black text-white font-semibold py-[10px] px-[20px] md:py-[15px] md:px-[30px] rounded-lg'>
       <Link to={'/notyet'}>View Collection</Link> 
      </button>
     </div>
      </div>
    </div>

    <div className=''>
      <div>
        <h1 className='text-3xl font-semibold pt-10 pl-10'>
        Shop by Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  <Link to={'/women'} className="group max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-[330px] h-[250px] object-cover group-hover:scale-105 duration-300 " src={pic2} alt="Women Collection"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Women</div>
    </div>
  </Link>

  <Link className="group max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-[330px] h-[250px] object-cover group-hover:scale-105 duration-300  " src={pic3} alt="Men Collection"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Men</div>
    </div>
  </Link>

  <Link className="group max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-[330px] h-[250px] object-cover group-hover:scale-105 duration-300 " src={pic4} alt="Kids Collection"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Kids</div>
    </div>
  </Link>

  <Link className="group max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-[330px] h-[250px] object-cover group-hover:scale-105 duration-300 " src={pic5} alt="Home Furniture"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Home Furniture</div>
    </div>
  </Link>
</div>
    </div>

    <div>
      <div className='text-3xl font-semibold pt-10 pl-10'>
        <p>Best Sellers</p>
        <h1 className='text-8xl text-center mt-52 mb-52'>New Arrivals ...</h1>
        <img src="" alt="" />
      </div>
    </div>
    </div>

    
    <div>
  <div className='bg-orange-100 ml-4 mr-4 md:ml-20 md:mr-20 font-jost flex flex-col md:flex-row'>
    <img src={pic6} alt="" className='h-[500px] w-[600px] md:w-[400px] md:h-[500px] mx-auto md:mx-0' />
    <div className='flex flex-col items-center md:items-start  md:text-center md:-ml-10 mt-4  md:mt-36'>
      <p className='text-xl md:text-2xl font-medium md:ml-80'>SALE EVENT</p>
      <p className='text-2xl md:text-4xl text-center font-semibold md:ml-56 mt-4'>
        Winter clothes <br />
        Limited Offer – $20
      </p>
      <p className='text-sm md:text-lg text-gray-500 md:ml-56 mt-4'>Until 12/27/21. Use code WINTER at checkout</p>
      <button className='bg-black text-white mb-6 font-semibold py-2 px-4 md:py-[10px] md:px-[20px] mt-6 rounded-lg md:ml-[350px]'>
        <Link to={'/notyet'}>Shop now</Link>
      </button>
    </div>
  </div>
</div>
      <div>
        <Cards/>
      </div>

      <div className='mb-16 '> 
        <div>
          <Link to={'https://www.instagram.com/'} className='flex justify-center'>
            <div><FaInstagram className='mt-1 text-xl'/></div>
            <div className='text-xl mb-16'>  Follow Us On Instagram </div>
          </Link>

          <div className='ml-8 md:flex md:gap-6 '>
           <div className='group'><img src={pic7} className='object-cover group-hover:scale-105 duration-300 md:w-[270px] rounded  mb-3 ' /></div> 
           <div className='group'><img src={pic9} className='object-cover group-hover:scale-105 duration-300 md:w-[270px] rounded mb-3' /></div> 
           <div className='group'><img src={pic10} className='object-cover group-hover:scale-105 duration-300 md:w-[270px] rounded md:h-[180px] mb-3' /></div> 
           <div className='group'><img src={pic11} className='object-cover group-hover:scale-105 duration-300 md:w-[270px] rounded mb-3' /></div> 
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className='text-2xl font-semibold font-jost text-center'>
          NEWSLETTER
          </p>
          <p className='text-4xl font-semibold font-jost text-center '>Sign up and get up to <span className='text-red-600'>20%</span>  <br /> off your first purchase</p>
        </div>
        <div className='flex justify-center mt-10 mb-32'>
        <form class="w-full max-w-sm">
  <div class="flex items-center border-b border-neutral-950 py-2 ">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
    <button class="flex-shrink-0 bg-black hover:bg-orange-100 border-neutral-950 hover:border-orange-100 text-sm border-4 text-white hover:text-black hover:font-medium py-1 px-2 rounded" type="button">
      Sign Up
    </button>
    <button class="flex-shrink-0 border-transparent border-4 text-black text-sm py-1 px-2 rounded" type="button">
      Cancel
    </button>
  </div>
</form>
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Home
