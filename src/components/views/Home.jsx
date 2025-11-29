import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router";
import  Img  from "../../assets/clinica.jpg"

const Home = () => {
  return (
    <>
    <img src={Img} alt="Imagen Clinica" className='clinica-img ' style={{width: "100%", height: "550px" ,  objectFit: "cover", objectPosition: "top" }}/>
    <h1 className='display-4 my-4'>Bienestar360</h1>

    <div className='d-flex flex-column flex-md-row justify-content-between'>
      <Card className='w-100 w-md-25 mb-3 mb-md-0 me-md-3'>
      <Card.Body>
        <Card.Title>Portal Pacientes</Card.Title>
        <Card.Text className='my-4'>
          Aca podran acceder a sus estudios pacientes
        </Card.Text>

        <Link to="/login" >
        <Button variant='success'>Ingresar</Button>
        </Link>
        
      </Card.Body>
    </Card>

    <Card className='w-100 w-md-25 mb-3 mb-md-0 me-md-3'>
      <Card.Body>
        <Card.Title>Portal Profesionales</Card.Title>
        <Card.Text className='my-4'>
          Acceso a profesionales a su cartilla de pacientes
        </Card.Text>
        <Link to="/login" >
        <Button variant='success'>Ingresar</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card className='w-100 w-md-25 mb-3 mb-md-0 me-md-3'>
      <Card.Body>
        <Card.Title>Guardia Medica</Card.Title>
        <Card.Text className='my-4'>
          Profesionales de guardia preparados 24/7
        </Card.Text>
        <Button variant='success'>Ingresar</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Home
