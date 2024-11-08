"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import image1 from "../../../public/images/Experience/Ellipse 35.svg"
import image2 from "../../../public/images/Experience/Ellipse 39.svg"
import image3 from "../../../public/images/Experience/Ellipse 43.svg"
import image4 from "../../../public/images/Experience/Ellipse 44.svg"
import curve1 from "../../../public/images/Experience/Group.svg"
import curve2 from "../../../public/images/Experience/Group (2).svg"
import curve3 from "../../../public/images/Experience/Group (3).svg"
import curve4 from "../../../public/images/Experience/Group 76.png"

const ExperienceSection = () => {
    

    return (
        <div className="relative py-20 w-[1728px] h-[1003px] mx-auto">

            <div className="relative">
                <div className=" absolute top-[150px] left-[340px] ">
                    <div className="relative">
                        <Image
                            src={curve1}
                            alt='curve'
                        />

                    </div>

                    <div className=" absolute top-[340px]  ">
                        <div className="relative left-16">
                            <Image
                                src={curve2}
                                alt='curve'
                            />

                        </div>
                    </div>
                    <div className=" absolute right-0 top-48  transform translate-y-[-50%]  ">
                        <div className="relative left-[1050px]">
                            <Image
                                src={curve4}
                                alt='curve'
                            />

                        </div>
                    </div>
                    </div>
                    
                <div className="absolute top-[254px] ">
                    <div className="relative">
                        <Image
                            src={image1}
                            alt="Effortless experience"
                            width={220}
                            height={220}
                            className="rounded-full"
                        />
                        <span className="absolute font-serif -right-20 top-1/2 transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            effortless
                        </span>
                    </div>
                </div>

                <div className="absolute right-0 top-40 transform translate-y-[-50%]">
                    <div className="relative">
                        <Image
                            src={image2}
                            alt="Memorable moments"
                            width={220}
                            height={220}
                            className="rounded-full"
                        />
                        <span className="absolute  transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            memorable
                        </span>
                    </div>
                </div>

                <div className='relative'>
                    <div className=" absolute  top-[760px] left-[900px]   ">
                        <div className="relative lef-[600px] ">
                            <Image
                                src={curve3}
                                alt='curve'
                            />

                        </div>
                    </div>
                </div>

                <div className="text-center absolute top-[174px] left-[420px] ">
                    <h2 className="text-[80px] relative  font-mauline ">
                        Be Part of the Experience With
                    </h2>
                    <h3 className="text-[#D81159] text-[80px] font-mauline mb-8">
                        Our Exclusive Free Access!
                    </h3>
                    <p className="text-[32px] font-maiandra w-[985px] mb-8">
                        Join GatherGram's exclusive Free Access and explore everything
                        our platform has to offer
                    </p>
                    <Button title='Register for Free Access' className="w-[480px] h-[84px] shadow-xl mt-14 shadow-black " />
                </div>
                <div className="absolute top-[750px] left-[213px] transform translate-y-[-50%]">
                    <div className="relative">
                        <Image
                            src={image4}
                            alt="Tailored just for you"
                            width={220}
                            height={220}
                            className="rounded-full"
                        />
                        <span className="absolute -left-36 top-1/2 transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            tailored just for you
                        </span>
                    </div>
                </div>

               
                <div className="absolute top-[625px] left-[1247px]  transform translate-y-[-50%]">
                    <div className="relative">
                        <Image
                            src={image3}
                            alt="Joyful moments"
                            width={220}
                            height={220}
                            className="rounded-full"
                        />
                        <span className="absolute -left-16 top-1/2 transform -translate-y-1/2 font-handwriting text-[#D81159]">
                            joyful
                        </span>
                    </div>
                </div>

                
                
            </div>

           
        </div>
    );
};

export default ExperienceSection;