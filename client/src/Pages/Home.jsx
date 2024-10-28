import '../App.css';
import SearchBar from '../components/SearchBar';
import gamefologo from '../assets/gamefologo.png';
import { useContext } from 'react';
import { ResultsContext } from '../components/ResultsContext';

export function Home() {
  const {setResults} = useContext(ResultsContext);

  return (
    <div className="Bakcground container">
      <div className="page container">
        <header className="container"> 
          <div className="logo container">
            <img className="imagelogo container" src={gamefologo} width="900"></img>
          </div>
          <div className='container'>
            
            <SearchBar setResults={setResults} />
            
          </div>
          
        </header>
      </div>
    </div>  
  )
};

export default Home;