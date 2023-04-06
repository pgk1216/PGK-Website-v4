import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImage,
  tech,
  projectUrl,
}: {
  title: string;
  backgroundImage: StaticImageData;
  tech: string;
  projectUrl: string;
}) => {
  return (
    <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-teal-600">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImage}
        alt="/"
        width={300}
        height={300}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center text-sm">{tech}</p>
        <Link href={projectUrl} target="_blank">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            View Project
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
