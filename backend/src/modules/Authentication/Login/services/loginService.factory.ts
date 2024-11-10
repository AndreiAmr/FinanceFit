import { GenericButton } from '../../../../models/GenericButton';
import { GenericError } from '../../../../models/GenericError';
import { IUserRepository } from '../../../../repositories/user/user.repository';
import { ILoginDTO } from '../../../../types/Authentication/login.types';
import { IUser } from '../../../../types/user.types';

export interface ILoginService {
  execute(props: ILoginDTO): Promise<IUser>;
}

export class LoginServiceFactory implements ILoginService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({ email, password }: ILoginDTO) {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new GenericError({
        title: 'Usuário não encontrado.',
        message: 'Verifique seus dados e tente novamente.',
        firstButton: new GenericButton('Tentar novamente', 'Auth'),
      });
    }

    const isPasswordCorrect = user.password === password;

    if (!isPasswordCorrect) {
      throw new GenericError({
        title: 'Senha incorreta.',
        message: 'Verifique sua senha e tente novamente.',
        firstButton: new GenericButton('Tentar novamente', 'Auth'),
      });
    }

    const { password: _, ...rest } = user;

    return rest;
  }
}
