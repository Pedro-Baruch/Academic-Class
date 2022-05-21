import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './componentes/Navbar'
import { Criar } from './pages/CriarTurma'
import { Home } from './pages/Home'
import { Registro } from "./pages/Registro"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Registro/>} />
          <Route path='home' element ={<Home/>} />
          <Route path='home/criar' element ={<Criar/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
