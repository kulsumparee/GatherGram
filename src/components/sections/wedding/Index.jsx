"use client"
import React from 'react';
import Image from 'next/image';

import Button from '@/components/common/Button';

const WeddingSection = () => {
    return (
        <div className="relative w-full max-w-[1728px] mx-auto min-h-[640px] md:h-[893px] overflow-hidden">
            
            <div className="absolute inset-0">
                <Image
                    src="/images/wedding.jpeg"
                    alt="Wedding couple under veil"
                    fill
                    className="object-cover brightness-75 "
                    priority
                />
               
               
            </div>

           
            <div className="absolute h-full w-full">
                <div className="relative px-6 md:px-20 pt-24 md:pt-40">
                    <div className="max-w-2xl space-y-6 ">
                        <h1 className="text-4xl sm:text-6xl 2xl:text-[80px] md:leading-tight 2xl:leading-[104px] font-mauline text-white space-y-2">
                            Ready for an <br />
                            <div className=' flex flex-wrap gap-x-4'>
                                 <span className='text-[#FFD6E4]'>Unforgettable</span> <span>Wedding?</span>
                           </div>
                        </h1>

                        <p className="text-lg sm:text-2xl 2xl:text-[32px] font-maiandra text-gray-200 md:leading-snug md:py-5 ">
                            Begin your journey to a stress-free, beautifully organized celebration today with GatherGram
                        </p>

                        <div className=''>
                            <button className=' bg-white font-maiandra text-lg text-[#D81159] py-4 px-10 rounded-full'>Let's get started!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingSection;