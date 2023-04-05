import React, { FC } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import reactLogo from "../assets/logos/react.png";
import logoMapper from "../helpers/logoMapper";

interface Props {
  image: string;
  title: string;
  description: string;
  githubLink?: string;
  externalLink?: string;
  techs: Array<string>;
}

export const Project: FC<Props> = ({
  image,
  title,
  description,
  githubLink,
  externalLink,
  techs,
}) => {
  return (
    <article className="flex flex-col w-72 bg-gray-900 rounded-lg overflow-hidden">
      <img src={image} className="w-full object-cover h-40" />
      <div className="p-4 text-center">
        <h4 className="text-xl font-medium">{title}</h4>
        <p>{description}</p>
      </div>
      <ul className="flex flex-wrap gap-4 justify-center  px-4">
        {techs.map((tech, index) => (
          <li className="flex gap-2 items-center" key={`${tech}-${index}`}>
            <img src={logoMapper(tech)} className="w-8 rounded-[50%]" />
            <span className="capitalize">{tech}</span>
          </li>
        ))}
      </ul>
      <ul className="p-4 flex justify-end gap-4">
        {externalLink && (
          <li>
            <a
              href={externalLink}
              className="hover:brightness-90"
              target="_blank"
            >
              <FaLink size={24} />
            </a>
          </li>
        )}
        {githubLink && (
          <li>
            <a
              href={githubLink}
              className="hover:brightness-90"
              target="_blank"
            >
              <FaGithub size={24} />
            </a>
          </li>
        )}
      </ul>
    </article>
  );
};
