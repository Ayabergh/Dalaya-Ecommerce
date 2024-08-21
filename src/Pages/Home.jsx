import React from 'react'
import pic1 from '../assets/w-1.png'
import { Link } from 'react-router-dom';
import pic2  from '../assets/w-2.jpg';
import pic3 from '../assets/w-9.jpg';
import pic4  from '../assets/w-7.jpg';
import pic5  from '../assets/w-8.jpg';
import pic6  from '../assets/w-11.jpg';
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer';
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
        <h1 className='text-8xl text-center mt-52 mb-52'>New Arrivals</h1>
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

      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Home
