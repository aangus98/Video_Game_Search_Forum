import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Results} from './Pages/Results';
import { ReviewPage } from './Pages/ReviewPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/results' element={<Results />}/>
        <Route exact path='/reviews' element={<ReviewPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;