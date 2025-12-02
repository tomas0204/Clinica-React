import { useState } from "react";
import FormGuardia from "./FormGuardia";
import ListaDeGuardias from "./ListaDeGuardias";

function GuardiaMedica() {
  const [medicos, setMedicos] = useState([]);

  const agregarMedico = (medico) => {
    setMedicos([...medicos, medico]);
  };

  const borrarMedico = (index) => {
    const nuevosMedicos = medicos.filter(( _ , i) => i !== index);
    setMedicos(nuevosMedicos);
  };

  return (
    <div>
      <FormGuardia agregarMedico={agregarMedico} />
      <ListaDeGuardias medicos={medicos} borrarMedico={borrarMedico}/>
    </div>
  );
}

export default GuardiaMedica;