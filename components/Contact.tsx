import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 1,
      }}
      viewport={{ once: true }}
      id="contact"
      className="w-full py-16"
    >
      <div className="w-[80%] lg:max-w-[1240px] m-auto px-2 py-16">
        <h2 className=" text-teal-700 mb-10 text-center lg:text-left">
          Let&apos;s Talk About Anything!
        </h2>
        <div className="mb-32">
          <p>
            Want to get in touch? Shoot me an email at{" "}
            <a
              className="underline text-teal-700"
              href="mailto:pgk1216@gmail.com"
            >
              pgk1216@gmail.com
            </a>
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-teal-700" size={30} />
            </div>
          </Link>
        </div>
        <div>
          <p className="text-center mt-16 -mb-16">Copyright Philip Kim 2023</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
