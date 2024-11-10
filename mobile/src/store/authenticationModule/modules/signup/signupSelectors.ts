import { ApplicationState } from '../../../types';

import { ISignupState } from './signupTypes';

const getState = (state: ApplicationState): ISignupState =>
  state.Authentication.SignUp;

const getIsLoadingSignup = (state: ApplicationState): boolean =>
  getState(state).signup.isLoading;

const getIsErrorSignup = (state: ApplicationState): boolean =>
  getState(state).signup.isError;

export const signupSelectors = {
  getState,
  getIsLoadingSignup,
  getIsErrorSignup,
};
