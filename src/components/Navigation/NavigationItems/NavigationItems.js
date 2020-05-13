import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

export default ({ isAuthenticated }) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {!isAuthenticated ? (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
    <style>{`
    .NavigationItems {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
    }
    
    @media (min-width: 500px) {
        .NavigationItems {
            flex-flow: row;
        }
    }
    `}</style>
  </ul>
);
