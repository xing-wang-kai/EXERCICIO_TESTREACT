/* eslint-disable react/jsx-pascal-case */
import Comp from "./Rodape.styled";
import GetNameList from '../../state/hook/useNameList';
import { useNavigate } from 'react-router-dom'
import { UseSorteador } from "../../Paginas/useSorteador";


const Rodape = () => {

    const participantes = GetNameList();
    const navigate = useNavigate();

    const sorteador = UseSorteador();

    const iniciar = () => {
        sorteador()
        navigate('/sorteio');
    }
    return (
        <div>
            <Comp.footer>
                
                    <Comp.button disabled={participantes.length < 3} onClick={iniciar}> Começar a Brincadeira</Comp.button>
                    <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
            </Comp.footer>
            <br />
            <hr />
            <Comp.h4>Feito com s2 por Kai wang</Comp.h4>
        </div>
    );
}

export default Rodape;