import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CrearTurno from '../turnos/CrearTurno.jsx';
import Table from 'react-bootstrap/Table'
import Swal from 'sweetalert2'


const TurnosList = () => {

    const [turnos, setTurnos] = useState([])
    const [mode, setMode] = useState("crear");
    const [show, setShow] = useState(false);
    const [turnoEdit, setTurnoEdit] = useState(null);

    const pacientes = [
        { id: 1, nombre: "Juan Perez" },
        { id: 2, nombre: "Maria Gomez" },
        { id: 3, nombre: "Carlos Lopez" }
    ];


    const medicos = [
        { id: 1, nombre: "Dr. Smith" },
        { id: 2, nombre: "Dra. Johnson" },
        { id: 3, nombre: "Dr. Brown" }
    ];


    const handleDelete = (id) => {
    Swal.fire({
        title: "¿Eliminar turno?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {

            setTurnos(turnos.filter(t => t.id !== id));

            Swal.fire({
                title: "Eliminado",
                text: "El turno ha sido eliminado",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });
        }
    });
};


    return (
        <div>
            <h1>Turnos</h1>
            <CrearTurno
                show={show}
                onClose={() => setShow(false)}
                mode={mode}
                turnoEdit={turnoEdit}
                onSave={(nuevoTurno) => {
                    if (mode === "crear") {
                        const nuevoTurnoConId = { ...nuevoTurno, id: Date.now() };
                        setTurnos([...turnos, nuevoTurnoConId]);
                    } else {
                        setTurnos(turnos.map(t =>
                            t.id === turnoEdit.id ? nuevoTurno : t
                        ));
                    }
                }}
                pacientesMock={pacientes}
                medicosMock={medicos}
            />

            <Button
                variant="primary"
                onClick={() => {
                    setMode("crear");
                    setTurnoEdit(null);
                    setShow(true);
                }}
            >
                Nuevo Turno
                <i className="bi bi-plus-circle me-2 ms-2"></i>
            </Button>


            <div className="table-responsive">
                <Table striped bordered hover size="sm" className='mt-3' responsive>
                    <thead>
                        <tr>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Motivo de Consulta</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turnos.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center">No hay turnos disponibles</td>
                            </tr>
                        ) : (
                            turnos.map(t => (
                                <tr key={t.id}>
                                    <td>{t.pacienteNombre}</td>
                                    <td>{t.medicoNombre}</td>
                                    <td>{t.fecha}</td>
                                    <td>{t.hora}</td>
                                    <td>{t.motivoConsulta}</td>
                                    <td>{t.estado}</td>
                                    <td>
                                        <Button
                                            variant="dark"
                                            className='me-2'
                                            onClick={() => {
                                                setMode("editar");
                                                setTurnoEdit(t);
                                                setShow(true);
                                            }}
                                        >
                                            <i class="bi bi-pen-fill"></i>
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => (handleDelete(t.id))}

                                        >
                                            <i class="bi bi-person-x"></i>
                                        </Button>
                                    </td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TurnosList