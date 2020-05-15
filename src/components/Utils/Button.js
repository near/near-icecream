import React from "react";

export default ({ disabled, clicked, selected, children }) => (
  <button
    disabled={disabled}
    className="Button"
    onClick={clicked}
    style={{ backgroundColor: selected ? "#dd99ff" : "#ffdeee" }}
  >
    {children}
    <style>{`
        .Button {
            border-radius: 10px;
            color: #86592d;
            outline: none;
            cursor: pointer;
            font-size: 14px;
            padding: 10px;
            margin: 10px;
            font-weight: bold;
        }
        
        .Button:disabled {
            color: #e6e6e6;
            cursor: not-allowed;
        }

        `}</style>
  </button>
);
