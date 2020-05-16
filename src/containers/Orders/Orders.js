import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Order from "../../components/Order/Order";

import Spinner from "../../components/Utils/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onInitPurchase();
    this.props.onFetchOrders(this.props.currentUser.accountId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          species={order.species}
          sides={order.sides}
          price={order.price}
        />
      ));
    }

    if (this.props.orders.length === 0) {
      return (
        <h3 style={{ textAlign: "center", marginTop: "100px" }}>
          Not having any ice Cream? Click Ice Cream Builder to start your order
        </h3>
      );
    }
    return <div style={{ marginTop: "100px" }}>{orders}</div>;
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
    onInitPurchase: () => dispatch(actions.purchaseInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
