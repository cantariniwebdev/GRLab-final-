import AnimationScroll from "./AnimationScroll";

const FaqHeader = () => {
  return (
    <div className="faq-header">
      <AnimationScroll as="section" animationClass="section" visibleClass="down">
        <h1>Preguntas frecuentes</h1>
      </AnimationScroll>
    </div>
  )
}

export default FaqHeader