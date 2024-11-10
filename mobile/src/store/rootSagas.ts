import { all } from 'redux-saga/effects';
import { authenticationModuleCombineSagas } from './authenticationModule/authenticationModuleCombineSagas';

function* rootSagas() {
  yield all([...authenticationModuleCombineSagas]);
}

export default rootSagas;
