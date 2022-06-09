import { addDoc, arrayUnion, collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import { formataDate } from '../services/util';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';

import './../pages/Criar.css';
import './../pages/RegistroStyle.css';

export function CriarAtv(){
    const navigate = useNavigate()
    const {id } = useParams()

    const { user} = useAuth()
    const [titulo, setTitulo] = useState('');
    const [descrição, setDescrição] = useState('');
    const [pessoas, setPessoas] = useState('');
    const [date, setDate] = useState('');
    const [users, SetUser] = useState('');

    const turmaCollectionRef = doc(db, 'turma', id)
    const AtivCollectionRef = collection(db, 'atividades')

    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
    }
    
    const handleDescricaoChange = (e) => {
        setDescrição(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }


    useEffect(() => {
        onSnapshot(doc(db, 'turma', `${id}` ), (doc) => {
            setPessoas(doc.data()?.users)
        })
    }, [user?.id])

    async function handleSubmit(e) {
        e.preventDefault();
        
        const newAtividade = await addDoc(AtivCollectionRef, {
          turmaid: id,
          admin: [{user: user.id, avatar: user.avatar, name: user.name}],
          nome: titulo,
          descrição: descrição,
          dateEntrega: formataDate(date),
          status: false,
          users: pessoas,
          usersEntrege: [],
          documento: [],
          nota: null,
          data: new Date()
        })
    
        await updateDoc(turmaCollectionRef, {
            atividades: arrayUnion({
                turmaId: id,
                titulo: titulo,
                descrição: descrição,
                dataEntrege: formataDate(date)
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
            <form className='criar-atividade' onSubmit={ handleSubmit }>
                <h1 className='criar-titulo'>Criar Atividade</h1>
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
                <label className='criar-item'>Data de entrega</label>
                <input
                    className='criar-campo'
                    type="date" value={date} required onChange={(e) => { handleDateChange(e) }} 
                />
                <button className='criar-button'>Criar</button>
            </form>
        </div>
      </div>
      <Footer/>
    </div>
    )
}