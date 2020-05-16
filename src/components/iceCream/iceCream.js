import React from "react";

import IceCreamBox from "./Box/Box";

export default ({ species, sides }) => {
  const side = sidesMap.get(sides);
  const flavors = species.map((s) => speciesMap.get(s));
  return (
    <div className="wrapper">
      <IceCreamBox side={side} flavors={flavors} />
      <style>{`
    .wrapper {
        width: 600px;
        max-width: 100%;
        height: 100%;
        margin: auto;
        margin-bottom: 30px;
        text-align: center;
    }
    `}</style>
    </div>
  );
};

export const sidesMap = new Map([
  ["chocolate", "#7B3F00"],
  ["matcha", "#AAD400"],
  ["strawberry", "#E66363"],
]);

export const speciesMap = new Map([
  ["apple", "#FAC8D3"],
  ["grape", "#DD98E2"],
  ["blueberry", "#C5D9EE"],
  ["vanilla", "#F6ECF1"],
  ["lime", "#CEFFE9"],
  ["strawberry", "#ff0066"],
  ["orange", "#ffb31a"],
  ["pineapple", "#ffff66"],
  ["peach", "#ffb3ff"],
  ["oreo", "#331a00"],
  ["coffee", "#664400"],
  ["walnut", "#7f5b51"],
  ["peanut butter", "#cd9141"],
  ["sweet potato", "#fea134"],
]);
