import GetNameList from '../../state/hook/GetNameList';


export default function ParticipantesList()
{

    const participantes: string[] = GetNameList();

    return (
        <div>
            <h3>NOMES NA LISTA DE PARTICIPANTES: </h3>
            <ul>
                {participantes.map( (part) =>  <li key={part}>{part}</li>)}
            </ul>
        </div>
    );
}