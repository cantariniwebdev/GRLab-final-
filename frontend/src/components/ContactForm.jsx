import { Link } from "react-router-dom";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Form from "./Form";
import AnimationScroll from "./AnimationScroll";


const ContactForm = () => {
  return (
    <div className="form-container">
      <div className="address">
        <aside>
          <AnimationScroll animationClass="address-head" visibleClass="down">
          <h2 className="heading">Consultas</h2>
          <p className="paragraph">
          Comuníquese con nuestro equipo para cualquier consulta, programación de citas o extracciones a domicilio. Tu salud es nuestra prioridad y estamos a solo una llamada o mensaje de distancia.
          </p>
          </AnimationScroll>
          <AnimationScroll animationClass="line" visibleClass="down"></AnimationScroll>
          <AnimationScroll animationClass="contact-links" visibleClass="down">
          <h3>Córdoba</h3>
          <Link
            to="https://www.google.com/maps/place/Lab+An%C3%A1lisis+Clinicos+Dr.Rearte/@-31.8184633,-64.2867632,17z/data=!4m15!1m8!3m7!1s0x95cd5455de8d9251:0xd19d9109fefbddf8!2sAv.+Velez+Sarsfield+949,+X5121+Despe%C3%B1aderos,+C%C3%B3rdoba,+Argentina!3b1!8m2!3d-31.8184633!4d-64.2841883!16s%2Fg%2F11l7612xnb!3m5!1s0x95cd559c65f425f3:0x784b71b9373c9afd!8m2!3d-31.8184972!4d-64.2841921!16s%2Fg%2F11tp82kqff?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot className="form-icon" /> Av. Velez Sarsfield 949,
            X5121 Despeñaderos
          </Link>
          <Link to="tel:+543547492763" target="_blank" rel="noopener noreferrer">
            <FaPhone className="form-icon" /> 03547-49-2763
          </Link>
          <Link
                    to="https://wa.me/+5493547631868"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp className="form-icon" />3547-63-1868
                  </Link>
          <Link to="mailto:grearte1970@hotmail.com" target="_self" rel="noopener noreferrer">
            <FaEnvelope className="form-icon" /> grearte1970@hotmail.com
          </Link>
          </AnimationScroll>
        </aside>
      </div>

      <AnimationScroll animationClass="formulario" visibleClass="center">
        <h2>Envíanos un mensaje</h2>
       <Form />
      </AnimationScroll>
    </div>
  );
};

export default ContactForm;
