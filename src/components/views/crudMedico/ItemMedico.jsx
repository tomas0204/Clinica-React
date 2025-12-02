import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ItemMedico = ({medico, index, borrarMedico}) => {



    return (
    <div className='d-flex'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSuEBa1zuFIvWpp5uaXrimbkTCnDJ2lbzz7tQBdZvFabvT4xLC2ikF9y7qvhdoijiWKdXlqQzVThT6sqxlhJBkxvjFpa3e2qksd_FK1TMu_ONvju_o" />
      <Card.Body>
        <Card.Title> Dr {medico.nombre_y_apellido_medico} </Card.Title>
        <Card.Text className='mt-4'>
          Especialidad: {medico.especialidad}
        </Card.Text>
        <Card.Text>
          Email: {medico.email_medico}
        </Card.Text>
        <div className='d-flex justify-content-center align-item-center gap-2'>
        <Button variant="primary"><FaEye/></Button>
        <Button variant="warning"><FaPencilAlt/></Button>
        <Button variant="danger" onClick={() => borrarMedico(medico.email_medico)} ><FaTrash/></Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemMedico
