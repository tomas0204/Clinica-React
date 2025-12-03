import ListGroup from 'react-bootstrap/ListGroup';
import ItemPacientes from './ItemPacientes';

const ListaPacientes = ({ pacientes, borrarPaciente, modificarPaciente, verDetallePaciente }) => {
  return (
    <div className="container mt-4">
      <ListGroup className="row g-3">
        {pacientes.map(paciente => (
          <ItemPacientes
            key={paciente.email}
            paciente={paciente}
            borrarPaciente={borrarPaciente}
            modificarPaciente={modificarPaciente}
            verDetallePaciente={verDetallePaciente}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaPacientes;