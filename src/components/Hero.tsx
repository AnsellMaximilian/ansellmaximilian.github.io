import hero from "../assets/hero.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <article className="text-white p-4 min-h-[16rem] mt-16">
      <div className="relative">
        <img src={hero} className="blur-sm brightness-50" />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full top-0 flex flex-col justify-center"
        >
          <div className="text-center max-w-xl mx-auto w-full">
            <h1 className="text-3xl font-semibold">Ansell Maximilian</h1>
            <h2 className="text-xl">Information Systems Graduate</h2>
          </div>
          <div
            className="mt-8 max-w-xl mx-auto p-4 rounded-lg w-full"
            id="about"
          >
            <h3 className="text-xl font-medium">About</h3>
            <p>
              I am an Information Systems fresh graduate with concentration on
              Enterprise Applications based in Indonesia. A self-taught web
              developer/prgrammer looking to get new opportunities and work to
              learn.
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
