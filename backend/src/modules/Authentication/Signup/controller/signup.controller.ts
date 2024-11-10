import { signupService } from '../services/signup.service';
import SignupControllerFactory from './signUpController.factory';

const signupControllerFactory = new SignupControllerFactory(signupService);

const signupController = signupControllerFactory.handle.bind(
  signupControllerFactory
);

export { signupController };
