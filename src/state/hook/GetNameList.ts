import { useRecoilValue } from 'recoil';
import { nameList } from '../atom';


const GetNameList = () => {
    const names = useRecoilValue<string[]>(nameList);
    return names;
}

export default GetNameList;