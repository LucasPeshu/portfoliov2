import React from 'react';

const TechCard = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-800 shadow-lg rounded-lg p-4 w-40 h-40 transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-sky-500">
      <Icon className="h-12 w-12 text-white mb-2 transition-transform transform hover:rotate-12" />
      <h2 className="text-lg font-semibold text-gray-300 text-center">{title}</h2>
    </div>
  );
};

export default TechCard;
