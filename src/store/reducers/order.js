import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../shared/utility";

const initialState = {
  orders: Array(),
  purchased: false,
  purchaseError: null,
  displayOrders: Array(),
  fetchError: null,
  loading: false,
};

const purchaseInit = (state) => {
  return updateObject(state, {
    purchased: false,
    purchaseError: null,
  });
};

const purchaseIceCreamSuccess = (state) => {
  return updateObject(state, { purchased: true });
};

const purchaseIceCreamFail = (state, action) => {
  return updateObject(state, { purchased: true, purchaseError: action.error });
};

const fetchOrdersStart = (state) => {
  return updateObject(state, { loading: true, fetchError: null });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false, fetchError: action.error });
};

const fetchDisplayOrdersSucess = (state, action) => {
  return updateObject(state, { displayOrders: action.orders, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BOX_SUCCESS:
      return purchaseIceCreamSuccess(state, action);
    case actionTypes.PURCHASE_BOX_FAIL:
      return purchaseIceCreamFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_DISPLAY_SUCESS:
      return fetchDisplayOrdersSucess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
