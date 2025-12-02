import { Button } from "react-bootstrap";

const ListaDeGuardias = ({ medicos, borrarMedico, seleccionarMedicoParaEditar }) => {
  return (
    <div className="mt-4 pt-3 d-flex flex-column align-items-center" style={{backgroundColor: "#65c4a4ff", borderRadius: "10px"}}>
      <h2 >Médicos de Guardia</h2>

      {medicos.length === 0 && <p>No hay médicos disponibles.</p>}

      <ul className="list-group my-4 w-50">

        {medicos.map((medico, index) => (
          
          <li key={index} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center ">

            <div className="mb-2 d-flex flex-row-md"> 
              <span className="ms-1"><strong>Medico:</strong> {medico.nombre}</span>
              <span className="ms-3"><strong>Horario:</strong> {medico.entrada} - {medico.salida}</span>
            </div>

            <div className="d-flex justify-content-center">
              <Button variant="danger" className="btn-sm me-2"  onClick={() => borrarMedico(index)}>
              Borrar
            </Button>

            <Button variant="warning" className="btn-sm" onClick={() => seleccionarMedicoParaEditar(medico, index)}>
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
