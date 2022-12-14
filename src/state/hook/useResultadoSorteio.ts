import { useRecoilValue } from 'recoil';
import { resultNames } from '../atom';

export const useResultadoSorteio = () => {
    return useRecoilValue(resultNames)
}