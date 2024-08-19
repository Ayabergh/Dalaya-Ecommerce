import React from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from './NavBar';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdClose } from "react-icons/md";

const ResponsiveM = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <div className={`${showMenu ? 'left-0' : 'left-[-100%]'} 
          fixed bottom-0 top-0 w-[100%] transition-all duration-200 
          shadow-lg pt-16 mt- px-8 bg-white z-50 flex flex-col justify-between pb-4 md:hidden`}>
      <div>
        <nav>
        <div className='md:hidden mr-5'>
                            <button onClick={toggleMenu} >
                                {showMenu ? <MdClose size={28} className='ml-60' /> : ""}
                            </button>
                        </div>
          <ul>
            <div className=''>
              {navLinks.map(({ name, link }) => (
                <li key={name} className='cursor-pointer py-4  md:text-left md:py-0'>
                  <Link to={link} onClick={toggleMenu} className='flex justify-between  ' >
                    {name}
                    <MdOutlineArrowForwardIos className='mt-1 '/>
                  </Link>

                </li>
              ))}
            </div>

            <li className='cursor-pointer py-4  md:text-left md:py-0 hover:underline text-orange-300 text-xs '  ><Link to={'/login'}>Login </Link> </li>
            <li className='cursor-pointer py-4  md:text-left md:py-0 hover:underline text-orange-300 text-xs'  ><Link to={'/login'}>Sign up </Link> </li>
            <li className='cursor-pointer py-4  md:text-left md:py-0 hover:underline text-orange-300 text-xs '  ><Link to={'/wishlist'}>Wish List</Link> </li>
            <li className='cursor-pointer py-4  md:text-left md:py-0 hover:underline text-orange-300 text-xs '  ><Link to={'/cart'}>Cart</Link> </li>

          </ul>
        </nav>
      </div>
      </div>
    </>
  )
}

export default ResponsiveM