/* eslint-disable react/jsx-pascal-case */

import { useState, useRef } from 'react';
import { AddNameList } from '../../state/hook/addNameList';
import { useErroState } from '../../state/hook/useErrorState';
import Comp from './formulario.estyled';

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

    const errorMessage = useErroState();

    return (
        
            <form onSubmit={ addName }>
                <Comp.div>
                    <label htmlFor="nome"></label>
                    <Comp.input
                        ref={inputRef}
                        value={nome}
                        onChange={ evt => setNome(evt.target.value.toUpperCase())}
                        className="nome" id='nome'
                        type="text" placeholder='Insira o nome dos participantes' 
                        required
                        
                        />
                    <Comp.button disabled={!nome}>Adicionar! </Comp.button>
                </Comp.div>
                {errorMessage && <Comp.p role="alert">{errorMessage}</Comp.p>}
            </form>
        
    );
}