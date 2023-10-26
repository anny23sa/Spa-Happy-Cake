import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar el correo electrónico y la descripción a través de una solicitud HTTP

    // Después de enviar el formulario, puedes restablecer el estado y mostrar un mensaje de éxito
    setEmail("");
    setDescription("");
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label d-flex justify-content-center">
              Correo:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label d-flex justify-content-center">
              Descripción
            </label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-danger mx-auto">
            Enviar
          </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;



