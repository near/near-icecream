import React from "react";

export default ({ show, clicked }) =>
  show ? (
    <div
      onClick={clicked}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "10",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    ></div>
  ) : null;
