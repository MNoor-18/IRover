"use client";

import { useState } from "react";

import { CarProps } from '@/types';
import { CarCard, CustomButton } from '@/components';
import { yearsOfProduction, carByYear } from '@/constants';

const SelectModel = () => {
    const limitStyle = "max-h-190";

    const [selectedModel, setSelectedModel] = useState('all');
    const [limit, setLimit] = useState(limitStyle);

    const fillResultContainer: (car: CarProps) => React.ReactNode[] = (car) => {
        const results: React.ReactNode[] = [];
        for(let index = 1; index <= 5; index++){
            results.push(<CarCard key={index} car={car} srcOfImage={`/view-${index}.jpg`}/>);
        }
        return results;
    }

  return (
    <section className="w-screen min-h-fit relative overflow-hidden bg-primary-light pt-10">
        <h1 className="text-center text-4xl font-bold text-primary-color">
            Select Model Year
        </h1>
        <div className="flex flex-col justify-center relative">
            {/* Filter Side */}
            <div className="mt-10 flex justify-center py-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="filter" className="text-lg text-gray-500 font-semibold">Filter :</label>
                    <select id="filter" className="min-w-26 p-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setSelectedModel(e.target.value)} >
                        {yearsOfProduction.map((year) => (
                            <option key={year.value} value={year.value} className="transition-colors duration-200 hover:bg-gray-200">{year.title}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* Result Side */}
            <div className={`mx-auto pt-12 pb-8 ${limit} overflow-hidden grid grid-cols-2 md:grid-cols-3 gap-3 2xl:grid-cols-4 xl:gap-8 `}>
                {selectedModel === 'all'
                ? Object.values(carByYear).map((car) => (
                    fillResultContainer(car)
                ))
                : Object.entries(carByYear).filter((year) => year[0] === selectedModel).map((year) => (
                    fillResultContainer(year[1])
                ))
                }
            </div>
            <div className={`w-full h-2 bottom-0 bg-primary-light absolute ${limit === limitStyle? '[box-shadow:0_-4px_20px_20px_#f9fafb]' : ''} `}/>
        </div>

        <CustomButton
                title={limit === "max-h-fit" ? 'Less' : 'More'}
                containerStyles="w-fit mx-auto absolute -bottom-1 bg-white p-2 rounded-t-2xl mt-10 "
                textStyles="text-base sm:text-lg text-primary-color font-semibold"
                handleClick={() => {
                    return limit === "max-h-fit" ? setLimit(limitStyle) : setLimit('max-h-fit')
                }}
        />
    </section>
  )
}

export default SelectModel;