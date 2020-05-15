import * as actionTypes from "./actionTypes";

export const addSpecies = (speciesName) => {
  return {
    type: actionTypes.ADD_SPECIES,
    speciesName,
  };
};

export const removeSpecies = (speciesName) => {
  return {
    type: actionTypes.REMOVE_SPECIES,
    speciesName,
  };
};

export const setInital = () => {
  return {
    type: actionTypes.SET_SPECIES,
  };
};

export const setSides = (name) => {
  return {
    type: actionTypes.SET_SIDES,
    sideName: name,
  };
};

export const setOrdered = () => {
  return { type: actionTypes.SET_ORDERED };
};
