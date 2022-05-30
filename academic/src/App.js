import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { Criar } from './pages/CriarTurma'
import { Home } from './pages/Home'
import { Pessoas } from "./pages/Pessoas"
import { Registro } from "./pages/Registro"
import { Turma } from "./pages/Turma"


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          
          <Routes>
            <Route path='/' element ={<Registro/>} />
            <Route path='home' element ={<Home/>} />
            <Route path='home/criar' element ={<Criar/>} />
            <Route path='home/turma/:id' element ={<Turma/>} />
            <Route path='home/turma/:id/pessoas' element ={<Pessoas/>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}


export default App;