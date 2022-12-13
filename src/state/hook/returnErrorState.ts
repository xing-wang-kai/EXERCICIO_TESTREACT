import { useRecoilValue } from 'recoil';
import { erroState } from '../atom';

export const ReturnErroState = () => {
    const setEvent = useRecoilValue<string>(erroState);
    return setEvent;
}