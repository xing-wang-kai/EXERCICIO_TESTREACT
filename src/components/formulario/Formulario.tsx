
import { useState, useRef } from 'react';
import { AddNameList } from '../../state/hook/addNameList';
import { ReturnErroState } from '../../state/hook/returnErrorState';

export default function Formulario(){

    const [ nome, setNome ] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);
    const addNameInTheList = AddNameList();
    const addName = ( evt: React.FormEvent<HTMLFormElement> ) => {
        evt.preventDefault();
        evt.stopPropagation();
        addNameInTheList(nome);
        setNome('');
        inputRef.current?.focus();
    }

    const errorMessage = ReturnErroState();


    return (
        <form onSubmit={ addName }>
            <label htmlFor="nome"></label>
            <input
                ref={inputRef}
                value={nome}
                onChange={ evt => setNome(evt.target.value)}
                className="nome" id='nome'
                type="text" placeholder='Insira o nome dos participantes' 
                required
                
                />
            <button disabled={!nome}>Adicionar! </button>
            {errorMessage && <p role="alert">{errorMessage}</p>}
        </form>
    );
}