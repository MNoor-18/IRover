'use client';

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {

   return (
      <div className="w-screen h-screen overflow-x-hidden relative pages-Primary-heiht">
         <div className="w-full h-full pt-24">
            <div className="w-full h-full flex items-center padding-x">
               <div className="md:w-1/2 md:py-16 bg-[#ffffff97] backdrop-blur-xs p-5 rounded-xl text-center md:text-start h-fit flex flex-col gap-3">
                  <h1 className="text-2xl md:text-3xl xl:text-5xl font-extrabold">
                     Limitless luxury, performance beyond expectations – Range Rover.
                  </h1>
                  <p className="text-lg lg:text-xl xl:text-3xl font-bold text-gray-800 md:text-gray-700">
                     With <span className="text-black">Range Rover</span>, every journey becomes a unique and unforgettable experience.
                  </p>
                  <CustomButton title="Visit Official Site" 
                     containerStyles="bg-primary-color p-5 max-sm:text-sm w-fit max-md:mx-auto text-white rounded-full lg:mt-10"
                     textStyles="font-semibold"
                     handleClick={() => open('https://www.rangerover.com/en-xi/range-rover/index.html', '_blank')}
                  />
               </div>
            </div>

            <div className="absolute -z-10 w-full h-full top-0 lg:-right-1/2 ">
               <div className="w-[110%] sm:w-full h-full bg-primary-color absolute rounded-full top-0 -right-1/2 lg:right-0 -z-20" />
               <Image 
                       src="/hero-car.png" 
                       alt="Range Rover Image" 
                       fill
                       className="object-contain"
               /> 
            </div>
         </div>
      </div>
   )
}

export default Hero;