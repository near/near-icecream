import React from "react";

export default ({ disabled, clicked, children }) => (
  <button disabled={disabled} className="Button" onClick={clicked}>
    {children}
    <style>{`
        .Button {
            background-color: transparent;
            border: none;
            color: white;
            outline: none;
            cursor: pointer;
            font: inherit;
            padding: 10px;
            margin: 10px;
            font-weight: bold;
        }
        
        .Button:first-of-type {
            margin-left: 0;
            padding-left: 0;
        }
        
        .Button:disabled {
            color: #ccc;
            cursor: not-allowed;
        }
        
        .Success {
            color: #5C9210;
        }
        
        .Danger {
            color: #944317;
        }
        `}</style>
  </button>
);
