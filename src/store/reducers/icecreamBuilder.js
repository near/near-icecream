import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../shared/utility";

const initialState = {
  species: Array(),
  sides: "chocolate",
  totalPrice: 2,
  building: false,
  purchasable: true,
};

const SPECIES_PRICE = 1;

const addSpecies = (state, action) => {
  const updatedSpecies = state.species.concat(action.speciesName);
  const updatedState = {
    species: updatedSpecies,
    totalPrice: state.totalPrice + updatedSpecies.length * SPECIES_PRICE,
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeSpecies = (state, action) => {
  const updatedSpecies = state.species.filter((s) => s !== action.speciesName);
  const updatedSt = {
    species: updatedSpecies,
    totalPrice: state.totalPrice + SPECIES_PRICE * updatedSpecies.length,
    building: true,
  };
  return updateObject(state, updatedSt);
};

const setInital = (state) => {
  return updateObject(state, {
    species: Array(),
    sides: "chocolate",
    totalPrice: 4,
    building: false,
  });
};

const setSides = (state, action) => {
  const updatedSides = action.sideName;
  const updatedState = {
    sides: updatedSides,
    building: true,
  };
  return updateObject(state, updatedState);
};

const checkPurchasable = (state, action) => {
  const updatedPurchasable = action.speciesList.length <= 5;
  const updatedState = {
    purchasable: updatedPurchasable,
  };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SPECIES:
      return addSpecies(state, action);
    case actionTypes.REMOVE_SPECIES:
      return removeSpecies(state, action);
    case actionTypes.SET_SIDES:
      return setSides(state, action);
    case actionTypes.CHECK_PURCHASABLE:
      return checkPurchasable(state, action);
    case actionTypes.SET_SPECIES:
      return setInital(state);
    default:
      return state;
  }
};

export default reducer;
