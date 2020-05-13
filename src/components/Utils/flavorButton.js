import React from "react";

export default ({ disabled, selected, added, removed, children }) => {
  const clicked = () => {
    if (selected) {
      return added;
    } else {
      return removed;
    }
  };
  return (
    <button
      disabled={disabled}
      onClick={clicked}
      style={{ backgroundColor: selected ? "blue" : "white" }}
    >
      {children}
    </button>
  );
};
