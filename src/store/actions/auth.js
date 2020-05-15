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

// export const authCheckState = () => {
//   return (dispatch) => {
//     const currentUser = window.currentUser;
//     if (!currentUser) {
//       dispatch(LogOut());
//     } else {
//       dispatch(authSuccess(currentUser));
//     }
//   };
// };
