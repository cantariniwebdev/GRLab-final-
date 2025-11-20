import image6 from "../assets/about.avif";
import AnimationScroll from "./AnimationScroll";


const About = () => {
  return (
    <div className="about">
      <AnimationScroll animationClass="about-text" visibleClass="down"> 
        <h2>¿Quienes somos?</h2>
        <p>
        Con más de 30 años de trayectoria, el Laboratorio de Análisis Clínicos dirigido por el Dr. Germán Rearte, bioquímico especializado, se ha consolidado como una institución referente en el diagnóstico confiable y de alta precisión. Desde sus inicios, el laboratorio ha mantenido un compromiso inquebrantable con la calidad, incorporando avances tecnológicos y métodos actualizados para ofrecer resultados exactos y oportunos a cada paciente.
        </p>
        <p>
        A lo largo de tres décadas, el laboratorio no solo ha brindado servicios diagnósticos, sino que también ha construido una relación de confianza con la comunidad, basada en la transparencia y el profesionalismo. Gracias a la visión del Dr. Germán Rearte, la institución continúa creciendo y adaptándose a las necesidades actuales, reafirmando su compromiso con la salud y el bienestar de sus pacientes.
        </p>
      </AnimationScroll>
      <AnimationScroll animationClass="about-pic" visibleClass="center" >
        <img src={image6} alt="" />
      </AnimationScroll>
    </div>
  );
};

export default About;
