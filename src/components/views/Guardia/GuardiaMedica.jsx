import { useState } from "react";
import FormGuardia from "./FormGuardia";
import ListaDeGuardias from "./ListaDeGuardias";

function GuardiaMedica() {
  const [medicos, setMedicos] = useState([]);
  const [medicoEditando, setMedicoEditando] = useState(null);
  //const [indexEditando, setIndexEditando] = useState(null);

  const agregarMedico = (medico) => {
    setMedicos([...medicos, medico]);
  };

  const borrarMedico = (index) => {
    const nuevosMedicos = medicos.filter(( _ , i) => i !== index);
    setMedicos(nuevosMedicos);
  };

   const seleccionarMedicoParaEditar = (medico, index) => {
    setMedicoEditando(index);
  };

  const editarMedico = (medicoActualizado) => {
    const copia = [...medicos];
    copia[medicoEditando] = medicoActualizado;
    setMedicos(copia);
    setMedicoEditando(null);
  };

  return (
    <div>
      <FormGuardia 
      agregarMedico={agregarMedico} 
      editarMedico={editarMedico} 
       medicoEditando={medicoEditando !== null ? medicos[medicoEditando] : null} />

      <ListaDeGuardias 
      medicos={medicos} 
      borrarMedico={borrarMedico} 
      seleccionarMedicoParaEditar={seleccionarMedicoParaEditar}/>
    </div>
  );
}

export default GuardiaMedica;