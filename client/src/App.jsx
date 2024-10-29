import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Results} from './Pages/Results';
import { SignIn } from './Pages/SignIn';
import { ResultsProvider } from './components/ResultsContext';
import AddPost from './Pages/AddPost';
function App() {

  return (
    <ResultsProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home  />}/>
        <Route exact path='/results' element={<Results  />}/>
        <Route exact path='/signin' element={<SignIn />}/>
        <Route exact path='/addpost' element={<AddPost />}/>
      </Routes>
    </Router>
    </ResultsProvider>
  )
}

export default App;