import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { default as authReducer } from "./auth";
import { default as fileReducer } from "./file";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  file: fileReducer
});
