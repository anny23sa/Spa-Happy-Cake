import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaBirthdayCake } from 'react-icons/fa';

const Navbarr = () => {
  return (
    <Navbar
      bg="danger" variant="dark">
      <Container className="justify-content-between">

        <div>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <FaHome />  Home
          </Link>

          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <FaEnvelope />Contacto
          </Link>
        </div>
        <div className="d-flex align-items-center text-white">
          HAppy Cake <FaBirthdayCake className="ms-2" />
        </div>
      </Container>
    </Navbar>
  );
};
export default Navbarr;


