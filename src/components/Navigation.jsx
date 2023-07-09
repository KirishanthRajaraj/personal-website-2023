import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/kiri-logo.png'

const Navigation = () => {

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
        <div className="navigation h-20 text-white fixed w-full">
            <div className="container h-full flex justify-between items-center w-full mx-auto">

                <div className="image-wrapper h-full relative">
                    <img className='h-full p-4' src={logo} alt="" />
                </div>


                <ul className='flex'>
                    {links.map((link) => (
                        <li className='px-4 cursor-pointer capitalize font-medium hover:text-gray-300 duration-150'><a>{link.link}</a></li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navigation