import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Results} from './Pages/Results';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </Router>
  )
}

export default App;