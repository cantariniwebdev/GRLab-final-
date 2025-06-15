import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimationScroll from "./AnimationScroll";

const FaqContainer = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const location = useLocation();

  const refs = useRef({});

  const handleClick = (id) => {
    setAccordionOpen(accordionOpen === id ? null : id);
  };

  useEffect(() => {
    if (location.state?.openId) {
      const idToOpen = location.state.openId;
      setAccordionOpen(idToOpen);
      setTimeout(() => {
        refs.current[idToOpen]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); 
    }
  }, [location.state]);

  const accordionData = [
    {
      id: 1,
      title: "¿CUÁL ES EL HORARIO DE ATENCIÓN?",
      content: (
        <>
          <p className="paragraph">
            El horario de atención general es de lunes a viernes de <strong>8:00</strong> a <strong>13:00</strong> y de <strong>17:00</strong> a <strong>19:30</strong> horas.
          </p>
          <p className="paragraph">
            Las extracciones se realizan de <strong>8:00</strong> a <strong>11:00</strong> horas y para las extracciones a domicilio debe solicitar turno. Haga click <Link to="/contact">Aquí</Link> para pedir su cita.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "¿ATIENDEN POR OBRA SOCIAL?",
      content: (
        <>
          <p className="paragraph">
            Si. Consulte aquí debajo el listado de las obras sociales atendidas:
          </p>
          <ul className="faq-list">
            <li>APROSS</li>
            <li>PREVENCION</li>
            <li>FEDERADA SALUD</li>
            <li>AVALIAN (ACA SALUD)</li>
            <li>SANCOR SALUD</li>
            <li>PAMI</li>
            <li>OSPRERA</li>
            <li>OSPECOR</li>
            <li>NOBIS</li>
            <li>OSCCPTAC (CHOFERES Y CAMIONEROS)</li>
            <li>LUZ Y FUERZA (OSFATLYF)</li>
            <li>VETERANOS DE GUERRA</li>
            <li>SWISS MEDICAL</li>
            <li>SERVIRED (OSDOP - SADOP)</li>
            <li>OSPIM</li>
            <li>OSPIL</li>
            <li>OSPF</li>
            <li>OSPES</li>
            <li>OSPEDYC</li>
            <li>ITERMEDICINA (OSAM - OSPACA)</li>
            <li>IOSFA</li>
            <li>JERARQUICOS SALUD</li>
            <li>ENSALUD</li>
            <li>DOCTHOS</li>
            <li>CPCE</li>
            <li>CAJA NOTARIAL</li>
            <li>BOREAL</li>
            <li>DASPU</li>
          </ul>
          <p className="paragraph">
            <strong>*Consultar vigencia y sistema de autorizaciones.</strong>
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "¿ES NECESARIO SACAR TURNO PREVIAMENTE?",
      content: (
        <>
          <p className="paragraph">
            No. Se atiende de acuerdo al orden de llegada al laboratorio.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "¿QUÉ SIGNIFICA HACER AYUNO PREVIO?",
      content: (
        <>
          <p className="paragraph">
            Dependiendo del análisis, a veces es necesario hacer ayuno previo,
            lo cual quiere decir que no puede ingerir alimentos ni bebidas desde
            la noche anterior a la extracción. Sólo se puede tomar agua (no
            puede ser mate, ni té sin azúcar, ni soda, etc. sólo agua de la
            canilla o mineral).
          </p>
          <p className="paragraph">
            Según la práctica solicitada son necesarias determinada cantidad de
            horas de ayuno. Generalmente para los análisis de sangre son
            necesarias 8 horas de ayuno previo.
          </p>
          <p className="paragraph">
            En el caso de que en la orden figuren estudios como colesterol
            total, triglicéricos, colesterol HDL, colesterol LDL, lipidograma o
            lípidos totales deberá asistir al laboratorio con 12 horas de ayuno.
          </p>
          <p className="paragraph">
            Si tiene dudas en cuanto a la preparación para algún estudio, por
            favor comuníquese con nosotros para recibir las instrucciones.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "¿CÓMO PUEDO SABER EL PRECIO DE LOS ANÁLISIS?",
      content: (
        <>
          <p className="paragraph">
            Usted puede concurrir al establecimiento con la orden médica,
            solicitar el presupuesto y las indicaciones para la recolección de
            muestra en caso de orina, materia fecal, etc.
          </p>
          <p className="paragraph">
            También puede solicitar presupuesto enviando una foto del pedido
            médico al número de WhatsApp <strong>3547-631868</strong> o realizar
            una llamada telefónica al <strong>3547-492763</strong>.
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: "¿QUÉ DEBO LLEVAR EL DÍA DE LA EXTRACCIÓN?",
      content: (
        <>
          <p className="paragraph">
            <strong>Pacientes particulares:</strong>
          </p>
          <ol className="faq-list">
            <li>Si tiene, pedido médico.</li>
            <li>Ayuno previo correspondiente.</li>
            <li>Muestras necesarias según la solicitud de análisis.</li>
          </ol>

          <p className="paragraph">
            <strong>Pacientes con obra social:</strong>
          </p>
          <ol className="faq-list">
            <li>
              Pedido médico con fecha actual (tienen validez de 30 días - EXCEPTO PAMI CON VALIDEZ DE 150 DÍAS), diagnóstico, sello y firma del médico solicitante.
            </li>
            <li>
              Credencial de medicina prepaga u obra social (consulte aquí los requerimientos específicos y obras sociales atendidas).
            </li>
            <li>Ayuno previo correspondiente</li>
            <li>Muestras necesarias según la solicitud de análisis.</li>
          </ol>
        </>
      ),
    },
    {
      id: 7,
      title: "¿QUÉ DEBO HACER CON LOS MEDICAMENTOS QUE CONSUMO NORMALMENTE?",
      content: (
        <>
          <p className="paragraph">
            Seguir la prescripción médica. Los medicamentos que deben tomarse la mañana del estudio, hacerlo después de la extracción.
          </p>
        </>
      ),
    },
    {
      id: 8,
      title: "¿ES NECESARIO IR AL LABORATORIO PARA RETIRAR LOS RESULTADOS?",
      content: (
        <>
          <p className="paragraph">
            No. Los resultados pueden enviarse vía e-mail o por WhatsApp, previo acuerdo con el personal de laboratorio.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="accordion-container">
      <div className="accordion">
        {accordionData.map(({ id, title, content }) => (
          <AnimationScroll
            animationClass="accordion-item"
            visibleClass="down"
            key={id}
          >
            <div
              ref={(el) => (refs.current[id] = el)}
              className="accordion-title"
              onClick={() => handleClick(id)}
            >
              <div>
                <h2>{title}</h2>
              </div>
              <span className="icon-faq">
                {accordionOpen === id ? "-" : "+"}
              </span>
            </div>
            <div
              className={`accordion-content ${
                accordionOpen === id ? "content-show" : ""
              }`}
            >
              <div className="p-faq">{content}</div>
            </div>
          </AnimationScroll>
        ))}
      </div>
    </div>
  );
};

export default FaqContainer;
