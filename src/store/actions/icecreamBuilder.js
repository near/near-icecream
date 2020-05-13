import * as actionTypes from "./actionTypes";

export const addSpecies = (speciesName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    speciesName,
  };
};

export const removeSpecies = (speciesName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    speciesName,
  };
};

export const setInital = () => {
  return {
    type: actionTypes.SET_INGREDIENTS,
  };
};

export const setSides = (name) => {
  return {
    type: actionTypes.SET_SIDES,
    sideName: name,
  };
};

export const checkPurchasable = (speciesList) => {
  return {
    type: actionTypes.CHECK_PURCHASABLE,
    speciesList,
  };
};
