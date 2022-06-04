import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import { formataDate } from '../services/util';
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
        
        await addDoc(postsCollectionRef, {
          turmaid: id,
          admin: [{user: user.id, avatar: user.avatar, name: user.name}],
          nome: titulo,
          descrição: descrição,
          data: new Date()
        })
    
        await updateDoc(turmaCollectionRef, {
            posts: arrayUnion({
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
        <div className='criar-post'>
            <form onSubmit={ handleSubmit }>
                <h1>Criar Post</h1>
                <label>Titulo: </label>
                <input
                    type="text" value={titulo} required onChange={(e) => { handleTituloChange(e) }}
                />
                <label>descrição: </label>
                <input
                    type="text" value={descrição} required onChange={(e) => { handleDescricaoChange(e) }} 
                />

                <button className='registro-button-reg'>Criar</button>
            </form>
        </div>
    )
}