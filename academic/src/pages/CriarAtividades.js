import { addDoc, arrayUnion, collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
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

    const usercollectionRef = doc(db, 'users', user.id)
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
          dateEntega: date,
          status: false,
          users: pessoas,
          usersEntrege: [],
          documento: [],
          nota: undefined,
          data: new Date()
        })
    
        await updateDoc(usercollectionRef, {
            atividades: arrayUnion({
                turmaId: newAtividade.id,
                titulo: titulo,
                descrição: descrição,
                dataEntrege: date
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
                <label>Descrição: </label>
                <input
                    type="text" value={descrição} required onChange={(e) => { handleDescricaoChange(e) }} 
                />

                <label>Data de entrega: </label>
                <input
                    type="date" value={date} required onChange={(e) => { handleDateChange(e) }} 
                />
                
            </form>
        </div>
    )
}