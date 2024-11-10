import { combineReducers } from 'redux';
import loginReducer from './modules/login/loginReducer';
import signupReducer from './modules/signup/signupReducer';

export const authenticationModuleCombineReducers = combineReducers({
  Login: loginReducer,
  SignUp: signupReducer,
});
