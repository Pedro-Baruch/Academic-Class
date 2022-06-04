import { addDoc, arrayUnion, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Navbar } from '../componentes/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';

export const Criar = () => {
  const navigate = useNavigate()
  
  const [nome, setName] = useState('');
  const [descrição, setDescrição] = useState('');
  const [users, SetUser] = useState('');
  const { signup, currentUser, user} = useAuth()

  
  const usercollectionRef = doc(db, 'users', user.id)
  const turmacollectionRef = collection(db, 'turma')
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(turmacollectionRef)
      SetUser(console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    };
    
    getUsers();
  }, [currentUser?.id]);


  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriçãoChange = (e) => {
    setDescrição(e.target.value);
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    const newTurma = await addDoc(turmacollectionRef, {
      admin: [{user: user.id, avatar: user.avatar, name: user.name}],
      nome: nome,
      descrição: descrição,
      atividades: [],
      posts: [],
      users: [{user: user.id, avatar: user.avatar, name: user.name},],
      data: new Date()

    })

    await updateDoc(usercollectionRef, {
      turmas: arrayUnion({
        turmaId: newTurma.id,
        nome: nome,
        descrição: descrição
      })
      
      
    })
    navigate(-1)
  }

  
  async function deleteUser(id) {
    const userDoc = doc(db, 'registro', id);
    await deleteDoc(userDoc);
  }
      
  return (
    <div class="container">
      <Navbar/>
      <div class="row">
        <ColunaTurmas/>
        <header className="registro-turma">

        <form onSubmit={ handleSubmit }>
          { }
          <h1 className='registro-titulo'>Criar Turma </h1>

          <label className='registro-texto'>º
            Name:
          </label><br />
          <input className='registro-campo' type="text" value={nome}
            required onChange={(e) => { handleChange(e) }} /><br />

          <label className='registro-texto'>
            descrição:
          </label><br />
          <input className='campo-reg' type="descrição" value={descrição}
            required onChange={(e) => { handleDescriçãoChange(e) }} /><br />

          <button className='registro-button-reg'>Criar</button>

        </form>
            </header>
      </div>
    </div>
  )
}
