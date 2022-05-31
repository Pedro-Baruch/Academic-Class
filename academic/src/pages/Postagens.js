import './../pages/RegistroStyle.css';
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app"
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { async } from '@firebase/util';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBeUZICL0_YOZXyjMCXqEn4JTRjCBF9G5k",
    authDomain: "registro-591d2.firebaseapp.com",
    projectId: "registro-591d2",
  
  });

export function Post(){
    

    const db = getFirestore(firebaseApp);
    const usersCollectionRef = collection(db,'/criar/3IPKXVngxru1ut5YCQsC/posts')

    const [title, setTitle] = useState('');
    const [descrição, setDescrição] = useState('');
    const [users, setUsers] = useState('');
    
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      }, []);
    
    
  
       
    return(
        <div className='posts-turma'>
            <nav className="main-nav">
                <a href="http://localhost:3000/home/post">Publicações</a>
                <a href="http://localhost:3000/home/pessoas">Pessoas</a>
                <a href="http://localhost:3000/home/atividade">Atividades</a>
            </nav>
            <section class="info-turma">
                <h2>Turma 01</h2>
                <p>Descrição da turma</p>
                <div className='botao-criar'>
                    <a className='botao' href="http://localhost:3000/home/criarPost" >+</a>
                </div>
            </section>
            <div className="posts">
                <div className='post'>
                    <img className='imagem-perfil-post' src=""></img>
                    <h2 className="nome-user">NomeUser</h2>
                    <p>dataPost</p>
                    <div class="postagem">
                        <p>asdfasfsafsafsfsfs</p>
                    </div>
                </div>    
            </div>

            {users.map((user) => {
              return (
                <>
                  
                  <div className='post'>
                    <img className='imagem-perfil-post' src=""></img>
                    <h2 className="nome-user">NomeUser</h2>
                    <p>dataPost</p>
                    <div class="postagem">
                       {user.descrição}
                    </div>
                </div>    
                  

                </>
              );
            })}
            
        </div>
    )

}