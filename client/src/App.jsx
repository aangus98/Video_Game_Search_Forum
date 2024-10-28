import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Results} from './Pages/Results';
import { ReviewPage } from './Pages/ReviewPage';
import { ResultsProvider } from './components/ResultsContext';
function App() {

  return (
    <ResultsProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home  />}/>
        <Route exact path='/results' element={<Results  />}/>
        <Route exact path='/reviews' element={<ReviewPage/>}/>
      </Routes>
    </Router>
    </ResultsProvider>
  )
}

export default App;