

const ReviewCard = () => {
  const rev1a = "8.75";
  const rev1b = "Review Title One";
  const rev2a = "6.50";
  const rev2b = "Review Title Two";

  return ( 
    <div className="gamecard">
      <div className="ribbon">
          <h2 className="ribbontext press-start-2p-regular">Reviews</h2>
          <div className="boxrow">
            <div className="fakeb"> _ </div>
            <div className="fakeb"> □ </div>
            <div className="fakex"> ✖ </div>
          </div>
          {/* <div className="fakex">X</div> */}
      </div>
      
      <div className="stack jersey-20-charted-regular"> 
          <p className="textbox "> {rev1a} | {rev1b} </p>
          <p className="textbox "> {rev2a} | {rev2b} </p>
       </div>

    </div>
   );
}
 
export default ReviewCard;