import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import IceCream from "../../components/iceCream/iceCream";
import BuildControls from "../../components/iceCream/BuildControls/BuildControls";
import Modal from "../../components/Utils/Button";
import OrderSummary from "../../components/iceCream/OrderSummary/OrderSummary";

class iceCreamBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.setPath("/checkout");
      this.props.history.push("/auth");
    }
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  render() {
    let orderSummary;
    if (this.props.species) {
      orderSummary = (
        <OrderSummary
          species={this.props.species}
          side={this.props.sides}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <>
          <IceCream species={this.props.species} side={this.props.sides} />
          <BuildControls ordered={this.purchaseHandler} />
        </>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    species: state.iceCreamBuilder.species,
    sides: state.iceCreamBuilder.sides,
    price: state.iceCreamBuilder.totalPrice,
    isAuthenticated: !!state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitIngredients: () => dispatch(actions.setInital()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    setPath: (path) => dispatch(actions.setRedirectPath(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamBuilder);
