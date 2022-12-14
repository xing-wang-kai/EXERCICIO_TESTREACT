import { useRecoilValue } from 'recoil';
import { erroState } from '../atom';

export const useErroState = () => {
    const setEvent = useRecoilValue<string>(erroState);
    return setEvent;
}