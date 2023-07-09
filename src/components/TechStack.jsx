import React from 'react';
import bootstrap from "../assets/icons/Bootstrap_logo.svg";
import git from "../assets/icons/Git_icon.svg";
import hubspot from "../assets/icons/HubSpot_Logo.svg";
import dotnet from "../assets/icons/NET_Core_Logo.svg";
import css from "../assets/icons/css3.svg";
import html from "../assets/icons/htm.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind-css-icon.svg";

const icons = [
    bootstrap,
    git,
    hubspot,
    dotnet,
    css,
    html,
    react,
    tailwind
];

export const TechStack = () => {
    return (
        <section className='bg-slate-500 py-24'>
            <div className="container mx-auto">
                <div className="logos flex justify-center  flex-wrap">
                    {icons.map((icon) => (

                    <div className="logo-wrapper flex items-center m-4 rounded-full bg-white p-6">
                        <img className='w-20 hover:scale-110 duration-200' src={icon} alt="" />
                    </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
