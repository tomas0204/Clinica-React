import { useState } from "react";
import FormGuardia from "./FormGuardia";
import ListaDeGuardias from "./ListaDeGuardias";

function App() {
  const [medicos, setMedicos] = useState([]);

  const agregarMedico = (medico) => {
    setMedicos([...medicos, medico]);
  };

  return (
    <div>
      <FormGuardia agregarMedico={agregarMedico} />
      <ListaDeGuardias medicos={medicos} />
    </div>
  );
}

export default App;