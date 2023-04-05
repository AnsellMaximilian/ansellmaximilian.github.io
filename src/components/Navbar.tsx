import React from "react";
import logo from "/logo.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className="bg-gray-950 fixed top-0 w-full h-16 flex items-center z-50">
      <nav className="text-white px-4 flex gap-2 items-center container mx-auto max-w-2xl">
        <a href="/">
          <img src={logo} className="w-12" />
        </a>
        <ul className="flex gap-8 ml-8">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#timeline" className="hover:underline">
              Timeline
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Techs
            </a>
          </li>
        </ul>
      </nav>
      <ul className="bg-gray-900 hidden md:flex items-center gap-4 pr-4 pl-12 h-full rounded-l-[32rem] absolute right-0">
        <li>
          <a target="_blank" href="https://github.com/AnsellMaximilian">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ansell-maximilian/"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
      </ul>
    </header>
  );
};
