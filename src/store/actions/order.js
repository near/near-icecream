import * as actionTypes from "./actionTypes";
import Big from "big.js";

const BOATLOAD_OF_GAS = Big(1)
  .times(10 ** 16)
  .toFixed();

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

const purchaseIceCreamSuccess = () => {
  return {
    type: actionTypes.PURCHASE_BOX_SUCCESS,
  };
};

const purchaseIceCreamFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BOX_FAIL,
    error,
  };
};

export const purchaseIceCream = (info) => {
  return () => {
    window.contract.setOrder(
      {
        owner: info.accountId,
        id: info.id,
        species: info.order.species,
        sides: info.order.sides,
        price: info.order.price,
      },
      BOATLOAD_OF_GAS,
      Big(info.order.price)
        .times(10 ** 24)
        .toFixed()
    );
  };
};

export const checkPurchase = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const info = window.localStorage.getItem("info");
    if (info) {
      window.contract
        .getIcecreamsByOwner({ owner: info.accountId })
        .then((orders) => {
          dispatch(fetchOrdersSuccess(orders));
          const purchased = orders.some((order) => order.id === info.id);
          if (purchased) {
            dispatch(purchaseIceCreamSuccess());
          }
          window.localStorage.removeItem("info");
        })
        .catch((err) => {
          dispatch(fetchOrdersFail(err));
          dispatch(purchaseIceCreamFail(err));
          window.localStorage.removeItem("info");
        });
    }
  };
};

export const setPurchase = (info) => {
  return (dispatch) => {
    window.localStorage.setItem("info", info);
  };
};

const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders,
  };
};

const fetchDisplayOrdersSucess = (orders) => {
  return {
    type: actionTypes.FETCH_DISPLAY_SUCESS,
    orders,
  };
};

const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error,
  };
};

const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (accountId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    window.contract
      .getIcecreamsByOwner({ owner: accountId })
      .then((orders) => {
        dispatch(fetchOrdersSuccess(orders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};

export const fetchDisplayOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    window.contract
      .displayGolbalOrders()
      .then((orders) => {
        dispatch(fetchDisplayOrdersSucess(orders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
