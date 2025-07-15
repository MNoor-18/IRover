"use client";

import Image from 'next/image';

import { luxury } from '@/constants';

const Luxury = () => (
    
    <div className="h-full w-full sm:p-5 mt-5 flex flex-col gap-5 xl:flex-row justify-between items-center">
        {/* Luxury Content */}
        <div className="max-lg:w-full max-lg:h-fit xl:w-sm xl:h-116 overflow-hidden bg-[#ffffffa2] backdrop-blur-lg shadow-xl border-white border-[1px] rounded-xl p-4">
            <h2 className='text-gray-500 text-2xl font-bold'>{luxury.title}</h2>
            <hr className='my-2 text-[#80808030] border-2' />
            <p className='text-gray-500 text-lg font-semibold'>{luxury.description}</p>
        </div>

        {/* Images Container */}
        <div className="w-full h-84 lg:h-90 xl:h-116 max-xl:order-first lg:w-xl 2xl:w-3xl bg-white overflow-hidden backdrop-blur-lg shadow-xl border-white border-[1px] rounded-xl flex flex-col gap-1 *:rounded-lg">
            {/* container 1 */}
            <div className="h-1/2 w-full flex gap-1 *:overflow-hidden *:rounded-xl *:relative">
                {/* num 1 */}
                <div className="h-full w-8/12">
                    <Image src='/luxury/luxury-1.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                    />
                </div>
                {/* num 2 */}
                <div className="h-full w-4/12">
                    <Image src='/luxury/luxury-2.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                        />
                </div>
            </div>

            {/* container 2 */}
            <div className="w-full h-1/3 flex gap-1 *:overflow-hidden *:rounded-xl *:relative">
                {/* num 3 */}
                <div className="h-full w-5/12">
                    <Image src='/luxury/luxury-3.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                    />
                </div>
                {/* num 4 */}
                <div className="h-full w-7/12">
                    <Image src='/luxury/luxury-4.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                    />
                </div>
            </div>

            {/* container 3 */}
            <div className="h-1/3 w-full flex gap-1 *:overflow-hidden *:rounded-xl *:relative">
                {/* num 5 */}
                <div className="w-1/2 h-full">
                    <Image src='/luxury/luxury-5.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                    />
                </div>
                {/* num 6 */}
                <div className="w-1/2 h-full">
                    <Image src='/luxury/luxury-6.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                    />
                </div>
            </div>
        </div>
    </div>
)
export default Luxury;