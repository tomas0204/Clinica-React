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
       <div className="container col-12 col-md-6 ">
        <div>
        <h1> <FaUserMd /> Registro de Pacientes</h1>
        </div> 
      <Form onSubmit={handleSubmit(registrarPaciente)} id="registroPacientes">
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juan Perez"
              {...register("nombre_y_apellido", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 5,
                  message: "Tienes que ingresar al menos cinco caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "No debes superar los treinta caracteres",
                },
              })}
            />
            <Form.Text className="text-muted">
              {errors.nombre_y_apellido?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ej: 03816001122"
              {...register("celular", {
                required: "Este es un campo obligatorio",
                minLength: {
                  value: 9,
                  message: "Debes ingresar al menos nueve digitos",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números",
                },
              })}
            />
            <Form.Text className="text-muted">
              {errors.celular?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juanperez@gmail.com"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El email debe ser un correo valido por ej: juanperez@gmail.com",
                },
              })}
            />
            <Form.Text className="text-muted">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa la contraseña"
                {...register("contraseña", {
                  required: "Tienes que ingresar una contraseña",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,12}$/,
                    message:
                      "La contrasenia debe tener entre 6 y 16 caracteres, al menos un número, al menos una minuscula, al menos una mayuscula y al menos un caracter especial",
                  },
                })}
              />
            <Form.Text className="text-muted">
              {errors.contraseña?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repetir contraseña"
                {...register("contraseña_confirmar", {
                  required: "Tienes que repetir la contraseña",
                  validate: (value) => value === getValues('contraseña') || `❌ Las contraseñas no coinciden`
                  
                })}
              />
            <Form.Text className="text-muted">
              {errors.contraseña_confirmar?.message}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrar
          </Button>
      </Form>
       </div>
    </>
  );
};

export default RegistrarPaciente;


