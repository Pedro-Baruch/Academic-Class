import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import { formataDate } from '../services/util';
import './../pages/Criar.css';
import './../pages/RegistroStyle.css';


export function CriarDuvida(){
  const navigate = useNavigate()
  const [duvida, setDuvida] = useState('');
  const {user} = useAuth()

  const {idD } = useParams()

  const duvidaCollectionRef = collection(db, 'duvida')

  const handleChange = (e) => {
    setDuvida(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addDoc(duvidaCollectionRef, {
      postId: idD,
      currentUser: [{user: user.id, avatar: user.avatar, name: user.name}],
      duvida: duvida,
      data: formataDate(new Date())
    })
    
    navigate(-1)
  }
  return(
    <div class="container">
      <Navbar/>
      <div class="row">
        <ColunaTurmas/>
        <div className='criar-container'>
          <form className='criar-post' onSubmit={ handleSubmit}>
            <h1 className='criar-titulo'>Criar Post</h1>
            <label className='criar-item'>Insira sua duvida:</label>
            <input className='criar-campo'
              type="text" value={duvida} required onChange={(e) => { handleChange(e) }}
            />
            <button className='criar-button-link'>Criar duvida</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}