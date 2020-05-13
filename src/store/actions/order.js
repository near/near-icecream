import * as actionTypes from "./actionTypes";

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

const purchaseIceCreamSuccess = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
  };
};

const purchaseIceCreamFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error,
  };
};

export const purchaseIceCream = (accountId, orderData) => {
  return (dispatch) => {
    window.contract
      .setOrder({ accountId, iceCream: orderData })
      .then(() => {
        dispatch(purchaseIceCreamSuccess);
      })
      .catch((error) => {
        dispatch(purchaseIceCreamFail(error));
      });
  };
};

const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};
const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
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
      .getIcecreamsByOwner({ accountId })
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
        dispatch(fetchOrdersSuccess(orders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
