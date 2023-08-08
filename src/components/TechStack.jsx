import React, { useEffect } from 'react';

import bootstrap from "../assets/icons/Bootstrap_logo.svg";
import git from "../assets/icons/Git_icon.svg";
import hubspot from "../assets/icons/HubSpot_Logo.svg";
import dotnet from "../assets/icons/NET_Core_Logo.svg";
import css from "../assets/icons/css3.svg";
import html from "../assets/icons/htm.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind-css-icon.svg";


const icons = [
    {name: "HTML", icon:  html},
    {name: "CSS", icon:  css},
    {name: "React", icon:  react},
    {name: "Git", icon:  git},
    {name: "C# .NET", icon:  dotnet},
    {name: "Hubspot", icon:  hubspot},
    {name: "Tailwind", icon:  tailwind},
    {name: "Bootstrap", icon:  bootstrap}
];

export const TechStack = () => {

    return (
        <section className='bg-slate-500 py-24'>
            <div className="container mx-auto">
                <div className="logos flex justify-center flex-wrap">
                    {icons.map((icon) => (
                        <div className="logo-wrapper group flex items-center m-4 hover:bg-slate-700 rounded-full p-6 relative text-center">
                        <div className={'opacity-0 transition-all group-hover:opacity-100 font-black duration-300 absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none'}>
                                {icon.name}
                        </div>
                        <img className="logo-img w-20 group-hover:scale-110 duration-200 group-hover:brightness-75" src={icon.icon} alt="" />
                    </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
