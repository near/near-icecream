import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import IceCream from "../../components/iceCream/iceCream";
import BuildControls from "../../components/iceCream/BuildControls/BuildControls";
import { Redirect } from "react-router-dom";

class iceCreamBuilder extends Component {
  componentDidMount() {
    this.props.onInitIngredients();
    this.props.onCheckPurchased();
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/auth" />;
    }
    if (this.props.purchased) {
      return <Redirect to="/orders" />;
    }
    return (
      <>
        <IceCream species={this.props.species} sides={this.props.sides} />
        <BuildControls />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    species: state.iceCreamBuilder.species,
    sides: state.iceCreamBuilder.sides,
    isAuthenticated: !!state.auth.currentUser,
    purchased: state.order.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitIngredients: () => dispatch(actions.setInital()),
    onCheckPurchased: () => dispatch(actions.checkPurchase()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamBuilder);
