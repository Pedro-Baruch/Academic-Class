import './../pages/RegistroStyle.css';

export function Post(){


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
                        <p>Postagem</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}