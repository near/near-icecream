import React, { Component } from "react";
import { connect } from "react-redux";

import flavorButton from "../../UI/flavorButton"

const sides = [
    { label: "chocolate", type="#7B3F00"},
    { label: "mochi", type: "#AAD400"},
    { label: "strawberry", type: "#E66363"}
]
const flavors = [
  { label: "red", type: "#FAC8D3" },
  { label: "purple", type: "#DD98E2" },
  { label: "blue", type: "#C5D9EE" },
  { label: "pink", type: "#F6ECF1" },
  { label: "green", type: "#CEFFE9"}
];

class BuildControls extends Component {
  selectedHandler = (type) => {
    return this.props.species.some(s=> s===type)
  }

  addSpecies = (type) => {
    this.props.ingredientAdded(type)
    this.props.onCheckPurchasable(this.props.species)
  }

  removeSpecies = (type) => {
    this.props.ingredientRemoved(type)
    this.props.onCheckPurchasable(this.props.species)
  }

  render(){
    const {
      price,
      sideSelected,
      purchasable,
      ordered,
      isAuthenticated
    } = this.props
    const sideButtons = sides.map(side => (
                          <button 
                          key={side.label} 
                          onClick={sideSelected} >
                              {side.label}
                          </button>))
    const flavorButtons = flavors.map(flavor => (
                  <flavorButton
                    key={flavor.label}
                    added={() => this.addSpecies(flavor.type)}
                    removed={() => this.removeSpecies(flavor.type)}
                    disabled={purchasable}
                    selected={this.selectedHandler(flavor.type)}
                  >{flavor.label}</flavorButton>
                ))
    const orderButton = <button
                        className="OrderButton"
                        disabled={!purchasable}
                        onClick={ordered}
                      >
                        ORDER NOW
                      </button>
    const buttonGroup = <>
                          {sideButtons}
                          {flavorButtons}
                          {orderButton}
                        </>
    return (
    <div className="BuildControl">
      <p>
        Current Price: <strong>{price}</strong>
      </p>
          {isAuthenticated ? buttonGroup 
          : (<button
              disabled={!purchasable}
              onClick={ordered}
            >
              Please Log in to order yummy ice cream
            </button>)}
      <style>{`
          .BuildControls {
              width: 100%;
              background-color: #CF8F2E;
              display: flex;
              flex-flow: column;
              align-items: center;
              box-shadow: 0 2px 1px #ccc;
              margin: auto;
              padding: 10px 0;
          }
          
          .OrderButton {
              background-color: #DAD735;
              outline: none;
              cursor: pointer;
              border: 1px solid #966909;
              color: #966909;
              font-family: inherit;
              font-size: 1.2em;
              padding: 15px 30px;
              box-shadow: 2px 2px 2px #966909;
          }
          
          .OrderButton:hover, .OrderButton:active {
              background-color: #A0DB41;
              border: 1px solid #966909;
              color: #966909;
          }
          
          .OrderButton:disabled {
              background-color: #C7C6C6;
              cursor: not-allowed;
              border: 1px solid #ccc;
              color: #888888;
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
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    species: state.burgerBuilder.species,
    price: state.burgerBuilder.totalPrice,
    purchasable: state.burgerBuilder.purchasable,
    isAuthenticated: !!state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addSpecies(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeSpecies(ingName)),
    onInitIngredients: () => dispatch(actions.setInital()),
    onSelectSides: (side) => dispatch(actions.setSides(side)),
    onCheckPurchasable: (speciesList) => dispatch(actions.checkPurchasable(speciesList)),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    setPath: (path) => dispatch(actions.setRedirectPath(path)),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls)