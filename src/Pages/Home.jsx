import React from 'react'
import pic1 from '../assets/w-1.png'
import { Link } from 'react-router-dom';
import pic2  from '../assets/w-2.jpg';
import pic3 from '../assets/w-6.jpg';
import pic4  from '../assets/w-7.jpg';
import pic5  from '../assets/w-8.jpg';

const Home = () => {
  return (
    <>
    <div className= 'bg-orange-100 h-[460px] md:h-[600px] font-outfit  '>
      <div className=''>
        <div className=''>
          <img src={pic1} className=' h-[380px] -mr-40 mt-20 md:-mt-12 absolute right-0 md:h-[650px] md:-mr-32 '/>        
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

    <div className='font-outfit'>
      <div>
        <h1 className='text-3xl font-semibold pt-10 pl-10'>
        Shop by Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  <Link to={'/women'} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-full h-[250px] object-cover" src={pic2} alt="Women Collection"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Women</div>
    </div>
  </Link>

  <Link className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-full h-[250px] object-cover" src={pic3} alt="Men Collection"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Men</div>
    </div>
  </Link>

  <Link className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-full h-[250px] object-cover" src={pic4} alt="Kids Collection"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Kids</div>
    </div>
  </Link>

  <Link className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img className="w-full h-[250px] object-cover" src={pic5} alt="Home Furniture"/>
    <div className="px-6 py-4 bg-orange-100">
      <div className="font-bold text-xl mb-2 text-center">Home Furniture</div>
    </div>
  </Link>
</div>

    </div>
    </>
  )
}

export default Home
