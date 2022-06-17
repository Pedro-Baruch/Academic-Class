import './../pages/RegistroStyle.css';
import './../pages/Criar.css';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Link, useParams } from 'react-router-dom';

export function Duvida(){

  const {id } = useParams()

  return(
    <div className="container">
      <Navbar/>
      <div class="row">
        <ColunaTurmas/>
        <div className='atividades-turma'>
          <nav className="main-nav">
            <Link to={`/home/turma/${id}`}>Comunicados</Link>
            <Link to={`/home/turma/${id}/pessoas`}>Pessoas</Link>
            <Link to={`/home/turma/${id}/atividades`}>Atividades</Link>
          </nav>
          <div className="posts">
            <div className='post'>
              {/* Post que pertence a duvida */}
              <img className='imagem-perfil-post'></img>
              <h2 className="nome-user">Pedro</h2>
              <p>22/22/22</p>
              <div className="postagem">
                <p className='texto-postagem'>descrição</p>
              </div>
              <Link class='duvida' to={`/home/turma/${id}/duvidas/criar`}>Criar duvida</Link>
            </div>    
          </div>
          <div className="posts-ts">
            <div className='post'>
              <img className='imagem-perfil-post'></img>
              <h2 className="nome-user">Pedro</h2>
              <p>22/22/22</p>
              <div className="postagem">
                <p className='texto-postagem'>descrição</p>
              </div>
            </div>
          </div>       
        </div>
      </div>
      <Footer/>
    </div>
  )
}