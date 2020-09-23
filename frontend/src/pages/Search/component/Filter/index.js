import React from 'react';
import './styles.css';

const Filtro = ({stateOpt,handleChangeOpt}) => (
    <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Selecione a <b>Raça</b></h2>
                    </div>
                    <div className="content-input">
                        <div className=".btn-group" data-toggle="buttons">
                            <label className="btn btn-info active">
                                <input type="radio" name="status" value="All" 
                                checked={stateOpt ==="All"}
                                onChange={handleChangeOpt}/> Todos
                            </label>
                            <label className="btn btn-success">
                                <input type="radio" name="status" value="Human"
                                checked={stateOpt === "Human"}
                                onChange={handleChangeOpt}/> Humanos
                            </label>
                            <label className="btn btn-warning">
                                <input type="radio" name="status" value="Robot"
                                checked={stateOpt === "Robot"}
                                onChange={handleChangeOpt}/> Robôs
                            </label>
                            <label className="btn btn-danger">
                                <input type="radio" name="status" value="Alien"
                                checked={stateOpt === "Alien"}
                                onChange={handleChangeOpt}/> Aliens
                            </label>
                            <label className="btn btn-info">
                                <input type="radio" name="status" value="Humanoid"
                                checked={stateOpt === "Humanoid"}
                                onChange={handleChangeOpt}/> Humanoids
                            </label>
                            <label className="btn btn-light">
                                <input type="radio" name="status" value="Animal"
                                checked={stateOpt === "Animal"}
                                onChange={handleChangeOpt}/> Animais
                            </label>
                            <label className="btn btn-success">
                                <input type="radio" name="status" value="Poopybutthole"
                                checked={stateOpt === "Poopybutthole"}
                                onChange={handleChangeOpt}/> Poopybutthole
                            </label>
                            <label className="btn btn-dark">
                                <input type="radio" name="status" value="unknown"
                                checked={stateOpt === "unknown"}
                                onChange={handleChangeOpt}/> Desconhecida
                            </label>							
                        </div>
                    </div>
                </div>
            </div>
);

export default Filtro;