import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './../pages/RegistroStyle.css';


export const Registro = () => {
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if(!(emailRef.current.value && passwordRef.current.value && passwordConfirmRef.current.value)){
      return alert('Todos os campos devem ser preenchidos!')
    }
    
    if(passwordRef.current.value.length < 6){
      return alert('A senha deve ter 6 ou mais caracteres!')
    }

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return alert("A confiramação de senha não corresponde com senha!")
    }
    
    try {
      signup(emailRef.current.value, passwordRef.current.value) 
      navigate('home')
    } catch {
      alert('Falha em fazer o cadrastro!')
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