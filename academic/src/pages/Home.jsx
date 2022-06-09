import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardTurmaItem } from '../componentes/CardTurmaItem';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';


export const Home = () => {
  const { currentUser } = useAuth()
  const [turmas, setTurmas] = useState([]);
  const [codTurma, setCodTurma] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [admin, setAdmin] = useState([]);


  const usersCollectionRef = collection(db, "turma");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setTurmas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return getUsers
  }, []);

  function procurarTurma(cod) {
    const turmaEncontrada = []
    turmas.map((turma) => {
      if(turma.id === cod){
        turmaEncontrada.push(turma.id)
      }
      return 
    })
    return turmaEncontrada[0]
    

  }

  function procurarPessoa() {
    const pessoaEncontrada = []

    const tur =  procurarTurma(codTurma)
    onSnapshot(doc(db, 'turma', `${tur}`), (doc) => {
      setPessoas(doc.data()?.users)
      setAdmin(doc.data()?.admin)
    })
    
    pessoas.map((user) => {
      if(user.id === currentUser?.id){
        pessoaEncontrada.push(user.id)
      }
      return 
    })
    
    admin.map((user) => {
      if(user.id === currentUser?.id){
        pessoaEncontrada.push(user.id)
      }
      return 
    })
    
    return pessoaEncontrada

  }

  function confirmarTurma() {
    const t = procurarTurma(codTurma)
    if(!t){
      return false
    }else {
      return true
      
    }
  }

  const handleChange = (e) => {
    setCodTurma(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const t = confirmarTurma()
    const user = procurarPessoa()
    if(t === false){
      alert("Turma não encontrada!")
    }else {
      alert("Você já faz parte da turma!")
      if(user.length > 0){
      }
    }
    
  }

  return (
    <div class="container">
      <Navbar/>
      <div class="row">
        <ColunaTurmas/>
        <main class="turma-card">
          <ul class="card">
            <li className="banner-imagem"></li>
            <li className="card-item">
              <Link to={'criar'}>Criar turma</Link>
            </li>
            <form onSubmit={ handleSubmit }>
              <input type="text" value={codTurma} required onChange={(e) => { handleChange(e) }} />
              <button /*onClick={procura(codTurma)}*/ >Entrar</button>
            </form>
          </ul>
            {turmas.map((user) => {
              return (
                <CardTurmaItem user={user} />
              );
            })}
        </main>
      </div>
      <Footer/>
    </div>
  );
}