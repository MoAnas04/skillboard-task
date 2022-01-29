import react from "react";
import image from "./work-chat.png";

import "./why-box.styles.css";

const WhyBox = () => (
  <div className="why-box">
    <div className="image">
      <img src={image} alt="image" height="400px" width="400px"></img>
    </div>
    <div className="points">
      <h2>
        <br></br>
        Why Join?
      </h2>
      <br></br>

      <ul>
        <li>Work full-time at top silicon valley or other U. S. companies.</li>
        <br></br>
        <li>Earn a better salary compared to local companies in your city.</li>
        <br></br>
        <li>
          Grow as a developer by working with the smartest engineers from all
          over the world.
        </li>
        <br></br>
        <li>
          Get paid monthly directly to your bank account. Forget about issues
          with PayPal or Payoneer.
        </li>
      </ul>
    </div>
  </div>
);

export default WhyBox;
