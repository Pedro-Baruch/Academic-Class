import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Registro } from "./pages/Registro"
import { Home } from './pages/Home'
import { Criar } from './pages/CriarTurma'
import { Footer } from './componentes/Footer'
import { Navbar } from './componentes/Navbar'
import { Post } from "./pages/Postagens"
import { Atividades } from "./pages/Atividades"
import { Pessoas } from "./pages/Pessoas"
import { CriarPost } from "./pages/CriarPostagens"
import { CriarAtv } from "./pages/CriarAtividades"


function App() {
    return (
        <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
    
    <Route path='/' element ={<Registro/>} />
    <Route path='home' element ={<Home/>} />
    <Route path='home/criar' element ={<Criar/>} />
    <Route path='home/post' element ={<Post/>} />
    <Route path='home/atividade' element ={<Atividades/>} />
    <Route path='home/pessoas' element ={<Pessoas/>} />
    <Route path='home/criarPost' element ={<CriarPost/>} />
    <Route path='home/criarAtv' element ={<CriarAtv/>} />
    
        </Routes>
    
        <Footer/>
    </BrowserRouter>
        </>
      )
}


export default App;