import * as actionTypes from "./actionTypes";

export const authSuccess = (currentUser) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    currentUser: currentUser,
  };
};

export const LogOut = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const LogIn = (currentUser) => {
  return (dispatch) => {
    dispatch(authSuccess(currentUser));
  };
};

export const authCheckState = () => {
  return (dispatch, state) => {
    const currentUser = state.auth.currentUser;
    if (!currentUser) {
      dispatch(LogOut());
    } else {
      dispatch(authSuccess(currentUser));
    }
  };
};

export const setRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
