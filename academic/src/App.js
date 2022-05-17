import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Registro } from "./pages/Registro"
import {Home}from './pages/Home' 
import {Criar} from './pages/CriarTurma'
import {Footer} from './componentes/Footer'
import {Navbar} from './componentes/Navbar'


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

    <Footer/>
</BrowserRouter>
    </>
  )
}

export default App;
