import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineHome} from 'react-icons/ai';
import {BsBook, BsJournalCode} from 'react-icons/bs';
import {BiConversation} from 'react-icons/bi';
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full h-20 z-[100] bg-[#ecf0f3]'}>
            <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 2.8,
                duration: 1,
            }}
            className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href={"#"}>
                    <h3 className='ml-10 text-md hover:border-b'>PGK</h3>
                </Link>
                <div className='mr-10'>
                    <ul className='hidden md:flex'>
                        <Link href={"#about"}>
                            <li className='ml-10 text-md hover:border-b'>About</li>
                        </Link>
                        <Link href={"#projects"}>
                            <li className='ml-10 text-md hover:border-b'>Projects</li>
                        </Link>
                        <Link href={"#contact"}>
                            <li className='ml-10 text-md hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </motion.div>

            {/* Hamburger overlay */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    !nav ? 
                    'fixed text-center left-[-100%] top-0 p-10 ease-in duration-500' :
                    'fixed text-center left-0 top-0 w-[60%] sm:w=[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div>PGK</div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    <div className='pt-20 flex items-center flex-col'>
                        <ul>
                            <Link href={'#'} onClick={handleNav}>
                                <li className='flex py-2 my-10 text-md'>
                                    <AiOutlineHome className='w-5 h-5 mr-3' />
                                    Home
                                </li>
                            </Link>

                            <Link href={'#about'} onClick={handleNav}>
                                <li className='flex py-2 my-10 text-md'>
                                    <BsBook className='w-5 h-5 mr-3' />
                                    About
                                </li>
                            </Link>

                            <Link href={'#projects'} onClick={handleNav}>
                                <li className='flex py-2 my-10 text-md'>
                                    <BsJournalCode className='w-5 h-5 mr-3' />
                                    Projects
                                </li>
                            </Link>

                            <Link href={'#contact'} onClick={handleNav}>
                                <li className='flex py-2 my-10 text-md'>
                                    <BiConversation className='w-5 h-5 mr-3' />
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar