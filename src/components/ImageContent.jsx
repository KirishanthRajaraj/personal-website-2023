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

    const image_content = {
        imgSrc: chiliwebimage,
        Content: 'Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen.',
        subtitle: 'I love Cheetos',
        title: 'Chili Digital AG',
        tags: ['Hubspot CMS', 'HubL', 'HubDB', 'jQuery']
    };

    const image_content2 = {
        imgSrc: chiliwebimage,
        Content: 'Webauftritt für Immobilienjunkies',
        subtitle: 'I love Cheetos',
        title: 'Chili Digital AG',
        tags: ['Umbrao CMS', 'C#', '.NET']
    };

    const imageContentList = [];

    imageContentList.push(image_content);
    imageContentList.push(image_content2);


    return (
        <section className='image-content py-8 md:py-20'>

            {imageContentList.map((icItem, index) => (
                <div className="container mx-auto flex flex-wrap md:py-6 py-4 px-4 md:px-6 img-left">
                    <div className={`image-side md:w-1/2  ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-none'}`} data-aos="fade-down-small">
                        <img className='rounded-2xl' src={icItem.imgSrc} alt="" />
                    </div>
                    <div className="content-side p-0 py-5 md:p-10 md:w-1/2" data-aos="fade-left-small">
                        <h5 className='text-lg mb-2'>
                            {icItem.subtitle}
                        </h5>
                        <h3  className='text-4xl font-bold mb-3 md:mb-7'>
                            {icItem.title}
                        </h3>
                        <div className="stack flex justify-start flex-wrap mb-3 -mx-2">
                            {icItem.tags.map((tag) => (
                                <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2 mb-4" key={tag}>{tag}</div>
                            ))}
                        </div>
                        <p>{icItem.Content}</p>
                    </div>
                </div>
            ))}



        </section >
    )
}
