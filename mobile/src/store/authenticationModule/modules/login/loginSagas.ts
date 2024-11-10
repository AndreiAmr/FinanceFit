import { call, put, takeLatest } from 'redux-saga/effects';

import { loginActions } from './loginActions';
import { loginRepository } from './loginRepository';
import { ILogin, ILoginRequestAction, LoginActionTypes } from './loginTypes';

import { RoutesEnum } from '../../../../routes/types';
import { navigate, resetNavigation } from '@/src/routes/navigate';

export function* getLoginAsync(props: ILoginRequestAction) {
  try {
    const { email, password } = props.payload;

    yield put(loginActions.setIsLoadingLogin(true));
    yield put(loginActions.setIsErrorLogin(false));

    yield call(navigate, {
      routeName: RoutesEnum.GenericLoader,
    });

    const login: ILogin = yield call(loginRepository.getLogin, {
      email,
      password,
    });

    yield call(resetNavigation, {
      routeName: RoutesEnum.Home,
      params: [{ index: 0 }],
    });
    yield put(loginActions.setLogin(login));
  } catch (error: any) {
    yield put(loginActions.setIsErrorLogin(true));
    const errorFormatted = error.graphQLErrors[0];

    yield call(resetNavigation, {
      routeName: RoutesEnum.GenericError,
      params: {
        title: errorFormatted.title,
        description: errorFormatted.message,
        firstButton: errorFormatted.firstButton,
      },
    });
  } finally {
    yield put(loginActions.setIsLoadingLogin(false));
  }
}

const loginSagas = [
  takeLatest(LoginActionTypes.GET_LOGIN_ASYNC, getLoginAsync),
];

export default loginSagas;
