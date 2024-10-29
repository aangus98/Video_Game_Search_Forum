import { useNavigate } from "react-router-dom";

const UserScore = ({reviews, isAuthenticated}) => {
  const navigate = useNavigate();
  const handleAddPost = (postType) => {
    if (!isAuthenticated) {
      alert("Please log in to leave a post!");
    } else {
      navigate(`/addpost?type=${postType}`);
    }
  };

  const averageUserScore = reviews && reviews.length > 0
  ? (reviews.reduce((sum, review) => sum + review.score, 0) / reviews.length).toFixed(1)
  : "Nothin'";

  return ( 
    <div className="gamecard">
      <div className="ribbon">
          <h2 className="ribbontext press-start-2p-regular">User Score</h2>
          <div className="boxrow">
            <div className="fakeb"> _ </div>
            <div className="fakeb"> □ </div>
            <div className="fakex"> ✖ </div>
          </div>
      </div>
      <div className="stack vcenter"> 
          <p className="textbox "> {averageUserScore} / 10 </p>
          <p className="textbox">
            <button onClick={() => handleAddPost("review")} className="greybutton">Leave yours!</button>
          </p>
       </div>
    </div>
   );
}
 
export default UserScore;