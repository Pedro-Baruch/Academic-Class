import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
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

export function CriarPost(){
    const navigate = useNavigate()
    const {id } = useParams()

    const { user} = useAuth()
    const [titulo, setTitulo] = useState('');
    const [descrição, setDescrição] = useState('');

    const turmaCollectionRef = doc(db, 'turma', id)
    const postsCollectionRef = collection(db, 'posts')

    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
    }
    
    const handleDescricaoChange = (e) => {
        setDescrição(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        const newPost = await addDoc(postsCollectionRef,{
          turmaid: id,
          admin: [{user: user.id, avatar: user.avatar, name: user.name}],
          nome: titulo,
          descrição: descrição,
          data: formataDate(new Date())
        })
    
        await updateDoc(turmaCollectionRef, {
            posts: arrayUnion({
                postId: newPost.id,
                turmaId: id,
                titulo: titulo,
                descrição: descrição,
                userName : user.name,
                userAvatar: user.avatar,
                data: formataDate(new Date())
            })
        })
        navigate(-1)
    }

    return(
    <div class="container">
        <Navbar/>
        <div class="row">
          <ColunaTurmas/>
          <div className='criar-container'>
            <form className='criar-post' onSubmit={ handleSubmit }>
              <h1 className='criar-titulo'>Criar Post</h1>
              <label className='criar-item'>Titulo</label>
              <input 
                  className='criar-campo'
                  type="text" value={titulo} required onChange={(e) => { handleTituloChange(e) }}
              />
              <label className='criar-item'>Descrição</label>
              <input 
                  className='criar-campo'
                  type="text" value={descrição} required onChange={(e) => { handleDescricaoChange(e) }} 
              />
              <button className='criar-button'>Criar</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
}