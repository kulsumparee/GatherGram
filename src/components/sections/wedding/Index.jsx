"use client"
import React from 'react';
import Image from 'next/image';

import Button from '@/components/common/Button';

const WeddingSection = () => {
    return (
        <div className="relative  h-[893px] w-[1728px]  overflow-hidden">
            
            <div className="absolute inset-0">
                <Image
                    src="/images/wedding.jpeg"
                    alt="Wedding couple under veil"
                    fill
                    className="object-cover brightness-75 "
                    priority
                />
               
               
            </div>

           
            <div className=" absolute h-full  w-[1728px]  ">
                <div className="container  relative  left-20 top-40">
                    <div className="max-w-2xl space-y-6 ">
                        <h1 className="text-[80px] md:leading-[104px]  font-mauline text-white space-y-2">
                            Ready for an <br />
                            <div className=' flex gap-4'>
                                 <span className='text-[#FFD6E4]'>Unforgettable</span> <span>Wedding?</span>
                           </div>
                        </h1>

                        <p className="text-[32px] font-maiandra text-gray-200 md:leading-[40px] md:py-5 ">
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