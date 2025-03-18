import { Link } from "react-router-dom";
import Whatsapp from "./Whatsapp";
import AnimationScroll from "./AnimationScroll";

const Header = () => {
  return (
    <div className="header">
      <AnimationScroll as="section" animationClass="section" visibleClass="down">
        <h1>Extracciones a domicilio</h1>
        <p>
          Para aquellas personas con dificultades para trasladarse, o que
          prefieren que la toma de muestra se haga en la comodidad de su casa,
          ponemos a su disposición el servicio de extracciones a domicilio.
        </p>
        <div className="action-btn">
          <Link to="/contact">Pedir cita</Link>
        </div>
      </AnimationScroll>
      <Whatsapp />
    </div>
  );
};

export default Header;
