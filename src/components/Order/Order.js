import React from "react";

export default ({ species, sides, price }) => {
  const FlavorOutput = species.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
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
      <style>{`
        .Order {
            width: 80%;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 10px;
            margin: 10px auto;
            box-sizing: border-box;
        }`}</style>
    </div>
  );
};
