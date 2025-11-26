import './App.css'
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from 'react-router'
import Login from './components/views/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrarPaciente from './components/views/RegistrarPaciente.jsx';


function App() {

  return (
    <>

     <h1>CLINICA</h1>
    

     <main>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarPaciente' element={<RegistrarPaciente />} />
      </Routes>
      </BrowserRouter>
     </main>
      <Footer />

    </>
  )
}

export default App
