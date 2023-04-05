import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDragHandle } from "react-icons/md";
import { motion } from "framer-motion";

export const SideLinks = () => {
  return (
    <motion.nav
      drag
      dragConstraints={{ left: 0, right: 0, top: 0 }}
      className="fixed left-0 bottom-1/2 translate-y-1/2 shadow-md"
    >
      <ul>
        <li>
          <span className="bg-gray-900 hover:bg-gray-800 p-2 md:p-4 block">
            <MdDragHandle size={24} />
          </span>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ansell-maximilian/"
            className="bg-sky-700 hover:bg-sky-800 p-2 md:p-4 block"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AnsellMaximilian"
            className="bg-black hover:bg-gray-900 p-2 md:p-4 block"
            target="_blank"
          >
            <FaGithub size={24} />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};
