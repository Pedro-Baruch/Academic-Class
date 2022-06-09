import { doc, setDoc } from 'firebase/firestore';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './RegistroStyles.css';


export const Registro = () => {
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, user } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    
    if(!user){
      await signup()
    }else {
      await setDoc(doc(db, "users", user?.id), {
        id: user?.id,
        name: user?.name,
        avatar: user?.avatar,
        email: user?.email,
        turmas: [],
        atividades: [],
        post: [],
      });
      
      navigate('home')

    }



  }

  return (
    <div className='imagem-fundo'>
      <div className='container-reg'>
        <ul className='sobre'>
          <li className='titulo-sobre'>Sobre Academic Class</li>
          <li className='texto-sobre'>Em meio às constantes prevenção adotadas para combater o vírus COVID-19, surgiu a dificuldade de ocorrer aulas presenciais e isso se tornou um desafio para a continuação da educação nas instituições de ensino. </li>
          <li className='texto-sobre'>Nesse sentido, o Academic Class foi projetado para auxiliar professores, alunos e escolas a simularem ensinamentos presenciais, proporcionando às turmas comunicar-se e manter as aulas a distância mais organizadas.</li>
        </ul>
      <form className='google-reg' onSubmit= { handleSubmit }>
        <img className='google-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
        <button className='button-reg'>Faça registro pelo google</button>
      </form>
    </div>
    </div>
  )
}

