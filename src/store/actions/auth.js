import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authSuccess(email));
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    // const token = localStorage.getItem('token');
    // if (!token) {
    //     dispatch(logout());
    // } else {
    //     const expirationDate = new Date(localStorage.getItem('expirationDate'));
    //     if (expirationDate <= new Date()) {
    //         dispatch(logout());
    //     } else {
    //         const userId = localStorage.getItem('userId');
    //         dispatch(authSuccess(token, userId));
    //         dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
    //     }
    // }
  };
};
