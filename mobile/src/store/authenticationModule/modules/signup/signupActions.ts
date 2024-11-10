import {
  ISignup,
  SignupActionTypes,
  ISignupAction,
  ISignupDTO,
  ISignupRequestAction,
} from './signupTypes';

const getSignupAsync = (props: ISignupDTO): ISignupRequestAction => ({
  type: SignupActionTypes.GET_SIGNUP_ASYNC,
  payload: props,
});

const setSignup = (signup: ISignup): ISignupAction => ({
  payload: { signup },
  type: SignupActionTypes.SET_SIGNUP,
});

const setIsLoadingSignup = (isLoading: boolean): ISignupAction => ({
  payload: { isLoading },
  type: SignupActionTypes.SET_IS_LOADING_SIGNUP,
});

const setIsErrorSignup = (isError: boolean): ISignupAction => ({
  payload: { isError },
  type: SignupActionTypes.SET_IS_ERROR_SIGNUP,
});

export const signupActions = {
  getSignupAsync,
  setSignup,
  setIsLoadingSignup,
  setIsErrorSignup,
};
