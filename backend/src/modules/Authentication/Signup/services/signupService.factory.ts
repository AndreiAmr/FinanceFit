import { GenericButton } from '../../../../models/GenericButton';
import { GenericError } from '../../../../models/GenericError';
import { IUserRepository } from '../../../../repositories/user/user.repository';
import { SignupDTO } from '../../../../types/Authentication/signup.types';

export interface ISignupService {
  (props: SignupDTO): Promise<boolean>;
}

class SignupServiceFactory {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(props: SignupDTO): Promise<boolean> {
    const userAlreadyExists = await this.userRepository.getUserByEmail(
      props.email
    );

    if (userAlreadyExists) {
      throw new GenericError({
        title: 'Usuário já cadastrado.',
        message: 'Este email já existe no nosso sistema.',
        firstButton: new GenericButton('Fazer Login', 'Auth'),
      });
    }

    const userCreated = await this.userRepository.createUser(props);

    return !!userCreated;
  }
}

export default SignupServiceFactory;
