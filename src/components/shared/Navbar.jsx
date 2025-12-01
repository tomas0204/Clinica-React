import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarClinica() {
  const role = JSON.parse(localStorage.getItem("currentUser"))?.role;

  const cerrarSesion = () => {
    localStorage.setItem("currentUser", null);
    window.location.href = ""; 
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>

        <Navbar.Brand as={Link} to="">
          Bienestar360 Clínica
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

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


            {role === "user" || role === "admin" ? (
              <>
                <Nav.Link onClick={cerrarSesion}>
                  Cerrar sesión
                </Nav.Link>

                <Nav.Link as={Link} to="/perfil">
                  Ir a perfil
                </Nav.Link>
              </>
            ) : (
              <NavDropdown title="Iniciar Sesión" id="login-dropdown">
                <NavDropdown.Item as={Link} to="/login">
                  Paciente
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/login-doctor">
                  Doctor
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
