import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';



export const Registro = () => {
  const navigate = useNavigate()
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [users, SetUser] = useState('');


  const usercollectionRef = collection(db, 'registro')


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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


  const handleSubmit = (e) => {


    alert('Conta criada com sucesso');

    e.preventDefault();

  }

  async function CriarUser() {

    const user = await addDoc(usercollectionRef, {
      nome,
      email,
      senha,

    });
    console.log(user);
    if (nome == null || email == null || senha == null){
      return console.error("oi")
    }else{
      navigate('home')
    }
  }


  async function deleteUser(id) {
    const userDoc = doc(db, 'registro', id);
    await deleteDoc(userDoc);
  }
  



  return (
    <div className="container">
     

    <div className="container-registro">


      <header className="registro">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          { }
          <h1 className='registro-titulo'> Registro </h1>


          <label className='registro-texto'>
            Name:
          </label><br />
          <input className='registro-campo' type="text" value={nome}
            required onChange={(e) => { handleChange(e) }} /><br />



          <label className='registro-texto'>
            Email:
          </label><br />
          <input className='registro-campo' type="email" value={email}
            required onChange={(e) => { handleEmailChange(e) }} /><br />

          <label className='registro-texto'>
            Password:
          </label><br />
          <input className='registro-campo' type="password" value={senha}
            required onChange={(e) => { handlePasswordChange(e) }} /><br />

          <button className='registro-button' onClick={CriarUser}>Submit</button>

        </form>
      </header>
    </div>
  </div>
  )
}