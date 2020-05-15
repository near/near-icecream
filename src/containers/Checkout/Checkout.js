import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Button from "../../components/Utils/Button";
import Spinner from "../../components/Utils/Spinner";

class Checkout extends Component {
  state = { loading: false };
  checkoutHandler = () => {
    this.setState({ loading: true });
    const info = {
      accountId: this.props.currentUser.accountId,
      id: this.props.species.join(""),
      order: {
        species: this.props.species,
        sides: this.props.sides,
        price: this.props.price,
      },
    };
    this.props.onSetPurchase(info);
    this.props.onPurchaseIceCream(info);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/auth" />;
    }
    return (
      <div>
        <div className="CheckoutSummary">
          <h1>Hope you enjoy it!</h1>
          <div style={{ width: "100%", margin: "auto" }}>
            <h3>Your Order</h3>
            <p>A delicious ice cream with the following flavors:</p>
            <p>Side: {this.props.sides}</p>
            <p>Flavor:</p>
            <ul>
              {this.props.species.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <p>
              <strong>Total Price: {this.props.price}</strong>
            </p>
          </div>
          {!this.state.loading ? (
            <Button btnType="Success" clicked={this.checkoutHandler}>
              CHECKOUT
            </Button>
          ) : (
            <Spinner />
          )}
        </div>
        <style>{`
          .CheckoutSummary {
              text-align: center;
              width: 80%;
              height: 100vh;
              margin: auto;
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
    currentUser: state.auth.currentUser,
    isAuthenticated: !!state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPurchaseIceCream: (info) => dispatch(actions.purchaseIceCream(info)),
    onSetPurchase: (info) => dispatch(actions.setPurchase(info)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
