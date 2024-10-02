import React from 'react';
import HorizontalCard from './HorizontalCard';

const FeaturedProjects = () => {
  return (
    <div className="pb-8">
      <div className="text-3xl text-center sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-200 pb-4">Mis trabajos destacados:</div>
      <HorizontalCard
        title="Rescaldani Producciones"
        description="Requerían una web para enseñar un poco de su trabajo, así que la desarrollé con React, TailwindCSS, JavaScript, entre otras tecnologías."
        imageUrl="https://res.cloudinary.com/diadzh30o/image/upload/v1727668399/Portfolio/jpgngnm8zxy0evkty2du.png"
        url="https://rescaldani-producciones.vercel.app/"
        icons={{
          react: true,
          django: false,
          redux: false,
          docker: false,
          tailwind: true,
          html: false,
          css: false,
          github: true,
          javascript: true,
          python: false,
        }}
      />
      
    </div>
  );
};

export default FeaturedProjects;