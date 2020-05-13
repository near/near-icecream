import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

export default ({ species, checkoutCancelled, checkoutContinued }) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope you enjoy it!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger species={species} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinued}>
        CONTINUE
      </Button>
      <style>{`
      .CheckoutSummary {
            text-align: center;
            width: 80%;
            margin: auto;
        }
        `}</style>
    </div>
  );
};
