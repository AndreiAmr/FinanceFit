import { User } from '@prisma/client';
import { ILoginService } from '../services/loginService.factory';
import { ILoginDTO } from '../../../../types/Authentication/login.types';
import { IUser } from '../../../../types/user.types';

interface ILoginController {
  handle(props: ILoginDTO): Promise<{ data: IUser } | null>;
}

export class LoginControllerFactory implements ILoginController {
  constructor(private readonly loginService: ILoginService) {}

  async handle(props: ILoginDTO) {
    const response = await this.loginService.execute(props);

    if (!response) return null;

    return {
      data: response,
    };
  }
}
