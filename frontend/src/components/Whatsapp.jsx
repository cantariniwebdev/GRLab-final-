import {Link} from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
  return (
    <div className="telephone">
      <Link
        to="https://wa.me/+5493547631868"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="icon" />
      </Link>
    </div>
  );
};

export default Whatsapp;
