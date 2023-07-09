import React from 'react';
import chiliwebimage from '../assets/chiliweb-showcase.png'

export const ContentBox = () => {
    return (
        <div className="boxes py-24">
            <div className="container mx-auto">
                <h5 className='text-lg mb-2'>
                    I love Cheetos
                </h5>
                <h3 className='text-4xl font-bold mb-7'>
                    Projects
                </h3>
                <div className="items-wrapper -mx-3 flex flex-wrap">

                    <div className='lg:w-[calc(33.333333%-30px)] mx-3'>
                        <div className="box flex-row">
                            <div className="image-side w-full  ">
                                <img className='w-full rounded-t-2xl object-cover h-70' src={chiliwebimage} alt="" />
                            </div>

                            <div className="content-side rounded-b-2xl w-full p-8 bg-slate-500">
                                <div className="stack flex justify-start mb-8 -mx-4">
                                    <div className="rounded-xl p-3 w-auto  text-black font-semibold mx-2" style={"backgroundColor: #4D5D66;"}>Hubspot CMS</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubL</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubDB</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">jQuery</div>
                                </div>
                                Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen.
                            </div>
                        </div>
                    </div>


                    <div className='lg:w-[calc(33.333333%-30px)] mx-3'>
                        <div className="box flex-row">
                            <div className="image-side w-full  ">
                                <img className='w-full rounded-t-2xl object-cover h-70' src={chiliwebimage} alt="" />
                            </div>

                            <div className="content-side rounded-b-2xl w-full p-8 bg-slate-500">
                                <div className="stack flex justify-start mb-8 -mx-4">
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">Hubspot CMS</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubL</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubDB</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">jQuery</div>
                                </div>
                                Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen.
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[calc(33.333333%-30px)] mx-3'>
                        <div className="box flex-row">
                            <div className="image-side w-full  ">
                                <img className='w-full rounded-t-2xl object-cover h-70' src={chiliwebimage} alt="" />
                            </div>

                            <div className="content-side rounded-b-2xl w-full p-8 bg-slate-500">
                                <div className="stack flex justify-start mb-8 -mx-4">
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">Hubspot CMS</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubL</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">HubDB</div>
                                    <div className="rounded-xl p-3 w-auto bg-white text-black font-semibold mx-2">jQuery</div>
                                </div>
                                Redesign für die Webagentur Chili Digital AG. Designs und UI entwickelt sich ständig, um auf den Ziegel zu laufen hat Chili Digital mich gebeten ihr Konzept umzusetzen.
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
