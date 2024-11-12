"use client";
import Image from "next/image";
import React, { useState } from "react";
const features = [
    {
        image: "/images/features/img1.jpeg",
        title: "Capture Every Precious Moment",
        description: "Your Guests, Your Memories.",
    },
    {
        image: "/images/features/img2.jpeg",
        title: "Virtual Guestbook",
        description: "A Digital Keepsake of Love & Laughter.",
    },
    {
        image: "/images/features/img3.jpeg",
        title: "Event Details & Itinerary",
        description: "Every Detail, One Place.",
    },
    {
        image: "/images/features/img4.jpeg",
        title: "Gifts from the Heart, Sent Securely",
        description: "Easy Contributions, Lasting Gratitude.",
    },
    {
        image: "/images/features/img5.jpeg",
        title: "Your Personalized Love Story Beautifully Told",
        description: "A Journey Worth Sharing.",
    },
    {
        image: "/images/features/img6.jpeg",
        title: "Personalized Photo Album",
        description: "Where Your Wedding Moments Live On.",
    },
    {
        image: "/images/features/img7.jpeg",
        title: "Fun & Laughter with Couple Trivia",
        description: "Engage Your Guests Like Never Before.",
    },
];
const FeatureCard = ({ image, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`absolute inset-0 transition-transform duration-300 ease-in-out
                ${isHovered ? "translate-x-[-100%]" : "translate-x-0"}`}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-mauline text-lg leading-tight">
                        {title}
                    </h3>
                </div>
            </div>
            <div
                className={`absolute inset-0 bg-pink-100 p-6 transition-transform duration-300 ease-in-out
                ${isHovered ? "translate-x-0" : "translate-x-full"}`}
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
        <section className="relative py-12 px-4">
            <div className="px-10">
                <div
                    className="grid gap-6"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, auto)",
                        gridTemplateRows: "repeat(4, auto)",
                    }}
                >
                    
                    <div className="col-span-1 row-span-1 h-[828px]">
                        <FeatureCard {...features[0]} />
                    </div>
                    <div className="col-span-1 row-span-1 h-[404px]">
                        <FeatureCard {...features[1]} />
                    </div>
                   
                    <div className="col-span-1 row-span-1 h-[250px]">
                        <FeatureCard {...features[2]} />
                    </div>
                    <div className="col-span-1 row-span-2 h-[828px]">
                        <FeatureCard {...features[3]} />
                    </div>
                   
                    <div className="col-span-1 row-span-2 h-[750px]">
                        <FeatureCard {...features[4]} />
                    </div>
                    <div className="col-span-1 row-span-2 h-[650px]">
                        <FeatureCard {...features[5]} />
                    </div>
                    
                    <div className="col-span-1 row-span-1 h-[250px]">
                        <FeatureCard {...features[6]} />
                    </div>
                </div>
            </div>
        </section>
    );
}