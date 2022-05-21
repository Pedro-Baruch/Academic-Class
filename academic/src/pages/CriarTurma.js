import React from 'react';
import './../pages/RegistroStyle.css';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app"
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { async } from '@firebase/util';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBeUZICL0_YOZXyjMCXqEn4JTRjCBF9G5k",
    authDomain: "registro-591d2.firebaseapp.com",
    projectId: "registro-591d2",
  
  });
  

export function Criar() {
    const navigate = useNavigate()

    const db = getFirestore(firebaseApp);
    const usercollectionRef = collection(db, 'criar')
  
    
    const [nome, setName] = useState('');
    const [descrição, setDescrição] = useState('');
    const [users, SetUser] = useState('');
    
  
   
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usercollectionRef)
  
        SetUser(console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
      };
      getUsers();
    }, []);
  
  
    const handleChange = (e) => {
      setName(e.target.value);
    }
  
    const handleDescriçãoChange = (e) => {
      setDescrição(e.target.value);
    }
  
    const handleSubmit = (e) => {
  
  
      alert('Turma criada com sucesso');
  
      e.preventDefault();
  
    }
  
    async function CriarTurma() {
  
      const user = await addDoc(usercollectionRef, {
        nome,
        descrição,
  
      });
      console.log(user);
      navigate(-1)
      
    }
  
  
    async function deleteUser(id) {
      const userDoc = doc(db, 'registro', id);
      await deleteDoc(userDoc);
    }
    
  
      
  return (
    <div class="container">
      
      <div class="row">
        <aside class="coluna-turma">
          <ul class="coluna-lista">
            <li class="coluna-item" id="coluna-topico"><a href="home-page.html">Turmas</a></li>
            <li class="coluna-item" id="coluna-subtopico"><a href="publicacao-turma.html">Turma 01</a></li>
            <li class="coluna-item" id="coluna-subtopico"><a href="">NomeTurma</a></li>
            <li class="coluna-item" id="coluna-subtopico"><a href="">NomeTurma</a></li>
          </ul>
          <ul class="coluna-lista">
            <li class="coluna-item" id="coluna-topico"><a href="">T.Encerradas</a></li>
          </ul>
          <ul class="coluna-lista">
            <li class="coluna-item" id="coluna-topico"><a href="">Configurações</a></li>
          </ul>
        </aside>

        <header className="registro-turma">

        <form onSubmit={(e) => { handleSubmit(e) }}>
          { }
          <h1 className='registro-titulo'>Criar  Turma </h1>

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

          <button className='registro-button-reg' onClick={CriarTurma}>Criar</button>

        </form>
            </header>
      </div>
    </div>
  )
}

export default Criar;