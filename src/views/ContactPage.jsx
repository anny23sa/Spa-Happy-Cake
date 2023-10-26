import { Container } from "react-bootstrap";

import Contact from "../components/Contact";
const ContactPage = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4 d-flex justify-content-center">Cuentanos, ¿En que te podemos ayudar?</h1>
      <Contact />
    </Container>
  );
};
export default ContactPage;