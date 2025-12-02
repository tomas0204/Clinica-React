import { Button } from "react-bootstrap";

const ListaDeGuardias = ({ medicos, borrarMedico, seleccionarMedicoParaEditar }) => {
  return (
    <div className="mt-4 pt-3" style={{backgroundColor: "#65c4a4ff", borderRadius: "10px"}}>
      <h2 className="" >Médicos de Guardia</h2>

      {medicos.length === 0 && <p>No hay médicos disponibles.</p>}

      <ul className="list-group my-4">
        {medicos.map((medico, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <div>
              <span className="ms-5"><strong>Medico:</strong> {medico.nombre}</span>
              <span className="ms-5"><strong>Horario:</strong> {medico.entrada} - {medico.salida}</span>
            </div>

            <div>
              <Button variant="danger" className="btn-sm "  onClick={() => borrarMedico(index)}>
              Borrar
            </Button>

            <Button variant="warning" className="btn-sm mx-2" onClick={() => seleccionarMedicoParaEditar(medico, index)}>
              Editar
            </Button>
            </div>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeGuardias;
