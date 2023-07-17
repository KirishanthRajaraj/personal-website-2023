import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/kiri-logo.png'

const Navigation = () => {

    const [mobileNav, setMobileNav] = useState(false);

    const links = [
        {
            link: 'home'
        },
        {
            link: 'about'
        },
        {
            link: 'projects'
        },
        {
            link: 'contact'
        },
    ];

    return (
        <div className="navigation h-20 text-white fixed w-full shadow-lg bg-dark z-50">
            <div className="container h-full flex justify-between items-center w-full mx-auto">

                <div className="image-wrapper h-full relative">
                    <img className='h-full p-4' src={logo} alt="" />
                </div>


                <ul className='md:flex hidden'>
                    {links.map((link) => (
                        <li className='px-4 cursor-pointer capitalize font-medium hover:text-gray-300 duration-150'><a>{link.link}</a></li>
                    ))}
                </ul>

                <div onClick={() => setMobileNav(!mobileNav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                    {mobileNav ? <FaTimes size={30} /> : <FaBars size={30} />}

                </div>
                {mobileNav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-dark '>
                        {links.map((link) => (
                            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><a>{link.link}</a></li>
                        ))}
                    </ul>
                )}


            </div>

        </div>
    )
}

export default Navigation