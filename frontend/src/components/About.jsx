import image6 from "../assets/about.avif";
import AnimationScroll from "./AnimationScroll";


const About = () => {
  return (
    <div className="about">
      <AnimationScroll animationClass="about-text" visibleClass="down"> 
        <h2>¿Quienes somos?</h2>
        <p>
        GR Lab es un laboratorio de análisis clínicos con una trayectoria de 10 años, comprometido con la excelencia en el diagnóstico médico. Desde su fundación, ha trabajado con tecnología de vanguardia y un equipo de especialistas altamente capacitados para ofrecer resultados precisos y confiables.
        </p>
        <p>
        Desde sus inicios, GR Lab se ha enfocado en brindar un servicio eficiente, seguro y accesible a la comunidad. Con una infraestructura moderna y procesos rigurosos de control de calidad, el laboratorio se ha convertido en un referente en el sector de la salud.
        Sú equipo está conformado por profesionales de la salud que garantizan un trato humano y personalizado. Su misión es contribuir al bienestar de sus pacientes, proporcionando diagnósticos confiables que apoyen la labor de médicos y especialistas.
        </p>
      </AnimationScroll>
      <AnimationScroll animationClass="about-pic" visibleClass="center" >
        <img src={image6} alt="" />
      </AnimationScroll>
    </div>
  );
};

export default About;
