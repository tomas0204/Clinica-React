import ListGroup from 'react-bootstrap/ListGroup';
import ItemMedico from './ItemMedico';

const ListadoMedico = ({medicos, borrarMedico, modificarMedico, verDetalleMedico}) => {
  return (
    <div>
        <ListGroup className='mt-5 mb-5'>
        {
            medicos.map((medico, index) => <ItemMedico key={index} medico={medico} borrarMedico={borrarMedico} modificarMedico={modificarMedico} verDetalleMedico={verDetalleMedico} /> )
        }
    </ListGroup>
    </div>
  )
}

export default ListadoMedico
