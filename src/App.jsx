import './App.css'
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/views/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/views/Navbar/Navbar.jsx';
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx';
import HistoriaClinica from './components//historiaClinica/HistoriaClinica.jsx';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<h1>Bienvenido a la Clínica</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/registrarPaciente' element={<RegistrarPaciente />} />
            <Route path="/historiaClinica" element={<HistoriaClinica />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
