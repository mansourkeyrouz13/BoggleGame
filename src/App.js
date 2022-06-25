import './App.css';
import {Welcome} from './components/Welcome';
import {Game} from './components/Game';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/game/:time' element={<Game/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
