
import './App.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Login from './components/views/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx';
import HistoriaClinica from './components//historiaClinica/HistoriaClinica.jsx';
import Home from "./components/views/Home/Home.jsx"
import TurnosList from './components/views/TurnosList.jsx'
import Footer from "./components/shared/Footer.jsx"
import Navbar from './components/shared/Navbar.jsx'
import { useState } from "react"
import Error404 from './components/views/Error404.jsx'
import "bootstrap-icons/font/bootstrap-icons.css"
import RegistroMedico from './components/views/crudMedico/RegistroMedico.jsx'





function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser?.role === "admin") {
    console.log("El usuario es un admin");
    
  } else if (currentUser?.role === "user") {
    console.log("El usuario es un paciente");
  }
  
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <main className='my-5'>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login onLogin={setIsAdmin} />} />
            <Route path='/registrarPaciente' element={<RegistrarPaciente />} />
            <Route path="/historiaClinica" element={<HistoriaClinica />} />

            <Route path='*' element={<Error404 />} />
            <Route
              path='/turnos'
              element={
                currentUser?.role === "admin" ? (
                  <TurnosList />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
