const ListaDeGuardias = ({ medicos }) => {
  return (
    <div className="mt-4">
      <h2>Médicos de Guardia</h2>

      {medicos.length === 0 && <p>No hay médicos disponibles.</p>}

      <ul className="list-group my-4">
        {medicos.map((medico, index) => (
          <li key={index} className="list-group-item d-flex justify-content-evenly">
            <span><strong>Medico:</strong> {medico.nombre}</span>
            <span><strong>Horario:</strong> {medico.entrada} - {medico.salida}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeGuardias;
