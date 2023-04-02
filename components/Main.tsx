import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="w-full h-screen p-2 items-center lg:flex lg:justify-center max-lg:pt-36">
        <div>
          <div className="text-center p-10">
            <motion.h2
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="py-2 text-gray-800 font-bold md:text-7xl"
            >
              &apos;Sup!👋 I&apos;m{" "}
              <span className="text-teal-700">Philip</span>
            </motion.h2>
            <motion.h3
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.4,
                duration: 1,
              }}
              className="text-xl text-gray-800 py-2 md:text-2xl"
            >
              I&apos;m a <span className="font-bold">Software Engineer</span>
            </motion.h3>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.4,
                duration: 1,
              }}
              className="text-medium py-3 leading-7 max-w-3xl mx-auto md:text-lg"
            >
              I&apos;ve worked in both front-end and back-end development. I
              previously worked at Alarm.com under the{" "}
              <span className="font-bold">Software Engineer - Android</span>{" "}
              title. I am currently{" "}
              <span className="font-bold">open to work!</span>
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2.8,
              duration: 1,
            }}
            className="flex items-center justify-between text-[#ecf0f3] max-w-[330px] m-auto py-4"
          >
            <a href="Philip_Kim_Resume.pdf" target="_blank">
              <p className=" flex rounded-full text-[#ecf0f3] bg-teal-700 shadow-lg shadow-gray-400 py-4 px-6 cursor-pointer mx-auto hover:scale-105 ease-in duration-300">
                View Resume <ImNewTab className="ml-2 mt-1" />
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/philip-kim-ab367b178/"
              target="_blank"
            >
              <div className="rounded-full bg-teal-700 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/pgk1216" target="_blank">
              <div className="rounded-full bg-teal-700 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;

{
  /* <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className='relative mx-auto my-auto rounded-full w-52 h-52 overflow-hidden lg:mx-10 md:w-80 md:h-80'>
                <Image src={ProfilePic} alt={''} layout='fill' objectFit='cover' />
                </div>
                <div>
                    <h1 className='py-4 text-gray-600'>'Sup, I'm <span className='text-teal-700'>Philip</span></h1>
                    <h2 className='py-2 text-gray-600'>I'm a Software Engineer</h2>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quam molestias fugiat ea natus dolores dolorum quos sint reprehenderit nihil. Voluptatibus autem amet blanditiis est fuga quos! Nam, distinctio porro?
                    </p>
                    <div className='flex items-center justify-between text-white max-w-[330px] m-auto py-4'>
                        <p className='rounded-full bg-teal-700 shadow-lg shadow-gray-400 py-4 px-6 cursor-pointer mx-auto hover:scale-110 ease-in duration-300'>View My Resume</p>
                        <div className='rounded-full bg-teal-700 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full bg-teal-700 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 ml-5'>
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>
        </div> */
}
