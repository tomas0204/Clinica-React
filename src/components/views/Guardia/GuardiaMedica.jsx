import { useEffect, useState } from "react";
import FormGuardia from "./FormGuardia";
import ListaDeGuardias from "./ListaDeGuardias";

function GuardiaMedica() {
const [indiceEditando, setIndiceEditando] = useState(null);

const [medicos, setMedicos] = useState(() => {
  const data = localStorage.getItem("medicos");
  return data ? JSON.parse(data) : [];
});

useEffect(() => {
  localStorage.setItem("medicos", JSON.stringify(medicos));
}, [medicos]);


  const agregarMedico = (medico) => {
    setMedicos([...medicos, medico]);
  };

  const borrarMedico = (index) => {
    const nuevosMedicos = medicos.filter(( _ , i) => i !== index);
    setMedicos(nuevosMedicos);
  };

   const seleccionarMedicoParaEditar = (index) => {
    setIndiceEditando(index);
  };

  const editarMedico = (medicoActualizado) => {
    const copia = [...medicos];
    copia[indiceEditando] = medicoActualizado;
    setMedicos(copia);
    setIndiceEditando(null);
  };

  return (
    <div>
      <FormGuardia 
      agregarMedico={agregarMedico} 
      editarMedico={editarMedico} 
      medicoEditando={indiceEditando !== null ? medicos [indiceEditando] : null} 
      />

      <ListaDeGuardias 
      medicos={medicos} 
      borrarMedico={borrarMedico} 
      seleccionarMedicoParaEditar={seleccionarMedicoParaEditar}
      indiceEditando={indiceEditando}/>
    </div>
  );
}

export default GuardiaMedica;