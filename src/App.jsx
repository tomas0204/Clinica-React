import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { useState } from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Login from './components/views/Login.jsx'
import Home from "./components/views/Home/Home.jsx"
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx'
import TurnosList from './components/views/TurnosList.jsx'
import Footer from "./components/shared/Footer.jsx";
import Navbar from './components/shared/Navbar.jsx';
import GuardiaMedica from "./components/views/Guardia/GuardiaMedica.jsx"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './components/views/Error404.jsx';

import Error404 from './components/views/Error404.jsx'
import RegistroMedico from './components/views/crudMedico/RegistroMedico.jsx'
import HistoriaClinica from './components/historiaClinica/HistoriaClinica.jsx'

import Navbar from './components/shared/Navbar.jsx'
import Footer from "./components/shared/Footer.jsx"

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  if (currentUser?.role === "admin") {
    console.log("El usuario es un admin")
  } else if (currentUser?.role === "user") {
    console.log("El usuario es un paciente")
  }

  return (
    <div className='div-principal'>
      <BrowserRouter>
    <BrowserRouter>

      <Navbar />

      <main className='my-5'>
      <Routes>
        <Route path='/inicio' element={<Home/>} />

        <Route  path='/login' element={<Login/>} />
        <Route path='' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarPaciente'element={<RegistrarPaciente />} />
        <Route path='/guardia-medica' element={<GuardiaMedica/>} />
        {/* <Route path='*' element={<Error404 />} /> */}
        <Route path='/turnos' element={<TurnosList />} />
      </Routes>
        <Routes>

          <Route path='/' element={<Home />} />

          <Route
            path='/login'
            element={<Login onLogin={setIsAdmin} />}
          />

          <Route
            path='/registrarPaciente'
            element={<RegistrarPaciente />}
          />

          <Route
            path='/historiaClinica'
            element={<HistoriaClinica />}
          />

          <Route
            path='/registroMedico'
            element={<RegistroMedico />}
          />

          {/* Ruta protegida */}
          <Route
            path='/turnos'
            element={
              currentUser?.role === "admin"
                ? <TurnosList />
                : <Navigate to="/login" />
            }
          />

          <Route
            path='*'
            element={<Error404 />}
          />

        </Routes>
      </main>

      <Footer />
      </BrowserRouter>
    </div>

    </BrowserRouter>
  )
}

export default App
