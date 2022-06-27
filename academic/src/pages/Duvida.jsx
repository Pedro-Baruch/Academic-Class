import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';
import { db } from '../services/firebase-config';
import './../pages/Criar.css';
import './../pages/RegistroStyle.css';

export function Duvida(){
  const {id} = useParams()
  const {idD} = useParams()
  const [duvida, setDuvida] = useState([]);
  const [post, setPost] = useState('')

  const collectionDuvida = collection(db, "duvida")
  
  useEffect( () => {
    onSnapshot(doc(db, 'posts', `${idD}` ), (doc) => {
      setPost(doc.data())
    })
    procurarDuvidas()
  }, []);

  async function procurarDuvidas() {
    const duvid = []
    const q = query(collectionDuvida, where ("postId", '==', idD))

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      duvid.push(doc.data())
    });
    setDuvida(duvid)
    
    return duvid
  }


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
              <div className="postagem">
                <p className='texto-postagem'>{post.descrição}</p>
              </div>
              <Link class='duvida' to={`criar`}>Criar duvida</Link>
            </div>    
          </div>
          <div className="posts-ts">
            <div className='post'>
              {duvida.map((item, id) => {
                return(
                  <div key={id}>
                    <img className='imagem-perfil-post' src={item.currentUser[0].avatar} alt="Avatar"></img>
                    <h2 className="nome-user">{item.currentUser[0].name}</h2>
                    <p>{item.data}</p>
                    <div className="postagem">
                      <p className='texto-postagem'>{item.duvida}</p>
                    </div>
                  </div>
                )
              })}
              
            </div>
          </div>       
        </div>
      </div>
      <Footer/>
    </div>
  )
}