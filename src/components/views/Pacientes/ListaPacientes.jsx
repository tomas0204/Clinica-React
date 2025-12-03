import ListGroup from 'react-bootstrap/ListGroup';
import ItemPacientes from './ItemPacientes';

const ListaPacientes = ({pacientes, borrarPaciente, modificarPaciente, verDetallePaciente}) => {
  return (
    <div>
        <ListGroup className='mt-5 mb-5'>
        {
            pacientes.map((paciente, index) => <ItemPacientes key={index} paciente={paciente} borrarPaciente={borrarPaciente} modificarPaciente={modificarPaciente} verDetallePaciente={verDetallePaciente} /> )
        }
    </ListGroup>
    </div>
  )
}

export default ListaPacientes
