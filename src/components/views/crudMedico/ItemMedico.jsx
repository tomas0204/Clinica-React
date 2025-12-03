import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ItemMedico = ({medico, index, borrarMedico, modificarMedico, verDetalleMedico}) => {


    return (
    <div className='d-flex flex-row'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" />
      <Card.Body>
        <Card.Title> Dr/a {medico.nombre_y_apellido_medico} </Card.Title>
        <Card.Text className='mt-4'>
          Especialidad: {medico.especialidad}
        </Card.Text>
        <Card.Text>
          Email: {medico.email_medico}
        </Card.Text>
        <div className='d-flex justify-content-center align-item-center gap-2'>
        <Button variant="primary" onClick={() => verDetalleMedico(medico)} ><FaEye/></Button>
        <Button variant="warning" onClick={() => modificarMedico(medico.email_medico)} ><FaPencilAlt/></Button>
        <Button variant="danger" onClick={() => borrarMedico(medico.email_medico)} ><FaTrash/></Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemMedico
