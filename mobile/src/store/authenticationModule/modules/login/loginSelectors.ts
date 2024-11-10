import { ApplicationState } from '../../../types';

import { ILogin, ILoginState } from './loginTypes';

const getState = (state: ApplicationState): ILoginState =>
  state.Authentication.Login;

const getLogin = (state: ApplicationState): ILogin | null =>
  getState(state).login.data;

const getIsLoadingLogin = (state: ApplicationState): boolean =>
  getState(state).login.isLoading;

const getIsErrorLogin = (state: ApplicationState): boolean =>
  getState(state).login.isError;

export const loginSelectors = {
  getState,
  getLogin,
  getIsLoadingLogin,
  getIsErrorLogin,
};
