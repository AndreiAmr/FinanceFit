import { combineReducers } from 'redux';
import { authenticationModuleCombineReducers } from './authenticationModule/authenticationModuleCombineReducers';

const reducers = combineReducers({
  Authentication: authenticationModuleCombineReducers,
});

export default reducers;
export type ReducerState = ReturnType<typeof reducers>;
