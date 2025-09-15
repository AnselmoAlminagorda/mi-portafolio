import Style from "./Seccion1.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BlurText from "@/TextAnimations/BlurText/BlurText";

export default function Seccion() {
  // 🔹 Definimos la función aquí, antes del return
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section id="inicio" className={Style.Seccion1}>
      <div className={Style.MiSeccion1}>
        <BlurText
          text="ANSELMO ALMERCO"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className={Style.titulo}
        />
        <p className={Style.Parrafo}>
          Bienvenido a mi portafolio personal. Aquí encontrarás información sobre
          mis proyectos, habilidades y cómo contactarme.  
          Desarrollador web con experiencia en React y Next.js.  
          Apasionado por el diseño y la tecnología.  
          Siempre aprendiendo y mejorando.
        </p>

        <div className={Style.ContainerIcons}>
          <a
            href="https://github.com/AnselmoTrade"
            target="_blank"
            className={Style.navLink}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="#contacto" className={Style.navLink}>
            Contáctame
          </a>
        </div>
      </div>

      <div className={Style.HomeImg}>
        <Image
          className={Style.ImgeFont}
          src="/image/PC.JPG"
          alt="Logo FX"
          width={320}
          height={320}
        />
      </div>
    </section>
  );
}
