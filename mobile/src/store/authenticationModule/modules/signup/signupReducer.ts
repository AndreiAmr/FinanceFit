import { produce } from 'immer';


import {
  SignupActionTypes,
  ISignupPayload,
  ISignupState,
  ISignupReducer,
  ISignupAction,
} from './signupTypes';

const INITIAL_STATE: ISignupState = {
  signup: { data: null, isLoading: false, isError: false },
};

const setSignup: ISignupReducer = (
  state: ISignupState,
  payload?: ISignupPayload,
) =>
  produce(state, draft => {
    draft.signup.data = payload?.signup || null;
  });

const setIsLoadingSignup: ISignupReducer = (
  state: ISignupState,
  payload?: ISignupPayload,
) =>
  produce(state, draft => {
    draft.signup.isLoading = payload?.isLoading || false;
  });

const setIsErrorSignup: ISignupReducer = (
  state: ISignupState,
  payload?: ISignupPayload,
) =>
  produce(state, draft => {
    draft.signup.isError = payload?.isError || false;
  });

const signupReducerMap = new Map<
  SignupActionTypes,
  ISignupReducer
>([
  [SignupActionTypes.SET_SIGNUP, setSignup],
  [SignupActionTypes.SET_IS_ERROR_SIGNUP, setIsErrorSignup],
  [
    SignupActionTypes.SET_IS_LOADING_SIGNUP,
    setIsLoadingSignup,
  ],

]);

const signupReducer = (
  state: ISignupState = INITIAL_STATE,
  action = {} as ISignupAction,
): ISignupState => {
  const reducer = signupReducerMap.get(action.type);
  if (reducer) return reducer(state, action.payload);

  return state;
};

export default signupReducer;
