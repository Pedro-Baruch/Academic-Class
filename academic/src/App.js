import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { Atividades } from './pages/Atividades'
import { CriarAtv } from "./pages/CriarAtividades"
import { CriarDuvida } from "./pages/CriarDuvida"
import { CriarPost } from "./pages/CriarPostagens"
import { Criar } from './pages/CriarTurma'
import { Duvida } from "./pages/Duvida"
import { Home } from './pages/Home'
import { Pessoas } from "./pages/Pessoas"
import { Post } from "./pages/Postagens"
import { Registro } from "./pages/Registro"


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element ={<Registro/>} />
            <Route path='home' element ={<Home/>} />
            <Route path='home/criar' element ={<Criar/>} />
            <Route path='home/turma/:id' element ={<Post/>} />
            <Route path='home/turma/:id/criar' element ={<CriarPost/>} />
            <Route path='home/turma/:id/atividades' element ={<Atividades/>} />
            <Route path='home/turma/:id/atividades/criar' element ={<CriarAtv />} />
            <Route path='home/turma/:id/pessoas' element ={<Pessoas/>} />
            <Route path='home/turma/:id/:idD/duvidas' element ={<Duvida/>} />
            <Route path='home/turma/:id/:idD/duvidas/criar' element ={<CriarDuvida/>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}


export default App;