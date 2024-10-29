

const ReviewCard = ({reviews}) => {

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
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
          <p key={index} className="textbox">
            {review.score} | {review.content}
          </p>
        ))
        ) : (
          <p className="textbox">Be the first to review!</p>
        )
        }
       </div>

    </div>
   );
}
 
export default ReviewCard;