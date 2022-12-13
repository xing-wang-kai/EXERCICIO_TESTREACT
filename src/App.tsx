import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { HeaderComponent } from './components/cabecalho';
import Formulario from './components/formulario/Formulario';
import { Global } from './components/formulario/global';
import ParticipantesList from './components/formulario/ParticipantesList';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Global/>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element={<Formulario/>}/>
        </Routes>
        <ParticipantesList/>
      </RecoilRoot>
    </Router>
    
  );
}

export default App;
