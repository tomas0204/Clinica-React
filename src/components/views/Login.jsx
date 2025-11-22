import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    const users = JSON.parse(sessionStorage.getItem("users")) || [];

    const userFound = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!userFound) {
      setLoginError("Email o contraseña incorrectos");
      return;
    }

    sessionStorage.setItem("currentUser", JSON.stringify(userFound));
    alert("Inicio de sesión exitoso");
  };

  return (
    <>
      <Card className=" shadow p-3 mb-5 bg-body rounded card-login">
        <Row xs={1} md={2}>
          <Col>
            <Card.Body>
              <h1 className="text-center mb-4">Login</h1>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ej: juanperez@mail.com"
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de email inválido"
                      }
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDNI">
                  <Form.Label>DNI:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu DNI"
                    {...register("dni", {
                      required: "El DNI es obligatorio",
                      pattern: {
                        value: /^[0-9]{7,8}$/,
                        message: "El DNI debe contener solo números (7 u 8 dígitos)"
                      }
                    })}
                  />

                  <Form.Text className="text-danger">
                    {errors.dni?.message || loginError}
                  </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                  Iniciar sesión
                </Button>
                
                <Button
                  variant="secondary"
                  className="m-3"
                  as={NavLink}
                  to="/register"
                >
                  Registrarse
                </Button>
              </Form>
            </Card.Body>
          </Col>
          <Col>
            <img
              src="/public/img/img-login.jpg"
              alt="Imagen comida"
              className="img-login rounded-3 w-100"
            />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Login