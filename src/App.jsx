import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Inscricao from './pages/Inscricao';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/Inscrição' element={<Inscricao/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
