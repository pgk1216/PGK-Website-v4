import React from "react";
import ProjectItem from "@/components/ProjectItem";
import defaultImage from "@/public/thumbnails/download.png";
import { motion } from "framer-motion";

import activityShowdownThumbnail from "@/public/thumbnails/activity_showdown_thumbnail.png";
import pgklosetThumbnail from "@/public/thumbnails/pgkloset_thumbnail.png";
import cubechanixThumbnail from "@/public/thumbnails/cubechanix_thumbnail.png";
import currencyverterThumbnail from "@/public/thumbnails/currencyverter_thumbnail.png";
import threemorethumbnail from "@/public/thumbnails/3more_logo.jpg";

const Projects = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 1,
      }}
      viewport={{ once: true }}
      id="projects"
      className="w-full"
    >
      <div className="w-[80%] lg:max-w-[1240px] mx-auto px-2 py-32">
        <h2 className="py-4 text-teal-700 text-center lg:text-left">
          Some projects I&apos;ve worked on...
        </h2>
        <div className="grid md:grid-cols-3 gap-16 py-4">
          <ProjectItem
            title="3More"
            backgroundImage={threemorethumbnail}
            projectUrl="https://apps.apple.com/us/app/3more/id6464441506"
            tech="React Native // Expo // Firebase"
          />
          <ProjectItem
            title="Corner Cuts Appointments"
            backgroundImage={defaultImage}
            projectUrl="https://github.com/pgk1216/Corner-Cuts"
            tech="React.js // Node.js // MongoDB"
          />
          <ProjectItem
            title="PGKloset.com"
            backgroundImage={pgklosetThumbnail}
            projectUrl="https://github.com/pgk1216/PGKloset"
            tech="Python // Django"
          />
          <ProjectItem
            title="PoofDodger"
            backgroundImage={defaultImage}
            projectUrl="https://github.com/pgk1216/PoofDodger"
            tech="Java"
          />
          <ProjectItem
            title="Activity Showdown"
            backgroundImage={activityShowdownThumbnail}
            projectUrl="https://gitlab.eecs.umich.edu/kevinzhe/outdoor-tic-tac-toe"
            tech="HTML & CSS // JavaScript // Vue.js"
          />
          <ProjectItem
            title="Currencyverter"
            backgroundImage={currencyverterThumbnail}
            projectUrl="https://github.com/pgk1216/Currencyverter"
            tech="Java // Swing"
          />
          <ProjectItem
            title="Cubechanix"
            backgroundImage={cubechanixThumbnail}
            projectUrl="https://github.com/pgk1216/Cubechanix"
            tech="Unity3D // C#"
          />
        </div>
      </div>
      <div className="mt-10 border-b-4 border-gray-700/10"></div>
    </motion.div>
  );
};

export default Projects;
