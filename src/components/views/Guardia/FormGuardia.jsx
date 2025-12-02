import { useEffect } from "react";
import { FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormGuardia = ({ agregarMedico, editarMedico, medicoEditando }) => {
  const { register, handleSubmit, formState: { errors } , reset, setValue } = useForm();


  useEffect(() => {
    if (medicoEditando) {
      setValue("nombre", medicoEditando.nombre);
      setValue("entrada", medicoEditando.entrada);
      setValue("salida", medicoEditando.salida);
    }
  }, [medicoEditando, setValue]);


  const onSubmit = (data) => {

    if (medicoEditando) {
      editarMedico(data); // editamos
    } else {
      agregarMedico(data); // agregamos
    }
    /* const medico = {
      nombre: data.nombre,
      entrada: data.entrada,
      salida: data.salida
    }; */

    reset();
  };

  return (
    <div className="container mt-4 pt-1" style={{backgroundColor: "#65c4a4ff", borderRadius: "10px"}}>

      <h2 className="my-4">{medicoEditando ? "Editar Guardia" : "Agregar Guardia"}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 d-flex flex-column align-items-center ">
          <label className="form-label">Nombre del Médico</label>
          <input
            type="text"
            className="form-control w-50"
            placeholder="Ej: Dr. Gómez"
            {...register("nombre", { required: "Este campo no puede quedar vacío.",
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
              }, 
              maxLength: {
                value: 30,
                message: "El campo de nombre debe tener como maximo 30 caracteres."
              }
             })}
          />
        </div>

        <FormText className="text-danger d-flex justify-content-start">
          {errors.nombre?.message}
        </FormText>

        <div className="mb-4 d-flex flex-column align-items-center">
          <label className="form-label">Horario de Entrada</label>
          <input
            type="time"
            className="form-control w-50 "
            placeholder="Ej: 08:00"
            {...register("entrada", { required:"Este campo no puede quedar vacío"})}
          />
        </div>

        <FormText className="text-danger d-flex justify-content-start">
          {errors.entrada?.message}
        </FormText>

        <div className="mb-4 d-flex flex-column align-items-center">
          <label className="form-label">Horario de Salida</label>
          <input
            type="time"
            className="form-control w-50"
            {...register("salida", { required: "Este campo no puede quedar vacío" })}
          />
        </div>

        <FormText className="text-danger d-flex justify-content-start">
          {errors.salida?.message}
        </FormText>

        <button className="btn btn-success my-3" type="submit">
          {medicoEditando ? "Guardar Cambios" : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default FormGuardia;
