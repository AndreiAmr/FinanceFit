export enum SignupActionTypes {
  GET_SIGNUP_ASYNC = '@signup/signup/GET_SIGNUP_ASYNC',
  SET_SIGNUP = '@signup/signup/SET_SIGNUP',
  SET_IS_LOADING_SIGNUP = '@signup/signup/SET_IS_LOADING_SIGNUP',
  SET_IS_ERROR_SIGNUP = '@signup/signup/SET_IS_ERROR_SIGNUP',
}

export interface ISignup {
  data: boolean;
}

export interface ISignupDTO {
  name: string;
  email: string;
  password: string;
}

export interface ISignupModule {
  data: ISignup | null;
  isLoading: boolean;
  isError: boolean;
}

export interface ISignupState {
  signup: ISignupModule;
}

export interface ISignupPayload {
  signup?: ISignup;
  isLoading?: boolean;
  isError?: boolean;
}

export type ISignupAction = {
  type: SignupActionTypes;
  payload?: ISignupPayload;
};

export type ISignupRequestAction = {
  type: SignupActionTypes;
  payload: ISignupDTO;
};

export type ISignupReducer = (
  state: ISignupState,
  payload?: ISignupPayload
) => ISignupState;
