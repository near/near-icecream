import React from "react";

import iceCreamBox from "../../assets/ice_cream_box.svg";
import iceCreamBall from "../../assets/ice_cream_ball.svg";

export default ({ species, side }) => {
  console.log(species);
  console.log(side);
  return (
    <div className="wrapper">
      <img src={iceCreamBall} style={{ width: "200px" }} />
      <img src={iceCreamBox} style={{ width: "300px" }} />
      <style>{`
    .wrapper {
        width: 100%;
        margin: auto;
        height: 250px;
        overflow: scroll;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }
    
    @media (min-width: 500px) and (min-height: 400px) {
        .wrapper {
            width: 350px;
            height: 300px;
        }
    }
    
    @media (min-width: 500px) and (min-height: 401px) {
        .wrapper {
            width: 450px;
            height: 400px;
        }
    }
    
    @media (min-width: 1000px) and (min-height: 700px) {
        .wrapper {
            width: 700px;
            height: 600px;
        }
    }
    `}</style>
    </div>
  );
};

const speciesMap = new Map([
  ["red", "#FAC8D3"],
  ["purple", "#DD98E2"],
  ["blue", "#C5D9EE"],
  ["pink", "#F6ECF1"],
  ["green", "#CEFFE9"],
]);
