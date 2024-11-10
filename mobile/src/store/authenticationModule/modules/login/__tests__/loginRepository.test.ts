import { NetworkStatus } from '@apollo/client';
import { loginRepository } from '../loginRepository';
import apolloClientInstance from '@models/ApolloClient';

const userMocked = {
  name: 'Testing name',
  email: 'Testing email',
};

jest.spyOn(apolloClientInstance(), 'query').mockResolvedValue({
  loading: false,
  data: {
    login: userMocked,
  },
  networkStatus: NetworkStatus.ready,
});

describe('Login repository', () => {
  test('Deve fazer a request de login corretamente', async () => {
    const result = await loginRepository.getLogin({
      email: 'any@email.com',
      password: 'any password',
    });

    expect(result).toEqual(userMocked);
  });
});
