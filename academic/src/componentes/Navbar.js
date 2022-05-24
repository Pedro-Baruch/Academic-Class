import React from "react";
import './NavbarStyle.css';

export const Navbar = () => {
return(
<nav className="navbar">
    <ul className="navbar-item">
        <li className="navbar-titulo"><a href="http://localhost:3000/home">Academic Class</a></li>
    </ul>
    <div className="navbar-item" >
        <a href="#"><img className="imagem-perfil" src="https://thumbs.dreamstime.com/b/imagem-nima-do-perfil-do-homem-de-neg%C3%B3cio-57594504.jpg" alt="imagem-perfil" /></a>
    </div>
</nav>

)}


