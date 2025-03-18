import AnimationScroll from "./AnimationScroll";

const ServicesHeader = () => {
  return (
    <div className="services-header">
    <AnimationScroll as="section" animationClass="section" visibleClass="down">
        <h1>Servicios</h1>
      </AnimationScroll>
  </div>
  )
}

export default ServicesHeader