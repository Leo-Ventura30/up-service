import { combineReducers } from "redux";
import userReducer from "./user";
import popup from "./popup";

export default combineReducers({
  userReducer,
  popup,
});
