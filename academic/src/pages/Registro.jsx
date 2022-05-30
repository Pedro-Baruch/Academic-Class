import { doc, setDoc } from 'firebase/firestore';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';


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
      await setDoc(doc(db, "users", user.id), {
        name: user.name,
        avatar: user.avatar,
        email: user.email
      });
      
      navigate('home')

    }



  }

  
  return (
    <div className="container">
      <div className="container-registro">
        <header className="registro">
          <form onSubmit= { handleSubmit}>
            <h1 className='registro-titulo'> Registro </h1>

            <label className='registro-texto'>Email: </label><br />
            <input 
              className='registro-campo' type="email" ref={emailRef}
            /><br />

            <label className='registro-texto'>Senha: </label><br />
            <input 
              className='registro-campo' type="password" ref={passwordRef} 
            /><br />

            <label className='registro-texto'>Confirmar Senha: </label><br />
            <input 
              className='registro-campo' type="password" ref={passwordConfirmRef} 
            /><br />
            <button className='registro-button'>Increver-se</button>
          </form>
        </header>
      </div>
    </div>
  )
}