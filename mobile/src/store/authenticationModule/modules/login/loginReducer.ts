import { produce } from 'immer';

import {
  LoginActionTypes,
  ILoginPayload,
  ILoginState,
  ILoginReducer,
  ILoginAction,
} from './loginTypes';

const INITIAL_STATE: ILoginState = {
  login: { data: null, isLoading: false, isError: false },
};

const setLogin: ILoginReducer = (state: ILoginState, payload?: ILoginPayload) =>
  produce(state, draft => {
    draft.login.data = payload?.login || null;
  });

const setIsLoadingLogin: ILoginReducer = (
  state: ILoginState,
  payload?: ILoginPayload,
) =>
  produce(state, draft => {
    draft.login.isLoading = payload?.isLoading || false;
  });

const setIsErrorLogin: ILoginReducer = (
  state: ILoginState,
  payload?: ILoginPayload,
) =>
  produce(state, draft => {
    draft.login.isError = payload?.isError || false;
  });

const loginReducerMap = new Map<LoginActionTypes, ILoginReducer>([
  [LoginActionTypes.SET_LOGIN, setLogin],
  [LoginActionTypes.SET_IS_ERROR_LOGIN, setIsErrorLogin],
  [LoginActionTypes.SET_IS_LOADING_LOGIN, setIsLoadingLogin],
]);

const loginReducer = (
  state: ILoginState = INITIAL_STATE,
  action = {} as ILoginAction,
): ILoginState => {
  const reducer = loginReducerMap.get(action.type);
  if (reducer) return reducer(state, action.payload);

  return state;
};

export default loginReducer;
