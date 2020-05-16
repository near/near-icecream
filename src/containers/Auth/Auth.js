import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";

import Button from "../../components/Utils/Button";
import balloon from "../../assets/heart_balloon.png";
class Auth extends Component {
  componentDidMount() {
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
      return <Redirect to="/" />;
    }

    return (
      <div className="Auth">
        <img src={balloon} />
        <Button clicked={this.requestSignIn}>Log In with NEAR Wallet</Button>
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
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.currentUser,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => dispatch(actions.LogIn(currentUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
