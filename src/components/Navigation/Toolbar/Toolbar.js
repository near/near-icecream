import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

export default ({ drawerToggleClicked, isAuth }) => (
  <header className="Toolbar">
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className="Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems isAuthenticated={isAuth} />
    </nav>
    <style>{`
        .Toolbar {
            height: 56px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #703B09;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            box-sizing: border-box;
            z-index: 90;
        }

        .Toolbar nav {
            height: 100%;
        }

        .Logo {
            height: 80%;
        }

        @media (max-width: 499px) {
            .DesktopOnly {
                display: none;
            }
        }`}</style>
  </header>
);