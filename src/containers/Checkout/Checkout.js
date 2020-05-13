import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutHandler = () => {
    const order = {
      species: this.props.species,
      sides: this.props.sides,
      price: this.props.price,
    };
    this.props.onOrderBurger(this.props.currentUser.accountId, order);
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.species) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <div className="CheckoutSummary">
            <h1>Hope you enjoy it!</h1>
            <div style={{ width: "100%", margin: "auto" }}>
              <Burger species={this.props.species} side={this.props.sides} />
            </div>
            <Button btnType="Danger" clicked={this.checkoutCancelled}>
              CANCEL
            </Button>
            <Button btnType="Success" clicked={this.props.onOrderBurger}>
              CHECKOUT
            </Button>
          </div>
          <style>{`
            .CheckoutSummary {
                text-align: center;
                width: 80%;
                margin: auto;
            }
            `}</style>
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    species: state.iceCreamBuilder.species,
    sides: state.iceCreamBuilder.sides,
    price: state.iceCreamBuilder.totalPrice,
    currentUser: state.auth.currentUser,
    purchased: state.order.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (accountId, orderData) =>
      dispatch(actions.purchaseIceCream(accountId, orderData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
