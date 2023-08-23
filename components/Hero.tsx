"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex gap-12 md:gap-8 items-center flex-col lg:flex-row"
    >
      <div className="whitespace-nowrap w-full">
        <p className="text-xl lg:text-3xl xl:text-4xl font-semibold text-gray-300">
          Halo, nama saya
        </p>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-4">
          Ansell Maximilian
        </h1>
        <p className="text-xl lg:text-3xl xl:text-4xl">
          Web and Systems Developer
        </p>
      </div>
      <div>
        <p className="mb-4">
          A computer science graduate majoring in information systems. I&apos;ve
          self-taught to code both front end and backend. My strength lies in
          crafting front-end solutions, which I&apos;ve applied professionally.
          I focus on creating user-centered interfaces and enjoy using React and
          Tailwind for the job.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#contact-section"
            className="bg-white text-black hover:bg-gray-300 border-2 border-white px-4 py-2 font-bold hover:border-gray-300 transition-all duration-100"
          >
            Contact Me
          </a>
          <Link
            href="/Ansell_Maximilian_Resume.pdf"
            className="hover:bg-gray-300 border-2 border-white px-4 py-2 font-bold hover:border-gray-300 transition-all duration-100 hover:text-black"
          >
            Resume
          </Link>
          {/* <a
            href="#projects"
            className="hover:bg-gray-300 border-2 border-white px-4 py-2 font-bold hover:border-gray-300 transition-all duration-100 hover:text-black"
          >
            Projects
          </a> */}
        </div>
      </div>
    </motion.div>
  );
}
