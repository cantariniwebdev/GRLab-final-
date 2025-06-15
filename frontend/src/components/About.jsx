import image6 from "../assets/about.avif";
import AnimationScroll from "./AnimationScroll";


const About = () => {
  return (
    <div className="about">
      <AnimationScroll animationClass="about-text" visibleClass="down"> 
        <h2>¿Quienes somos?</h2>
        <p>
        GR Lab es un laboratorio de análisis clínicos con una trayectoria de 30 años, comprometido con la excelencia en el diagnóstico médico. Desde su fundación, ha trabajado con tecnología de vanguardia.
        </p>
        <p>
        Desde sus inicios, GR Lab se ha enfocado en brindar un servicio eficiente, seguro y accesible a la comunidad. Con una infraestructura moderna y procesos rigurosos de control de calidad, el laboratorio se ha convertido en un referente en el sector de la salud.
        Sú misión es contribuir al bienestar de sus pacientes, proporcionando diagnósticos confiables que apoyen la labor de médicos y especialistas.
        </p>
      </AnimationScroll>
      <AnimationScroll animationClass="about-pic" visibleClass="center" >
        <img src={image6} alt="" />
      </AnimationScroll>
    </div>
  );
};

export default About;
