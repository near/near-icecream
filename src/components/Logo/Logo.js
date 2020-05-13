import React from "react";

import Logo from "../../assets/ice_cream_logo.png";

export default ({ height }) => (
  <div className="Logo" style={{ height: height }}>
    <img src={Logo} alt="IceCream" />
    <style>{`
    .Logo {
        background-color: white;
        padding: 8px;
        height: 100%;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .Logo img {
        height: 100%;
    }`}</style>
  </div>
);
