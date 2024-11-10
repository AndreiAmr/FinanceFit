import { UserRepository } from '../../../../repositories/user/user.repository';
import SignupServiceFactory from './signupService.factory';

const userRepository = new UserRepository();

const signupServiceFactory = new SignupServiceFactory(userRepository);

const signupService = signupServiceFactory.execute.bind(signupServiceFactory);

export { signupService };
