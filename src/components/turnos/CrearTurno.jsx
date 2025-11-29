import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CrearTurno = ({ onSave, pacientesMock, medicosMock }) => {

    const [form, setForm] = useState({
        pacienteNombre: "",
        medicoNombre: "",
        fecha: "",
        hora: "",
        motivoConsulta: "",
        estado: "pendiente"
    });

    const reset = () => {
    setForm({
        pacienteId: "",
        medicoId: "",
        fecha: "",
        hora: "",
        motivoConsulta: "",
        estado: "pendiente"
    });
};

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Nuevo Turno
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un nuevo turno</Modal.Title>
                </Modal.Header>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSave(form);
                        handleClose();
                        reset()
                    }}

                >
                    <Modal.Body>
                        <h5>Paciente</h5>
                        <select
                            value={form.pacienteNombre}
                            onChange={e => setForm({ ...form, pacienteNombre: e.target.value })}
                            className='form-select'
                            required
                        >
                            <option value="">Seleccionar paciente</option>
                            {pacientesMock.map(p => (
                                <option key={p.id} value={p.nombre}>{p.nombre}</option>
                            ))}

                        </select>

                        <h5>Médico</h5>
                        <select
                            value={form.medicoNombre}
                            onChange={e => setForm({ ...form, medicoNombre: e.target.value })}
                            className='form-select'
                            required
                        >
                            <option value="">Seleccionar médico</option>
                            {medicosMock.map(p => (
                                <option key={p.id} value={p.nombre}>{p.nombre}</option>
                            ))}

                        </select>
                        
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal >
        </>
    );
}

export default CrearTurno;
