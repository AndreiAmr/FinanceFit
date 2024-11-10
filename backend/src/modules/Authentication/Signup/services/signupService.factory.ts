import { GenericButton } from '../../../../models/GenericButton';
import { GenericError } from '../../../../models/GenericError';
import { IUserRepository } from '../../../../repositories/user/user.repository';
import { SignupDTO } from '../../../../types/Authentication/signup.types';
import bcrypt from 'bcrypt';

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

    const salt = process.env.CRYPTO_SALT;

    if (!salt) {
      throw new GenericError({
        title: 'Salt not found in .env file',
      });
    }

    const hashedPasword = await bcrypt.hash(props.password, Number(salt));

    const userCreated = await this.userRepository.createUser({
      ...props,
      password: hashedPasword,
    });

    return !!userCreated;
  }
}

export default SignupServiceFactory;
