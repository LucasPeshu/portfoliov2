import Container from "./Container";
import Button from "./Button";

function Inicio() {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/diadzh30o/video/upload/v1727665986/Portfolio/ca8czcramh3m0ey6b4sz.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-90 z-10"></div>

      <Container>
        <div className="text-white text-center flex flex-col items-center justify-center py-28 gap-3 relative z-20">
          <div className="font-permanent-marker text-3xl text-green-500 font-extrabold sm:text-4xl lg:text-5xl">
            ¡Bienvenido a mi web!
          </div>
          <div className="text-3xl font-semibold">Software Dev. 🧑‍💻</div>
          <div className="flex pt-2 gap-4">
            <Button
              text="🔗 Descargar CV"
              link="https://drive.google.com/uc?export=download&id=1eScaFkAHO2XajiuQ0FOmdVvr2CriHzKb"
            ></Button>
            <Button
              text="Linkedin"
              link="https://www.linkedin.com/in/luucaas-pereira-da-silva/"
            ></Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Inicio;
