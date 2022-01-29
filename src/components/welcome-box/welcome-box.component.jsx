import react from "react";

import "./welcome-box.styles.css";

const WelcomeBox = () => (
  <div className="welcome-box">
    <div className="welcome-message">
      <h1>Welcome John!</h1>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="get-jobs">
      <h3>How to get jobs with top U. S. companies.</h3>
      <div className="steps">
        <h5> &nbsp;&nbsp;1</h5>
        <p>Take 1 test</p>
      </div>
      <div className="steps">
        <h5> &nbsp;2</h5>
        <p>Pass live coding challenge</p>
      </div>
      <div className="steps">
        <h5> &nbsp;3</h5>
        <p>Finalize your resume</p>
      </div>
      <div className="steps">
        <h5> &nbsp;4</h5>
        <p>Receive job offers</p>
      </div>
    </div>
  </div>
);

export default WelcomeBox;
