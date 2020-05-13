import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import App from "./App";

import icecreamBuilderReducer from "./store/reducers/icecreamBuilder";
import orderReducer from "./store/reducers/order";
import authReducer from "./store/reducers/auth";

import getConfig from "./config.js";
import * as nearlib from "near-api-js";

// Initializing contract
async function initContract() {
  const nearConfig = getConfig(process.env.NODE_ENV || "development");
  window.nearConfig = nearConfig;

  // Initializing connection to the NEAR DevNet.
  const near = await nearlib.connect(
    Object.assign(
      {
        deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() },
      },
      nearConfig
    )
  );

  // Needed to access wallet
  const walletConnection = new nearlib.WalletConnection(near);
  window.wallet = walletConnection;

  // Load in account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }
  window.currentUser = currentUser;

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new nearlib.Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: ["getIcecreamsByOwner", "displayGolbalOrders"],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: ["setOrder"],
      // Sender is the account ID to initialize transactions.
      sender: walletConnection.getAccountId(),
    }
  );
}

window.nearInitPromise = initContract()
  .then(() => {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const rootReducer = combineReducers({
      iceCreamBuilder: icecreamBuilderReducer,
      order: orderReducer,
      auth: authReducer,
    });
    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    const app = (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    ReactDOM.render(app, document.getElementById("root"));
  })
  .catch(console.error);
