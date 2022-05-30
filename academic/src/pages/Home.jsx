import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardTurmaItem } from '../componentes/CardTurmaItem';
import { ColunaTumas } from '../componentes/ColunaTurmas';
import { Footer } from '../componentes/Footer';
import { Navbar } from '../componentes/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';


export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [descrição, setDescrição] = useState("");
  const [turmas, setTurmas] = useState([]);
  const {currentUser, signup} = useAuth()

  const usersCollectionRef = collection(db, "turma");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setTurmas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return getUsers
  }, []);

  async function deleteUser(id) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  return (
    <div class="container">
      <Navbar/>
      <div class="row">
        <ColunaTumas/>
        <main class="turma-card">
          <ul class="card">
            <li className="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt="" /></a></li>
            <li className="card-item">
              <button onClick={() => navigate('criar')}>Criar turma</button>
            </li>
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