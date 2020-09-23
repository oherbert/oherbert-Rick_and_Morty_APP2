import React from 'react';
import './styles.css';
import { ReactComponent as Icon } from '../../assets/Seta.svg';
import Nave from '../../assets/foguete.png';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">

        <div className="home-text">
            <h1 className="home-text-title" >
                Quer conhecer os personagens da serie Rick and Morty?
            </h1>
            <h3 className="home-text-subtitle">
                Neste APP você pode buscar os dados de cada personagem
                pela sua localização.
            </h3>
            <Link to="/search">
            <div className="home-actions">
                <button className="home-btn">
                    Quer conhecer este mundo?
                    </button>
                <span className="home-btn-icon">
                    <Icon />
                </span>
            </div>
            </Link>
        </div>
        <span>
            <img src={Nave} className="home-image" alt="imageHome" />
        </span>



    </div>
);

export default Home;