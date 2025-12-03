import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ItemPacientes = ({paciente, index, borrarPaciente, modificarPaciente, verDetallePaciente}) => {


    return (
    <div className='d-flex flex-row'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSuEBa1zuFIvWpp5uaXrimbkTCnDJ2lbzz7tQBdZvFabvT4xLC2ikF9y7qvhdoijiWKdXlqQzVThT6sqxlhJBkxvjFpa3e2qksd_FK1TMu_ONvju_o" />
      <Card.Body>
        <Card.Title> {paciente.nombre_y_apellido} </Card.Title>
        <Card.Text className='mt-4'>
          Obra Social: {paciente.obraSocial}
        </Card.Text>
        <Card.Text className='mt-4'>
          Celular: {paciente.celular}
        </Card.Text>
        <Card.Text>
          Email: {paciente.email}
        </Card.Text>
        <div className='d-flex justify-content-center align-item-center gap-2'>
        <Button variant="primary" onClick={() => verDetallePaciente(paciente)} ><FaEye/></Button>
        <Button variant="warning" onClick={() => modificarPaciente(paciente.email)} ><FaPencilAlt/></Button>
        <Button variant="danger" onClick={() => borrarPaciente(paciente.email)} ><FaTrash/></Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemPacientes
