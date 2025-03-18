import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHouse, FaFlaskVial, FaSyringe } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const pages = [
    { id: 1, title: "Inicio", path: "/", icon: <FaHouse className="icono" /> },
    {
      id: 2,
      title: "Servicios",
      path: "/services",
      icon: <FaFlaskVial className="icono" />,
    },
    {
      id: 4,
      title: "Análisis",
      path: "/analisis",
      icon: <FaSyringe className="icono" />,
    },
    {
      id: 5,
      title: "Preguntas frecuentes",
      path: "/faqs",
      icon: <FaQuestionCircle className="icono" />,
    },
  ];

  const pagesList = pages.map(({ id, title, path, icon }) => (
    <li key={id}>
      <NavLink to={path} onClick={handleClose}>
        {icon}
        {title}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <nav className={`navbar ${scrolling ? "navbar-scrolled" : ""}`}>
        <div className="logo">
          <Link to="/" onClick={scrollToTop}>
            GR Lab.
          </Link>
        </div>
        <div className={`nav-elements ${isOpen ? "open" : ""}`}>
          <div className="logo2" onClick={handleClose}>
            <Link to="/">GR Lab.</Link>
          </div>
          <ul>{pagesList}</ul>
          <div className="action_btn" onClick={handleClose}>
            <Link to="/contact">Contacto</Link>
          </div>
        </div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <RiMenu3Fill /> : <RiCloseFill />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
