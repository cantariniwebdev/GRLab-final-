import { Link } from "react-router-dom";
import {
  FaClock,
  FaCalendarDays,
} from "react-icons/fa6";
import AnimationScroll from "./AnimationScroll";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(window.scrollTo(0, 0));
  };
  return (
    <footer className="footer">
      <AnimationScroll animationClass="line" visibleClass="down"></AnimationScroll>
      <AnimationScroll animationClass="footer-slice" visibleClass="down">
        <div className="footer-logo">
          <Link to="/" onClick={scrollToTop}>GR Lab.</Link>
          <p>Dr. Germán Rearte M.P. 3407</p>
        </div>
        <div className="useful">
          <h2>Enlaces útiles</h2>
          <Link to="/contact">Extracciones a domicilio</Link>
          <Link to="/faqs" state={{ openId: 2 }}>Mutuales</Link>
        </div>
        <div className="footer-contact">
          <h2>Horarios de atención</h2>
          <p>
            <FaClock className="form-icon" />
            Lunes a Viernes: 8-13hs / 17-19:30hs
          </p>
          <p>
            <FaCalendarDays className="form-icon" />
            Sábados y Domingos: Cerrado
          </p>
        </div>
      </AnimationScroll>
    </footer>
  );
};

export default Footer;
