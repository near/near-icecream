import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Order from "../../components/Order/Order";

import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.currentUser.accountId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          species={order.iceCream.species}
          sides={order.iceCream.sides}
          price={order.iceCream.price}
        />
      ));
    }
    return <>{orders}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    currentUser: state.auth.currentUser,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (accountId) => dispatch(actions.fetchOrders(accountId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
