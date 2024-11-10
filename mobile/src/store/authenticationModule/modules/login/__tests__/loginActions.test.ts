import { loginActions } from '../loginActions';
import { LoginActionTypes } from '../loginTypes';

describe('loginActions store', () => {
  test('Deve montar o objeto para efetuar o login corretamente', () => {
    const email = 'any-email';
    const password = 'any-password';

    const result = loginActions.getLoginAsync({
      email,
      password,
    });

    const expectedValue = {
      type: LoginActionTypes.GET_LOGIN_ASYNC,
      payload: {
        email,
        password,
      },
    };

    expect(result).toEqual(expectedValue);
  });

  test('Deve setar o login corretamente', () => {
    const email = 'any-email';
    const password = 'any-password';

    const result = loginActions.setLogin({
      data: {
        email,
        password,
      },
    });

    const expectedValue = {
      payload: {
        login: {
          data: {
            email,
            password,
          },
        },
      },
      type: LoginActionTypes.SET_LOGIN,
    };

    expect(result).toEqual(expectedValue);
  });

  test('Deve setar o isLoadingLogin corretamente', () => {
    const isLoading = true;

    const result = loginActions.setIsLoadingLogin(isLoading);

    const expectedValue = {
      payload: { isLoading },
      type: LoginActionTypes.SET_IS_LOADING_LOGIN,
    };

    expect(result).toEqual(expectedValue);
  });

  test('Deve setar o isErrorLogin corretamente', () => {
    const isError = true;

    const result = loginActions.setIsErrorLogin(isError);

    const expectedValue = {
      payload: { isError },
      type: LoginActionTypes.SET_IS_ERROR_LOGIN,
    };

    expect(result).toEqual(expectedValue);
  });
});
