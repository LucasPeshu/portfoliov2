import React from "react";

import {
  SiReact,
  SiDjango,
  SiRedux,
  SiDocker,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiPython,
} from "react-icons/si";

const HorizontalCard = ({ title, description, imageUrl, url, icons }) => {
  return (
    <div className="flex flex-col p-2 md:p-4 gap-8 justify-center items-center md:flex-row bg-neutral-900 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="rounded-lg w-full md:w-1/2 lg:w-1/3"
        src={imageUrl}
        alt={title}
      />
      <div className="flex flex-col justify-center text-center md:text-left w-full lg:w-2/3">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="py-2 text-lg text-gray-300">{description}</p>
        {/* Sección de íconos */}
        <div className="flex justify-center md:justify-start space-x-4 my-2 text-2xl">
          {icons.react && <SiReact className="text-blue-500" />}
          {icons.django && <SiDjango className="text-green-500" />}
          {icons.redux && <SiRedux className="text-purple-500" />}
          {icons.docker && <SiDocker className="text-blue-300" />}
          {icons.tailwind && <SiTailwindcss className="text-teal-500" />}
          {icons.html && <SiHtml5 className="text-orange-500" />}
          {icons.css && <SiCss3 className="text-blue-500" />}
          {icons.github && <SiGithub className="text-gray-500" />}
          {icons.javascript && <SiJavascript className="text-yellow-500" />}
          {icons.python && <SiPython className="text-green-500" />}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-lg hover:underline"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default HorizontalCard;
