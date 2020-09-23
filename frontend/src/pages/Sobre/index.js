import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sobre = () => {

    const [stateData, setstateData] = useState();

    useEffect(() => {
        axios.get("https://api.github.com/users/oherbert")
            .then(response => setstateData(response.data))
            .catch(setstateData(undefined))
    }, [])
    const SOBRE = `Sou um aspirante a Dev que ama aprender novas tecnologias,\n 
    fiquei muito feliz em desenvolver este APP, sei que tenho muito que aprender ainda\n
    mas a estrada é longa e não podemos parar, abraço a todos vocês da Sênior, e muito obrigado!`;
    
    let sobre = (stateData !== undefined)? SOBRE: '';
    let href = stateData?.blog;

    return (
        <div className="container text-center">
            <div className="py-5">

                <h1 className="pt-3">
                    <a href={href} target="_new">
                        {stateData?.name}
                    </a>
                </h1>

                <img src={stateData?.avatar_url}
                    className="reponsive rounded-circle"
                    alt={"Erro ao carregar a imagem"}
                    height="200px"
                />
                <h3>{stateData?.location}</h3>
                <br/>
                <h3>{sobre}</h3>
                
            </div>
        </div>
    );

}

export default Sobre;