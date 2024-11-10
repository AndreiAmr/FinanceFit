import { loginController } from '../../modules/Authentication/Login/controllers/login.controller';
import { signupController } from '../../modules/Authentication/Signup/controller/signup.controller';
import { ILoginDTO } from '../../types/Authentication/login.types';
import { SignupDTO } from '../../types/Authentication/signup.types';

export default {
  Mutation: {
    login: (_: any, { email, password }: ILoginDTO) => {
      return loginController({ email, password });
    },
    signup: (_: any, { ...props }: SignupDTO) => {
      return signupController(props);
    },
  },
};
