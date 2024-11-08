"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import image1 from "../../../public/images/Experience/Ellipse 35.svg"
import image2 from "../../../public/images/Experience/Ellipse 39.svg"
import image3 from "../../../public/images/Experience/Ellipse 43.svg"
import image4 from "../../../public/images/Experience/Ellipse 44.svg"

const ExperienceSection = () => {
    const router = useRouter();

    return (
        <div className="relative py-20 w-[1728px] mx-auto">
            <div className="relative">
                {/* Top Image */}
                <div className="absolute top-[254px] ">
                    <div className="relative">
                        <Image
                            src={image4}
                            alt="Effortless experience"
                            width={220}
                            height={220}
                            className="rounded-full"
                        />
                        <span className="absolute -right-20 top-1/2 transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            effortless
                        </span>
                    </div>
                </div>
           
            <div className="text-center pt-[200px]">
                <h2 className="text-[80px] font-mauline ">
                    Be Part of the Experience With
                </h2>
                <h3 className="text-[#D81159] text-[80px] font-mauline mb-8">
                    Our Exclusive Free Access!
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                    Join GatherGram's exclusive Free Access and explore everything
                    our platform has to offer
                </p>
                <Button title='Register for Free Access'/>
            </div>

            {/* Circular Images with Labels */}
           
                {/* Right Image */}
                <div className="absolute right-0 top-1/2 transform translate-y-[-50%]">
                    <div className="relative">
                        <Image
                            src={image1}
                            alt="Memorable moments"
                            width={120}
                            height={120}
                            className="rounded-full"
                        />
                        <span className="absolute -right-24 top-1/2 transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            memorable
                        </span>
                    </div>
                </div>
                

                {/* Left Image */}
                <div className="absolute  transform translate-y-[-50%]">
                    <div className="relative">
                        <Image
                            src={image2}
                            alt="Tailored just for you"
                            width={120}
                            height={120}
                            className="rounded-full"
                        />
                        <span className="absolute -left-36 top-1/2 transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            tailored just for you
                        </span>
                    </div>
                </div>

                {/* Top Left Image */}
                <div className="absolute  transform translate-y-[-50%]">
                    <div className="relative">
                        <Image
                            src={image3}
                            alt="Joyful moments"
                            width={120}
                            height={120}
                            className="rounded-full"
                        />
                        <span className="absolute -left-16 top-1/2 transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            joyful
                        </span>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <span className="font-handwriting text-[#D81159] text-xl">
                        hassle free
                    </span>
                </div>
            </div>

            {/* Decorative Arrows */}
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    {/* Add SVG arrows here */}
                    <svg className="absolute top-1/4 left-1/3" width="100" height="50">
                        <path
                            d="M10 25 Q 50 0 90 25"
                            fill="none"
                            stroke="#EB87AB"
                            strokeWidth="2"
                        />
                    </svg>
                    {/* Add more arrows as needed */}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;