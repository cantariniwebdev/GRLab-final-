import AnimationScroll from "./AnimationScroll";

const AnalisisHeader = () => {
  return (
    <div className="analisis-header">
      <AnimationScroll as="section" animationClass="section" visibleClass="down">
        <h1>Análisis</h1>
      </AnimationScroll>
    </div>
  );
};

export default AnalisisHeader;
