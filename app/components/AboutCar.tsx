"use client";

import Image from 'next/image';

import { useState } from 'react';
import { CustomButton, Specs, Luxury } from './index';

const AboutCar = () => {
    const [selected, setSelected] = useState('specs');

    return(
        <div className="min-h-screen h-fit w-screen relative flex flex-col xl:flex-row">
            {/* Background Image */}
            <div className="absolute -z-10 w-full h-full top-0 lg:-left-1/2 ">
               <div className="w-[110%] sm:w-full h-full bg-primary-color absolute rounded-full top-0 -left-1/2 lg:left-0 -z-20" />
               <Image 
                    src="/hero-car.png" 
                    alt="Range Rover Image" 
                    fill
                    className="object-contain hidden lg:block"
               /> 
            </div>

            <div className="flex-1 padding-y padding-x ">
                <div className="w-full rounded-2xl bg-[#d3d3d377] border-white border-2 backdrop-blur-sm p-6 flex flex-col ">
                    {/* Header Section */}
                    <div className="flex flex-col gap-5 justify-between items-center">
                        <h2 className="self-start text-xl text-white xl:text-3xl font-semibold px-2 border-l-4 border-white">
                            Discover <span className="font-bold text-black">Range Rover</span>
                        </h2>

                        <div className="flex rounded-full border-2 md:border-4 border-primary-color">
                            <CustomButton 
                                title="View Specs" 
                                containerStyles={`max-sm:text-sm font-semibold transition-all duration-400 rounded-l-full rounded-r-0 ${selected === 'specs' ? 'bg-white' : 'bg-primary-color'}`}
                                textStyles={`transition-all duration-400 ${selected === 'specs' ? 'text-primary-color' : 'text-white'}`}
                                handleClick={() => setSelected('specs')}
                            />

                            <CustomButton 
                                title="View Luxury" 
                                containerStyles={`max-sm:text-sm font-semibold transition-all duration-400 rounded-r-full rounded-l-0 ${selected === 'luxury' ? 'bg-white' : 'bg-primary-color'}`}
                                textStyles={`transition-all duration-400 ${selected === 'luxury' ? 'text-primary-color' : 'text-white'}`}
                                handleClick={() => setSelected('luxury')}
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full flex-1 ">
                        {selected === 'specs' && (
                            <Specs />
                        )}

                        {selected === 'luxury' && (
                            <Luxury />
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCar;