import { GenericButton } from '../../../../models/GenericButton';
import { GenericError } from '../../../../models/GenericError';
import { SignupDTO } from '../../../../types/Authentication/signup.types';
import { ISignupService } from '../services/signupService.factory';

interface ISignupController {
  handle(props: SignupDTO): Promise<boolean>;
}

class SignupControllerFactory implements ISignupController {
  constructor(private readonly signupService: ISignupService) {}

  async handle(props: SignupDTO): Promise<boolean> {
    const { email, name, password } = props;

    if (!email || !name || !password) {
      throw new GenericError({
        title: 'Credenciais inválidas.',
        message: 'Verifique seus dados e tente novamente.',
        firstButton: new GenericButton('Tentar novamente', 'Auth'),
      });
    }

    const userCreated = await this.signupService(props);

    if (!userCreated) {
      throw new GenericError({
        title: 'Houve um erro ao tentar criar usuário.',
        message: 'Tente novamente mais tarde.',
        firstButton: new GenericButton('Voltar', 'Auth'),
      });
    }

    return true;
  }
}

export default SignupControllerFactory;
