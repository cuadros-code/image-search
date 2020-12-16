import React, { useState } from 'react'

export const Form = ({ setSaveWord }) => {


    const [label, setLabel] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if( label.trim() === '' || label.trim().length <= 2 ) {
            setError(true);
            return
        }
        
        setSaveWord(label);
        setError(false);
        setLabel('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="row mt-5" >
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control"
                        placeholder="Busca tu imagen"
                        autoComplete="off"
                        onChange={ e => setLabel(e.target.value) }
                        value={label}
                    />
                    {
                        error && <p className="error">Ingrese un termino correcto</p>
                    }
                </div>
                <div className=" col-md-4" >
                    <button
                        className="btn btn-primary btn-block"
                        type="submit"
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </form>
    )
}
