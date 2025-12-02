import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';    


function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <h4>Logo de la clínica</h4>
                        <p>Slogan</p>
                    </Col>

                    <Col>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <strong>Pacientes</strong>
                            </Nav.Item>
                            <Nav.Link as={Link} to="/turnos">Turnos</Nav.Link>
                            <Nav.Link as={Link} to="/turnos">Mis turnos</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/registrarPaciente">Registro</Nav.Link>
                        </Nav>
                    </Col>

                    <Col>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <strong>Profesionales</strong>
                            </Nav.Item>
                            <Nav.Link href="/*">Panel</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="">Registro</Nav.Link>
                        </Nav>
                    </Col>

                    <Col>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <strong>Sobre la clínica</strong>
                            </Nav.Item>
                            <Nav.Link href="*">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="*">Especialides</Nav.Link>
                            <Nav.Link href="*">Contacto</Nav.Link>
                        </Nav>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;


