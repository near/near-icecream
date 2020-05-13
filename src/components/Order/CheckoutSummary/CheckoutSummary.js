import React from "react";

import iceCream from "../../iceCream/iceCream";
import Button from "../../Utils/Button";

export default ({ species, sides, checkoutCancelled, checkoutContinued }) => (
  <div className="CheckoutSummary">
    <h1>We hope you enjoy it!</h1>
    <div style={{ width: "100%", margin: "auto" }}>
      <iceCream species={species} sides={sides} />
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
