import { Link } from "react-router-dom";
import { cardsData } from "../utils/cardsData";
import AnimationScroll from "./AnimationScroll";

const Cards = () => {
  return (
    <div className="cards-container">
      <AnimationScroll as="h2" animationClass="card-head" visibleClass="down">
        Pruebas más solicitadas
      </AnimationScroll>

      <AnimationScroll animationClass="cards-cont" visibleClass="down">
        {cardsData.map(({ id, pic, title, text }) => (
          <AnimationScroll animationClass="tarjeta"  visibleClass="down" key={id}>
          <div className="card" >
            <div className="card-img">
              <img src={pic} alt="" />
            </div>
            <div className="card-content">
              <div className="card-heading">
                <h2>{title}</h2>
              </div>
              <div className="card-text">
                <p>{text}</p>
              </div>
              <div className="action-btn">
                <Link to="/contact">Saber más</Link>
              </div>
            </div>
          </div>
          </AnimationScroll>
        ))}
      </AnimationScroll>
    </div>
  );
};

export default Cards;
