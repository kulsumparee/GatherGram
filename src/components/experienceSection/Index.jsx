"use client";
import Image from 'next/image';
import Button from '../common/Button';


const ExperienceSection = () => {
    

    return (
        <div className="relative py-20 w-[1728px] h-[1003px] mx-auto">

            <div className="relative">
                 <span className="absolute font-mauline text-[24px] top-[180px] lef-[140px]  transform  font-handwriting text-[#eb97b6]">
                            effortless
                        </span>
                <div className=" absolute top-[150px] left-[300px] ">
                    <div className="relative">
                        <Image
                            src="/images/Experience/Group.svg"
                            alt='curve'
                            width={163}
                            height={54}
                        />

                    </div>

                    <div className="absolute top-[340px]">
                        <div className="relative left-16">
                            <Image
                                src="/images/Experience/Group (2).svg"
                                alt='curve'
                                width={196}
                                height={79}
                            />

                        </div>
                    </div>
                    <div className=" absolute right-0 top-48  transform translate-y-[-50%]  ">
                        <div className="relative left-[1050px]">
                            <Image
                                src="/images/Experience/Group 76.png"
                                alt='curve'
                                width={124}
                                height={123}
                            />

                        </div>
                    </div>
                    </div>
                    
                <div className="absolute top-[254px] ">
                    <div className="relative">
                       
                        <Image
                            src="/images/Experience/Ellipse 35.svg"
                            alt="Effortless experience"
                            width={220}
                            height={220}
                            className="rounded-full"
                        />
                       
                    </div>
                </div>

                <div className="absolute right-0 top-40 transform translate-y-[-50%]">
                    <div className="relative">
                        <Image
                            src="/images/Experience/Ellipse 39.svg"
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
                                src="/images/Experience/Group (3).svg"
                                alt='curve'
                                width={110}
                                height={120}
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
                            src="/images/Experience/Ellipse 44.svg"
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
                            src="/images/Experience/Ellipse 43.svg"
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