import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import './NavbarStyle.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const {user} = useAuth()
    
return(
<nav className="navbar">
    <ul className="navbar-item">
        <li className="navbar-titulo"><Link to="/home">Academic Class</Link></li>
    </ul>
    <div className="navbar-item" >
        <a href="#"> <img className="imagem-perfil" src={user?.avatar} alt="imagem-perfil" /></a>
    </div>
</nav>

)}


