import React from 'react';
import kiri from "../assets/team_overview_kiri.jpg";

export const Intro = () => {
    return (
        <section className='kiri-intro py-8 md:py-20'>
            <div className="intro-wrapper">
                <div className="container mx-auto">
                    <div className='flex justify-around'>
                        <div className="me w-1/2 flex justify-end">
                            <img src={kiri} alt="" className=' aspect-square w-96 object-cover ' />
                        </div>   
                        <div className="me-content w-1/2 flex justify-start -ml-4 relative z-10">
                            <h2>hi im awesome</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        )
    }
    