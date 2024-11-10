import loginSagas from './modules/login/loginSagas';
import signupSagas from './modules/signup/signupSagas';

export const authenticationModuleCombineSagas = [...loginSagas, ...signupSagas];
