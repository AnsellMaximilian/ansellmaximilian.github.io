import React from "react";

export const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <nav className="text-white p-4 flex gap-2 items-center container mx-auto ">
        <a href="#" className="text-xl">
          Ansell Maximilian
        </a>
        <ul className="flex gap-2 ml-8">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
