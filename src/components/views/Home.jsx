import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router";

const Home = () => {
  return (
    <>
    <h1 className='display-4 my-4'>Bienestar360</h1>

    <div className='d-flex justify-content-evenly'>
      <Card className='w-25'>
      <Card.Body>
        <Card.Title>Login Paciente</Card.Title>
        <Card.Text className='my-4'>
          Aca podran acceder a sus estudios pacientes
        </Card.Text>

        <Link to="/login" >
        <Button variant='success'>Ir</Button>
        </Link>
        
      </Card.Body>
    </Card>

    <Card className='w-25'>
      <Card.Body>
        <Card.Title>Login Doctores</Card.Title>
        <Card.Text className='my-4'>
          Acceso a profesionales a su cartilla de pacientes
        </Card.Text>
        <Button variant='success'>Ir</Button>
      </Card.Body>
    </Card>

    <Card className='w-25'>
      <Card.Body>
        <Card.Title>Guardia Medica</Card.Title>
        <Card.Text className='my-4'>
          Profesionales de guardia preparados 24/7
        </Card.Text>
        <Button variant='success'>Ir</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Home
