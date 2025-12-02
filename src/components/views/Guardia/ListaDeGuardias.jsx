import { Button } from "react-bootstrap";

const ListaDeGuardias = ({ medicos, borrarMedico }) => {
  return (
    <div className="mt-4">
      <h2>Médicos de Guardia</h2>

      {medicos.length === 0 && <p>No hay médicos disponibles.</p>} {/*!!!!!!*/}

      <ul className="list-group my-4">
        {medicos.map((medico, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <div>
              <span><strong>Medico:</strong> {medico.nombre}</span>
              <span className="ms-5"><strong>Horario:</strong> {medico.entrada} - {medico.salida}</span>
            </div>

            <Button className="btn btn-danger btn-sm" onClick={() => borrarMedico(index)}>
              Borrar
            </Button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeGuardias;
