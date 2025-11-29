import "./Home.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router";
import  Img  from "../../../assets/clinica.jpg"
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
    <img src={Img} alt="Imagen Clinica" className='clinica-img '/>
    <h1 className='display-4 my-4 fw-bold horarios-titulo'>Bienestar360</h1>

    <Row className="g-4 my-4">

      <Col md={4}>
        <Card className="op-card shadow-sm border-0 p-4">
          <div className="op-icon icon-blue">
            <i className="bi bi-person-badge"></i>
          </div>
          <h4 className="mt-3 text-primary fw-bold">Acceso Pacientes</h4>
          <p className="my-4">Aca podran acceder a sus estudios pacientes</p>

          <Button variant="primary" as={Link} to="/login">Ingresar</Button>
          
          
        </Card>
      </Col>

      <Col md={4}>
        <Card className="op-card shadow-sm border-0 p-4">
          <div className="op-icon icon-green">
            <i className="bi bi-clipboard-check"></i>
          </div>
          <h4 className="mt-3 fw-bold text-success">Acceso Profesionales</h4>
          <p className="my-4">Acceso a profesionales a su cartilla de pacientes</p>

          <Button variant="success" as={Link} to="/login">Ingresar</Button>
        
        </Card>
      </Col>

      <Col md={4}>
        <Card className="op-card shadow-sm border-0 p-4">
          <div className="op-icon icon-orange">
            <i className="bi bi-hospital"></i>
          </div>
          <h4 className="mt-3 text-warning fw-bold">Guardia Medica</h4>
          <p className="my-4">
            Profesionales de guardia preparados 24/7
          </p>

          <Button variant="warning" className="text-white" as={Link} to="/guardia-medica">Ingresar</Button>
    
        </Card>
      </Col>

    </Row>
    
    <div className="bg-light py-5 my-5">
      <Container className="text-center">

        <h2 className=" horarios-titulo fw-bold "  >Horarios de Atención</h2>

        <hr className="w-25 mx-auto my-4" />

        <Row className="text-muted fw-semibold">

          <Col>
            <p>Internación</p>
            <p className="mb-1">11 a 12 hs</p>
            <p>18 a 20 hs</p>
          </Col>

          <Col>
            <p>Terapia Intensiva Adultos</p>
            <p className="mb-1">12 a 13 hs</p>
            <p>20 a 21 hs</p>
          </Col>

          <Col>
            <p>Terapia Intensiva Pediátrica</p>
            <p className="mb-1">11 a 12 hs</p>
            <p>19 a 20 hs</p>
          </Col>

          <Col>
            <p>Unidad Coronaria</p>
            <p className="mb-1">12 a 13 hs</p>
            <p>20 a 21 hs</p>
          </Col>

          <Col>
            <p>Guardia Medica</p>
            <p className="mb-1">24 hrs.</p>
          </Col>

        </Row>
      </Container>
    </div>

    
    
    </>
  )
}

export default Home
