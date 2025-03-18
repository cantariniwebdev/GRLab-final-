import { Link } from "react-router-dom";
import image5 from "../assets/analisisAnalisis.avif";
import AnimationScroll from "./AnimationScroll";

const AnalisisContent = () => {
  return (
    <div className="areas-content">
      <AnimationScroll animationClass="areas-text" visibleClass="down">
        <p>
          En GR Lab. hacemos los análisis clínicos que los médicos necesitan
          para llevar a cabo sus diagnósticos. Realizamos todas las prácticas de
          la rutina bioquímica, mientras que los estudios especiales son
          derivados a un laboratorio de referencia, de alta complejidad.
        </p>
        <AnimationScroll animationClass="areas-pic" visibleClass="center">
          <img src={image5} alt="" />
        </AnimationScroll>
      </AnimationScroll>

      <AnimationScroll animationClass="areas-cuadro" visibleClass="center">
        <h2>Areas cubiertas</h2>
        <ul>
          <li>Hematología y Hemostasia</li>
          <li>Química clínica</li>
          <li>Bacteriología</li>
          <li>Parasitología</li>
          <li>Micología</li>
          <li>Virología</li>
          <li>Endocrinología</li>
          <li>Inmunología</li>
          <li>Marcadores tumorales</li>
          <li>Toxicología</li>
          <li>Estudios metabólicos</li>
        </ul>
        <div className="action-btn">
          <Link to="/contact">Pedir cita</Link>
        </div>
      </AnimationScroll>
    </div>
  );
};

export default AnalisisContent;
