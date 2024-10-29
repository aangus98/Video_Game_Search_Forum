import '../App.css';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import ReviewCard from '../components/ReviewCard';
import UserScore from '../components/UserScore';
import Extras from '../components/Extras';
import gamefologo from '../assets/gamefologo.png';
import { useContext, useEffect, useState } from 'react';
import { ResultsContext } from '../components/ResultsContext';
import { jwtDecode } from 'jwt-decode';

export function Results() {
  const {results} = useContext(ResultsContext);

  const gameDetails = results[0];
  const reviews = results[0].reviews || [];
  const recommendations = results[0].recommendations || [];
  const completionTimes = results[0].completionTimes || [];

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const isTokenExpired = decodedToken.exp * 1000 < Date.now();
        if (!isTokenExpired) {
          setIsAuthenticated(true);
        } else {
          alert("Session expired. Please log in again.");
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Invalid login token:", error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <div className="Bakcground container">
      <div className="page container">
        <header className="container"> 
          <div className="logo container">
            <img className="imagelogo container" src={gamefologo} width="900"></img>
          </div>
          <div className='container'>
            
            <SearchBar />
            
          </div>
          
        </header>
        <GameCard results={gameDetails} className="container"></GameCard>
        <div className="cardrow container">
          <ReviewCard reviews={reviews} />
          <UserScore reviews={reviews} isAuthenticated={isAuthenticated} />
        </div>
        <Extras recommendations={recommendations} completionTimes={completionTimes} isAuthenticated={isAuthenticated} />
      </div>
    </div>
  )
}

export default Results;