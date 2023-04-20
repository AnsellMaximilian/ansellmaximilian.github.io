import hero from "../assets/hero.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <article className="text-white p-4 h-[24rem] md:h-[24rem] mt-16">
      <div className="relative h-full">
        <img src={hero} className="blur-none md:blur-sm brightness-50 w-full" />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bottom-0 md:top-0 flex flex-col justify-end md:justify-center -translate-y-1/2"
        >
          <div className="text-center max-w-xl mx-auto w-full">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Ansell Maximilian
            </h1>
            <h2 className="text-base md:text-xl">
              Web Developer
            </h2>
          </div>
          <div
            className="mt-2 md:mt-8 max-w-xl mx-auto p-4 rounded-lg w-full"
            id="about"
          >
            <h3 className="text-xl font-medium">About</h3>
            <p className="text-justify indent-8 hyphens-auto">
              I am a Information Systems graduate with a concentration on Enterprise Applications. I also have a keen interest in web development and have been self-taught on it since my introduction to it during a university course. I have been able to use my web development skills in all parts of my life, including my current job. I am actively looking for new oppurtunities to get into the tech industry and learn much more.
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
