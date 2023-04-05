import { FC } from "react";
import logo from "/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";

interface MenuItemProps {
  link: string;
  text: string;
}

export const MenuItem: FC<MenuItemProps> = ({ link, text }) => {
  return (
    <Menu.Item>
      <a
        href={link}
        className="block px-3 py-2 hover:bg-white hover:text-black transition-all duration-100"
      >
        {text}
      </a>
    </Menu.Item>
  );
};

export const Navbar = () => {
  return (
    <header className="bg-gray-950 fixed top-0 w-full h-16 flex items-center z-50">
      <nav className="text-white px-4 flex gap-2 items-center container mx-auto max-w-2xl">
        <a href="/" className="flex gap-2 items-center">
          <img src={logo} className="w-12" />
          <div className="block md:hidden font-bold">Ansell Maximilian</div>
        </a>
        <ul className="hidden md:flex gap-8 ml-8">
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
        <Menu as="nav" className="ml-auto block md:hidden relative">
          {({ open }) => (
            <>
              <Menu.Button className="hover:text-gray-200">
                <BiMenu size={24} />
              </Menu.Button>
              <Transition
                show={open}
                enter="transform transition duration-100"
                enterFrom="opacity-0 scale-0"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
              >
                <Menu.Items className="absolute right-0 shadow-lg origin-top-right bg-gray-900 mt-4 w-64 ring-1 ring-gray-500 rounded-lg overflow-hidden">
                  <MenuItem link="#about" text="About" />
                  <MenuItem link="#timeline" text="Timeline" />
                  <MenuItem link="#projects" text="Projects" />
                  <MenuItem link="#skills" text="Techs" />
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
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
