import Image from 'next/image';
import React from 'react';
import ProfilePic from '@/public/download.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            delay: 0.4,
            duration: 1,
        }}
        viewport={{ once: true }}
        id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='w-[80%] m-auto md:grid grid-cols-3 gap-8 lg:max-w-[1240px]'>
                <div className='col-span-2'>
                    <h2 className='py-4 text-teal-700 text-center lg:text-left'>If you wanna know more about me...</h2>
                    <p className='py-2'>I'm <span className='text-teal-700'>Philip Kim</span>, a Bachelor's degree graduate from University of Michigan - Ann Arbor. I recently worked at Alarm.com as a Software Engineer specializing in Android development under the emPower Connected Car team. I am currently open to work!</p>

                    <p className='py-2'>Working on software development has been a passion of mine dating all the way back to middle school when I would develop a Minecraft server from scratch. Whether it's me having a nosy personality or not, I've always been interested in how everything worked behind the scenes. I've always wanted to understand how technology worked and imitate them myself. With technology being the main protagonist (or antagonist) of this era, my goal is to contribute my creative and innovative way of thinking to the way software is engineered and developed. And who knows, maybe I just might do something amazing :)</p>

                    <p className='py-2'>Outside of my passion for all things technology, I have a few hobbies -- powerlifting/bodybuilding (powerbuilding), playing Valorant, playing Volleyball -- just to name a few. The hope is that one day I think of some genius idea to intertwine my passion for technology and my hobbies.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={ProfilePic} alt="" />
                </div>
            </div>
        </motion.div>
    );
};

export default About;