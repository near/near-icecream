import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Utils/Backdrop";
import Balance from "../../Utils/Balance";

export default ({ open, closed, isAuth }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div
        className="SideDrawer"
        style={{ transform: open ? "translateX(0)" : " translateX(-100%)" }}
        onClick={closed}
      >
        <div style={{ height: "20%", marginBottom: "10px", marginTop: "30px" }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={isAuth} />
        </nav>
      </div>
      <style>{`
        .SideDrawer {
          position: fixed;
          width: 280px;
          max-width: 70%;
          height: 100%;
          left: 0;
          top: 0;
          z-index: 20;
          background-color: white;
          padding: 45px 16px;
          box-sizing: border-box;
          transition: transform 0.3s ease-out;
      }

      @media (min-width: 500px) {
          .SideDrawer {
              display: none;
          }
      }
    `}</style>
    </>
  );
};
