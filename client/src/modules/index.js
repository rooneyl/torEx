import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import fileReducer from './file';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  file: fileReducer
});
