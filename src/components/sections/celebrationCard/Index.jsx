import Image from 'next/image';
import React from 'react';
import { CelebrationCardData } from './CardData';

const CelebrationCard = () => {
    return (
        <div className="relative min-h-[600px] w-[1728px] bg-[#EB87AB] p-8 md:p-16 overflow-hidden">
           
            <div className="absolute top-8 left-8 w-10 text-white/80"><Image src="/images/highlights/star1.svg" width={122} height={122} alt='star1'/></div>
            <div className="absolute top-16 right-16 text-white/80"><Image src="/images/highlights/star2.svg" width={140} height={190} alt='star2'  /></div>
            <div className="absolute bottom-12 left-24 text-white/80"><Image src="/images/highlights/star3.svg" width={176} height={176} alt='star3' /></div>
            <div className="absolute  top-[80%] left-[80%] text-white/80"><Image src="/images/highlights/star1.svg" width={150} height={236} alt='star1' /></div>
            
            <div className="absolute -top-10 -right-36 w-72 h-72 bg-[#f1659d] rounded-full " />
 
            <div className="relative z-10 max-w-6xl mx-auto">
               
                <div className="text-center mb-12">
                    <div className=' flex items-center justify-center gap-14'>
                        <Image src="/images/highlights/line2.svg" width={158} height={157} alt='line' />
                        <h2 className="font-mauline text-white text-[80px] mb-4">
                            Celebrate With Ease
                        </h2>
                        <Image src="/images/highlights/line1.svg" width={158} height={157} alt='line' />
                  </div>
                    <p className="font-maiandra text-white/90 text-[32px] ">
                        From setup to celebration, here's how we make your wedding day <br />
                        hassle-free
                    </p>
                </div>

                
                <div className="">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        
                        {CelebrationCardData && CelebrationCardData.map((data, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
                                <div className="inline-block mb-4">
                                    <Image src={data.img1} alt='dataimage' />
                                </div>
                                <div className='flex flex-col md:flex-row items-start gap-8'>
                                    <div className="space-y-4">
                                    <h3 className="font-mauline text-[#EB6B9F] text-2xl mb-4">
                                        {data.title}
                                    </h3>
                                        <p className="font-maiandra text-gray-600">
                                            {data.description1}
                                        </p>
                                        <p className="font-maiandra text-gray-600">
                                            {data.description2}
                                        </p>
                                    </div>
                                    <div className="w-full mt-8 md:w-96 h-48">
                                        <Image src="/images/book.svg" alt='robot image' width={290} height={317} />
                                    </div>
                               </div>
                            </div>
                        ))}

                       
                        
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default CelebrationCard;