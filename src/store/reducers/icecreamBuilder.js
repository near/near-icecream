import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../shared/utility";

const initialState = {
  species: Array(),
  sides: "chocolate",
  totalPrice: 2,
  purchasable: true,
  ordered: false,
};

const setInital = (state) => {
  return updateObject(state, {
    species: Array(),
    sides: "chocolate",
    totalPrice: 2,
    purchasable: true,
    ordered: false,
  });
};

const SPECIES_PRICE = 1;

const addSpecies = (state, action) => {
  const updatedSpecies = state.species.concat(action.speciesName);
  const updatedPurchasable = updatedSpecies.length < 5;
  const updatedState = {
    species: updatedSpecies,
    totalPrice: state.totalPrice + SPECIES_PRICE,
    purchasable: updatedPurchasable,
  };
  return updateObject(state, updatedState);
};

const removeSpecies = (state, action) => {
  const updatedSpecies = state.species.filter((s) => s !== action.speciesName);
  const updatedPurchasable = updatedSpecies.length <= 5;
  const updatedSt = {
    species: updatedSpecies,
    totalPrice: state.totalPrice - SPECIES_PRICE,
    purchasable: updatedPurchasable,
  };
  return updateObject(state, updatedSt);
};

const setSides = (state, action) => {
  const updatedSides = action.sideName;
  const updatedState = { sides: updatedSides };
  return updateObject(state, updatedState);
};

const setOrder = (state) => {
  const updatedState = { ordered: true };
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
    case actionTypes.SET_ORDERED:
      return setOrder(state, action);
    case actionTypes.SET_SPECIES:
      return setInital(state);
    default:
      return state;
  }
};

export default reducer;
