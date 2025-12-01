import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

const ItemMedico = ({medico, index, borrarMedico}) => {



    return (
    <div>
      <ListGroup.Item>
        {medico}
        <Button variant="danger" onClick={() => borrarMedico(medico)} >❌</Button>
      </ListGroup.Item>
    </div>
  )
}

export default ItemMedico
