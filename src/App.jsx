import './App.css'
import Footer from "./components/shared/Footer.jsx";
import { Route, Routes, BrowserRouter } from 'react-router'
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx'  
import Login from './components/views/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/shared/Navbar.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarPaciente'element={<RegistrarPaciente />} />
      </Routes>
      <Footer />
      </BrowserRouter>

      

    </>
  )
}

export default App
