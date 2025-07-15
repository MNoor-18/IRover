import Image from 'next/image';

import { specs } from '@/constants';


const Specs = () => (
    
    <div className="h-full w-full sm:p-5 mt-5 flex flex-col gap-5 xl:flex-row justify-between items-center">
        {/* Specs Content */}
        <div className="max-lg:w-full max-lg:h-fit xl:w-sm xl:h-116 overflow-hidden bg-[#ffffffa2] backdrop-blur-lg shadow-xl border-white border-[1px] rounded-lg sm:rounded-xl p-4">
            <h2 className='text-lg text-gray-500 sm:text-2xl font-bold'>{specs.title}</h2>
            <hr className='my-2 text-[#80808030] border-2' />
            <p className='text-gray-500 text-base sm:text-lg font-semibold'>{specs.description}</p>
        </div>

        {/* Images Container */}
        <div className="w-full h-68 sm:h-84 lg:h-90 xl:h-116 max-xl:order-first lg:w-xl 2xl:w-3xl bg-white overflow-hidden backdrop-blur-lg shadow-xl border-white border-2 sm:border-4 rounded-lg sm:rounded-xl flex gap-0.5 sm:gap-1 *:rounded-lg">
            {/* container 1 */}
            <div className="h-full w-4/6 flex flex-col gap-0.5 sm:gap-1">
                <div className="w-full h-1/2 flex gap-0.5 sm:gap-1 *:overflow-hidden *:relative">
                    {/* num 1 */}
                    <div className="h-full w-1/2 rounded-lg sm:rounded-xl">
                        <Image src='/specs/specs-1.jpg'
                            fill
                            className='object-cover'
                            alt='rang rover image'
                        />
                    </div>
                    {/* num 2 */}
                    <div className="h-full w-1/2 rounded-lg sm:rounded-xl">
                        <Image src='/specs/specs-2.jpg'
                            fill
                            className='object-cover'
                            alt='rang rover image'
                        />
                    </div>
                </div>

                <div className="w-full h-1/2 flex gap-0.5 sm:gap-1 *:overflow-hidden *:relative">
                    {/* num 3 */}
                    <div className="h-full w-7/12 rounded-lg sm:rounded-xl">
                        <Image src='/specs/specs-3.jpg'
                            fill
                            className='object-cover'
                            alt='rang rover image'
                        />
                    </div>
                    {/* num 4 */}
                    <div className="h-full w-5/12 rounded-lg sm:rounded-xl">
                        <Image src='/specs/specs-4.jpg'
                            fill
                            className='object-cover'
                            alt='rang rover image'
                        />
                    </div>
                </div>
            </div>

            {/* container 2 */}
            <div className="h-full w-2/6 flex flex-col gap-0.5 sm:gap-1 *:overflow-hidden *:relative">
                {/* num 5 */}
                <div className="w-full h-2/6 rounded-lg sm:rounded-xl">
                    <Image src='/specs/specs-5.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                    />
                </div>
                {/* num 6 */}
                <div className="w-full h-4/6 rounded-lg sm:rounded-xl">
                    <Image src='/specs/specs-6.jpg'
                        fill
                        className='object-cover'
                        alt='rang rover image'
                    />
                </div>
            </div>
        </div>
    </div>
)
export default Specs;