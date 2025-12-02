import ListGroup from 'react-bootstrap/ListGroup';
import ItemMedico from './ItemMedico';

const ListadoMedico = ({medicos, borrarMedico}) => {
  return (
    <div>
        <ListGroup className='mt-5 mb-5'>
        {
            medicos.map((medico, index) => <ItemMedico key={index} medico={medico} borrarMedico={borrarMedico} /> )
        }
    </ListGroup>
    </div>
  )
}

export default ListadoMedico
