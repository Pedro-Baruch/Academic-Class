import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../componentes/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';

export function Post(){

    const {id } = useParams()
    const {user} = useAuth()
    const [post, setPost] = useState([])
    const [turma, setTurma] = useState([])

    useEffect(() => {
        onSnapshot(doc(db, 'turma', `${id}` ), (doc) => {
            setPost(doc.data()?.posts)
            setTurma(doc.data())
        })
    }, [user?.id])

    return(
      <div className='container'>
        <Navbar/>
          <div className='atividades-turma'>
            <nav className="main-nav">
              <Link to={`/home/turma/${id}`}>Comunicados</Link>
              <Link to={`/home/turma/${id}/pessoas`}>Pessoas</Link>
              <Link to={`/home/turma/${id}/atividades`}>Atividades</Link>
            </nav>
            <section className="info-turma">
              <h2>{turma.nome}</h2>
              <p>{turma.descrição}</p>
              <div className='botao-criar'>
                <Link className='botao' to={`/home/turma/${id}/criar`}>+</Link>
              </div>
            </section>
            <div className="posts">
              <div className='post'>
                  {post.map((item, id) => {
                      return(
                            <div key={id}>
                              <img className='imagem-perfil-post' src={item.userAvatar} alt="Avatar"></img>
                              <h2 className="nome-user">{item.userName}</h2>
                              <p>{item.data}</p>
                              <div className="postagem">
                                <p className='texto-postagem'>{item.descrição}</p>
                              </div>
                              <div className='duvida-container'>
                                <button className='duvida'>Duvidas?</button>
                              </div>
                            </div>
                      )
                  })}  
              </div>    
            </div>
          </div>
      </div>
    )
}