import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListadoMedico from './ListadoMedico'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { FaUserMd } from 'react-icons/fa';


const RegistroMedico = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
    getValues
  } = useForm()
  
  
  const agendaMedicoLocalStorage = JSON.parse(localStorage.getItem("agendaMedicoKey")) || [];

  const [medicos, setMedicos] = useState(agendaMedicoLocalStorage);

  const crearMedico = (data) => {
    setMedicos([...medicos, data])

    reset();

    Swal.fire({
          title: "Creaste un usuario!",
          text: "Ya puedes iniciar sesión",
          icon: "success",
        });
  };

  useEffect(() => {
    localStorage.setItem("agendaMedicoKey", JSON.stringify(medicos))

  }, [medicos])

  const borrarMedico = (emailMedico) => {
    const listadoMedicoActual = medicos.filter((itemMedico) => itemMedico.email_medico !== emailMedico)
    
    setMedicos(listadoMedicoActual)
  }

  return (
    <>
      <div className="container col-12 col-md-8 col-lg-6" id="2">
        <div>
        <h1> <FaUserMd /> Registro de Medico</h1>
        </div> 
      <Form   className="mt-5" onSubmit={handleSubmit(crearMedico)} >
          <Form.Group className="mb-3">
            <div className="containerLabelControl">
              <Form.Label className="col-5 col-md-4">Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juan Perez"
              {...register("nombre_y_apellido_medico", {
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
            </div>
            <Form.Text className="text-danger">
              {errors.nombre_y_apellido_medico?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <div className="containerLabelControl">
            <Form.Label className="col-5 col-md-4">Especialidad</Form.Label>
              <Form.Select {...register("especialidad", {
                required:"Tienes que ingresar una opción"
              })}>
                <option value="">Seleccione una opción</option>
                <option value="Clinica Gral">Clinica Gral</option>
                <option value="Gastroenterologia">Cirugia</option>
                <option value="Gastroenterologia">Gastroenterologia</option>
                <option value="Ginecologia">Ginecologia</option>
                <option value="Prensa">Oftalmologia</option>
              </Form.Select>
              </div>
              <Form.Text className="text-danger">
              {errors.especialidad?.message}
            </Form.Text>
          </Form.Group>    
              
          <Form.Group className="mb-3">
            <div className="containerLabelControl">
            <Form.Label className="col-5 col-md-4">E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juanperez@gmail.com"
              {...register("email_medico", {
                required: "Este campo es obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El email debe ser un correo valido por ej: juanperez@gmail.com",
                },
              })}
            />
            </div>
            <Form.Text className="text-danger">
              {errors.email_medico?.message}
            </Form.Text>
          </Form.Group>
              
          <Form.Group className="mb-3">
            <div className="containerLabelControl">
            <Form.Label className="col-5 col-md-4">Contraseña</Form.Label>
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
              </div>
            <Form.Text className="text-danger">
              {errors.contraseña?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <div className="containerLabelControl">
            <Form.Label className="col-5 col-md-4">Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repetir contraseña"
                {...register("contraseña_confirmar", {
                  required: "Tienes que repetir la contraseña",
                  validate: (value) => value === getValues('contraseña') || `❌ Las contraseñas no coinciden`
                  
                })}
              />
              </div>
            <Form.Text className="text-danger">
              {errors.contraseña_confirmar?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <div className="containerLabelControl">
            <Form.Label className="col-5 col-md-4">Rol</Form.Label>
              <Form.Select {...register("rol", {
                required:"Tienes que ingresar una opción"
              })}>
                <option value="">Seleccione una opción</option>
                <option value="Clinica Gral">Empleado</option>
                <option value="Gastroenterologia">Administrador</option>
              </Form.Select>
              </div>
            <Form.Text className="text-danger">
              {errors.rol?.message}
            </Form.Text>
          </Form.Group>

          <Button variant="success"  type="submit" >
            Registrar
          </Button>
      </Form>
       </div>
       <ListadoMedico medicos={medicos} borrarMedico={borrarMedico}></ListadoMedico>
   </>
  )
}

export default RegistroMedico
