import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';



function App() {
return( <div class="container">
<nav class="navbar">
    <ul class="navbar-item">
        <li class="navbar-titulo"><a href="#">Academic Class</a></li>
    </ul>
    <div class="navbar-item">
        <a href="#"><img class="imagem-perfil" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" alt="imagem-perfil"/></a>
    </div>
</nav>
<div class="row">
    <aside class="coluna-turma">
        <ul class="coluna-lista">
            <li class="coluna-item" id="coluna-topico"><a href="home-page.html">Turmas</a></li>
            <li class="coluna-item" id="coluna-subtopico"><a href="publicacao-turma.html">Turma 01</a></li>
            <li class="coluna-item" id="coluna-subtopico"><a href="">NomeTurma</a></li>
            <li class="coluna-item" id="coluna-subtopico"><a href="">NomeTurma</a></li>
        </ul>
        <ul class="coluna-lista">
            <li class="coluna-item" id="coluna-topico"><a href="">T.Encerradas</a></li>
        </ul>
        <ul class="coluna-lista">
            <li class="coluna-item" id="coluna-topico"><a href="">Configurações</a></li>
        </ul>
    </aside>
    <main class="turma-card">
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt=""/></a></li>
            <li class="card-item" id="titulo-card"><a href="publicacao-turma.html">Turma 01</a></li>
            <li class="card-item" id="descricao-card"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
        </ul>
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt=""/></a></li>
            <li class="card-item" id="titulo-card"><a href="#">NomeTurma</a></li>
            <li class="card-item" id="descricao-card"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
        </ul>
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src='https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg' alt=""/></a></li>
            <li class="card-item" id="titulo-card"><a href="#">NomeTurma</a></li>
            <li class="card-item" id="descricao-card"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
        </ul>
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt=""/></a></li>
            <li class="card-item" id="titulo-card"><a href="#">NomeTurma</a></li>
            <li class="card-item" id="descricao-card"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
        </ul>
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt=""/></a></li>
            <li class="card-item" id="titulo-card"><a href="#">NomeTurma</a></li>
            <li class="card-item" id="descricao-card"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
        </ul>
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt=""/></a></li>
            <li class="card-item" id="titulo-card"><a href="#">NomeTurma</a></li>
            <li class="card-item" id="descricao-card"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
        </ul>
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt=""/></a></li>
            <li class="card-item">
                <button class="button-card"><a href="#">Criar turma</a></button>
            </li>
        </ul>
        <ul class="card">
            <li class="card-imagem"><a href="#"><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" alt=""/></a></li>
            <li class="card-item" id="descicao-card">Insira o código da turma</li>
            <li class="card-item">
                <form>
                    <input id="cod" type = "text" placeholder="Código da turma"/>
                    <button class="button-card" type="submit"><a href="?">Entrar</a></button>
                </form>
            </li>
        </ul>
    </main>
</div>
<footer class="rodape">
    <a href="#">&copy;AcademicClass 2022.</a>
</footer>
</div> );
}


export default App;
