import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardTurmaItem } from '../componentes/CardTurmaItem';
import { ColunaTurmas } from '../componentes/ColunaTurmas';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';


export const Home = () => {
  const { user } = useAuth()
  const [turmas, setTurmas] = useState([]);
  const [codTurma, setCodTurma] = useState([]);
  const navigate = useNavigate()

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

  async function procurarPessoa() {
    const t = procurarTurma(codTurma)
    const users = []

    const q = query(usersCollectionRef, where ("users", "in",
      [[{user: user?.id, avatar: user?.avatar, name: user?.name}]])
    )

    const admin = query(usersCollectionRef, where ("admin", "in",
      [[{user: user?.id, avatar: user?.avatar, name: user?.name}]])
    )
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if(doc.id === t){
        users.push(doc.id)
      }
    });

    const querySnapshotAdmin = await getDocs(admin);
    querySnapshotAdmin.forEach((doc) => {
      if(doc.id === t){
        users.push(doc.id)
      }
    });
    return users 
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
    if(t === false){
      alert("Turma não encontrada!")
    }else {
      const userConf = await procurarPessoa()
      const tur = procurarTurma(codTurma)
      if(userConf.length > 0){
        alert("Você já faz parte da turma!")
      }else {  
        await updateDoc(doc(db, "turma", tur), {
          users: arrayUnion({
            user: user.id,
            name: user.name,
            avatar: user.avatar
          })
        })
        navigate(`turma/${tur}`)
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
              <button>Entrar</button>
            </form>
          </ul>
            {turmas.map((turma) => {
              return (
                <CardTurmaItem user={turma} />
              );
            })}
        </main>
      </div>
      <Footer/>
    </div>
  );
}