import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

import Button from "../../../components/Utils/Button";
import cup from "../../../assets/heart_cup.png";
class Logout extends Component {
  signedOutFlow = async () => {
    this.props.onLogout();
    return <Redirect to="/" />;
  };

  requestSignOut = () => {
    window.wallet.signOut();
    setTimeout(this.signedOutFlow, 1000);
    if (window.location.search.includes("account_id")) {
      window.location.replace(
        window.location.origin + window.location.pathname
      );
    }
  };
  render() {
    return (
      <div className="Auth">
        <img src={cup} />
        <Button clicked={this.requestSignOut}>Log Out</Button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.LogOut()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
