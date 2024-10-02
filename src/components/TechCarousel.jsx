import React, { useState } from 'react';
import TechCard from './TechCard'; // Importando TechCard
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
} from 'react-icons/si';

const techs = [
  { title: 'React', Icon: SiReact },
  { title: 'Django', Icon: SiDjango },
  { title: 'Redux', Icon: SiRedux },
  { title: 'Docker', Icon: SiDocker },
  { title: 'TailwindCSS', Icon: SiTailwindcss },
  { title: 'HTML', Icon: SiHtml5 },
  { title: 'CSS', Icon: SiCss3 },
  { title: 'GitHub', Icon: SiGithub },
  { title: 'JavaScript', Icon: SiJavascript },
  { title: 'Python', Icon: SiPython },
];

const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + techs.length) % techs.length);
  };

  const getCardsToDisplay = () => {
    const cardsToDisplay = [];
    // Agregar las tarjetas a la izquierda (3)
    for (let i = 3; i > 0; i--) {
      cardsToDisplay.unshift(techs[(currentIndex - i + techs.length) % techs.length]);
    }
    // Agregar la tarjeta central (1)
    cardsToDisplay.push(techs[currentIndex]);
    // Agregar las tarjetas a la derecha (3)
    for (let i = 1; i <= 3; i++) {
      cardsToDisplay.push(techs[(currentIndex + i) % techs.length]);
    }
    return cardsToDisplay;
  };

  const cardsToDisplay = getCardsToDisplay();

  return (
    <div className="flex flex-col items-center justify-center p-8 relative w-full overflow-hidden">
      <div className="flex justify-center mb-4">
        {cardsToDisplay.map((tech, index) => (
          <div
            key={index}
            className={`transition-shadow duration-300 mx-2 hover:shadow-xl`}
          >
            <TechCard title={tech.title} Icon={tech.Icon} />
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-4">
        <button
          className="bg-neutral-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-neutral-700 transition duration-300"
          onClick={handlePrev}
        >
          Anterior
        </button>
        <button
          className="bg-neutral-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-neutral-700 transition duration-300"
          onClick={handleNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TechCarousel;
