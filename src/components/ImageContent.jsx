import React from 'react';
import chiliwebimage from '../assets/chiliweb-showcase.png';


export const ImageContent = () => {
    return (
        <section className='image-content py-24 '>
            <div className="container mx-auto  flex ">
                <div className="image-side w-1/2 ">
                    <img className='rounded-2xl' src={chiliwebimage} alt="" />
                </div>
                <div className="content-side p-10  w-1/2">
                    <h5 className='text-lg mb-2'>
                        I love Cheetos
                    </h5>
                    <h3 className='text-4xl font-bold mb-7'>
                        Projects
                    </h3>
                    <div className="stack flex justify-start mb-8 -mx-4">
                        <div className="rounded-xl p-3 w-auto bg-amber-400 text-white text-black font-semibold mx-2">Hubspot CMS</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubL</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubDB</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">jQuery</div>
                    </div>
                    <p>Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen. </p>

                </div>
            </div>
            <div className="container mx-auto  flex py-10 ">
 
                <div className="content-side p-10  w-1/2">
                    <h5 className='text-lg mb-2'>
                        I love Cheetos
                    </h5>
                    <h3 className='text-4xl font-bold mb-7'>
                        Projects
                    </h3>
                    <div className="stack flex justify-start mb-8 -mx-4">
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">Hubspot CMS</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubL</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubDB</div>
                        <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">jQuery</div>
                    </div>
                    <p>Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen. </p>

                </div>
                <div className="image-side w-1/2 ">
                    <img className='rounded-2xl' src={chiliwebimage} alt="" />
                </div>
            </div>
        </section>
    )
}
