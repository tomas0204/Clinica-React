import Footer from "./components/shared/Footer.jsx";
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'; // react-router-dom es correcto
import Login from './components/views/Login.jsx';
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx';
import RegistroMedico from './components/views/crudMedico/RegistroMedico.jsx';
import TurnosList from './components/views/TurnosList.jsx';
import GuardiaMedica from './components/views/Guardia/GuardiaMedica.jsx';
import HistoriaClinica from './components/historiaClinica/HistoriaClinica.jsx';
import Error404 from './components/views/Error404.jsx';
import Pago from './components/turnos/Pagos.jsx';
import Navbar from './components/shared/Navbar.jsx';  // Agrega Navbar, estaba faltando
import Home from './components/views/Home/Home.jsx'; // Agrega Home, estaba faltando
import { getRoleFromToken } from './helpers/login/apiLogin.js';
import { useState } from 'react';

function App() {
  const role = getRoleFromToken();
  const [isAdmin, setIsAdmin] = useState(false); // Agrego useState para onLogin

  return (
    <div className='div-principal'>
      <BrowserRouter>
        <Navbar />

        <main className='my-5'>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/registrarPaciente' element={<RegistrarPaciente />} />
            <Route path='/guardia-medica' element={role === "medico" || role === "admin" ? <GuardiaMedica /> : <Navigate to="/login" />} />
            <Route path='/turnos' element={<TurnosList />} />
            <Route path='/login' element={<Login onLogin={setIsAdmin} />} />
            <Route path='/historiaClinica' element={role === "medico" ? <HistoriaClinica /> : <Navigate to="/login" />} />
            <Route path='/registroMedico' element={<RegistroMedico />} />
            <Route path='/pago' element={role === "paciente" ? <Pago /> : <Navigate to="/login" />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;