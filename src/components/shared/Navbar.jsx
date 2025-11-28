import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarClinica() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="">
          Bienestar360 Clínica
        </Navbar.Brand>

        {/* BOTÓN MOBILE */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* CONTENIDO */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="*">
              Servicios
            </Nav.Link>
            <Nav.Link as={Link} to="*">
              Contacto
            </Nav.Link>

            {/* DROPDOWN INICIAR SESIÓN */}
            <NavDropdown title="Iniciar Sesión" id="login-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                Paciente
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">
                Doctor
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">
                Administrador
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
