import { Route, Routes, BrowserRouter } from 'react-router'
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx'  
import Login from './components/views/Login.jsx'
import Home from "./components/views/Home/Home.jsx"
import TurnosList from './components/views/TurnosList.jsx'
import Footer from "./components/shared/Footer.jsx";
import Navbar from './components/shared/Navbar.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './components/views/Error404.jsx';



function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <main className='my-5'>
      <Routes>
        <Route path='/inicio' element={<Home/>} />

        <Route  path='/login' element={<Login/>} />
        <Route path='' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarPaciente'element={<RegistrarPaciente />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/turnos' element={<TurnosList />} />
      </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
