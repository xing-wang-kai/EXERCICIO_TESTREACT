import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { HeaderComponent } from './components/cabecalho';
import { Global } from './components/global';
import Configure from './Paginas/Configure';
import Sorteio from './Paginas/Sorteio';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Global/>
        <HeaderComponent/>
        <Routes>
          <Route path='/'        element={<Configure/>} />
          <Route path='/sorteio' element={<Sorteio/>}   />
        </Routes>
      </RecoilRoot>
    </Router>
    
  );
}

export default App;
