import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Results} from './Pages/Results';
import { SignIn } from './Pages/SignIn';
import { ResultsProvider } from './components/ResultsContext';
function App() {

  return (
    <ResultsProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home  />}/>
        <Route exact path='/results' element={<Results  />}/>
        <Route exact path='/signin' element={<SignIn />}/>
      </Routes>
    </Router>
    </ResultsProvider>
  )
}

export default App;