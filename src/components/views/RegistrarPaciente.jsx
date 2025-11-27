import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUserMd } from 'react-icons/fa';



const RegistrarPaciente = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues
  } = useForm();

  const pacientesLocalStorage =
    JSON.parse(localStorage.getItem("pacientesKey")) || [];

  const [pacientes, setPacientes] = useState(pacientesLocalStorage);

  const registrarPaciente = (data) => {
    setPacientes([...pacientes, data]);

   

    reset();

    Swal.fire({
      title: "Registro exitoso!",
      text: "Pronto estaras habilitado!",
      icon: "success",
    });
  };

  useEffect(() => {
    localStorage.setItem("pacientesKey", JSON.stringify(pacientes));
  }, [pacientes]);




  return (
    <>
       
    </>
  );
};

export default RegistrarPaciente;


