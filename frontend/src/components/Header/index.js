import React from 'react';
import  Logo  from '../../assets/logo.png';
import './styles.css'

const Header = () => (
    <div>
        <header className="main-header">
        <img  src={Logo} className="logo-image"  alt="imageLogo"/>
            <h1 className="logo-text">
                Rick and Morty App
            </h1>
            <nav className="navbar navbar-expand-sm bg-green navbar-dark">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/search">Busca</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
);

export default Header;