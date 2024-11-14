import React from "react";
import HorizontalCard from "./HorizontalCard";

const FeaturedProjects = () => {
  return (
    <div className="pb-8">
      <div className="text-3xl text-center sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-200 pb-4">
        Mis trabajos destacados:
      </div>
      <div className="grid gap-8">
        <HorizontalCard
          title="Hablemos de Belgrano (en desarrollo)"
          description="Creé una web donde el equipo puede gestionar y publicar notas deportivas sobre el Club Belgrano. La plataforma es intuitiva y responsive para ofrecer una experiencia óptima en cualquier dispositivo."
          imageUrl="https://res.cloudinary.com/diadzh30o/image/upload/v1727963296/Portfolio/l4jzjxakgxgkqnjo4o7y.png"
          url="https://github.com/LucasPeshu/HablemosDeBelgrano"
          icons={{
            react: true,
            django: true,
            redux: true,
            docker: false,
            tailwind: true,
            html: false,
            css: false,
            github: true,
            javascript: true,
            python: false,
          }}
        />
        <HorizontalCard
          title="Rescaldani Producciones"
          description=" Este proyecto me permitió aplicar mis habilidades en diseño y desarrollo web para crear una experiencia de usuario que refleja el nivel de detalle y excelencia que Rescaldani Producciones ofrece a sus clientes, destacando sus servicios de montaje de escenarios, iluminación, sonido y efectos especiales para eventos."
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
    </div>
  );
};

export default FeaturedProjects;
