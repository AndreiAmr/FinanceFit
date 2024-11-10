import { ILoginState } from './login/loginTypes';
import { ISignupState } from './signup/signupTypes';

export interface AuthenticationModuleState {
  Login: ILoginState;
  SignUp: ISignupState;
}
