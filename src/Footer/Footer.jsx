import React from 'react'
import { Link } from 'react-router-dom';
import { FaCcVisa } from "react-icons/fa";
import { IoLogoPaypal } from "react-icons/io5";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <div>
      <div className='bg-black text-white font-jost '>
        <div className='pt-4 md:flex '>
        <div className='ml-16 pt-4 '>
          <h1 className='text-xl mt-7 font-medium'> About Shop</h1>
          <p className='mt-5'> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Enim, doloremque.</p>
          <p className='mt-4 '>Email: hello@dalaya.co <br />
          </p>
          <p className='mt-2 '>Tel: (00) 342 489 33</p>
        </div>
        <div className='pt-4 md:ml-10'>
          <h1 className='ml-16 text-xl mt-7 font-medium'>Company</h1>
          <ul className='ml-16 mt-5 text-gray-300 font-medium'>
             <Link to={'/notyet'}><li className='mt-2'>About us</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Careers</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Store Locator</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Contact us</li></Link>
          </ul>
        </div>
        <div className='pt-4 md:ml-10'>
        <h1 className='ml-16 text-xl mt-7 font-medium'>Customer Care</h1>
          <ul className='ml-16 mt-5 text-gray-300 font-medium'>
             <Link to={'/notyet'}><li className='mt-2'>Size Guide </li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Help & Facs</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Return My Order</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Refer A Friend</li></Link>
          </ul>
        </div>
        <div className='pt-4 md:ml-10'>
        <h1 className='ml-16 text-xl mt-7 font-medium'>Quick Links</h1>
          <ul className='ml-16 mt-5 text-gray-300 font-medium'>
             <Link to={'/notyet'}><li className='mt-2'>Duties & Taxes</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Shipping Info</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Privacy Policy</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Term Conditions</li></Link>
          </ul>
        </div>
        <div className='pt-4 md:ml-10'>
        <h1 className='ml-16 text-xl mt-7 font-medium'>Follow Us</h1>
          <ul className='ml-16 mt-5 '>
             <Link to={'/notyet'}><li className='mt-2'>Instagram</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Facebook</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Pinterest</li></Link>
             <Link to={'/notyet'}><li className='mt-2'>Tiktok</li></Link>
          </ul>
        </div>
      </div>
      <div className='flex md:justify-end justify-center mt-12 mr-20 gap-8 text-3xl'>
         <Link to={'/notyet'}><FaCcVisa/></Link>
         <Link to={'/notyet'}><IoLogoPaypal/></Link>
         <Link to={'/notyet'}><FaCcAmazonPay/></Link>
         <Link to={'/notyet'}><FaCcApplePay/></Link>
      </div>
      <div className='bg-black text-white font-jost text-center'>
        <p className='pt-2 pb-2 mt-6'> © 2024. All Rights Reserved. </p></div>
      </div>
    </div>
    </>
  )
}

export default Footer