import { Link } from "react-router-dom";
import image from "../assets/analisis.avif";
import image2 from "../assets/factor.avif";
import image3 from "../assets/instituciones.avif";
import image4 from "../assets/plasma.avif";
import AnimationScroll from "./AnimationScroll";

const ServicesContent = () => {
  return (
    <div className="services-container">
      <AnimationScroll animationClass="services-content" visibleClass="fade">
        <AnimationScroll animationClass="services-text" visibleClass="down">
          <h2>Análisis clínicos</h2>
          <p>
            Realizamos extracciones de sangre a pacientes ambulatorios. Además,
            nos dedicamos a examinar otras muestras biológicas tales como:
          </p>
          <ul className="faq-list">
            <li>Orina</li>
            <li>Materia fecal</li>
            <li>Saliva</li>
            <li>Otros</li>
          </ul>
          <p>
            En GR Lab. trabajamos de manera seria y a conciencia para entregar
            resultados confiables y certeros. El laboratorio de análisis es una
            herramienta fundamental para hacer un diagnóstico contundente.
          </p>
          <div className="action-btn">
            <Link to="/contact">Pedir cita</Link>
          </div>
        </AnimationScroll>
        <AnimationScroll animationClass="services-pic" visibleClass="center">
          <img src={image} alt="" />
        </AnimationScroll>
      </AnimationScroll>

      <AnimationScroll animationClass="services-content" visibleClass="fade">
        <AnimationScroll animationClass="services-pic" visibleClass="center">
          <img src={image2} alt="" />
        </AnimationScroll>
        <AnimationScroll animationClass="services-text" visibleClass="down">
          <h2>Grupo y factor sanguíneo</h2>
          <p>
            En GR Lab. realizamos análisis de grupo y factor sanguíneo en forma
            inmediata. Esto quiere decir, que en el mismo momento en que
            concurre al establecimiento, toman la muestra y en 5 minutos se
            lleva los resultados. Para llevar a cabo este estudio, no hace falta
            realizar ayuno previo y puede asistir al laboratorio por la mañana o
            por la tarde, dentro del horario de atención.
          </p>
          <p>
            <strong>Para tener en cuenta:</strong> Uno de los requisitos para
            tramitar el carnet de conductor en la ciudad de Córdoba, es el
            comprobante de grupo y factor sanguíneo firmado por un bioquímico.
          </p>
          <div className="action-btn">
            <Link to="/contact">Pedir cita</Link>
          </div>
        </AnimationScroll>
      </AnimationScroll>
      <AnimationScroll animationClass="services-content" visibleClass="fade">
        <AnimationScroll animationClass="services-text" visibleClass="down">
          <h2>Atención en instituciones de salud</h2>
          <p>
            GR Lab. brinda asistencia en centros de cuidados especiales tal como
            hogares geriátricos, residencias para personas con capacidades
            diferentes, etc.
          </p>
          <p>
            Para solicitar que concurramos a su establecimiento, debe
            comunicarse con el laboratorio para acordar la modalidad y
            frecuencia de atención.
          </p>
          <div className="action-btn">
            <Link to="/contact">Pedir cita</Link>
          </div>
        </AnimationScroll>
        <AnimationScroll animationClass="services-pic" visibleClass="center">
          <img src={image3} alt="" />
        </AnimationScroll>
      </AnimationScroll>
      <AnimationScroll animationClass="services-content" visibleClass="fade">
        <AnimationScroll animationClass="services-pic" visibleClass="center">
          <img src={image4} alt="" />
        </AnimationScroll>
        <AnimationScroll animationClass="services-text" visibleClass="down">
          <h2>Plasma rico en plaquetas</h2>
          <p>
            En GR Lab realizamos el procedimiento de Plasma Rico en Plaquetas
            (PRP) de forma rápida y segura. Esto significa que, al asistir a
            nuestro laboratorio, tomamos la muestra de sangre, la procesamos y
            en poco tiempo estará lista para su aplicación. El procedimiento es
            sencillo, minimamente invasivo y no requiere ayuno previo. Puede
            acudir al laboratorio en horario de atención, tanto por la mañana
            como por la tarde.
          </p>
          <p>
            El PRP es ideal para tratamientos de regeneración celular,
            rejuvenecimiento de la piel, recuperación de lesiones y
            fortalecimiento capilar, brindando resultados naturales y efectivos.
          </p>
          <div className="action-btn">
            <Link to="/contact">Pedir cita</Link>
          </div>
        </AnimationScroll>
      </AnimationScroll>
    </div>
  );
};

export default ServicesContent;
