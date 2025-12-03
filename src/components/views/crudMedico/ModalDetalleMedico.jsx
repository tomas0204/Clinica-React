import { Modal, Button } from 'react-bootstrap';

const ModalDetalleMedico = ({ show, handleClose, medico }) => {
    

    if (!medico) {
        return null; 
    }

   
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Información Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Dr/a {medico.nombre_y_apellido_medico}</h5>
                <hr />
                <p><strong>Especialidad:</strong> {medico.especialidad}</p>
                <p><strong>Email:</strong> {medico.email_medico}</p>
                <p><strong>Contraseña:</strong> {medico.contraseña}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDetalleMedico;