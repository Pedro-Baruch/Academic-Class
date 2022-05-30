import { doc } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../componentes/Navbar';
import { db } from '../services/firebase-config';
import './../pages/RegistroStyle.css';

export function Pessoas(){
    const {id } = useParams()
    const sfDocRef = doc(db, "turma", id)


    return(
        <div className='container'>
            <Navbar/>
            <div className='pessoas-turma'>
                <nav class="main-nav">
                    <a href="http://localhost:3000/home/post">Publicações</a>
                    <Link to={`/home/turma/${id}/pessoas`}>Pessoas</Link>
                    <a href="http://localhost:3000/home/atividade">Atividades</a>
                </nav>
                <div className="pessoas">
                    <h2 className="pessoas-titulo">Professores</h2>
                    <ul className="pessoas-objeto">
                        <li><img className="foto-pessoas" src=""></img></li>
                        <li className="nome-pessoas">Nome</li>
                    </ul>
                    <h2 className="pessoas-titulo">Alunos</h2>
                    <ul className="pessoas-objeto">
                        <li><img className="foto-pessoas" src=""></img></li>
                        <li className="nome-pessoas">Nome</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}