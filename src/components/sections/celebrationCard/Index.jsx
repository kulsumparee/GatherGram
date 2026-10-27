"use client"
import Image from 'next/image';
import React from 'react';
import { CelebrationCardData } from './CardData';

const CelebrationCard = () => {
    return (
        <section id="how-it-works" className="relative w-full max-w-[1728px] mx-auto min-h-[600px] bg-[#EB87AB] p-6 sm:p-8 md:p-16 overflow-hidden">
            <div className="absolute top-8 left-8 w-10 hidden md:block">
                <Image src="/images/highlights/star1.svg" width={122} height={122} alt='' />
            </div>
            <div className="absolute top-16 right-16 hidden lg:block">
                <Image src="/images/highlights/star2.svg" width={140} height={190} alt='' />
            </div>
            <div className="absolute bottom-12 left-24 hidden md:block">
                <Image src="/images/highlights/star3.svg" width={176} height={176} alt='' />
            </div>
            <div className="absolute top-[80%] left-[80%] hidden lg:block">
                <Image src="/images/highlights/star1.svg" width={150} height={236} alt='' />
            </div>
            <div className="absolute -top-10 -right-36 w-72 h-72 bg-[#f1659d] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <div className='flex items-center justify-center gap-6 lg:gap-14'>
                        <Image src="/images/highlights/Line2.svg" width={158} height={157} alt='' className="hidden lg:block" />
                        <h2 className="font-mauline text-white text-4xl sm:text-6xl 2xl:text-[80px] mb-4">
                            Celebrate With Ease
                        </h2>
                        <Image src="/images/highlights/Line1.svg" width={158} height={157} alt='' className="hidden lg:block" />
                    </div>
                    <p className="font-maiandra text-white/90 text-lg sm:text-2xl 2xl:text-[32px]">
                        From setup to celebration, here&apos;s how we make your wedding day{' '}
                        <br className="hidden md:block" />
                        hassle-free
                    </p>
                </div>

                <ol className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 list-none">
                    {CelebrationCardData.map((item, index) => (
                        <StepCard key={item.title} data={item} step={index + 1} />
                    ))}
                </ol>
            </div>
        </section>
    );
};

const StepCard = ({ data, step }) => {
    return (
        <li className="rounded-3xl shadow-lg bg-white p-6 sm:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D81159] text-white font-maiandra text-2xl">
                    {step}
                </span>
                <Image
                    src={data.img1}
                    alt=""
                    width={46}
                    height={48}
                    className="w-auto h-auto"
                />
            </div>
            <h3 className="font-mauline text-[#EB6B9F] text-2xl sm:text-3xl">
                {data.title}
            </h3>
            <p className="font-maiandra text-lg sm:text-xl text-gray-700">
                {data.description1}
            </p>
            <p className="font-maiandra text-base sm:text-lg text-gray-600">
                {data.description2}
            </p>
        </li>
    );
};

export default CelebrationCard;
