import React, {useState} from 'react';
import './styles.css';

const Formulario = ({requere,updateUrl}) => {
    
    const [stateTextBox, setTextBox] = useState('');
    const handleChange = event => setTextBox(event.target.value);
    
    return(
    <div>
        <form onSubmit={requere}>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="formGroupExampleInput">
                    </label>
                    <input type="text" className="form-control"
                        placeholder="Digite a localização dos personagens que você deseja buscar"
                        required
                        value={stateTextBox}
                        onChange={handleChange}
                    />
                    <span>
                        <button type="submit" className="btn btn-success" onClick={() => (updateUrl(stateTextBox))}>
                            Procurar
                                </button>
                    </span>
                </div>
            </div>
        </form>
    </div>
)}


export default Formulario;