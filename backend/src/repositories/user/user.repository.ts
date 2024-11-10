import { User } from '@prisma/client';
import { prisma } from '../../database/prisma/prisma';
import { SignupDTO } from '../../types/Authentication/signup.types';

export interface IUserRepository {
  getUserByEmail(email: string): Promise<User | null>;
  createUser(userDTO: SignupDTO): Promise<User | null>;
}

export class UserRepository implements IUserRepository {
  private static instance: IUserRepository | null = null;

  constructor() {}

  public static getInstance(): IUserRepository {
    if (!this.instance) {
      this.instance = new UserRepository();
    }

    return this.instance;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async createUser(data: SignupDTO): Promise<User | null> {
    const userCreated = await prisma.user.create({
      data: {
        ...data,
        hasAgreedUseTerms: false,
      },
    });

    return userCreated;
  }
}
