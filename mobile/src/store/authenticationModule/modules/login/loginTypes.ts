export enum LoginActionTypes {
  GET_LOGIN_ASYNC = '@login/login/GET_LOGIN_ASYNC',
  SET_LOGIN = '@login/login/SET_LOGIN',
  SET_IS_LOADING_LOGIN = '@login/login/SET_IS_LOADING_LOGIN',
  SET_IS_ERROR_LOGIN = '@login/login/SET_IS_ERROR_LOGIN',
}

export interface ILogin {
  data: {
    email: string;
    password: string;
  };
}

export interface ILoginResponse {
  id: string;
  email: string;
  name: string;
}

export interface ILoginModule {
  data: ILogin | null;
  isLoading: boolean;
  isError: boolean;
}

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface ILoginState {
  login: ILoginModule;
}

export interface ILoginPayload {
  login?: ILogin;
  isLoading?: boolean;
  isError?: boolean;
}

export type ILoginAction = {
  type: LoginActionTypes;
  payload?: ILoginPayload | ILoginDTO;
};

export type ILoginRequestAction = {
  type: LoginActionTypes;
  payload: ILoginDTO;
};

export type ILoginReducer = (
  state: ILoginState,
  payload?: ILoginPayload
) => ILoginState;
