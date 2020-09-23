import React, { useState } from 'react';
import Lista from './component/List';
import Filtro from './component/Filter';
import Formulario from './component/Formulario';
import './styles.css';

const Search = () => {

    const port = '3030';
    
    const [stateLista, setListaState] = useState();
    const [stateOpt, setStateOpt] = useState('All');

    let uri = `http://localhost:${port}/personagem/location?location=`;

    function updateUrl(value) {
        uri += value;
        if (stateOpt !== 'All') {
            uri += `&species=${stateOpt}`;
        }
    }

    const requere = (event) => {
        event.preventDefault();
        fetch(uri)
            .then(response => response.json())
            .then(clientResponse => setListaState(clientResponse))
            .catch(() => console.log("Erro ao buscar os personagens"), setListaState(undefined));
    }

    const handleChangeOpt = event => setStateOpt(event.target.value);


    return (
        <div className="page-container">
            <div className="table-responsive">
                <div className="table-wrapper">

                    <Filtro stateOpt={stateOpt} handleChangeOpt={handleChangeOpt} />
                    <Formulario requere={requere} updateUrl={updateUrl} />
                    <Lista lista={stateLista} />

                </div>
            </div>
        </div>

    );
}

export default Search;