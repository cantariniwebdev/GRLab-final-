import AnimationScroll from "./AnimationScroll";
const ContactHeader = () => {
  return (
    <div className="contact">
     <AnimationScroll as="section" animationClass="section" visibleClass="down">
        <h1>Contacto</h1>
      </AnimationScroll>
    </div>
  );
};

export default ContactHeader;
