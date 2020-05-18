import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";

import Button from "../../components/Utils/Button";
import balloon from "../../assets/heart_balloon.png";

import IceCreamBox from "../../components/iceCream/Box/Box";
import { sidesMap, speciesMap } from "../../components/iceCream/iceCream";
class Auth extends Component {
  componentDidMount() {
    if (window.wallet.isSignedIn()) {
      this.props.setCurrentUser(window.currentUser);
    }
    this.props.onFetchDisplayOrders();
  }

  requestSignIn = async () => {
    console.log("start sign in");
    const appTitle = "NEAR ICECREAM";
    await window.wallet.requestSignIn(window.nearConfig.contractName, appTitle);
    if (window.location.search.includes("account_id")) {
      window.location.replace(
        window.location.origin + window.location.pathname
      );
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const iceCreamOrders = this.props.displayOrders.map((order) => {
      const side = sidesMap.get(order.sides);
      const flavors = order.species.map((s) => speciesMap.get(s));
      return (
        <div
          style={{
            width: "200px",
            display: "inline-block",
            margin: "20px auto",
          }}
        >
          <IceCreamBox side={side} flavors={flavors} />
          <p style={{ margin: "0 auto" }}>Order By: {order.sender}</p>
        </div>
      );
    });
    return (
      <div className="Auth">
        <img src={balloon} />
        <Button clicked={this.requestSignIn}>Log In with NEAR Wallet</Button>
        <div className="iceCreamOrder">{iceCreamOrders}</div>
        <style>{`
          .Auth {
              margin:auto;
              text-align: center;
              width: 700px;
          }

          .Auth img {
            width: 700px;
            max-width: 90%;
          }

          .iceCreamOrder {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.currentUser,
    authRedirectPath: state.auth.authRedirectPath,
    displayOrders: state.order.displayOrders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => dispatch(actions.LogIn(currentUser)),
    onFetchDisplayOrders: () => dispatch(actions.fetchDisplayOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
