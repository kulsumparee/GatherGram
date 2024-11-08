// components/sections/FeaturesGrid/index.tsx
"use client"
import Image from 'next/image';
import React, { useState } from 'react';


const features = [
    {
        image: "/images/features/Default.svg",
        title: "Capture Every Moment",
        description: "Invite guests to share their favorite snapshots and videos of your big day "
    },
    {
        image: "/images/features/Default1.svg",
        title: "Capture Every Moment",
        description: "Enable guests to share photos and videos creating a collaborative wedding album that captures every angle of your special day."
    },
    {
        image: "/images/features/capture.jpg",
        title: "Capture Every Moment",
        description: "Enable guests to share photos and videos creating a collaborative wedding album that captures every angle of your special day."
    },
    {
        image: "/images/features/capture.jpg",
        title: "Capture Every Moment",
        description: "Enable guests to share photos and videos creating a collaborative wedding album that captures every angle of your special day."
    },
   
];

const FeatureCard = ({ image, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="  relative w-full h-[600px] rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            <div
                className={`absolute inset-0 transition-transform duration-300 ease-in-out
        ${isHovered ? 'translate-x-[-100%]' : 'translate-x-0'}`}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    layout="fill"
                    objectFit="cover"
                    className="object-cover w-full h-fll"
                    
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-mauline text-lg leading-tight">{title}</h3>
                </div>
            </div>

            
            <div
                className={`absolute inset-0 bg-pink-100 p-6 transition-transform duration-300 ease-in-out
        ${isHovered ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <p className="text-gray-700 font-maiandra text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default function FeaturesGrid() {
   

    return (
        <section className="relative ] py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}