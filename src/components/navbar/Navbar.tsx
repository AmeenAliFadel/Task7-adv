'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import svg from '../../assets/down.svg';
import Image from 'next/image';
import menuIcon from '../../assets/menu-dark.svg';
import closeIcon from '../../assets/esc.svg';
import Modal from '../Model/Model';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [modalType, setModalType] = useState<null | 'login' | 'signup'>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); 
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={`
                    fixed z-50 w-full flex justify-between items-center 
                    transition-all duration-300 ease-in-out 
                    px-6 2xl:px-[250px]
                    ${isScrolled ? 'bg-black/80 py-2 shadow-lg rounded-b-xl' : 'bg-[#FFFFFF33] backdrop-blur-md py-2.5 2xl:py-5'}
                    text-white
                `}
            >
                <Image
                    src={logo}
                    alt="logo"
                    width={isScrolled ? 100 : 133}
                    height={isScrolled ? 100 : 130}
                    className={`transition-all duration-300 w-20 h-auto lg:w-[133px] md:h-[130px]`}
                />

                <ul className='hidden lg:flex gap-10 text-sm xl:text-base'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li>Tour Packages</li>
                    <li>Contact Us</li>
                </ul>

                <div className='hidden lg:flex gap-2.5 items-center'>
                    <p className='flex items-center gap-1.5 text-[#eceaea]'>
                        Eng <Image src={svg} alt='lang' />
                    </p>
                    <button className='text-white' onClick={() => setModalType('login')}>Login</button>
                    <button className='w-[130px] xl:w-[168px] bg-[#FA8B02] rounded-[50px] py-2.5 px-4 xl:px-6 text-sm xl:text-xl' onClick={() => setModalType('signup')}>Sign Up</button>
                </div>

                <button onClick={toggleMenu} className="lg:hidden text-3xl text-black">
                    <Image src={menuIcon} alt='menu' width={30} height={30} />
                </button>
            </div>

            <div
                className={`
                    fixed z-50 top-0 right-0 w-full h-full bg-white text-black  p-6
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    lg:hidden flex flex-col justify-start pt-28 items-center
                `}
            >
                <button onClick={toggleMenu} className="lg:hidden text-3xl absolute z-50 top-14 right-6 text-black">
                    <Image src={closeIcon} alt='close' width={30} height={30} />
                </button>
                <ul className='flex flex-col justify-center items-center gap-6 text-lg font-semibold mt-20'>
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={toggleMenu}>About Us</Link></li>
                    <li onClick={toggleMenu}>Tour Packages</li>
                    <li onClick={toggleMenu}>Contact Us</li>
                </ul>

                <div className='mt-10 flex flex-col w-full gap-4'>
                    {!isMenuOpen && (
                        <p className='flex items-center gap-2 text-gray-600'>
                            Eng <Image src={svg} alt='lang' />
                        </p>
                    )}
                    <button className='text-[#FA8B02] border border-[#FA8B02] rounded-full py-2' onClick={() => {
                        setIsMenuOpen(false); 
                        setModalType('login'); 
                    }}>Login</button>
                    <button className='bg-[#FA8B02] text-white rounded-full py-2' onClick={() => {
                        setIsMenuOpen(false); 
                        setModalType('signup'); 
                    }}>Sign Up</button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className='fixed inset-0 bg-black/50 backdrop-blur-sm z-10 lg:hidden'
                    onClick={toggleMenu}
                />
            )}
            {modalType && (
                <Modal type={modalType}
                    onSwitch={(newType) => setModalType(newType)}
                    onClose={() => setModalType(null)} />
            )}
        </>
    );
}
