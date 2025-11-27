import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarClinica() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/inicio">
          Bienestar360 Clínica
        </Navbar.Brand>

        {/* BOTÓN MOBILE */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* CONTENIDO */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/inicio">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/servicios">
              Servicios
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>

            {/* DROPDOWN INICIAR SESIÓN */}
            <NavDropdown title="Iniciar Sesión" id="login-dropdown">
              <NavDropdown.Item as={Link} to="/login/paciente">
                Paciente
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login/doctor">
                Doctor
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login/admin">
                Administrador
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
