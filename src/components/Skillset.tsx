import React, { FC } from "react";
import logoMapper from "../helpers/logoMapper";
import { motion } from "framer-motion";

interface Props {
  title: string;
  techs: Array<string>;
}

export const Skillset: FC<Props> = ({ title, techs }) => {
  return (
    <motion.article
      className="flex flex-col w-72 bg-gray-900 rounded-lg overflow-hidden"
      id="skills"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="p-4 text-center">
        <h4 className="text-xl font-medium">{title}</h4>
      </div>
      <ul className="flex flex-wrap gap-4 justify-center px-4 pb-4">
        {techs.map((tech, index) => (
          <li className="flex gap-2 items-center" key={`${tech}-${index}`}>
            <img src={logoMapper(tech)} className="w-8 rounded-[50%]" />
            <span className="capitalize">{tech}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
