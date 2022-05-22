import './../pages/RegistroStyle.css';

export function Atividades(){


    return(
        <div className='atividades-turma'>
            <nav class="main-nav">
                <a href="http://localhost:3000/home/post">Publicações</a>
                <a href="http://localhost:3000/home/pessoas">Pessoas</a>
                <a href="http://localhost:3000/home/atividade">Atividades</a>
            </nav>
            <div className='atividades'>
                <h2 className='atividades-titulo'>Atividades</h2>
                <ul className='atividades-objeto'>
                    <li>Nome</li>
                    <li>Data de entrega</li>
                </ul>
            </div>
        </div>
    )
}