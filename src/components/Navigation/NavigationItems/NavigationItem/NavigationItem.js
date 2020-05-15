import React from "react";
import { NavLink } from "react-router-dom";

export default ({ link, exact, children }) => (
  <li className="NavigationItem">
    <NavLink to={link} exact={exact} activeClassName="NavigationItem">
      {children}
    </NavLink>
    <style>{`
        .NavigationItem {
            margin: 10px 0;
            box-sizing: border-box;
            display: block;
            width: 100%;
            font-size: 1.6rem;
            font-weight: bold;
        }
        
        .NavigationItem a {
            color: #8F5C2C;
            text-decoration: none;
            width: 100%;
            box-sizing: border-box;
            display: block;
        }
        
        .NavigationItem a:hover,
        .NavigationItem a:active,
        .NavigationItem a.active {
            color: #40A4C8;
        }
        
        @media (min-width: 500px) {
            .NavigationItem {
                margin: 0;
                display: flex;
                height: 100%;
                width: auto;
                align-items: center;
            }
            
            .NavigationItem a {
                color: black;
                height: 100%;
                padding: 16px 10px;
                border-bottom: 4px solid transparent;
                margin:auto;
            }
            
            .NavigationItem a:hover,
            .NavigationItem a:active,
            .NavigationItem a.active {
                background-color: rgba(0,0,0,0.3);
                border-bottom: 4px solid #fff;
                color: white;
            }
        }
        `}</style>
  </li>
);
