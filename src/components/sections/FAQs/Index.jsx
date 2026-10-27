"use client"
import React, { useState } from 'react';
import { LucideChevronDown } from 'lucide-react';
import { Faqs } from './FaqsData';
import Button from '@/components/common/Button';
import Image from 'next/image';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

   

    return (
        <div id="faq's" className="relative w-full max-w-[1728px] mx-auto min-h-[1000px] 2xl:min-h-[1520px] pb-20 bg-[#FFD6E4] px-4 overflow-hidden">
            <div className=" ">
                <div className='absolute hidden lg:block'>
                    <div className=' relative '><Image src="/images/stars.svg" width={189} height={189} alt='star' /></div>
                    <div className=' relative  top-3 left-0  '><Image src="/images/stars.svg" width={189} height={189} alt='star' /></div>
                </div>
               
                <div className="text-center mb-12 relative pt-24 md:pt-40 ">
                    <h2 className="text-4xl sm:text-5xl 2xl:text-[80px] font-mauline font-normal leading-tight 2xl:leading-[104px] mb-4">
                        Got Questions? <br />
                        We've Got <span className="text-[#D81159]">Answers</span>
                    </h2>
                   
                    <p className="text-[#0D0D0D] leading-snug pt-6 md:pt-10 text-lg sm:text-2xl 2xl:text-[32px] font-maiandra">
                        Find quick answers to the most common questions
                    </p>
                </div>

               
                <div className="flex flex-col gap-y-8 items-center relative top-10 bottom-10">
                    {Faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFFFF99] w-full max-w-[1228px] rounded-[32px] shadow-sm overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-5 sm:px-10 py-6 sm:py-8 flex gap-4 items-center text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <LucideChevronDown
                                    className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300
                        ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                                <span className="text-lg sm:text-2xl 2xl:text-[32px] font-mauline text-gray-900 sm:pr-8">{faq.question}</span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out bg-white overflow-hidden
                    ${openIndex === index ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-5 sm:px-10 py-6 text-[#6B6B6B] font-maiandra text-base sm:text-xl 2xl:text-[24px] ">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
                <div className=" font-maiandra text-white flex justify-center pt-16 md:pt-40 ">
                    <Button title=" View More FAQ's" className="w-full max-w-[600px] h-[84px] relative text-[24px] shadow-black shadow-xl" />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;