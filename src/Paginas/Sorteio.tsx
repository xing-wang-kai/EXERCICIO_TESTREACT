/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/rules-of-hooks */
import useNameList from '../state/hook/useNameList';
import { useState } from 'react';
import { useResultadoSorteio } from '../state/hook/useResultadoSorteio';
import Comp from './Sorteio.styles';
import Card from '../components/Card/card';

const Sorteio = ( ) => {

    const participante = useNameList();

    const [participanteDaVez, setParticipanteDavez ] = useState("");
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const resultado = useResultadoSorteio();

    const sortear = ( evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(resultado.has(participanteDaVez))
        {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
        
    }

    return(
        <Card>
        <Comp.section>
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={ sortear }>
                <Comp.select 
                    required 
                    name="participanteDaVez" 
                    id="participanteDavez" 
                    placeholder='Selecione o seu nome'
                    value={participanteDaVez}
                    onChange = { evt => setParticipanteDavez(evt.target.value)}
                >
                    <option>Selecione seu nome: </option>
                    {participante.map( name => <option key={name}>{name}</option>)}
                </Comp.select>
                <Comp.p>Clique em sortear para ver quem é seu amigo secreto!</Comp.p>
                <Comp.button>Sortear</Comp.button>
            </form>
            {amigoSecreto && <Comp.p role='alert'> Nome Sorteado: {amigoSecreto}</Comp.p>}
            <Comp.footer className="sorteio">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </Comp.footer>
        </Comp.section>
        </Card>
    )
}

export default Sorteio;