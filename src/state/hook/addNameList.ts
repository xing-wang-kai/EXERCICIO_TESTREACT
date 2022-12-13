import { useSetRecoilState, useRecoilValue } from 'recoil';
import { nameList, erroState } from '../atom';



export const AddNameList = () => {
    const event = useSetRecoilState<string[]>(nameList);
    const lista = useRecoilValue<string[]>(nameList);
    const setError = useSetRecoilState<string>(erroState);

    return ( name: string ) => {
        if(lista.includes(name)){
            setError('Nomes duplicados não são permitidos!');
            
            setTimeout( () => {setError('')}, 3000);
            setTimeout(() => {
                setError("")
            }, 5000)
            return            
        }
        return event( ( item ) => [...item, name])
    }
}