import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router'
import Login from './components/views/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <main>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     </main>
    </>
  )
}

export default App
