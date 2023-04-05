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
              Information Systems Graduate
            </h2>
          </div>
          <div
            className="mt-2 md:mt-8 max-w-xl mx-auto p-4 rounded-lg w-full"
            id="about"
          >
            <h3 className="text-xl font-medium">About</h3>
            <p className="text-justify indent-8 hyphens-auto">
              I am an Information Systems fresh graduate with concentration on
              Enterprise Applications based in Indonesia. A self-taught web
              developer/programmer looking to get new opportunities to work and
              learn.
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
