import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../shared/utility";

const initialState = {
  currentUser: null,
  redirectPath: "/",
};

const Login = (state, action) => {
  return updateObject(state, {
    currentUser: action.currentUser,
    isAuthenticated: true,
  });
};

const LogOut = (state) => {
  return updateObject(state, { currentUser: null });
};

const setRedirectPath = (state, action) => {
  return updateObject(state, { redirectPath: action.path });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return Login(state, action);
    case actionTypes.AUTH_LOGOUT:
      return LogOut(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
