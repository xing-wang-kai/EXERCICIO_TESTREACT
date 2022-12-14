import useNameList from '../state/hook/useNameList';
import { useSetRecoilState } from 'recoil';
import { resultNames } from '../state/atom';
import { realizarSorteio } from '../state/helps/realizarSorteio';


export const UseSorteador = ( ) => {

    const names = useNameList();
    const setResult = useSetRecoilState<Map<string, string>>(resultNames);

    return ( ) => {
        const resultado = realizarSorteio(names);

        setResult(resultado);
    }
}