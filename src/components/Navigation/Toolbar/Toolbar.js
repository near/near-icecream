import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import Balance from "../../Utils/Balance";

export default ({ drawerToggleClicked, isAuth, currentUser }) => {
  const balance = currentUser ? <Balance amount={currentUser.balance} /> : null;
  const accountId = currentUser ? currentUser.accountId : null;
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className="DesktopOnly" style={{ height: "80%" }}>
        <Logo />
      </div>
      {isAuth ? (
        <p>
          Hi <i>{accountId}</i> Balance: {balance}
        </p>
      ) : null}
      <nav className="DesktopOnly">
        <NavigationItems isAuthenticated={isAuth} />
      </nav>
      <style>{`
        .Toolbar {
            height: 72px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: #f7bdc4;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            box-sizing: border-box;
            z-index: 90;
            font-weight: bold;
            font-size: 1.5rem;
        }

        .Toolbar nav {
            height: 100%;
        }

        @media (max-width: 499px) {
            .DesktopOnly {
                display: none;
            }
        }`}</style>
    </header>
  );
};
