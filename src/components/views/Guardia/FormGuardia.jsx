import { FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormGuardia = ({ agregarMedico }) => {
  const { register, handleSubmit, formState: { errors } , reset } = useForm();

  const onSubmit = (data) => {

    const medico = {
      nombre: data.nombre,
      entrada: data.entrada,
      salida: data.salida
    };


    agregarMedico(medico);
    reset();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-5">Agregar Guardia Médica</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre del Médico</label>
          <input
            type="text"
            className="form-control"
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

        <div className="mb-3">
          <label className="form-label">Horario de Entrada</label>
          <input
            type="time"
            className="form-control"
            placeholder="Ej: 08:00"
            {...register("entrada", { required:"Este campo no puede quedar vacío"})}
          />
        </div>

        <FormText className="text-danger d-flex justify-content-start">
          {errors.entrada?.message}
        </FormText>

        <div className="mb-3">
          <label className="form-label">Horario de Salida</label>
          <input
            type="time"
            className="form-control"
            {...register("salida", { required: "Este campo no puede quedar vacío" })}
          />
        </div>

        <FormText className="text-danger d-flex justify-content-start">
          {errors.salida?.message}
        </FormText>

        <button className="btn btn-success" type="submit">
          Agregar Médico
        </button>
      </form>
    </div>
  );
};

export default FormGuardia;
