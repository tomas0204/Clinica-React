import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import CrearTurno from '../turnos/CrearTurno.jsx';
import Table from 'react-bootstrap/Table';


const TurnosList = () => {

    const [turnos, setTurnos] = useState([])
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


    return (
        <div>
            <h1>Turnos</h1>
            <CrearTurno
                onSave={(nuevoTurno) => {
                    console.log("Turno guardado:", nuevoTurno);
                    setTurnos([...turnos, nuevoTurno]);
                }}
                pacientesMock={pacientes}
                medicosMock={medicos}
            />


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