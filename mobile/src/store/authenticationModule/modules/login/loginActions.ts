import {
  ILogin,
  LoginActionTypes,
  ILoginAction,
  ILoginDTO,
} from './loginTypes';

const getLoginAsync = (props: ILoginDTO): ILoginAction => ({
  type: LoginActionTypes.GET_LOGIN_ASYNC,
  payload: props,
});

const setLogin = (login: ILogin): ILoginAction => ({
  payload: { login },
  type: LoginActionTypes.SET_LOGIN,
});

const setIsLoadingLogin = (isLoading: boolean): ILoginAction => ({
  payload: { isLoading },
  type: LoginActionTypes.SET_IS_LOADING_LOGIN,
});

const setIsErrorLogin = (isError: boolean): ILoginAction => ({
  payload: { isError },
  type: LoginActionTypes.SET_IS_ERROR_LOGIN,
});

export const loginActions = {
  getLoginAsync,
  setLogin,
  setIsLoadingLogin,
  setIsErrorLogin,
};
