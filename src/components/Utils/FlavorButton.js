import React from "react";

export default ({ disabled, selected, added, removed, children }) => (
  <button
    disabled={disabled && !selected}
    onClick={selected ? removed : added}
    style={{ backgroundColor: selected ? "#ffb3d9" : "#ffd9b3" }}
    className="flavorButton"
  >
    {children}
    <style>{`
        .flavorButton {
            border-radius: 50%;
            color: #86592d;
            outline: none;
            cursor: pointer;
            font-size: 14px;
            padding: 10px;
            margin: 10px;
            font-weight: bold;
        }
        
        .flavorButton:disabled {
            color: #e6e6e6;
            cursor: not-allowed;
        }

        `}</style>
  </button>
);
