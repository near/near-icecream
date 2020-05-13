import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";

import Button from "../../components/Utils/Button";
class Auth extends Component {
  componentDidMount() {
    if (!this.props.building && this.props.authRedirectPath !== "/") {
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
      <Button clicked={this.requestSignIn}>
        Log In with NEAR Wallet
        <style>{`
      .Auth {
        margin: 20px auto;
        width: 80%;
        text-align: center;
        box-shadow: 0 2px 3px #ccc;
        border: 1px solid #eee;
        padding: 10px;
        box-sizing: border-box;
    }
    
    @media (min-width: 600px) {
        .Auth {
            width: 500px;
        }
    }`}</style>
      </Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.currentUser,
    building: state.burgerBuilder.building,
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
