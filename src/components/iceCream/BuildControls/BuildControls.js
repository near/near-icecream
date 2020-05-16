import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import Button from "../../Utils/Button";
import FlavorButton from "../../Utils/FlavorButton";

class BuildControls extends Component {
  sides = [
    { label: "chocolate" },
    { label: "matcha" },
    { label: "strawberry" },
  ];
  flavors = [
    { label: "apple" },
    { label: "grape" },
    { label: "vanilla" },
    { label: "lime" },
    { label: "strawberry" },
    { label: "blueberry" },
    { label: "orange" },
    { label: "pineapple" },
    { label: "peach" },
    { label: "oreo" },
    { label: "coffee" },
    { label: "walnut" },
    { label: "peanut butter" },
    { label: "sweet potato" },
  ];

  selectedHandler = (label) => {
    return this.props.species.some((s) => s === label);
  };

  seletedSideHandler = (sides) => {
    return this.props.sides === sides;
  };

  purchaseHandler = () => {
    this.props.onInitPurchase();
    this.props.onSetOrder(true);
  };

  render() {
    const {
      price,
      onSelectSides,
      onIngredientAdded,
      onIngredientRemoved,
      purchasable,
      ordered,
      species,
    } = this.props;
    if (ordered) {
      return <Redirect to="/checkout" />;
    }
    const sideButtons = this.sides.map((side) => (
      <Button
        key={side.label}
        clicked={() => onSelectSides(side.label)}
        selected={this.seletedSideHandler(side.label)}
      >
        {side.label}
      </Button>
    ));
    const flavorButtons = this.flavors.map((flavor) => (
      <FlavorButton
        key={flavor.label}
        added={() => onIngredientAdded(flavor.label)}
        removed={() => onIngredientRemoved(flavor.label)}
        disabled={!purchasable}
        selected={this.selectedHandler(flavor.label)}
      >
        {flavor.label}
      </FlavorButton>
    ));
    const orderButton = (
      <button
        className="OrderButton"
        onClick={this.purchaseHandler}
        disabled={species.length < 1}
      >
        ORDER NOW
      </button>
    );
    return (
      <div className="BuildControls">
        <p>
          Current Price: <strong>{price}</strong>
        </p>
        <div>Sides: {sideButtons}</div>
        <div>Flavors: {flavorButtons}</div>
        <div>{orderButton}</div>
        <style>{`
          .BuildControls {
              width: 60%;
              text-align: center;
              background-color: #e9495c;
              box-shadow: 5px 5px 5px #ccc;
              border-radius: 10px;
              margin: auto;
              padding: 20px 0;
              color: #ffd9b3;
              font-weight: bold;
          }
          
          .OrderButton {
              background-color: #ffe6ff;
              outline: none;
              cursor: pointer;
              border: 3px solid #966909;
              color: #86592d;
              font-family: inherit;
              font-size: 1.2em;
              padding: 15px 30px;
              box-shadow: 3px 3px 3px #966909;
              margin-top: 10px;
              border-radius: 50px
          }
          
          .OrderButton:hover, .OrderButton:active {
              background-color: #ffccff;
              border: 3px solid #966909;
              color: #966909;
          }
          
          .OrderButton:disabled {
              background-color: #C7C6C6;
              cursor: not-allowed;
              border: 1px solid #ccc;
              color: ;
          }
          
          .OrderButton:not(:disabled) {
              animation: enable 0.3s linear;
          }
          
          @keyframes enable {
              0% {
                  transform: scale(1);
              }
              60% {
                  transform: scale(1.1);
              }
              100% {
                  transform: scale(1);
              }
          }
          `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    species: state.iceCreamBuilder.species,
    sides: state.iceCreamBuilder.sides,
    price: state.iceCreamBuilder.totalPrice,
    purchasable: state.iceCreamBuilder.purchasable,
    ordered: state.iceCreamBuilder.ordered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addSpecies(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeSpecies(ingName)),
    onSelectSides: (side) => dispatch(actions.setSides(side)),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetOrder: () => dispatch(actions.setOrdered()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
