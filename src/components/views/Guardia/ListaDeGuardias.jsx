import { Button } from "react-bootstrap";

const ListaDeGuardias = ({ medicos, borrarMedico, seleccionarMedicoParaEditar, indiceEditando }) => {
  return (
    <div className="lista-div mt-4 pt-3 d-flex flex-column align-items-center" >
      <h2 >Médicos de Guardia</h2>

      {medicos.length === 0 && <p className="my-3 fs-5">No hay médicos/as disponibles.</p>}

      <ul className="list-group my-4 w-50">

        {medicos.map((medico, index) => (
          
          <li key={index} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center ">

            <div className="mb-2 d-flex flex-row-md"> 
              <span className="ms-1"><strong>Medico/a:</strong> {medico.nombre}</span>
              <span className="ms-3"><strong>Horario:</strong> {medico.entrada} - {medico.salida}</span>
            </div>

            <div className="d-flex justify-content-center">
              <Button variant="danger" className="btn-sm me-2"  onClick={() => borrarMedico(index)} disabled={indiceEditando !== null}>
              Borrar
            </Button>

            <Button variant="warning" className="btn-sm" onClick={() => seleccionarMedicoParaEditar(index)}>
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
