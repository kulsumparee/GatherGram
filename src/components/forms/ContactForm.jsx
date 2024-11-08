"use client"
import React, { useState } from 'react';
import cross from "../../../public/images/icons/cross.svg";
import mail from "../../../public/images/icons/mail.svg";
import facebook from "../../../public/images/icons/facebook.svg";

import Image from 'next/image';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        role: 'Bride',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen  bg-[#FFD6E4]  relative mx-20 px-20  py-10 ">
            <div className="  grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
               
                <div className="flex flex-col  space-y-6 ">
                   
                        <div className='absolute right-10 top-5 cursor-pointer'>
                            <Image
                                src={cross}
                                alt='close'
                                className="w-8 h-8 hover:opacity-80 transition-opacity"
                                priority
                            />
                    </div>
                    <p className="font-mauline text-[32px] sm:text-2xl text-[#EB87AB]">
                        Let's Connect and Get You Started
                    </p>
                    <h1 className="font-mauline text-[64px] sm:text-4xl lg:text-5xl text-[#D81159] leading-tight">
                        Simply share a few details with us
                    </h1>
                    <p className="font-maiandra text-[#EB87AB] text-lg max-w-xl">
                        And we'll personally reach out to guide you through all that GatherGram has to offer!
                    </p>
                    <div className="text-[#D81159] flex gap-2 font-maiandra text-md sm:text-2xl mt-8">
                        <Image src={mail} alt='image mail' />
                        <a href="mailto:info@gathergram.app" className="hover:underline text-md transition-colors">
                            info@gathergram.app
                        </a>
                    </div>
                </div>

               
                <div className="w-full">
                    <div className="bg-[#FAFAFACC] rounded-xl shadow-lg p-6 sm:p-8">
                        <div className="relative">
                            

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-4">
                                    <p className="font-maiandra text-[24px] text-[#D81159]">I am the..</p>
                                    <div className=" flex flex-wrap gap-5">
                                        {['Bride', 'Groom', 'Event Planner', 'Other'].map((role) => (
                                            <button
                                                key={role}
                                                type="button"
                                                className={`px-10 py-5 rounded-full text-sm sm:text-base whitespace-nowrap
                                                    ${formData.role === role
                                                        ? 'bg-[#D81159] text-white'
                                                        : 'bg-white text-[#EB87AB] border-2 border-[#EB87AB]'
                                                    } transition-colors hover:opacity-90`}
                                                onClick={() => handleChange({ target: { name: 'role', value: role } })}
                                            >
                                                {role}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                               
                                {['name', 'email', 'phone', 'message'].map((field) => (
                                    <div key={field} className="space-y-1">
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            name={field}
                                            placeholder={`${field === 'name' || field === 'email' ? '* ' : ''}${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                            required={field === 'name' || field === 'email'}
                                            className="w-full p-3 border-b-2 border-[#EB87AB] placeholder:text-[#EB87AB] 
                                                     focus:border-[#D81159] focus:outline-none bg-transparent transition-colors
                                                     text-[#D81159]"
                                            value={formData[field]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-14 py-4 bg-[#D81159] text-white rounded-full
                                             hover:bg-[#c00f4f] transition-colors font-maiandra text-lg"
                                >
                                    Submit
                                </button>
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <Image src={facebook} alt='facebook' />
        </div>
    );
};

export default ContactForm;