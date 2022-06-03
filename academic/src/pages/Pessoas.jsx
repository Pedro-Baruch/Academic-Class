import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../componentes/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';

export const Pessoas = () => {
    const {id } = useParams()
    const [pessoas, setPessoas] = useState([])
    const [admin, setAdmin] = useState([])
    const {user} = useAuth()
   

    useEffect(() => {
        onSnapshot(doc(db, 'turma', `${id}` ), (doc) => {
            setPessoas(doc.data()?.users)
            setAdmin(doc.data()?.admin)
        })
    }, [user?.id])
    
    return(
        <div className='container'>
            <Navbar/>
            <div className='pessoas-turma'>
                <nav class="main-nav">
                    <a href="http://localhost:3000/home/post">Publicações</a>
                    <Link to={`/home/turma/${id}/pessoas`}>Pessoas</Link>
                    <Link to={`/home/turma/${id}/atividades`}>Atividades</Link>
                </nav>
                <div className="pessoas">
                    <h2 className="pessoas-titulo">Professores</h2>
                    {admin.map((item, id) => {
                        return(
                            <ul className="pessoas-objeto" key={id} >
                                <li >
                                    <img className="foto-pessoas" src={item?.avatar} alt='foto do perfil'/>
                                </li>
                                <li className="nome-pessoas">{item?.name}</li>
                            </ul>
                        )
                    })}
                    <h2 className="pessoas-titulo">Alunos</h2>
                    {pessoas.map((item, id) => {
                        return(
                            <ul className="pessoas-objeto" key={id} >
                                <li >
                                    <img className="foto-pessoas" src={item?.avatar} alt='foto do perfil'/>
                                </li>
                                <li className="nome-pessoas">{item?.name}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}