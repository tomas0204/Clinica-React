import ListGroup from 'react-bootstrap/ListGroup';
import ItemMedico from './ItemMedico';

const ListadoMedico = ({medicos, borrarMedico, modificarMedico}) => {
  return (
    <div>
        <ListGroup className='mt-5 mb-5'>
        {
            medicos.map((medico, index) => <ItemMedico key={index} medico={medico} borrarMedico={borrarMedico} modificarMedico={modificarMedico} /> )
        }
    </ListGroup>
    </div>
  )
}

export default ListadoMedico
