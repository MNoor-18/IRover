"use client";

import { useState } from 'react';
import Image from 'next/image';

import { CarProps } from '@/types';
import { CustomButton, CarDetails } from '@/components';

interface CarCardProps {
    car: CarProps;
    srcOfImage: string; // This should be the path to the car image
}

const CarCard = ({car, srcOfImage}: CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const {fuel_type, year, make, model, transmission, drive, price } = car;

    const getFuelTypeAbbreviation = (type: string): string => {
        switch (type.toLowerCase()) {
            case "gasoline":
                return "GAS";
            case "diesel":
                return "DSL";
            case "mild hybrid":
                return "MHEV";
            case "plug-in hybrid":
                return "PHEV";
            case "electric":
                return "EV";
            default:
                return "N/A";
        }
};

    return (
      <div className="group w-47 gap-[1px] lg:w-64 xl:w-xs sm:rounded-3xl max-sm:my-[1px] bg-white sm:shadow-lg p-3 md:p-5 xl:p-8 flex flex-col justify-center items-start text-black hover:sm:shadow-xl "
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full">
            <h2 className="text-base lg:text-[22px] leading-[26px] font-bold capitalize">{model} {year}</h2>
            <h4 className="text-xs lg:text-base text-gray-400 font-bold">From: {make}</h4>
        </div>

        <p className="flex mt-2 lg:mt-6 text-[32px] font-extrabold">
            <span className="self-start text-base lg:text-lg font-semibold">${price}</span>
        </p>

        <div className="relative w-full h-38 lg:h-44 md:my-3 object-contain">
            <Image src={srcOfImage} alt="Range Rover" fill priority className="object-contain" />
        </div>

        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray *:w-1/3">
                <div className="flex flex-col gap-2 items-center">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                    <p className="text-xs sm:text-[14px]">
                        {transmission === 'automatic' ? 'A/T' : 'M/T'}
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Image src="/tire.svg" width={20} height={20} alt="tire" />
                    <p className="text-xs lg:text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="w-fit flex flex-col gap-2 items-center">
                    <Image src="/gas.svg" width={20} height={20} alt="gas" />
                    <p className="text-xs lg:text-[14px]">
                        {getFuelTypeAbbreviation(fuel_type)}
                    </p>
                </div>
            </div>

            <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
                <CustomButton
                    title="View More"
                    containerStyles="w-full py-3 lg:py-[16px] rounded-full bg-primary-color"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} imageSrc={srcOfImage} closeModal={() => setIsOpen(false)} car={car} />
      </div>
    )
}

export default CarCard;