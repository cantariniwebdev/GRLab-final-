import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(false);
    setErrorMessage(false);

    try {
      const response = await fetch("https://grlab-final-1.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          content: "",
        });
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessMessage(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre*"
        required
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Correo electrónico*"
        required
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Teléfono*"
        required
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Consulta*"
        required
        name="content"
        value={formData.content}
        onChange={handleChange}
      ></textarea>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      {successMessage && <div className="warning"><p >Mensaje enviado con éxito!</p></div>}
      {errorMessage &&  <div className="warning"><p > Error al enviar el mensaje</p></div>}
    </form>
  );
};

export default Form;
