import React from 'react';
import './styles.css';

const Lista = props => {

    return(
    <div>
         <table className="character-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Sexo</th>
                        <th>Episódios</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.lista?.content.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={item.image} className="character-image" alt="personagemIco" />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <div className="div-list">
                                        {item.episode.map(element => (element + '\n'))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
    </div>
    );
}

export default Lista;