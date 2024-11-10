import { UserRepository } from '../../../../repositories/user/user.repository';
import { LoginServiceFactory } from './loginService.factory';

const userRepository = UserRepository.getInstance();

const loginServiceFactory = new LoginServiceFactory(userRepository);

const loginService = loginServiceFactory.execute.bind(loginServiceFactory);

export { loginService };
