import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="header">

        <div className="header-wrapper">

        <img src='/images/logo.svg' alt="logo" />

          <nav className="nav">
              <Link to="/home" className="link-nav">Home</Link>
              <select className="link-nav" defaultValue="/dataset">
                  <option>Chamados</option>
                  <option>Novo Feature / Hotfix</option>
                  <option>Buscar</option>
              </select>
              <select className="link-nav" defaultValue="/train-model">
                  <option value="/train-model">Gerenciar</option>
                  <option>Usuários</option>
                  <option>Grupos</option>
              </select>
          </nav>

          <div className="div-username-exit">
              <Link to="/user" className="username">Usuário</Link>
              <img className="img-user" src='/images/User.svg' alt="user" />
          </div>
          </div>

      </header>
  )
}

export default Header;
