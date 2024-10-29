import { useNavigate} from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { ResultsContext } from "./ResultsContext";

const BackButton = () => {
    const navigate = useNavigate();
    const {setResults} = useContext(ResultsContext);

    const handleBack = async () => {
      const storedGame = sessionStorage.getItem('searchedGameData');
      if (storedGame) {
        const gameData = JSON.parse(storedGame);
        const gameName = gameData.name;
        const api_id = gameData.id;

        try {
          const response = await axios.post('https://video-game-search-forum.onrender.com/api/search', {
            query: gameName,
          });
            let userContent = {};
    
            const checkForGame = await axios.get(`https://video-game-search-forum.onrender.com/api/games/check/${api_id}`);
            
            if (checkForGame.data.exists) {
              const game_id = checkForGame.data.id;
              const [reviewResponse, recommendationResponse, completionTimeResponse] = await Promise.all([
                axios.get(`https://video-game-search-forum.onrender.com/api/reviews/game/${game_id}`),
                axios.get(`https://video-game-search-forum.onrender.com/api/recommendations/game/${game_id}`),
                axios.get(`https://video-game-search-forum.onrender.com/api/completiontimes/game/${game_id}`)
              ]);
              
              userContent = {
                reviews: reviewResponse.data,
                recommendations: recommendationResponse.data,
                completionTimes: completionTimeResponse.data
              }
            }
            setResults([{...response.data, ...userContent}]);
            navigate('/results')      
        } catch (error) {
          console.log('Oh god, not an error!', error);
      }
    } else {
      navigate('/');
    }
  };

    return (
        <>
          <button onClick={handleBack} className="greybutton bfont none"> Back </button> 
        </>
    );
};

export default BackButton;