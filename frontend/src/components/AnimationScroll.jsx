import { useInView } from "react-intersection-observer";

const AnimationScroll = ({
  children,
  animationClass,
  threshold = 0.2,
  triggerOnce = true,
  as: Element = "div",
  visibleClass = "visible",
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <Element
      ref={ref}
      className={`${animationClass} ${inView ? visibleClass : ""}`}
    >
      {children}
    </Element>
  );
};

export default AnimationScroll;
