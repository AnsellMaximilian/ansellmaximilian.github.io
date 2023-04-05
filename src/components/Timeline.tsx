import { motion } from "framer-motion";
import { FC } from "react";

interface TimelineItemProps {
  time: string;
  description: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({ time, description }) => {
  return (
    <li className="flex gap-4 items-center">
      <div className="text-xs px-2 py-1 bg-white text-gray-900 font-bold rounded-xl">
        {time}
      </div>
      <div className="bg-gray-400 h-[1px] flex-1"></div>
      <div className="text-xs md:text-base">{description}</div>
    </li>
  );
};

export const Timeline = () => {
  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-4 mx-4 rounded-lg"
      id="timeline"
    >
      <h2 className="text-center text-2xl font-semibold uppercase">Timeline</h2>
      <div className="mt-4">
        <h3 className="italic text-xl mb-2">Education</h3>
        <ul className="flex gap-2 flex-col">
          <TimelineItem
            time="2015 - 2018"
            description="SMA Perguruan Buddhi - IPA"
          />
          <TimelineItem
            time="2018 - 2022"
            description="Information Systems - Bachelor's - Matana University"
          />
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="italic text-xl mb-2">Work</h3>
        <ul className="flex gap-2 flex-col">
          <TimelineItem
            time="2022"
            description="Bengkel Sogo Jaya AC, Intern Developer"
          />
          <TimelineItem
            time="2020 - Present"
            description="Rumah Sehat, System Developer"
          />
        </ul>
      </div>
      <div className="flex justify-end mt-4">
        <a
          href="/Ansell Maximilian - Resume.pdf"
          className="cta px-3 py-1 rounded-lg font-bold"
          target="_blank"
        >
          View Resume
        </a>
      </div>
    </motion.article>
  );
};
