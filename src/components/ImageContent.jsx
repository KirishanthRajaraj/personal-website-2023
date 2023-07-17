import chiliwebimage from '../assets/chiliweb-showcase.png';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ImageContent = () => {
    useEffect(() => {
            AOS.init({
                duration: 1600,
                easing: 'ease-in-out',


            });
            AOS.refresh();
    });

    return (
        <section className='image-content py-20 ' >
            <div className="container mx-auto flex flex-wrap py-6">
                <div className="image-side md:w-1/2 " data-aos="fade-down-small">
                    <img className='rounded-2xl' src={chiliwebimage} alt="" />
                </div>
                <div className="content-side p-10 md:w-1/2" data-aos="fade-left-small">
                    <h5 className='text-lg mb-2'>
                        I love Cheetos
                    </h5>
                    <h3 className='text-4xl font-bold mb-7'>
                        Projects
                    </h3>
                    <div className="stack flex justify-start flex-wrap mb-3 -mx-4">
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">Hubspot CMS</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">HubL</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">HubDB</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">jQuery</div>
                    </div>
                    <p>Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen. </p>

                </div>
            </div>
            <div className="container mx-auto flex flex-wrap py-6">
 
                <div className="content-side p-10 md:w-1/2" data-aos="fade-right-small">
                    <h5 className='text-lg mb-2'>
                        I love Cheetos
                    </h5>
                    <h3 className='text-4xl font-bold mb-7'>
                        Projects
                    </h3>
                    <div className="stack flex justify-start flex-wrap mb-3 -mx-4">
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">Hubspot CMS</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">HubL</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">HubDB</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">jQuery</div>
                    </div>
                    <p>Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen. </p>

                </div>
                <div className="image-side md:w-1/2 " data-aos="fade-down-small">
                    <img className='rounded-2xl' src={chiliwebimage} alt="" />
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap py-6">
                <div className="image-side md:w-1/2 " data-aos="fade-down-small">
                    <img className='rounded-2xl' src={chiliwebimage} alt="" />
                </div>
                <div className="content-side p-10 md:w-1/2" data-aos="fade-left-small">
                    <h5 className='text-lg mb-2'>
                        I love Cheetos
                    </h5>
                    <h3 className='text-4xl font-bold mb-7'>
                        Projects
                    </h3>
                    <div className="stack flex justify-start flex-wrap mb-3 -mx-4">
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">Hubspot CMS</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">HubL</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">HubDB</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4">jQuery</div>
                    </div>
                    <p>Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen. </p>

                </div>
            </div>
        </section>
    )
}
