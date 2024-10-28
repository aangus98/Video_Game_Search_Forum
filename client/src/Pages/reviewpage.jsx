import '../App.css';
import SearchBar from '../components/SearchBar';
import gamefologo from '../assets/gamefologo.png';

export function ReviewPage() {

  return (
    <div className="Bakcground container">
      <div className="page container">
        <header className="container"> 
          <div className="logo container">
            <img className="imagelogo container" src={gamefologo} width="900"></img>
          </div>
          <div className='container'>
            
            <SearchBar className="container"/>
            
          </div>
          
        </header>
      </div>
    </div>  
  )
};