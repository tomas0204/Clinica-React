import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRoleFromToken } from '../../helpers/login/apiLogin.js';
import { useNavigate } from "react-router";

export default function NavbarClinica() {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const role = getRoleFromToken();
  return (
    <Navbar 
      expand="lg" 
      sticky="top"
      className="shadow-sm py-1 px-4"
      style={{ 
  backgroundColor: "rgba(47, 131, 120, 0.6)", // verde menta semi-transparente
  fontFamily: "'Poppins', sans-serif",
  backdropFilter: "blur(15px) saturate(120%)", // efecto tipo espejo
  WebkitBackdropFilter: "blur(15px) saturate(120%)", // soporte Safari
  border: "1px solid rgba(255, 255, 255, 0.2)", // borde ligero de vidrio
  boxShadow: "0 4px 30px rgba(0,0,0,0.05)" // sombra suave
}}
    >
      <Container style={{ maxWidth: "1000px" }} className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center flex-nowrap">
          <img 
            src="/img/logo.png" 
            alt="Logo Clínica" 
            style={{ height: "50px", width: "auto", marginRight: "10px" }} 
          />
          <span style={{ fontWeight: 700, fontSize: "1.4rem", color: "#ffffff", textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}>
           Bienestar 360
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#ffffff" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center flex-column flex-lg-row mt-3 mt-lg-0">
            <Nav.Link as={Link} to="/" className="mx-2 nav-link-custom">Inicio</Nav.Link>
            <Nav.Link as={Link} to="*" className="mx-2 nav-link-custom">Servicios</Nav.Link>
            <Nav.Link as={Link} to="*" className="mx-2 nav-link-custom">Contacto</Nav.Link>
            {role === "paciente" || role === "admin" || role === "medico" ? (
              <>
                <Nav.Link onClick={cerrarSesion} className="mx-2 btn btn-custom">Cerrar sesión</Nav.Link>
                {role === "admin" ? (
                  <NavDropdown title="Gestión" id="login-dropdown" className="mx-2 nav-dropdown-custom">
                    <NavDropdown.Item as={Link} to="/turnos">Turnos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/guardia-medica">Guardia Médica</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/registroMedico">Gestión de Médicos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/registrarPaciente">Gestión de Pacientes</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title="Perfil" id="login-dropdown" className="mx-2 nav-dropdown-custom">
                    <NavDropdown.Item as={Link} to="/turnos">Turnos</NavDropdown.Item>
                    {role === "medico" && <NavDropdown.Item as={Link} to="/guardia-medica">Guardia Médica</NavDropdown.Item>}
                    {role === "medico" && <NavDropdown.Item as={Link} to="/historiaClinica">Historia Clínica</NavDropdown.Item>}
                  </NavDropdown>
                )}
              </>
            ) : (
              <NavDropdown title="Iniciar Sesión" id="login-dropdown" className="mx-2 nav-dropdown-custom">
                <NavDropdown.Item as={Link} to="/login" state={{ tipoDeRegistro: "Paciente" }}>Paciente</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login" state={{ tipoDeRegistro: "Medico" }}>Doctor</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style jsx="true">{`
        .nav-link-custom { 
          color: #ffffff; 
          font-weight: 500; 
          transition: color 0.3s; 
        }
        .nav-link-custom:hover { color: #aad69d !important; }
        .nav-dropdown-custom .dropdown-menu {
          background-color: #ffffff;
          border-radius: 10px;
          min-width: 180px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .nav-dropdown-custom .dropdown-item:hover {
          background-color: rgba(55, 146, 134, 0.95);
          color: #ffffff;
        }
        .btn-custom { 
          background-color: #aad69d; 
          color: #fff; 
          font-weight: 500; 
          border-radius: 50px; 
          transition: all 0.3s; 
          margin: 0.3rem 0;
        }
        .btn-custom:hover { 
          transform: translateY(-2px); 
          background-color: #8ec686ff;
        }

        @media (max-width: 991px) {
          .nav-link-custom, .btn-custom, .nav-dropdown-custom { 
            width: 100%; 
            text-align: center; 
          }
          .nav-dropdown-custom .dropdown-menu { 
            position: relative; 
            min-width: 100%; 
          }
        }
      `}</style>
    </Navbar>
  );
}