import { combineReducers } from "redux";
import { default as houseReducer } from "../modules/house";

export default combineReducers({
  house: houseReducer
});
