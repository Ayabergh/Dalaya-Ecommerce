import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonOutline, IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import ResponsiveM from './ResponsiveM';

export const navLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Men',
        link: '/men',
    },
    {
        name: 'Kids',
        link: '/kids',
    },
    {
        name: 'Women',
        link: '/women',
    },
    {
        name: 'House',
        link: '/house',
    },
    {
        name: 'Blog',
        link: '/blog',
    },
];

const NavBar = () => {
    const [showMenu, setshowMenu] = useState(false);

    const toggleMenu = () => {
        setshowMenu(!showMenu);
      };

    return (
        <>
            <div className='font-outfit   '>
                <nav>
                    <div className='bg-black text-white text-center  '>
                        Refer a friend & get <span className='text-red-700'><Link to={"/discount"}>$30</Link></span> off from your next purchase ✨
                    </div>

                    <div className='bg-orange-100  flex justify-between items-center py-3 '>
                        {/** Logo */}
                        <div className='text-5xl md:text-5xl ml-5'>
                            <Link to={"/"}>Dalaya</Link>
                        </div>

                        {/** Hamburger Icon for mobile */}
                        <div className='md:hidden mr-5'>
                            <button onClick={toggleMenu}>
                                {showMenu ? "" : <HiOutlineMenuAlt3 size={24} />}
                            </button>
                        </div>

                        {/** Nav Links */}
                        <div className={` flex-col md:flex-row md:flex ${showMenu ? 'flex' : 'hidden'} items-center gap-5 absolute md:relative top-full left-0 w-full md:w-auto bg-orange-100 md:bg-transparent md:ml-0 `}>
                            <ul className='mr-60 flex flex-col md:flex-row gap-5 text-medium w-full md:w-auto'>
                                {navLinks.map(({ name, link }, index) => (
                                    <li key={index} className='cursor-pointer py-4 text-center md:text-left md:py-0 '>
                                        <Link to={link} onClick={toggleMenu}>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/** Icons */}
                        <div className='hidden md:flex gap-5 text-xl mr-10'>
                            <Link to={"login"}><IoPersonOutline /></Link>
                            <Link to={"search"}><IoSearchSharp /></Link>
                            <Link to={"wishlist"}><FaRegHeart /></Link>
                            <Link to={"cart"}><FiShoppingCart /></Link>
                        </div>
                    </div>
                    <div className='md:hidden'>
                      <ResponsiveM showMenu={showMenu} toggleMenu={toggleMenu}  />
                     </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
