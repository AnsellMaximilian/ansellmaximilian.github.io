import rmpos from "../assets/projects/rumah-sehat-pos.png";
import sjpos from "../assets/projects/sogo-jaya-pos.png";
import rmcm from "../assets/projects/rumah-sehat-cm.png";
import { Project } from "./Project";
import { motion } from "framer-motion";

export const ProjectList = () => {
  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-4"
      id="projects"
    >
      <h2 className="text-center text-2xl font-semibold uppercase">Projects</h2>
      <div className="flex gap-8 flex-wrap justify-center mt-8">
        <Project
          title="Rumah Sehat POS"
          description="Point of Sale System"
          image={rmpos}
          githubLink="https://github.com/AnsellMaximilian/rumah-sehat-client"
          techs={["react", "nodejs", "express", "materialui"]}
        />
        <Project
          title="Sogo Jaya POS"
          description="Point of Sale System"
          image={sjpos}
          githubLink="https://github.com/AnsellMaximilian/car-workshop-service-system"
          externalLink="https://bengkelsogojaya.com/"
          techs={["laravel", "tailwind", "php", "mysql"]}
        />
        <Project
          title="Customer Management"
          description="Customer Management System"
          image={rmcm}
          githubLink="https://github.com/AnsellMaximilian/react-firebase-customer-manager"
          externalLink="https://rumah-sehat-pelanggan.netlify.app/"
          techs={["firebase", "react", "tailwind"]}
        />
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/AnsellMaximilian?tab=repositories"
          className="bg-white text-black px-8 py-2 rounded-3xl font-bold hover:bg-gray-100"
          target="_blank"
        >
          More on Github
        </a>
      </div>
    </motion.article>
  );
};
