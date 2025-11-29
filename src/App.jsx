import { Route, Routes, BrowserRouter } from 'react-router'
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx'  
import Login from './components/views/Login.jsx'
import Home from "./components/views/Home/Home.jsx"
import Footer from "./components/shared/Footer.jsx";
import Navbar from './components/shared/Navbar.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <main className='my-5'>
      <Routes>
        <Route path='/inicio' element={<Home/>} />

        <Route  path='/login' element={<Login/>} />
        <Route path='/registrarPaciente'element={<RegistrarPaciente />} />
      </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
