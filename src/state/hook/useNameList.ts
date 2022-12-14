import { useRecoilValue } from 'recoil';
import { nameList } from '../atom';


const useNameList = () => {
    const names = useRecoilValue<string[]>(nameList);
    return names;
}

export default useNameList;