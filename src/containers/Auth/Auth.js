import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import * as actions from "../../store/actions/index";

class Auth extends Component {
  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath !== "/") {
      this.props.setPath();
    }
    if (window.wallet.isSignedIn()) {
      this.props.setCurrentUser(window.currentUser);
    }
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
      return <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <Button clicked={this.requestSignIn}>Lon In with NEAR Wallet</Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.currentUser,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => dispatch(actions.LogIn(currentUser)),
    setPath: () => dispatch(actions.setRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
