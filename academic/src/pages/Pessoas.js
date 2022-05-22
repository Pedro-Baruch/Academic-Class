import './../pages/RegistroStyle.css';

export function Pessoas(){


    return(
        <div className='pessoas-turma'>
            <nav class="main-nav">
                <a href="http://localhost:3000/home/post">Publicações</a>
                <a href="http://localhost:3000/home/pessoas">Pessoas</a>
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
    )
}