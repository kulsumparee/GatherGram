// components/layout/Navbar/index.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import logo from "../../../public/images/GG Logo.svg"
import { Heart, X, Menu } from 'lucide-react';
import Image from 'next/image';
import Button from '../common/Button';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#features', label: 'Features' },
        { href: '#how-it-works', label: 'How it works' },
        { href: "#faq's", label: "FAQ's" },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="absolute w-[1728px] h-[160px] top-0 left-0 right-0 z-50 backdrop-blur-sm   ">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} width={56} height={56} alt='navicon' />
                        <span className="text-white text-[40px] leading-[80px] font-medium font-mauline">GatherGram</span>
                    </Link>

                   
                    <div className="hidden md:flex items-center font-normal gap-8 font-maiandra">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-white text-[24px] hover:text-white/80 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                         <Button title="Get Started"/>
                    </div>

                   
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white  "
                        
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-white/10">
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white text-sm hover:text-white/80 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button title="Get Started" className="w-full" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;