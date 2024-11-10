import { loginService } from '../services/login.service';
import { LoginControllerFactory } from './loginController.factory';

const loginControllerFactory = new LoginControllerFactory({
  execute: loginService,
});

const loginController = loginControllerFactory.handle.bind(
  loginControllerFactory
);

export { loginController };
