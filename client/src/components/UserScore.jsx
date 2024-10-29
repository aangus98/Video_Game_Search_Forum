const UserScore = ({reviews}) => {

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
            <button className="greybutton">Leave yours!</button>
          </p>
       </div>
    </div>
   );
}
 
export default UserScore;