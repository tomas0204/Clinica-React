import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
const { VITE_ADMIN_USER, VITE_ADMIN_PASS } = import.meta.env;

const adminEmail = VITE_ADMIN_USER;
const adminPass = VITE_ADMIN_PASS;


const Login = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    if (data.email === adminEmail && data.password === adminPass) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email: data.email, role: "admin" })
      );
      onLogin(true); // acceso admin
      alert("Inicio de sesión como admin exitoso");
      return;
    } else {
      onLogin(false); // no es admin
    }

    // 🔹 Si querés mostrar algo en consola, hacelo aparte
    console.log("Usuario logueado, admin?", data.email === adminEmail);


    console.log(data.email);
    console.log(data.password);
    console.log(adminEmail)
    console.log(adminPass);




    // Verificar usuarios normales
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!userFound % onLogin() === true) {
      setLoginError("Email o contraseña incorrectos");
      return;
    }

    // Guardar usuario normal
    localStorage.setItem("currentUser", JSON.stringify(userFound));
  };

  return (
    <Card className="shadow p-3 mb-5 bg-body rounded card-login">
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
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa una contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "Debe tener al menos 6 caracteres"
                    }
                  })}
                />
                <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
                <Form.Text className="text-danger">{loginError}</Form.Text>
              </Form.Group>

              <Button variant="warning" type="submit"
                className="m-3">

                Iniciar sesión
              </Button>
              <Button
                variant="secondary"
                className="m-3"
                as={NavLink}
                to="/registrarPaciente"
              >
                Registrarse
              </Button>
            </Form>
          </Card.Body>
        </Col>
        <Col>
          <img
            src="/public/img/img-login.jpg"
            alt="Imagen clinica login"
            className="img-login rounded-3 w-100"
          />
        </Col>
      </Row>
    </Card>
  )
}
export default Login;