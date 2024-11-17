"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { CelebrationCardData } from './CardData';

const CelebrationCard = () => {
   
    const [expandedCards, setExpandedCards] = useState(new Set());

    const toggleCard = (index) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <div className="relative min-h-[600px] w-[1728px] bg-[#EB87AB] p-8 md:p-16 overflow-hidden">
            <div className="absolute top-8 left-8 w-10">
                <Image src="/images/highlights/star1.svg" width={122} height={122} alt='star1' />
            </div>
            <div className="absolute top-16 right-16">
                <Image src="/images/highlights/star2.svg" width={140} height={190} alt='star2' />
            </div>
            <div className="absolute bottom-12 left-24">
                <Image src="/images/highlights/star3.svg" width={176} height={176} alt='star3' />
            </div>
            <div className="absolute top-[80%] left-[80%]">
                <Image src="/images/highlights/star1.svg" width={150} height={236} alt='star1' />
            </div>
            <div className="absolute -top-10 -right-36 w-72 h-72 bg-[#f1659d] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <div className='flex items-center justify-center gap-14'>
                        <Image src="/images/highlights/line2.svg" width={158} height={157} alt='line' />
                        <h2 className="font-mauline text-white text-[80px] mb-4">
                            Celebrate With Ease
                        </h2>
                        <Image src="/images/highlights/line1.svg" width={158} height={157} alt='line' />
                    </div>
                    <p className="font-maiandra text-white/90 text-[32px]">
                        From setup to celebration, here's how we make your wedding day <br />
                        hassle-free
                    </p>
                </div>


                <div className=" flex gap-10 ">
                    {CelebrationCardData.map((item, index) => (
                        <ExpandableCard
                            key={index}
                            data={item}
                            isExpanded={expandedCards.has(index)}
                            onToggle={() => toggleCard(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const ExpandableCard = ({ data, isExpanded, onToggle }) => {
    return (
        <div
            onClick={onToggle}
            className={`
                
                rounded-3xl 
                shadow-lg 
                cursor-pointer
                transition-all 
                duration-500 
                  ${isExpanded ? ' bg-white' : 'bg-[rgb(252,173,205)] '}
                ease-in-out
                ${isExpanded ? 'md:w-[700px]' : 'max-w-28'}
                h-full 
                p-8 
                relative
                overflow-hidden
            `}
        >
            <div className="inline-block mb-4">
                <Image
                    src={data.img1}
                    alt={data.title}
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
            </div>

            <div className={`
                transition-opacity 
                duration-500
                flex
                
                ${isExpanded ? 'opacity-100' : 'opacity-0'}
            `}>
                <div className="space-y-4">
                    <h3 className="font-mauline text-[#EB6B9F] text-3xl mb-4">
                        {data.title}
                    </h3>
                    <p className="font-maiandra text-xl text-gray-600">
                        {data.description1}
                    </p>
                    <p className={`
                        font-maiandra 
                        text-gray-600
                        transition-all 
                        duration-500
                        text-xl
                        ${isExpanded ? 'block' : 'hidden'}
                    `}>
                        {data.description2}
                    </p>
                </div>

                {isExpanded && (
                    <div className="w-full mt-8 md:w-96 h-48">
                        <Image
                            src="/images/book.svg"
                            alt="decorative image"
                            className="mix-blend-multiply"
                            width={300}
                            height={317}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CelebrationCard;