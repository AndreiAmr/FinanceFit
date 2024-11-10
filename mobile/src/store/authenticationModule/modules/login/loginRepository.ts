import apolloClientInstance from '@models/ApolloClient';

import { ILogin } from './loginTypes';
import { getLoginQuery } from './loginQueries';

const getLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ILogin | null> => {
  const { data } = await apolloClientInstance().query<{
    login: ILogin;
  }>({
    fetchPolicy: 'no-cache',
    query: getLoginQuery,
    variables: { email, password },
  });

  return data.login;
};

export const loginRepository = {
  getLogin,
};
