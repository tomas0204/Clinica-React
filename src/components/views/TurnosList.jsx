import { useState } from 'react'
import { useEffect } from 'react'
import { crearTurno, editarTurno, borrarTurno } from "../../helpers/apiTurnos.js";
import { Button } from 'react-bootstrap'
import CrearTurno from '../turnos/CrearTurno.jsx';
import Table from 'react-bootstrap/Table'
import Swal from 'sweetalert2'

const TurnosList = () => {

    const [turnos, setTurnos] = useState(() => {
        const turnosGuardados = localStorage.getItem("turnos");
        return turnosGuardados ? JSON.parse(turnosGuardados) : [];
    });
    // Función para guardar en localStorage
    const guardarEnLocalStorage = (turnosActualizados) => {
        localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
    }
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


    const handleDelete = async (turno) => {
        const result = await Swal.fire({
            title: "¿Eliminar turno?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        });

        if (result.isConfirmed) {
            // Primero borramos en el backend (json-server)
            const exito = await borrarTurno(turno); // tu función async que hace DELETE
            if (exito) {
                // Actualizamos React state y localStorage
                const nuevosTurnos = turnos.filter(t => t.id !== turno.id);
                setTurnos(nuevosTurnos);
                localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));

                Swal.fire({
                    title: "Eliminado",
                    text: "El turno ha sido eliminado",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "No se pudo eliminar el turno",
                    icon: "error"
                });
            }
        }
    };



    return (
        <div>
            <h1>Turnos</h1>
            <CrearTurno
                show={show}
                onClose={() => setShow(false)}
                mode={mode}
                turnoEdit={turnoEdit}
                onSave={async (nuevoTurno) => {
                    if (mode === "crear") {
                        const turnoGuardado = await crearTurno(nuevoTurno);
                        setTurnos([...turnos, turnoGuardado]);
                        guardarEnLocalStorage([...turnos, turnoGuardado]);
                        console.log("Turno creado:", turnoGuardado);

                    } else if (mode === "editar" && turnoEdit) {
                        const turnoActualizado = await editarTurno({
                            ...nuevoTurno,
                            id: turnoEdit.id
                        });
                        setTurnos(turnos.map(t =>
                            t.id === turnoEdit.id ? turnoActualizado : t
                        ));
                        guardarEnLocalStorage(turnos.map(t =>
                            t.id === turnoEdit.id ? turnoActualizado : t
                        ));
                        console.log("Turno actualizado:", turnoActualizado);

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
                                            <i className="bi bi-pen-fill"></i>
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                setMode("eliminar");
                                                setTurnoEdit(t);
                                                handleDelete(t);
                                            }}
                                        >
                                            <i className="bi bi-person-x"></i>
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