import { call, put, takeLatest } from 'redux-saga/effects';

import { signupActions } from './signupActions';
import { signupRepository } from './signupRepository';
import {
  ISignup,
  ISignupRequestAction,
  SignupActionTypes,
} from './signupTypes';
import { navigate, navigateReset } from '@/app/_layout';
import { RoutesEnum } from '@/src/routes/types';

export function* getSignupAsync(action: ISignupRequestAction) {
  try {
    yield put(signupActions.setIsLoadingSignup(true));
    yield put(signupActions.setIsErrorSignup(false));

    yield call(navigate, RoutesEnum.GenericLoader);

    const signup: ISignup = yield call(signupRepository.getSignup, {
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    });

    yield call(navigateReset, RoutesEnum.Auth);

    yield put(signupActions.setSignup(signup));
  } catch (error: any) {
    const errorFormatted = error.graphQLErrors[0];
    yield put(signupActions.setIsErrorSignup(true));

    yield call(navigateReset, RoutesEnum.GenericError, {
      title: errorFormatted.title,
      description: errorFormatted.message,
      firstButton: errorFormatted.firstButton,
    });
  } finally {
    yield put(signupActions.setIsLoadingSignup(false));
  }
}

const signupSagas = [
  takeLatest(SignupActionTypes.GET_SIGNUP_ASYNC, getSignupAsync),
];

export default signupSagas;
