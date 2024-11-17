import NavBar from '@/components/layout/NavBar'
import React from 'react'
import { ArrowDown, } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className="relative h-[1255px] w-[1728px]  ">

                <div className="absolute inset-0">
                    <Image
                        src="/images/Hero BG.svg"
                        alt="Wedding couple with bouquet"
                       height={1255}
                        width={1728}
                        priority
                        className="object-cover"
                        quality={100}
                    />
                </div>
                <div className=''>
                    <NavBar />
                </div>
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center top-[320px] justify-center min-h-screen text-center px-4">
                    
                      <h1 className="font-mauline  text-white text-[100px] md:text-6xl lg:text-[104px]   leading-tight mb-8">
                          Celebrate, Share, Remember
                          <br />
                          All in One Place
                      </h1>

                      <p className="font-maiandra text-white/90 text-[40px] md:text-[32px] max-w-6xl mx-auto mb-16 leading-relaxed">
                          From photo sharing to guest messages and interactive games, transform your
                          wedding day into an unforgettable experience for friends and family
                      </p>

                      <div className="flex flex-col items-center gap-6 absolute top-[700px]">
                          <p className="font-maiandra text-[32px] text-white ">
                              Register for free
                          </p>

                        <ArrowDown className="w-6 h-6 text-white mt-2 cursor-pointer animate-bounce-slow" />
                      </div>
                  </div>
            </section>

        </>

    )
}

export default Hero