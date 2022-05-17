import ReactDOM from 'react-dom';
import './../pages/RegistroStyle.css';
import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app"
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { async } from '@firebase/util';

import { useNavigate } from 'react-router-dom'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBeUZICL0_YOZXyjMCXqEn4JTRjCBF9G5k",
  authDomain: "registro-591d2.firebaseapp.com",
  projectId: "registro-591d2",

});






export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [descrição, setDescrição] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const usersCollectionRef = collection(db, "criar");

  async function criarDado() {
    try {
      const user = await addDoc(collection(db, "criar"), {
        name,
        descrição,
      });

      console.log("dados salvos com sucessos", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  async function deleteUser(id) {
    const userDoc = doc(db, "users", id);
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
        <main class="turma-card">


          <ul class="card">
            <li className="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt="" /></a></li>
            <li className="card-item">
              <button onClick={() => navigate('criar')}><a>Criar turma</a></button>
            </li>
          </ul>
         
            {users.map((user) => {
              return (
                <>
                  <ul class='card'>
                    <li><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" /></li>
                    <li className="card-item" id="titulo-card">{user.nome}</li>
                    <li className="card-item" id="descricao-card">{user.descrição}</li>
                  </ul>

                </>
              );
            })}

          
        </main>
      </div>


    </div>);
}

export default Home;