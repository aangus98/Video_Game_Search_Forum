import { useNavigate } from "react-router-dom";

const Extras = ({recommendations, completionTimes, isAuthenticated}) => {
  const navigate = useNavigate();
  const handleAddPost = (postType) => {
    if (!isAuthenticated) {
      alert("Please log in to leave a post!");
    } else {
      navigate(`/addpost?type=${postType}`);
    }
  };
  
  return ( 
    <div className="gamecard">
      <div className="ribbon">
          <h2 className="ribbontext press-start-2p-regular">Extras</h2>
          <div className="boxrow">
            <div className="fakeb"> _ </div>
            <div className="fakeb"> □ </div>
            <div className="fakex"> ✖ </div>
          </div>
      </div>
    <div className="boxrow2">
      <div className="stack">
        <h3 className="textbox">Recommended Games</h3>
        {recommendations.length > 0 ? (
          recommendations.map((rec, index) => (
          <p key={index}>{rec.recommended_game_title}</p>
        ))
        ) : (
          <p>No recommendations yet</p>
        )}
        <p className="textbox">
            <button onClick={() => handleAddPost("recommendation")} className="greybutton">Add A Game</button>
          </p>
      </div>
      <div className="textbox">
        <h3>Completion <br />Times</h3>
        {completionTimes.length > 0 ? (
          completionTimes.map((time, index) => (
            <p key={index}>{time.completion_time}</p>
          ))
        ) : (
          <p>No times yet</p>
        )}
        <p className="textbox">
            <button onClick={() => handleAddPost("completiontime")} className="greybutton">Submit A Time</button>
          </p>
      </div>
      </div>
    </div>
   );
}
 
export default Extras;