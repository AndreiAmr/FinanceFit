import { testSaga } from 'redux-saga-test-plan';
import { getLoginAsync } from '../loginSagas';
import { loginActions } from '../loginActions';
import { ILoginRequestAction } from '../loginTypes';
import { navigate, resetNavigation } from '@/src/routes/navigate';
import { RoutesEnum } from '@/src/routes/types';
import { loginRepository } from '../loginRepository';

describe('Login sagas', () => {
  test('Deve carregar o login corretamente', () => {
    const loginAction = loginActions.getLoginAsync({
      email: 'any-email',
      password: 'any-password',
    }) as ILoginRequestAction;

    testSaga(getLoginAsync, loginAction)
      .next()
      .put(loginActions.setIsLoadingLogin(true))
      .next()
      .put(loginActions.setIsErrorLogin(false))
      .next()
      .call(navigate, {
        routeName: RoutesEnum.GenericLoader,
      })
      .next()
      .call(loginRepository.getLogin, loginAction.payload)
      .next({
        data: loginAction.payload,
      })
      .call(resetNavigation, {
        routeName: RoutesEnum.Home,
        params: [{ index: 0 }],
      })
      .next()
      .put(
        loginActions.setLogin({
          data: {
            email: 'any-email',
            password: 'any-password',
          },
        })
      )
      .next()
      .put(loginActions.setIsLoadingLogin(false))
      .next()
      .isDone();
  });

  test('Deve dar error ao tentar carregar o login', () => {
    const loginAction = loginActions.getLoginAsync({
      email: 'any-email',
      password: 'any-password',
    }) as ILoginRequestAction;

    testSaga(getLoginAsync, loginAction)
      .next()
      .put(loginActions.setIsLoadingLogin(true))
      .next()
      .put(loginActions.setIsErrorLogin(false))
      .next()
      .call(navigate, {
        routeName: RoutesEnum.GenericLoader,
      })
      .next()
      .call(loginRepository.getLogin, loginAction.payload)
      .throw({
        graphQLErrors: [
          {
            title: 'any title',
            message: 'any message',
            firstButton: 'any firstButton',
          },
        ],
      } as any)
      .put(loginActions.setIsErrorLogin(true))
      .next()
      .call(resetNavigation, {
        routeName: RoutesEnum.GenericError,
        params: {
          title: 'any title',
          description: 'any message',
          firstButton: 'any firstButton',
        },
      })
      .next()
      .put(loginActions.setIsLoadingLogin(false))
      .next()
      .isDone();
  });
});
