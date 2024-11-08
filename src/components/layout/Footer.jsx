"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../common/Button';
import logo from "../../../public/images/GG Logo.svg"
import { Facebook } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        Platform: [
            'Home',
            'Register',
            'Features',
            'How It Works',
            'FAQs'
        ],
        Company: [
            'About',
            'Careers',
            'Contact Us',
            'info@gathergram.app'
        ],
        Legal: [
            'Privacy Policy',
            'Terms of Service',
            'Cookies'
        ]
    };
    return (
        <div className=' bg-black w-[1728px] md:h-[612px] text-white px-10 md:px-20'>
            <div className=' flex  md:flex-row flex-col items-center space-y-10 md:justify-between py-10 border-b'>
                <div>
                    <h1 className=' font-maiandra text-[32px] '>Join Our Newsletter</h1>
                    <p className=' text-[14px] font-maiandra text-[#FAFAFA99]'>Keep up to date with our latest news</p>
                </div>

                <div className=' flex gap-4 items-center'>
                    <input type="text" name="" id="input" placeholder='Enter your email' className='bg-[#D0D5DD] w-[352px] h-[44px] rounded-full pl-5 text-[#D81159] ' />
                <Button title='Subscribe' className="text-white w-[148px] h-[44px] text-[14px] " />
                </div>
            </div>
            <div className="">
                <div className="max-w-[1728px] mx-auto  ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-16">
                        
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-center gap-2">
                              <Image src={logo} alt='footerlogo'/>
                                <span className=" font-mauline text-[40px]">GatherGram</span>
                            </div>
                            <p className="text-gray-400 text-base text-[14px] w-[339px] font-maiandra  pt-10">
                                We bring all your wedding essentials into one hassle-free, secure, and budget-friendly platform designed to make your day as seamless as it is unforgettable.
                            </p>
                            <button className=" py-2 px-2 rounded-full bg-white text-black hover:text-white transition-colors">
                                <Facebook size={24} />
                            </button>
                        </div>

                       
                        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h3 className=" font-maiandra text-[20px] pb-5">{category}</h3>
                                    <ul className="space-y-4">
                                        {links.map((link) => (
                                            <li key={link}>
                                                <span className=" text-[#FAFAFA99] font-maiandra text-[14px] cursor-pointer hover:text-white transition-colors">
                                                    {link}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                   
                    <div className="py-6 border-t ">
                        <p className="text-gray-400 text-[14px] font-maiandra">
                            © 2024 GatherGram, all rights reserved.
                        </p>
                    </div>
                </div>
            </div>
       </div>
   )
};

export default Footer;