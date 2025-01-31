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
  SiNestjs,
  SiTypescript,
} from "react-icons/si";

const HorizontalCard = ({ title, description, imageUrl, url, icons }) => {
  return (
    <div className="mb-4 bg-neutral-900 shadow-xl rounded-lg">
      <img className="w-full rounded-t-lg" src={imageUrl} alt={title} />
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="py-2 text-lg text-gray-300">{description}</p>
        {/* Sección de íconos */}
        <div className="flex justify-center space-x-4 my-2 text-2xl">
          {icons.react && <SiReact className="text-blue-500" />}
          {icons.nestjs && <SiNestjs className="text-red-500" />}
          {icons.django && <SiDjango className="text-green-500" />}
          {icons.redux && <SiRedux className="text-purple-500" />}
          {icons.docker && <SiDocker className="text-blue-300" />}
          {icons.tailwind && <SiTailwindcss className="text-teal-500" />}
          {icons.html && <SiHtml5 className="text-orange-500" />}
          {icons.css && <SiCss3 className="text-blue-500" />}
          {icons.github && <SiGithub className="text-gray-500" />}
          {icons.javascript && <SiJavascript className="text-yellow-500" />}
          {icons.typescript && <SiTypescript className="text-blue-500" />}
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
