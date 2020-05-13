import React from "react";

import Button from "../../UI/Button/Button";

export default ({
  ingredients,
  side,
  price,
  purchaseCancelled,
  purchaseContinued,
}) => {
  const ingredientSummary = ingredients.map((igKey) => {
    return <li key={igKey}>{igKey}</li>;
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious ice cream with the following flavors:</p>
      <ul>{ingredientSummary}</ul>
      <p>with {side} sides</p>
      <p>
        <strong>Total Price: {price}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};
