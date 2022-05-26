import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { Criar } from './pages/CriarTurma'
import { Home } from './pages/Home'
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
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}


export default App;