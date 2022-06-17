import './../pages/RegistroStyle.css';
import './../pages/Criar.css';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Link, useParams } from 'react-router-dom';


export function CriarDuvida(){

  const {id } = useParams()

  return(
    <div class="container">
      <Navbar/>
      <div class="row">
        <ColunaTurmas/>
        <div className='criar-container'>
          <form className='criar-post'>
            <h1 className='criar-titulo'>Criar Post</h1>
            <label className='criar-item'>Insira sua duvida:</label>
            <input 
              className='criar-campo'
            />
            <Link class='criar-button-link' to={`/home/turma/${id}/duvida`}>Criar duvida</Link>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}