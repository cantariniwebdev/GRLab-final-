import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });

  const [files, setFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
    event.target.value = null;
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(false);
    setErrorMessage(false);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("content", formData.content);

      files.forEach((file) => {
        data.append("files", file);
      });

      const response = await fetch(
        "https://grlab-final-1.onrender.com/contact",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setSuccessMessage(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          content: "",
        });
        setFiles([]);
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
        type="tel"
        placeholder="Teléfono*"
        required
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        pattern="[0-9]{6,}"
        title="El teléfono debe tener al menos 6 números"
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

      <div className="input-file-wrapper">
        <label className="input-file-label" htmlFor="files">
          Adjuntar archivo
        </label>
        <input
          type="file"
          id="files"
          accept="image/*,application/pdf"
          name="files"
          multiple
          onChange={handleFileChange}
        />
      </div>

      <div className="file-preview">
        {files.map((file, index) => (
          <div key={index} className="file-preview-item">
            {file.name}
            <button
              type="button"
              className="file-remove-btn"
              onClick={() => handleRemoveFile(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {successMessage && (
        <div className="warning">
          <p>Mensaje enviado con éxito!</p>
        </div>
      )}
      {errorMessage && (
        <div className="warning">
          <p>Error al enviar el mensaje</p>
        </div>
      )}
    </form>
  );
};

export default Form;
