import React from "react";

import IceCreamBox from "../iceCream/Box/Box";
import { sidesMap, speciesMap } from "../iceCream/iceCream";

export default ({ species, sides, price }) => {
  const side = sidesMap.get(sides);
  const flavors = species.map((s) => speciesMap.get(s));
  const FlavorOutput = species.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "8px",
        }}
        key={ig}
      >
        {ig}
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Flavors: {FlavorOutput}</p>
      <p>Side: {sides}</p>
      <p>
        Price: <strong>{price}Ⓝ</strong>
      </p>
      <div className="icecream">
        <IceCreamBox side={side} flavors={flavors} />
      </div>
      <style>{`
        .Order {
            width: 80%;
            height: 200px;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 15px;
            margin:20px auto;
            box-sizing: border-box;
            background: #ffffe6;
        }
        .icecream {
          height: 200px;
          position: relative;
          left: 30%;
          top: -20vh;
        }
        `}</style>
    </div>
  );
};
