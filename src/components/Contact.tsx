import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const Contact = () => {
  return (
    <article className="p-4 rounded-lg" id="contact">
      <h2 className="text-center text-2xl font-semibold uppercase">Contact</h2>
      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        <li>
          <a
            href="https://github.com/AnsellMaximilian"
            className="flex gap-2 items-center hover:underline"
            target="_blank"
          >
            <FaGithub size={24} />
            <div>AnsellMaximilian</div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ansell-maximilian/"
            className="flex gap-2 items-center hover:underline"
            target="_blank"
          >
            <FaLinkedin size={24} />
            <div>ansell-maximilian</div>
          </a>
        </li>
        <li>
          <a
            href="https://gmail.com"
            target="_blank"
            className="flex gap-2 items-center hover:underline"
          >
            <HiMail size={24} />
            <div>ansellmaximilian@gmail.com</div>
          </a>
        </li>
      </ul>
      <div className="mt-8 text-center">
        <a
          href="/Ansell Maximilian - Resume.pdf"
          className="cta px-3 py-1 rounded-lg font-bold"
          target="_blank"
        >
          View Resume
        </a>
      </div>
    </article>
  );
};
