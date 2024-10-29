
const Extras = () => {

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
        <p className="textbox">test</p>
        <p className="textbox">test</p>
        <p className="textbox">test</p>
        <p className="textbox">
            <button className="greybutton">Add A Game</button>
          </p>
      </div>
      <div className="stack">
        <h3 className="textbox">Completion Times</h3>
        <p className="textbox">test</p>
        <p className="textbox">test</p>
        <p className="textbox">
            <button className="greybutton">Submit A Time</button>
          </p>
      </div>
      </div>
    </div>
   );
}
 
export default Extras;